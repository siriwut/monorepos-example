/* eslint-disable */
import path from 'path'
import { override, babelInclude } from 'customize-cra'

export default (config, env) => {
  return Object.assign(
    config,
    override(
      babelInclude([
        /* transpile (converting to es5) code in src/ and shared component library */
        path.resolve('src'),
        path.resolve('../shared-ui'),
      ])
    )(config, env)
  )
}