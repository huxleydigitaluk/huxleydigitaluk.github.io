# Huxley 2018 Website (Based on Nuxt)

## Build Process:

### Creating initial templates:

* Main styling changes made to pattern library

* Static page templates should be built in main website environment (Nuxt) in ‘static’ directory, based on the pages built by PatternLab.

* Sass compiles PatternLab styles into static directory for testing.
.. 
``` bash
sass --watch patterns/source/css/style.scss:2018/static/styles.css
```

* Any JS added to each static template

### Phase 2 - using in Nuxt project

On approval of static files:

* Copy latest CSS from patternLab to main website environment (in ‘assets’ folder)
* Copy static files into Nuxt (Vue) environment.

### NB

For Landing page / quick amendments, ‘static’ files can be published separately from main Next Project.  Files are only used in the Main Nuxt project from the static directory if called specifically (eg. favicon.ico).

---

Last updated 03/01/2017 - DH

***

## Nuxt Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

