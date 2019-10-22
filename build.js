const ncc = require('@zeit/ncc')
ncc('/path/to/input', {
  // provide a custom cache path or disable caching
  cache: './custom/cache/path' | false,
  // externals to leave as requires of the build
  externals: ['externalpackage'],
  // directory outside of which never to emit assets
  filterAssetBase: process.cwd(), // default
  minify: false, // default
  sourceMap: false, // default
  sourceMapBasePrefix: '../', // default treats sources as output-relative
  // when outputting a sourcemap, automatically include
  // source-map-support in the output file (increases output by 32kB).
  sourceMapRegister: true, // default
  watch: false, // default
  v8cache: false, // default
  quiet: false, // default
  debugLog: false // default
}).then(({ code, map, assets }) => {
  console.log(code)
  // Assets is an object of asset file names to { source, permissions, symlinks }
  // expected relative to the output code (if any)
})
