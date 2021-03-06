const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    devServer: {
        proxy: {
            "/api": {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    babel:{
        plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],  //装饰器
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": true
                }
            ]
        ]
    },
};

