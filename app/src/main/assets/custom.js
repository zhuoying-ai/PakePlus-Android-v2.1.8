window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>琢颖美肤 - 全系列定制</title>
<style>
/* 全局基础样式（强制显示，防止空白） */
* {margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;font-family:"Microsoft YaHei","PingFang SC",sans-serif;}
html, body {
  height:100%;width:100%;
  background:#F5F0E8!important;
  overflow:auto!important;
  user-select:none;-webkit-user-select:none;
  display:block!important;
  opacity:1!important;
}

/* 主容器（强制显示，兜底） */
.app-container {
  display:flex!important;
  height:100vh!important;
  width:100vw!important;
  padding-top:env(safe-area-inset-top);
  padding-bottom:env(safe-area-inset-bottom);
  opacity:1!important;
  pointer-events:auto!important;
}

/* 左侧分类栏 */
.series-sidebar {width:240px;max-width:35%;background:#fff;box-shadow:2px 0 8px rgba(0,0,0,0.08);padding:20px 0;overflow-y:auto;border-right:1px solid #f1f1f1;}
.sidebar-title {text-align:center;font-size:22px;color:#0ABAB5;margin-bottom:20px;font-weight:700;letter-spacing:2px;}
.series-item {padding:18px 20px;margin:0 12px 10px;border-radius:10px;cursor:pointer;font-size:16px;color:#555;display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #f5f5f5;transition:all 0.3s ease;}
.series-item.active {background:#0ABAB5;color:#fff;border-color:#0ABAB5;}
.series-icon {width:28px;height:28px;display:flex;align-items:center;justify-content:center;background:#f1f1f1;border-radius:6px;font-size:14px;}
.series-item.active .series-icon {background:#fff;color:#0ABAB5;}

/* 右侧内容区 */
.content-area {flex:1;position:relative;background:#F5F0E8;overflow:auto;}
.top-actions {position:absolute;top:20px;right:20px;display:flex;gap:12px;z-index:99;flex-wrap:wrap;justify-content:flex-end;}
.action-btn {padding:10px 18px;border-radius:25px;border:none;font-size:15px;background:#0ABAB5;color:white;box-shadow:0 3px 8px rgba(0,0,0,0.1);cursor:pointer;}
.add-compare-btn {background:#80E8E5;}
.add-product-btn {background:#088F8B;}
.delete-page-btn {background:#ff6b6b;} 
.upload-img-btn {background:#ffa500;}

.page-indicator {position:absolute;top:20px;left:50%;transform:translateX(-50%);background:rgba(255,255,255,0.95);color:#0ABAB5;padding:8px 20px;border-radius:20px;font-size:15px;z-index:99;font-weight:600;}
.magazine-container {width:100%;height:calc(100vh - 100px);padding:70px 25px 80px;overflow:auto;}
.magazine-book {width:100%;height:100%;position:relative;}

/* 页面样式（强制显示当前页） */
.magazine-page {position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;border-radius:15px;box-shadow:0 0 20px rgba(0,0,0,0.1);opacity:0;pointer-events:none;overflow-y:auto;z-index:1;padding:25px;}
.magazine-page.current {opacity:1!important;pointer-events:auto!important;z-index:10!important;display:block!important;}

.page-content {width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;text-align:center;}
.cover-page .page-content {background:linear-gradient(135deg, #F5F0E8 0%, #E0F8F7 100%);justify-content:center;padding:40px;border-radius:15px;}
.cover-title {font-size:40px;margin-bottom:20px;letter-spacing:4px;color:#0ABAB5;font-weight:700;}
.cover-subtitle {font-size:19px;color:#666;opacity:0.9;line-height:1.6;}

/* 产品图片容器 */
.product-img-container {width:85%;height:38%;margin-bottom:20px;border-radius:12px;overflow:hidden;border:3px dashed #0ABAB5;position:relative;background:#f8f8f8;cursor:pointer;}
.product-img-container .tips {position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);color:#0ABAB5;font-size:16px;z-index:1;pointer-events:none;}
.product-img {width:100%;height:100%;object-fit:cover;display:block;z-index:2;}

/* 对比页样式 */
.compare-img-container {display:flex;gap:20px;width:95%;height:52%;margin-bottom:20px;}
@media (max-width:1200px) {.compare-img-container {flex-direction:column;height:58%;}.series-sidebar {width:220px;}.cover-title {font-size:36px;}}
@media (max-width:768px) {.product-img-container {height:32%;}.series-sidebar {width:200px;}.cover-title {font-size:30px;}.top-actions {top:10px;right:10px;}}

.compare-col {flex:1;display:flex;flex-direction:column;align-items:center;}
.compare-label {font-size:22px;color:#0ABAB5;margin-bottom:10px;font-weight:700;}
.compare-img-box {width:100%;height:100%;border-radius:10px;overflow:hidden;border:3px dashed #0ABAB5;position:relative;background:#f8f8f8;cursor:pointer;}
.compare-img-box .tips {position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);color:#0ABAB5;font-size:16px;z-index:1;pointer-events:none;}

/* 产品信息 */
.product-name {font-size:24px;color:#0ABAB5;margin-bottom:15px;font-weight:700;cursor:text;}
.product-price {font-size:28px;color:#0ABAB5;font-weight:700;margin-bottom:20px;cursor:text;}
.product-price del {font-size:18px;color:#999;margin-left:10px;font-weight:normal;}
.product-desc {font-size:15px;color:#666;line-height:2;max-width:100%;text-align:left;margin-top:10px;}
.product-desc .item {margin:8px 0;padding-left:10px;border-left:4px solid #0ABAB5;cursor:text;}

/* 翻页按钮 */
.page-controls {position:absolute;bottom:20px;left:50%;transform:translateX(-50%);display:flex;gap:40px;z-index:99;}
.control-btn {width:70px;height:70px;border-radius:50%;background:#0ABAB5;color:white;border:none;font-size:28px;box-shadow:0 4px 10px rgba(10,186,181,0.3);cursor:pointer;display:flex;align-items:center;justify-content:center;}
.control-btn:disabled {background:#ccc;cursor:not-allowed;box-shadow:none;opacity:0.6;}

/* 隐藏控件 */
#fileInput {display:none;}
.browser-tip {position:fixed;bottom:25px;left:50%;transform:translateX(-50%);background:rgba(10,186,181,0.95);color:#fff;padding:10px 20px;border-radius:25px;font-size:14px;z-index:999;display:block;}

/* 删除弹窗 */
.delete-modal {position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999;opacity:0;pointer-events:none;transition:all 0.3s ease;}
.delete-modal.show {opacity:1;pointer-events:auto;}
.modal-content {background:#fff;padding:30px;border-radius:15px;width:80%;max-width:400px;text-align:center;}
.modal-title {font-size:20px;color:#333;margin-bottom:20px;font-weight:600;}
.modal-btns {display:flex;gap:20px;justify-content:center;margin-top:20px;}
.modal-btn {padding:10px 30px;border-radius:8px;border:none;font-size:16px;cursor:pointer;}
.confirm-btn {background:#ff6b6b;color:#fff;}
.cancel-btn {background:#eee;color:#666;}

/* 图片操作按钮 */
.img-actions {position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:10px;z-index:10;}
.img-action-btn {padding:5px 10px;border-radius:5px;border:none;font-size:12px;background:rgba(0,0,0,0.7);color:white;cursor:pointer;}
</style>
</head>
<body>
<div class="app-container">
  <!-- 左侧分类栏 -->
  <div class="series-sidebar">
    <div class="sidebar-title">产品系列</div>
    <div class="series-item active" data-series="all">
      <div class="series-icon">★</div><span>全部项目</span>
    </div>
    <div class="series-item" data-series="s1">
      <div class="series-icon">✨</div><span>高光美塑</span>
    </div>
    <div class="series-item" data-series="s2">
      <div class="series-icon">💎</div><span>美超二代</span>
    </div>
    <div class="series-item" data-series="s3">
      <div class="series-icon">⚡</div><span>英国超离子</span>
    </div>
    <div class="series-item" data-series="s4">
      <div class="series-icon">👁️</div><span>眼部抗衰大师</span>
    </div>
  </div>

  <!-- 右侧内容区域 -->
  <div class="content-area">
    <div class="top-actions">
      <button class="action-btn add-compare-btn" id="addCompareBtn">添加对比页</button>
      <button class="action-btn add-product-btn" id="addProductBtn">新增产品页</button>
      <button class="action-btn delete-page-btn" id="deletePageBtn">删除当前页</button>
      <button class="action-btn upload-img-btn" id="uploadImgBtn">上传当前页图片</button>
    </div>
    <div class="page-indicator" id="pageIndicator">1 / 1</div>

    <div class="magazine-container">
      <div class="magazine-book" id="magazineBook">
        <!-- 封面页（强制显示，兜底） -->
        <div class="magazine-page cover-page current" data-page="1" data-series="all" data-id="page1">
          <div class="page-content">
            <div class="cover-title">琢颖美肤</div>
            <div class="cover-subtitle">专业定制 · 全系列美肤方案<br>高光美塑 | 美超二代 | 英国超离子 | 眼部抗衰</div>
          </div>
        </div>

        <!-- 高光美塑系列 -->
        <div class="magazine-page" data-page="2" data-series="s1" data-id="page2">
          <div class="page-content">
            <div class="product-img-container" id="imgContainer_page2">
              <div class="tips">点击或使用顶部按钮上传图片</div>
              <img src="" class="product-img" alt="高光美塑" id="img_page2">
            </div>
            <div class="product-name" contenteditable="true">高光美塑 - 520特惠卡</div>
            <div class="product-price" contenteditable="true">¥520</div>
            <div class="product-desc">
              <div class="item" contenteditable="true">补水水光2只 · 996RMB（皮肤干燥/过敏补水）</div>
              <div class="item" contenteditable="true">美白水光2只 · 1396RMB（暗沉提亮/美白抗氧）</div>
              <div class="item" contenteditable="true">代金券 · 520RMB（全场通用）</div>
            </div>
          </div>
        </div>
        <div class="magazine-page" data-page="3" data-series="s1" data-id="page3">
          <div class="page-content">
            <div class="product-img-container" id="imgContainer_page3">
              <div class="tips">点击或使用顶部按钮上传图片</div>
              <img src="" class="product-img" alt="高光美塑" id="img_page3">
            </div>
            <div class="product-name" contenteditable="true">高光美塑 - 焕肤美白水光卡</div>
            <div class="product-price" contenteditable="true">¥1280 <del>原价¥2658</del></div>
            <div class="product-desc">
              <div class="item" contenteditable="true">焕亮美白水光1次 · 980RMB</div>
              <div class="item" contenteditable="true">安肌嫩肤水光1次 · 698RMB</div>
              <div class="item" contenteditable="true">美白补水水光1次 · 980RMB</div>
            </div>
          </div>
        </div>

        <!-- 美超二代系列 -->
        <div class="magazine-page" data-page="4" data-series="s2" data-id="page4">
          <div class="page-content">
            <div class="product-img-container" id="imgContainer_page4">
              <div class="tips">点击或使用顶部按钮上传图片</div>
              <img src="" class="product-img" alt="美超二代" id="img_page4">
            </div>
            <div class="product-name" contenteditable="true">美超二代 - 紧致抗衰卡</div>
            <div class="product-price" contenteditable="true">¥2980 <del>原价¥5680</del></div>
            <div class="product-desc">
              <div class="item" contenteditable="true">美超二代全面部抗衰1次 · 3280RMB</div>
              <div class="item" contenteditable="true">面部精雕提拉1次 · 1980RMB</div>
              <div class="item" contenteditable="true">修复精华1支 · 680RMB</div>
            </div>
          </div>
        </div>
        <div class="magazine-page" data-page="5" data-series="s2" data-id="page5">
          <div class="page-content">
            <div class="product-img-container" id="imgContainer_page5">
              <div class="tips">点击或使用顶部按钮上传图片</div>
              <img src="" class="product-img" alt="美超二代" id="img_page5">
            </div>
            <div class="product-name" contenteditable="true">美超二代 - 轮廓塑形卡</div>
            <div class="product-price" contenteditable="true">¥3680 <del>原价¥6980</del></div>
            <div class="product-desc">
              <div class="item" contenteditable="true">下颌线塑形2次 · 4580RMB</div>
              <div class="item" contenteditable="true">苹果肌提升2次 · 3980RMB</div>
              <div class="item" contenteditable="true">专属定制护理3次 · 1280RMB</div>
            </div>
          </div>
        </div>

        <!-- 英国超离子系列 -->
        <div class="magazine-page" data-page="6" data-series="s3" data-id="page6">
          <div class="page-content">
            <div class="product-img-container" id="imgContainer_page6">
              <div class="tips">点击或使用顶部按钮上传图片</div>
              <img src="" class="product-img" alt="英国超离子" id="img_page6">
            </div>
            <div class="product-name" contenteditable="true">英国超离子 - 淡斑焕肤卡</div>
            <div class="product-price" contenteditable="true">¥2580 <del>原价¥4980</del></div>
            <div class="product-desc">
              <div class="item" contenteditable="true">超离子淡斑嫩肤3次 · 4280RMB</div>
              <div class="item" contenteditable="true">真皮层焕活1次 · 1680RMB</div>
              <div class="item" contenteditable="true">淡斑精华液1瓶 · 880RMB</div>
            </div>
          </div>
        </div>
        <div class="magazine-page" data-page="7" data-series="s3" data-id="page7">
          <div class="page-content">
            <div class="product-img-container" id="imgContainer_page7">
              <div class="tips">点击或使用顶部按钮上传图片</div>
              <img src="" class="product-img" alt="英国超离子" id="img_page7">
            </div>
            <div class="product-name" contenteditable="true">英国超离子 - 毛孔收缩卡</div>
            <div class="product-price" contenteditable="true">¥2280 <del>原价¥4580</del></div>
            <div class="product-desc">
              <div class="item" contenteditable="true">超离子毛孔清洁3次 · 3680RMB</div>
              <div class="item" contenteditable="true">毛孔紧致修护2次 · 2180RMB</div>
              <div class="item" contenteditable="true">清爽控油凝露1瓶 · 580RMB</div>
            </div>
          </div>
        </div>

        <!-- 眼部抗衰大师系列 -->
        <div class="magazine-page" data-page="8" data-series="s4" data-id="page8">
          <div class="page-content">
            <div class="product-img-container" id="imgContainer_page8">
              <div class="tips">点击或使用顶部按钮上传图片</div>
              <img src="" class="product-img" alt="眼部抗衰大师" id="img_page8">
            </div>
            <div class="product-name" contenteditable="true">眼部抗衰大师 - 淡纹紧致卡</div>
            <div class="product-price" contenteditable="true">¥1980 <del>原价¥3680</del></div>
            <div class="product-desc">
              <div class="item" contenteditable="true">眼部精准抗衰4次 · 3280RMB</div>
              <div class="item" contenteditable="true">眼周细纹淡化2次 · 1680RMB</div>
              <div class="item" contenteditable="true">抗衰眼霜1支 · 780RMB</div>
            </div>
          </div>
        </div>
        <div class="magazine-page" data-page="9" data-series="s4" data-id="page9">
          <div class="page-content">
            <div class="product-img-container" id="imgContainer_page9">
              <div class="tips">点击或使用顶部按钮上传图片</div>
              <img src="" class="product-img" alt="眼部抗衰大师" id="img_page9">
            </div>
            <div class="product-name" contenteditable="true">眼部抗衰大师 - 去眼袋黑眼圈卡</div>
            <div class="product-price" contenteditable="true">¥2280 <del>原价¥4280</del></div>
            <div class="product-desc">
              <div class="item" contenteditable="true">眼袋淡化修护3次 · 3680RMB</div>
              <div class="item" contenteditable="true">黑眼圈代谢2次 · 1880RMB</div>
              <div class="item" contenteditable="true">眼周保湿精华1瓶 · 680RMB</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 翻页按钮 -->
    <div class="page-controls">
      <button class="control-btn" id="prevBtn">←</button>
      <button class="control-btn" id="nextBtn">→</button>
    </div>
  </div>
</div>

<!-- 删除确认弹窗 -->
<div class="delete-modal" id="deleteModal">
  <div class="modal-content">
    <div class="modal-title">确认删除当前页面吗？</div>
    <div class="modal-btns">
      <button class="modal-btn confirm-btn" id="confirmDeleteBtn">确认删除</button>
      <button class="modal-btn cancel-btn" id="cancelDeleteBtn">取消</button>
    </div>
  </div>
</div>

<!-- 文件上传控件 + 提示 -->
<input type="file" id="fileInput" accept="image/*" onchange="handleFileSelect(this)">
<div class="browser-tip" id="browserTip">支持手动上传图片，内容自动保存</div>

<script>
// 核心优化：等待DOM完全加载后执行，适配所有打包工具
document.addEventListener('DOMContentLoaded', function() {
  // 核心变量初始化
  let currentSeries = 'all', currentPageNum = 1;
  let pageList = document.querySelectorAll('.magazine-page');
  let currentImgContainer = null;
  let currentPageId = 'page1';

  // 强制显示封面页（兜底，防止空白）
  document.querySelector('.cover-page').classList.add('current');
  document.querySelector('.app-container').style.display = 'flex';
  document.querySelector('.app-container').style.opacity = '1';

  // 绑定所有事件
  bindAllEvents();
  updatePageStatus();
  loadSavedImages();

  // 事件绑定函数（统一管理）
  function bindAllEvents() {
    // 分类切换事件
    document.querySelectorAll('.series-item').forEach(item => {
      item.addEventListener('click', function() {
        document.querySelectorAll('.series-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        currentSeries = this.dataset.series;
        currentPageNum = 1;
        updatePageStatus();
      });
    });

    // 翻页按钮事件
    document.getElementById('prevBtn').addEventListener('click', () => {
      if (currentPageNum > 1) {
        currentPageNum--;
        updatePageStatus();
      }
    });
    document.getElementById('nextBtn').addEventListener('click', () => {
      const filterPages = getFilterPages();
      if (currentPageNum < filterPages.length) {
        currentPageNum++;
        updatePageStatus();
      }
    });

    // 功能按钮事件
    document.getElementById('addCompareBtn').addEventListener('click', addComparePage);
    document.getElementById('addProductBtn').addEventListener('click', addProductPage);
    document.getElementById('deletePageBtn').addEventListener('click', showDeleteModal);
    document.getElementById('confirmDeleteBtn').addEventListener('click', deleteCurrentPage);
    document.getElementById('cancelDeleteBtn').addEventListener('click', hideDeleteModal);
    
    // 上传图片按钮事件
    document.getElementById('uploadImgBtn').addEventListener('click', function() {
      if (currentPageId === 'page1') {
        alert('封面页无需上传图片哦～');
        return;
      }
      currentImgContainer = document.getElementById('imgContainer_' + currentPageId);
      document.getElementById('fileInput').click();
    });

    // 图片容器点击上传事件
    pageList.forEach(page => {
      const pageId = page.dataset.id;
      if (pageId && pageId !== 'page1') {
        const imgContainer = document.getElementById('imgContainer_' + pageId);
        if (imgContainer) {
          imgContainer.addEventListener('click', function() {
            currentImgContainer = this;
            currentPageId = pageId;
            document.getElementById('fileInput').click();
          });
        }
      }
    });
  }

  // 获取当前分类下的页面列表
  function getFilterPages() {
    return Array.from(pageList).filter(page => currentSeries === 'all' || page.dataset.series === currentSeries);
  }

  // 更新页面状态（核心逻辑）
  function updatePageStatus() {
    const filterPages = getFilterPages();
    currentPageNum = Math.max(1, Math.min(currentPageNum, filterPages.length));
    
    // 隐藏所有页面，显示当前页
    pageList.forEach(page => page.classList.remove('current'));
    const targetPage = filterPages[currentPageNum - 1];
    if (targetPage) {
      targetPage.classList.add('current');
      currentPageId = targetPage.dataset.id || 'page1';
    }

    // 更新页码显示
    document.getElementById('pageIndicator').innerText = `${currentPageNum} / ${filterPages.length}`;
    
    // 禁用/启用按钮
    document.getElementById('prevBtn').disabled = currentPageNum === 1;
    document.getElementById('nextBtn').disabled = currentPageNum === filterPages.length;
    document.getElementById('deletePageBtn').disabled = filterPages.length <= 1 || currentPageId === 'page1';
    document.getElementById('uploadImgBtn').disabled = currentPageId === 'page1';
  }

  // 处理文件上传
  function handleFileSelect(input) {
    if (!input.files || !input.files[0]) return;
    
    const file = input.files[0];
    // 验证文件类型
    if (!file.type.startsWith('image/')) {
      alert('请选择图片文件！');
      return;
    }
    // 验证文件大小
    if (file.size > 10 * 1024 * 1024) {
      alert('图片大小不能超过10MB！');
      return;
    }

    // 读取图片并显示
    const reader = new FileReader();
    reader.onload = function(e) {
      const imgData = e.target.result;
      const imgElement = currentImgContainer.querySelector('.product-img');
      imgElement.src = imgData;
      currentImgContainer.querySelector('.tips').style.display = 'none';
      // 保存到本地存储
      localStorage.setItem('img_' + currentPageId, imgData);
      // 清空文件输入框
      input.value = '';
    };
    reader.readAsDataURL(file);
  }

  // 加载本地保存的图片
  function loadSavedImages() {
    pageList.forEach(page => {
      const pageId = page.dataset.id;
      if (pageId && pageId !== 'page1') {
        const savedImg = localStorage.getItem('img_' + pageId);
        if (savedImg) {
          const imgElement = document.getElementById('img_' + pageId);
          const imgContainer = document.getElementById('imgContainer_' + pageId);
          if (imgElement) {
            imgElement.src = savedImg;
            imgContainer.querySelector('.tips').style.display = 'none';
          }
        }
      }
    });
  }

  // 添加对比页
  function addComparePage() {
    const newPageNum = pageList.length + 1;
    const newPageId = 'page_' + newPageNum;
    const newPage = document.createElement('div');
    newPage.className = 'magazine-page';
    newPage.dataset.page = newPageNum;
    newPage.dataset.series = currentSeries === 'all' ? 's1' : currentSeries;
    newPage.dataset.id = newPageId;
    
    // 对比页HTML结构
    newPage.innerHTML = `
      <div class="page-content">
        <div class="compare-img-container">
          <div class="compare-col">
            <div class="compare-label">做前</div>
            <div class="compare-img-box" id="imgContainer_${newPageId}_before">
              <div class="tips">点击上传图片</div>
              <img src="" class="product-img" alt="做前" id="img_${newPageId}_before">
            </div>
          </div>
          <div class="compare-col">
            <div class="compare-label">做后</div>
            <div class="compare-img-box" id="imgContainer_${newPageId}_after">
              <div class="tips">点击上传图片</div>
              <img src="" class="product-img" alt="做后" id="img_${newPageId}_after">
            </div>
          </div>
        </div>
        <div class="product-name" contenteditable="true">${getSeriesName()} - 效果对比</div>
        <div class="product-desc" style="text-align:center;line-height:2.2;">
          <div contenteditable="true">一次定制护理，明显改善肤质，焕亮年轻状态</div>
        </div>
      </div>
    `;
    
    // 添加到页面容器
    document.getElementById('magazineBook').appendChild(newPage);
    // 更新页面列表
    pageList = document.querySelectorAll('.magazine-page');
    
    // 绑定对比图上传事件
    document.getElementById('imgContainer_' + newPageId + '_before').addEventListener('click', function() {
      currentImgContainer = this;
      currentPageId = newPageId + '_before';
      document.getElementById('fileInput').click();
    });
    document.getElementById('imgContainer_' + newPageId + '_after').addEventListener('click', function() {
      currentImgContainer = this;
      currentPageId = newPageId + '_after';
      document.getElementById('fileInput').click();
    });
    
    // 加载已保存的对比图
    const savedBefore = localStorage.getItem('img_' + newPageId + '_before');
    if (savedBefore) {
      document.getElementById('img_' + newPageId + '_before').src = savedBefore;
      document.getElementById('imgContainer_' + newPageId + '_before').querySelector('.tips').style.display = 'none';
    }
    const savedAfter = localStorage.getItem('img_' + newPageId + '_after');
    if (savedAfter) {
      document.getElementById('img_' + newPageId + '_after').src = savedAfter;
      document.getElementById('imgContainer_' + newPageId + '_after').querySelector('.tips').style.display = 'none';
    }
    
    // 更新页码并显示新页面
    currentPageNum = newPageNum;
    updatePageStatus();
  }

  // 新增产品页
  function addProductPage() {
    const newPageNum = pageList.length + 1;
    const newPageId = 'page_' + newPageNum;
    const newPage = document.createElement('div');
    newPage.className = 'magazine-page';
    newPage.dataset.page = newPageNum;
    newPage.dataset.series = currentSeries === 'all' ? 's1' : currentSeries;
    newPage.dataset.id = newPageId;
    
    // 产品页HTML结构
    newPage.innerHTML = `
      <div class="page-content">
        <div class="product-img-container" id="imgContainer_${newPageId}">
          <div class="tips">点击或使用顶部按钮上传图片</div>
          <img src="" class="product-img" alt="新产品" id="img_${newPageId}">
        </div>
        <div class="product-name" contenteditable="true">${getSeriesName()} - 自定义产品</div>
        <div class="product-price" contenteditable="true">¥0</div>
        <div class="product-desc">
          <div class="item" contenteditable="true">自定义产品内容1</div>
          <div class="item" contenteditable="true">自定义产品内容2</div>
          <div class="item" contenteditable="true">自定义产品内容3</div>
        </div>
      </div>
    `;
    
    // 添加到页面容器
    document.getElementById('magazineBook').appendChild(newPage);
    // 绑定图片上传事件
    document.getElementById('imgContainer_' + newPageId).addEventListener('click', function() {
      currentImgContainer = this;
      currentPageId = newPageId;
      document.getElementById('fileInput').click();
    });
    
    // 更新页面列表
    pageList = document.querySelectorAll('.magazine-page');
    // 更新页码并显示新页面
    currentPageNum = newPageNum;
    updatePageStatus();
  }

  // 删除页面相关函数
  function showDeleteModal() {
    const filterPages = getFilterPages();
    if (filterPages.length <= 1 || currentPageId === 'page1') {
      alert('至少保留1个页面，且封面页不能删除哦～');
      return;
    }
    document.getElementById('deleteModal').classList.add('show');
  }

  function hideDeleteModal() {
    document.getElementById('deleteModal').classList.remove('show');
  }

  function deleteCurrentPage() {
    // 删除本地存储的图片
    localStorage.removeItem('img_' + currentPageId);
    localStorage.removeItem('img_' + currentPageId + '_before');
    localStorage.removeItem('img_' + currentPageId + '_after');
    
    // 删除页面元素
    const currentPage = document.querySelector('[data-id="' + currentPageId + '"]');
    if (currentPage) currentPage.remove();
    
    // 更新页面列表
    pageList = document.querySelectorAll('.magazine-page');
    // 重置当前页码
    currentPageNum = Math.min(currentPageNum, getFilterPages().length);
    
    // 隐藏弹窗并更新状态
    hideDeleteModal();
    updatePageStatus();
  }

  // 获取分类名称
  function getSeriesName() {
    switch (currentSeries) {
      case 's1': return '高光美塑';
      case 's2': return '美超二代';
      case 's3': return '英国超离子';
      case 's4': return '眼部抗衰大师';
      default: return '高光美塑';
    }
  }
});
</script>
</body>
</html>