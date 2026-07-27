# Blog Page — Google Cloud Run

這是一個可直接部署到 Google Cloud Run 的簡易部落格網站。

## GitHub 儲存庫結構

```text
blog-page/
├─ package.json
├─ server.js
├─ .gitignore
├─ README.md
└─ public/
   ├─ index.html
   ├─ style.css
   └─ script.js
```

## Cloud Run 設定

- 建構類型：Google Cloud Buildpacks
- 分支：`main`
- 建構目錄：`/`
- 進入點：留空
- 函式目標：留空
- 驗證：允許公開存取
- Ingress：全部
- 容器通訊埠：由 Cloud Run 的 `PORT` 環境變數自動提供

## 本機測試

```bash
npm start
```

瀏覽：

```text
http://localhost:8080
```

健康檢查：

```text
http://localhost:8080/health
```

## 部署更新

將檔案推送到 GitHub 的 `main` 分支後，Cloud Build 會自動重新建置及部署。
