import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildOptions } from './types/config'

const packageInstance = require('../../package.json')

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__PACKAGE_NAME__: JSON.stringify(packageInstance.name),
			__PACKAGE_VER__: JSON.stringify(packageInstance.version),
		}),
	].filter(Boolean)

	if (isDev) {
		plugins.push(new ReactRefreshPlugin())
		plugins.push(new BundleAnalyzerPlugin({
			openAnalyzer: false,
			analyzerMode: 'static',

		}))
	}

	return plugins
}
