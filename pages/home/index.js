const hydrate = require('../../utils/hydrate')
const template = require('./__template')
const runtime = require(`./${process.env.CLIENT}`)

hydrate(template, runtime)

module.exports = template
