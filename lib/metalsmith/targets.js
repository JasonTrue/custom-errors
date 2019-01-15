/**
 * A metalsmith plugin to rebuild each collection of static files in a new
 * target subdirectory, with some customizations applied.
 *
 * Conventions:
 * Expects to find metadata containing a collection called sites: {}
 * Each site is an object, containing, at minimum, a `directory` name.
 * The directory name will be used to generate the new target's files.
 *
 * The site object can contain other metadata that will be passed to each
 * file object when building the site, with the key `site`.
 *
 * Excluding specific files:
 * I'll probably add that feature if/when I need it.
 */
const debug = require("debug")("metalsmith-targets");
const path = require("path");
js_yaml = require('js-yaml')

module.exports = options => (files, metalsmith, done) => {
  const metadata = metalsmith.metadata();
  const sites = metadata.sites
  const original_files = Object.assign({}, files)

  // Remove the original file entries
  Object.keys(files).forEach(file=> delete files[file])

  // Regenerate the file entries for each site
  Object.keys(sites).forEach( siteName => {
    const site = sites[siteName]
    debug(`Site: ${siteName}, directory: {site.directory}`)

    Object.keys(original_files).forEach(filename => {
      const file = original_files[filename]
      filename = path.join(site.directory, filename)
      files[filename] = Object.assign({}, file,{site: site})
    })
  })

  done()
}
