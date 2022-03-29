class HelloWorldPlugin {
  constructor(options) {
    console.log(options)
  }

  apply(compiler) {
    //console.log(compiler.options.output.path)
    // compiler.plugin('done', function() {   //旧版写法
    //   console.log('Hello World!')
    // })
    compiler.hooks.done.tap('HelloWorldPlugin', compilation => {
      console.log('hello world!!!')
    })
  }
}

module.exports = HelloWorldPlugin