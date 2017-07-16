const fs = require('fs')
const archiver = require('archiver')

fs.unlinkSync('./dist/script.js')
fs.unlinkSync('./dist/style.css')

let output = fs.createWriteStream('./dist/build.zip')
let archive = archiver('zip', {
  zlib: { level: 9 } // set compression to best
})

output.on('close', function() {
  console.log(archive.pointer() + '/13312 total bytes');
});

archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn(err)
  } else {
    throw err;
  }
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);
archive.append(
  fs.createReadStream('./dist/index.html'), {
    name: 'index.html'
  })

archive.finalize()
