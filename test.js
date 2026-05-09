const fs = require("./file-system/Module")

fs.add("deneme.txt", "abuziddin kıllı bacak")

console.log(fs.read("deneme.txt"));

console.log(fs.del("deneme.txt"));