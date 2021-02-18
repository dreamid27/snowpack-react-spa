const Koa = require("koa");
const serve = require("koa-static");
const fs = require("fs");
const path = require("path");

const app = new Koa();
const pathStatic = path.join(__dirname, "build");
const PORT = 3001;

app.use(serve(pathStatic));

app.use(async (ctx) => {
  ctx.type = "html";
  ctx.body = fs.createReadStream("./build/index.html");
});

app.listen(PORT);

console.log(`listening server on port: ${PORT}, http://localhost:3001`);
