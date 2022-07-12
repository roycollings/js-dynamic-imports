/**
 * Fill in any values in 'base' that are overridden in 'runtime'.
 *
 * IMPORTANT: If the runtime key is not found in 'base' it will not be added.
 *
 * @param {*} base object containg default values.
 * @param {*} runtime object containing override values.
 * @returns the base object with the overridden values.
 */
const hydrate = (base, runtime) =>
  Object.keys(runtime).map(key => {
    const runtimeVal = runtime[key]

    // Key needs to be defined in template.js
    if (base[key] === undefined) {
      const unknownObject = {}
      unknownObject[key] = runtimeVal

      console.log('WARNING key not present in template:', unknownObject)
      return
    }

    // Nested object.
    if (typeof runtimeVal === 'object') {
      hydrate(base[key], runtimeVal)
      return
    }

    // Key/value pair.
    base[key] = runtimeVal
  })

module.exports = hydrate
