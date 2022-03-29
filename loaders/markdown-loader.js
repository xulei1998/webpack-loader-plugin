const { getOptions } = require('loader-utils')   //获取参数
const validateOptions = require('schema-utils')  //校验参数是否正确
const MarkdownIt  = require('markdown-it')       //在npm里找到的能把markdown转换成html的工具

const schema = {   //markdown-it里设置的支持的语法功能
  type: 'object',
  properties: {
    html: {
      type: 'boolean'
    },
    xhtmlOut: {
    	type: 'boolean'
    },
    langPrefix: {
    	type: 'string'
    },
    linkify: {
    	type: 'boolean'
    }
  }
}

module.exports =  function(source) {

  const options = getOptions(this)  //获取参数
  const md = MarkdownIt(options)    //调用MarkdownIt
  validateOptions(schema, options)  //验证用户传入的参数是否符合规则

  // 对资源应用一些转换……

  //this.callback(null, md.render(source))
  //let callback = this.async()
  //callback(null, md.render(source))
  return md.render(source)         //渲染md成html
}