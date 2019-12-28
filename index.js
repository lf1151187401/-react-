#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
// console.log(process.cwd(), "cwd")
// console.log(process.argv,"argv")
let txt=fs.readFileSync(path.join(__dirname,"/copy.js"),"utf-8")

//在当前文件夹下 创建文件夹
fs.mkdirSync(path.join(process.cwd(),"/"+process.argv[2]))
fs.writeFileSync(path.join(process.cwd(),"/"+process.argv[2]+"/wode.js"),txt,"utf-8")
// console.log(process.argv[0], "0")
// console.log(process.argv[1], "1")
// console.log(process.argv[2], "2")


