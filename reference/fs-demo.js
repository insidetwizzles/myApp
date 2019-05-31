const path = require('path');
const fs = require('fs');

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// create folder
// fs.mkdir(path.join(__dirname,'/test1'), {}, err => {
//     if (err) throw err; 

//     console.log('folder successfully created!');
// });

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// create and write to file
// the directory must exist before it creates hello.txt
// fs.writeFile(path.join(__dirname,'/test1','hello.txt'), 'Hello, world! ', {}, err => {
//     if (err) { throw err; }

//     console.log('file written to...');

//     fs.appendFile(path.join(__dirname,'/test1','hello.txt'), 'Node is cute!', {}, err => {
//         if (err) { throw err; }

//         console.log('file appended to...')
//     })
// });

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// read file
// fs.readFile(path.join(__dirname,'/test1','hello.txt'), 'utf8', (err,data) => {
//     if (err) { throw err; }

//     console.log(data);
// })