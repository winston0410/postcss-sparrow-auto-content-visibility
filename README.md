# PostCSS Sparrow Auto Content Visibility

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
