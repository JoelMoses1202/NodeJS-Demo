import randomItem from 'random-item';
import fs from 'fs';

import http from 'http';

http.createServer((req,res,err)=>{

let colorCodeFile = "colorpalette.json";

let colorCodes = fs.readFileSync(colorCodeFile, 'UTF-8');

let random5ColorCodes = randomItem.multiple(JSON.parse(colorCodes), 5);
console.log(JSON.stringify(random5ColorCodes));

fs.writeFile("randomColorCodes.json", JSON.stringify(random5ColorCodes), (err, file)=> {
    if(err) return err;
});
}).listen(4003);

