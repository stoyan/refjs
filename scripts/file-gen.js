const fs = require('fs');
const path = require('path');
const es3 = require('../syntax/es3');


const outputDir = path.resolve(__dirname, '../ref');

Object.keys(es3).forEach(glob => {
  
  const contents = `<!-- head -->\n== ${glob}\n\n\n\n<!-- foot -->`;
  fs.writeFile(outputDir + '/' + glob + '.md', contents, () => {});
  
  es3[glob].forEach(prop => {
    const contents = `<!-- head -->\n== ${glob}.${prop}\n\n\n\n<!-- foot -->`;
    fs.writeFile(`${outputDir}/${glob}.${prop}.md`, contents, () => {});    
  });
  
});