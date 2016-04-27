/**
 * Override the Default
 * Core Scripts
 * Config
 *
 */
 module.exports = {
 	options: {
 		webpack: {
 			defaults: {
 				module: {
 					loaders: [
 						{
 							test: /\.jsx?$/,
 							exclude: [
 								/node_modules/,
 								/bower_components/,
 								/polyfills/
 							],
 							loader: 'babel',
 							query: {
 								presets: ['es2015', 'stage-2', 'react'],
 								plugins: ['transform-runtime']
 							}
 						}
 					]
 				}
 			}
 		}
 	}
 };
