const path = require('path');

module.exports = {
    configureWebpack: {
        // resolve: {
        //     symlinks: false,
        //     alias: {
        //         // Make sure *our* version of ag-grid & vue is always loaded.
        //         // This is needed for `yarn link / npm link` to work and prevent duplicate versions of these libs
        //         // being loaded
        //         '@ag-grid-community/all-modules/main': path.resolve(__dirname, 'node_modules/@ag-grid-community/all-modules/main.js'),
        //         '@ag-grid-community/all-modules$': path.resolve(__dirname, 'node_modules/@ag-grid-community/all-modules/main.js'),
        //         vue$: path.resolve(__dirname, 'node_modules/vue/dist/vue.common.js')
        //     }
        // },
        performance: {
            hints: false
        }
    }
};
