# PostCSS Sparrow Auto Content Visibility

[![Maintainability](https://api.codeclimate.com/v1/badges/4b9666cac5634673c7ae/maintainability)](https://codeclimate.com/github/winston0410/postcss-sparrow-auto-content-visibility/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/4b9666cac5634673c7ae/test_coverage)](https://codeclimate.com/github/winston0410/postcss-sparrow-auto-content-visibility/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/postcss-sparrow-auto-content-visibility/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/postcss-sparrow-auto-content-visibility?targetFile=package.json) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/74dec1f0f830470b832f92564180eb6a)](https://www.codacy.com/manual/winston0410/postcss-sparrow-auto-content-visibility?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=winston0410/postcss-sparrow-auto-content-visibility&amp;utm_campaign=Badge_Grade)

A PostCSS plugin that helps you add the new experimental CSS declaration, `content-visibility: auto` to any selectors with `display: none` for boosting render performance.

For the benefit of `content-visibility: auto`, check out [this post](https://web.dev/content-visibility/).

This plugin is created using [PostCSS Sparrow Props Filter](https://www.npmjs.com/package/postcss-sparrow-props-filter) and [PostCSS Sparrow Values Filter](https://www.npmjs.com/package/postcss-sparrow-values-filter) under the hood.

## Why should I use this plugin?

As with any experimental features, they are subject to change at anytime. You should not manually add the new declaration into your stylesheet.  Using this plugin, you can easily add or remove this declaration anywhere, anytime you need.

## Made in Hong Kong :free: :free:

This plugin is made with love by a Hong Konger.

## Installation

This plugin require you to use [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow) for matching with selectors you want.

Download both `postcss-sparrow` and this plugin through NPM.

```shell

npm i postcss-sparrow postcss-sparrow-auto-content-visibility

```

Then import this plugin as the callback for [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow).

```javascript
//postcss.config.js
module.exports = {
  plugins: [
    //Other plugins...

    require('postcss-sparrow')({
      transformations: [
        {
          selectors: ['*'],
          inclusion: true,
          callbacks: [
            require('postcss-sparrow-props-filter')(
              {
                props: ['font-size'],
                inclusion: true,
                callbacks: [
                  require('postcss-sparrow-auto-content-visibility')({
                    props: ['display'], //Default to ['display']
                    values: ['none'], // Default to ['none']
                    declValue: 'auto' // Default to 'auto' for content-visibility: auto
                  })
                ]
              }
            )
          ]
        }
      ]
    })
  ]
}
```
