const dotenv = require('dotenv');
const expand = require('dotenv-expand');
const { assertSupportedNodeVersion } = require('../src/Engine');

module.exports = async () => {
    assertSupportedNodeVersion();

    // Load .env
    expand(dotenv.config());

    const mix = require('../src/Mix').primary;

    require(mix.paths.mix());

    await mix.installDependencies();
    await mix.init();

    return mix.build();
};
