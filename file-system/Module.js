const fs = require('fs');

function read(file) {
    const context = fs.readFileSync(file, 'utf-8');
    return context;
}

function add(name,context) {
    try {
        fs.writeFileSync(name,context)
    } catch(err) {
        console.log(err)
    }
}

function del(name) {
    try {
        fs.unlinkSync(name)
    } catch(err) {
        console.log(err)
    }
    return name;
}

module.exports = { read, add, del }