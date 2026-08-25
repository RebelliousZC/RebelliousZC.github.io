# Tianyou Wu — Academic Homepage

这是一个不依赖框架、可以直接部署到 GitHub Pages 的中英双语个人学术主页。

## 文件结构

```text
.
├── index.html              # 页面内容与链接
├── styles.css              # 排版、颜色和手机端样式
├── language.js             # 中英文切换与语言偏好记忆
├── favicon.svg             # 浏览器标签页图标
├── og.png                  # 分享链接时使用的预览图
├── robots.txt              # 搜索引擎规则
├── sitemap.xml             # 搜索引擎站点地图
└── assets/images/          # 头像和生活照片
```

## 发布到 GitHub Pages

1. 在 GitHub 新建公开仓库 `RebelliousZC.github.io`。
2. 将本文件夹里的所有文件上传到仓库根目录，而不是再套一层文件夹。
3. 打开仓库的 `Settings → Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. 选择 `main` 分支和 `/(root)`，然后保存。
6. 等待几分钟后访问 `https://rebelliouszc.github.io/`。

以后每次修改文件并提交，主页都会自动更新。

## 中英文切换

页面顶部提供 `English / 中文` 切换。访客第一次打开时会自动参考浏览器语言；手动选择后，网站会在浏览器中记住该选择。

- 英文内容使用 `class="lang-en"`。
- 中文内容使用 `class="lang-zh" lang="zh-CN"`。
- 修改简介、News、生活记录等内容时，应同时修改对应的英文和中文版本。
- 论文正式题目、作者姓名和期刊名保持官方英文即可；论文状态和按钮文字提供双语版本。

## 日常更新

### 修改个人简介或链接

打开 `index.html`，搜索原有姓名、邮箱或链接并直接替换。简介包含相邻的 `lang-en` 和 `lang-zh` 段落，请成对更新。顶部主邮箱是：

```html
<a href="mailto:22530066@zju.edu.cn">Email</a>
```

### 添加 Google Scholar 或 CV

Google Scholar 建好后，在 `profile-links` 内加入：

```html
<span aria-hidden="true">/</span>
<a href="你的 Scholar 链接" target="_blank" rel="noopener noreferrer">
  Google Scholar
</a>
```

添加 CV 时，先把 PDF 命名为 `Tianyou_Wu_CV.pdf` 并放到根目录，再加入：

```html
<span aria-hidden="true">/</span>
<a href="Tianyou_Wu_CV.pdf">CV</a>
```

### 更新 News

在 `index.html` 中搜索 `<ul class="news-list">`，按照现有格式复制一个
`<li>...</li>`，分别填写英文日期、中文日期、英文内容和中文内容，并保持时间倒序排列。

### 添加论文

复制完整的 `<article class="publication-entry">...</article>`，替换论文题目、作者、状态和链接。你的姓名使用 `<strong>...</strong>` 加粗；通讯作者姓名后使用 `<sup>*</sup>` 标注。论文正式接收后，同时修改英文和中文状态。

### 添加生活记录

1. 把新照片放进 `assets/images/`。
2. 复制现有的 `<article class="life-entry">...</article>`。
3. 成对修改 `lang-en` 与 `lang-zh` 中的日期、地点、标题、简介和展开内容。
4. 修改图片的 `src`、`href` 和 `alt`。

正文和图片都放在 `<details class="life-details">...</details>` 内，因此
首页默认只显示标题、简介和 `Read more`。

图片文件名建议只使用小写英文字母、数字和连字符，例如 `hangzhou-trip-01.jpg`。

## 本地查看

可以直接双击 `index.html`，也可以在该目录运行：

```bash
python -m http.server 8000
```

随后在浏览器访问 `http://localhost:8000`。
