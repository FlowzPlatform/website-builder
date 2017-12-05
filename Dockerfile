FROM ubuntu:16.04

# install dependencies
RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		apache2 \
	&& rm -r /var/lib/apt/lists/*

# Default command
CMD ["apachectl", "-D", "FOREGROUND"]

# Install Node.js
RUN apt-get update \
	&& apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

#create directory html
RUN mkdir /var/www/html/dist
RUN mkdir -p /opt/app

#working directory
WORKDIR /opt/app
ADD . /opt/app
RUN npm install

#build application
RUN npm run build
RUN cp -a -f /opt/app/dist/* /var/www/html/
RUN cp /opt/app/.htaccess /var/www/html/
RUN cp /opt/app/vhost.conf /etc/apache2/sites-enabled/
RUN rm -rf /opt/app/*
RUN a2enmod rewrite
RUN service apache2 restart


# Ports
EXPOSE 80