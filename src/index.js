import * as R from 'ramda'

import {
  getProps,
  getValues,
  getDeclValue
} from './utilities/config.js'

export default (config) => (decl) => {
  const options = {
    props: R.defaultTo(['display'])(getProps(config)),
    values: R.defaultTo(['none'])(getValues(config)),
    declValue: R.defaultTo('auto')(getDeclValue(config))
  }

  return require('postcss-sparrow-props-filter')({
    props: getProps(options),
    inclusion: true,
    callbacks: [
      require('postcss-sparrow-values-filter')({
        values: getValues(options),
        inclusion: true,
        callbacks: [
          (decl) => decl.before(`content-visibility: ${getDeclValue(options)};`)
        ]
      })
    ]
  })(decl)
}
