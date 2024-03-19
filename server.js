const express = require('express');
const app = express();
const port = 3000;

// 设置public目录为静态文件目录
app.use(express.static('.'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});