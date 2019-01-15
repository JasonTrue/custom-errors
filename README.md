# Custom errors

This project is meant as a quick and dirty way of deploying custom errors for my
various web sites.

# Project status

It's not done yet. I'm not even using it yet. Right now the only interesting bit of
code is the `lib/metalsmith/targets.js` section, which is an inline plugin for metalsmith
that I may extract when I know what I need it to do. Basically it retargets all metalsmith
file objects in a new subdirectory, allowing site-specific customizations.

# Project goals

* Generate and build some gently customized HTTP error pages
* Push content to S3 Buckets
* Update cloudfront distributions to point to those error pages, if needed.

# Usage

Set up src/sites.yaml with the overrides you need.

````
yarn install
yarn build
(eventually) yarn deploy  
```
