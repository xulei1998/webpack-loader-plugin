
module.exports = class CleanPlugin {
  
  apply(compiler) {
    let self = this
    compiler.hooks.entryOption.tap('CountTime', (complation) => {  //记录最早的时间
      //console.log(compiler)
      //console.log(this)
      self.startTime = Date.now()
      console.log('start...')
    })

    compiler.hooks.done.tap('CountTime', complation => {  //获取最晚的时间
      console.log('end...')
      self.endTime = Date.now()
      console.log(`编译耗时：${self.endTime - self.startTime} ms`)
    })
  }
}