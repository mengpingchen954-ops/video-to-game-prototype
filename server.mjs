import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
const root=process.cwd();
const types={'.html':'text/html;charset=utf-8','.js':'text/javascript','.css':'text/css','.mp4':'video/mp4','.jpg':'image/jpeg'};
createServer(async (req,res)=>{try{const p=req.url==='/'?'/index.html':req.url; const data=await readFile(join(root,p)); res.writeHead(200,{'Content-Type':types[extname(p)]||'application/octet-stream'}); res.end(data)}catch{res.writeHead(404);res.end('Not found')}}).listen(4173,'127.0.0.1');
