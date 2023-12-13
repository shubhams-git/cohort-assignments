## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs= require("fs")

let data = "This is new text. I have coded this one!"
fs.writeFile("sample.txt",data, (err)=>{
    if(err){console.error(err);}
    console.log(`Data has been successfully overwritten, new file content: ${data}`)
})