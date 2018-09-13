# Flowz Website Builder [![Build Status](https://travis-ci.org/FlowzPlatform/website-builder.svg?branch=master)](https://travis-ci.org/FlowzPlatform/website-builder) [![Dependencies Status](https://david-dm.org/FlowzPlatform/website-builder.svg)](https://david-dm.org/FlowzPlatform/website-builder.svg) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/FlowzPlatform/website-builder/issues) [![HitCount](http://hits.dwyl.io/FlowzPlatform/website-builder.svg)](http://hits.dwyl.io/FlowzPlatform/website-builder)

> A Vue.js      project using [GrapesJS](https://github.com/artf/grapesjs)

## Documentation

View overview   of Website   Builder [here](https://github.com/FlowzPlatform/website-builder/wiki/Overview)
 
## Build Setup

FlowzBuilder website Guide:

1. Clone FlowzServiceApi project: https://github.com/FlowzPlatform/FlowzServiceApi

2. In terminal: 1)cd FlowzServiceApi 2) npm install 3) npm start

3. Clone FlowzBuilder project: https://github.com/FlowzPlatform/FlowzBuilder and update `src/config.json` with your credentials

4. In terminal: 1)cd FlowzBuilder 2) npm install 3) baseURL=(FlowzServiceApi hosst and port) npm start

5. In /var/www/html/ create "websites" folder (without quotes)

6. Create new user and Login.   

7. Create new Project(Projectname without spaces)

8. Create header files(.partials) in Header Folder, footer files(.partials) in Footer folder, layout file(.layout) in Layout folder and pages file(.html) in Pages folder.

9. Project Settings and Page settings are in Settings icon to their respective names.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


#Before starting the project
Start rethinkdb: rethinkdb --http-port 8081
Start the FlowzServiceApi by npm start

#Changelog
1. Added New Templates 
2. Added Jobqueue to publish website using metalsmith
3. User Interface 2.0


