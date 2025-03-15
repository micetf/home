const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin"); // Ajoutez cette ligne

const mode =
    process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
    mode,
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "thumbnails/[name][ext]", // Ce paramètre affecte seulement les assets importés directement
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            function() {
                                                return [
                                                    require("autoprefixer"),
                                                ];
                                            },
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { runtime: "automatic" }],
                        ],
                    },
                },
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ["@svgr/webpack"],
            },
            {
                test: /\.(png|gif|jpg)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "./css/[name].css" }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
        }),
        // Ajoutez ce plugin pour copier les thumbnails
        new CopyPlugin({
            patterns: [
                {
                    from: "public/thumbnails",
                    to: "thumbnails",
                },
            ],
        }),
    ],
    devtool: "source-map",
    devServer: {
        static: [
            {
                directory: path.join(__dirname, "dist"),
            },
            {
                directory: path.join(__dirname, "public"),
            },
        ],
        hot: true,
    },
};
