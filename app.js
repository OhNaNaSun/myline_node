const express = require("express");
const exphbs  = require("express-handlebars");
const routes = require("./routes/index.js");
const userRoutes = require("./routes/user.js");
const app = express();
const server = app.listen(2016,  "127.0.0.1", function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例：访问地址为： http://%s:%s", host, port)
})
//配置模板引擎
app.engine('hbs', exphbs({
	layoutsDir: 'views',
	partialsDir: 'views/partials',
	defaultLayout: 'layout',
	extname: '.hbs'
}));
app.set('view engine', 'hbs');
//设置静态文件路径
app.use(express.static('public'));
//引入路由设置
app.use("/", routes);
app.use("/user", userRoutes);
