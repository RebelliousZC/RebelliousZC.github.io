# Tianyou Wu — Academic Homepage

这是一个不依赖框架、可以直接部署到 GitHub Pages 的英文个人学术主页。

## 文件结构

```text
.
├── index.html              # 页面内容与链接
├── styles.css              # 排版、颜色和手机端样式
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

## 日常更新

### 修改个人简介或链接

打开 `index.html`，搜索原有姓名、邮箱或链接并直接替换。顶部主邮箱是：

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

### 启用 News

`index.html` 的 Education 和 Publications 之间已经保留了 News 模板。删除模板外侧的 `<!--` 与 `-->`，再按照时间倒序增加列表项即可。

### 添加论文

复制完整的 `<article class="publication-entry">...</article>`，替换论文题目、作者、状态和链接。论文正式接收后，再把 `Under review` 修改成正式期刊信息。

### 添加生活记录

1. 把新照片放进 `assets/images/`。
2. 复制现有的 `<article class="life-entry">...</article>`。
3. 修改日期、地点、标题、简介和展开内容。
4. 修改图片的 `src`、`href` 和 `alt`。

图片文件名建议只使用小写英文字母、数字和连字符，例如 `hangzhou-trip-01.jpg`。

## 本地查看

可以直接双击 `index.html`，也可以在该目录运行：

```bash
python -m http.server 8000
```

随后在浏览器访问 `http://localhost:8000`。
