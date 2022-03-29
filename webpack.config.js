const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HelloWorldPlugin = require('./plugins/basic.js')
const FileListPlugin = require('./plugins/file-list-plugin.js')
//const CleanPlugin = require('./plugins/clean-plugin.js')
const CountTimePlugin = require('./plugins/count-time.js')

module.exports = {
  resolveLoader: {
    modules: ['node_modules', 'loaders']  //第二种配置方法，node_modules和loaders都是loader的目录
  },
  
	entry: {
		index: './src/js/index.js'
	},

	module: {
		rules: [
			{
				test: /\.md$/,
				use: [
				{
					loader: 'html-loader'
				},
				{
					loader: 'markdown-loader',
					options: {
            html:true
          }
				}],
			},  
      {
        test:/\.js$/,
        use:{
         // loader:path.resolve(__dirname,'loaders/replace-loader.js'),  //方法一 配置loader
          loader:'replace-loader',
          options:{
            name:"abc"
          }
        }
      },
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},

	plugins: [
    
		new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/views/index.html',
      title: 'haha'
		}),
	//	new HelloWorldPlugin({a: 1}),
		
    new FileListPlugin(),
    //new CleanPlugin({exclude: 'a'}),   //.git
	  new CountTimePlugin()
  
	]
}