# Flows Website Builder

> A Vue.js project

## Build Setup

FlowzBuilder website Guide:

1. Clone FlowzServiceApi project: https://github.com/FlowzPlatform/FlowzServiceApi

2. In terminal: 1)cd FlowzServiceApi 2) npm install 3) npm start

3. Clone FlowzBuilder project: https://github.com/FlowzPlatform/FlowzBuilder

4. In terminal: 1)cd FlowzBuilder 2) npm install 3) npm run dev

5. In /var/www/html/ create "websites" folder (without quotes)

6. Create new user. 

7. Create new Project(Projectname without spaces)

8. Create header files(.html) in Header Folder, footer files(.html) in Footer folder, layout file(.layout) in Layout folder and pages file(.html) in Pages folder.

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