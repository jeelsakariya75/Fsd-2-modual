// var fs=require('fs')
// // fs.mkdirSync("Example")
// fs.writeFileSync("Example/jee.txt","hello")
// fs.appendFileSync("jee.txt","\n Hii")
// fs.copyFileSync("jee.txt","Example/ap.txt")
// fs.unlinkSync("Example/jee.txt")
// fs.rmdirSync("modual/Example")

var fs=require('fs')
fs.writeFile("async.txt","I am Async",(err)=>{if(err) throw err
{
    console.log("write done")
}
})
fs.readFile("async.txt","utf-8",(err,data)=>{if(err) throw err
{
    console.log(data)
}
})
console.log("program ended")