const {getOptions}=require('loader-utils')  //获取到这个loader里的参数options
module.exports=function(source){
  return source.replace(/xulei/,'XULEI')
}