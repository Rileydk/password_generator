# 密碼產生器

這麼多網站都要註冊設定密碼，
不想要每個網站密碼都一樣，但實在很難想出該設什麼？

試試看自動生成密碼的密碼產生器吧！

## 功能

1. 可以設定想要的密碼長度。
2. 可以設定是否要包含數字、大小寫英文字母、符號。
3. 可以輸入不想包含在內的字符。

## 安裝方式

用終端機安裝這個專案。
**注意：須已安裝git、Node.js。**

1. 打開終端機，前往想存放的資料夾
    ```bash
    cd </path/.../dir>
    ```
2. 下載專案
    ```bash
    git clone https://github.com/Rileydk/password_generator.git
    ```
3. 安裝所需套件
    ```bash
    npm install
    ```
4. 啟動伺服器
  ```bash
  npm run dev
  ```
5. 終端機顯示以下內容後，就可以到瀏覽器輸入[http://localhost:3000](http://localhost:3000)使用**密碼產生器**了！
  ```bash
  The server is listening on http://localhost:3000.
  ```

## 套件版本

- [node.js: v10.22.0](https://nodejs.org/en/)
- [npm: v6.14.8](https://www.npmjs.com/)
- [express.js: v4.17.1](https://www.npmjs.com/package/express)
- [express-handlebars: v5.2.0](https://www.npmjs.com/package/express-handlebars)
- [body-parser: v1.19.0](https://www.npmjs.com/package/body-parser)
- [bootstrap: v4.5.3](https://getbootstrap.com/)
- [jquery: v3.5.1](https://jquery.com/download/)
- [popper: v2](https://popper.js.org/)
