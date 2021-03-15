<template>
  <div class="container">
    <div class="header">
      <div class="left">
        <img src="../assets/img/logo.png" alt="logo">
        <span>{{msg}}</span>
      </div>
      <div class="right">
        <a target="_blank" href="https://shimo.im/docs/BU01ScZUgp0VGbUl/read">帮助</a>
      </div>
    </div>
    <div class="main">
      <div class="feature feature-1 clearfix">
          <img src="../assets/img/circle1.png" alt="circle" class="circle1">
          <img src="../assets/img/line-1.png" alt="line-1" class="line1">
          <div class="center-container">
              <div class="left wow bounceInLeft animated" style="visibility: visible; animation-name: bounceInLeft;">
                  <h3>全新体验 为你归来</h3>
                  <p>免费阅读，遇见世界</p>
                  <a href="http://archive.xundupdf.com/xundu/pdf/20210111191405.5433/XDInstaller_2.8.1.9.exe">免费下载</a>
              </div>
              <div class="right">
                  <img src="../assets/img/feature1.png">
              </div>
          </div>
      </div>
      <div class="feature feature-2 clearfix">
          <img src="../assets/img/line-2.png" alt="line-2" class="line2">
          <div class="center-container">
              <div class="left">
                  <img src="../assets/img/feature2.png">
              </div>
              <div class="right wow bounceInRight animated" style="visibility: visible; animation-name: bounceInRight;">
                  <h3>极速转换 精准复刻</h3>
                  <p>拒绝等待，一秒完成</p>
                  <a href="http://archive.xundupdf.com/xundu/pdf/20210111191405.5433/XDInstaller_2.8.1.9.exe">下载体验</a>
              </div>
          </div>
      </div>
      <div class="feature feature-3 clearfix">
          <img src="../assets/img/line-3.png" alt="line-3" class="line3">
          <div class="center-container">
              <div class="left wow bounceInLeft" style="visibility: visible; animation-name: none;">
                  <h3>闪电响应 小而精美</h3>
                  <p>更好的体验，更好的你</p>
                  <a href="http://archive.xundupdf.com/xundu/pdf/20210111191405.5433/XDInstaller_2.8.1.9.exe">下载体验</a>
              </div>
              <div class="right">
                  <img src="../assets/img/feature3.png">
              </div>
          </div>
      </div>
      <div class="function">
          <img src="../assets/img/line-4.png" alt="line-4" class="line4">
          <div class="center-container">
              <h3 class="function-title">用心，只做实用功能</h3>
              <ul class="function-list wow flipInX" style="visibility: visible; animation-name: none;">
                  <li>
                      <img src="../assets/img/function1.png" alt="function1">
                      <h3>页面处理</h3>
                      <p>PDF合并、PDF拆分、提取页面</p>
                      <p>转换文档、删除页面、插入页面</p>
                  </li>
                  <li>
                      <img src="../assets/img/function2.png" alt="function2">
                      <h3>强大注释</h3>
                      <p>插入文字、自由画笔、自定义印章</p>
                      <p>高亮文本、波浪线、局部着色处理</p>
                  </li>
                  <li>
                      <img src="../assets/img/function3.png" alt="function3">
                      <h3>安全</h3>
                      <p>加密、数字签名、权限处理</p>
                      <p>解密、全局水印、数据恢复</p>
                  </li>
              </ul>

              <h3 class="evaluate-title">他们这样评价迅读</h3>
              <div class="evaluate-list wow bounceIn">
                  
                  <div class="first">
                      <img src="../assets/img/evaluate1.png">
                      <h3>杨婉丽</h3>
                      <h4>（28岁 上海）</h4>
                      <p>非常实用的一款工具，无论是阅读还是转换，都给人体验良好。有些细节堪称神器。</p>
                  </div>
                  <div class="middle">
                      <img src="../assets/img/evaluate2.png">
                      <h3>肖骁</h3>
                      <h4>（32岁 北京）</h4>
                      <p>作为公司的一名职员，效率和准确是我选择工具最重要的两条法则，因为好的工具能让你事半功倍，迅读无疑是这样一款软件。</p>
                  </div>
                  <div class="last">
                      <img src="../assets/img/evaluate3.png">
                      <h3>张家勇</h3>
                      <h4>（36岁 深圳）</h4>
                      <p>阅读文献和文档编辑，是我工作中不可缺少的内容，在很早之前下载过各种PDF工具，而我最满意的还是迅读PDF, 小而美。</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="footer">
          <div class="the-more">
              <span>更多精彩</span>
              <a class="wow swing" href="http://archive.xundupdf.com/xundu/pdf/20210111191405.5433/XDInstaller_2.8.1.9.exe">下载体验</a>
          </div>
          <div class="company-info">
              <p>©2017 XunduPDF All Rights Reserved <a href="http://www.beian.miit.gov.cn" target="_blank" style="color: #ffffff">津ICP备17010122号</a></p>
              <p>天津速读科技有限公司 天津滨海高新区滨海科技园高新六路39号9-3-401号</p>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
import "../../node_modules/animate.css";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ' 迅读PDF-阅读世界，转换未来'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
a {
  color: #fff;
  text-decoration: none;
}
img {
  border-style: none;
}
.header{
  width: 100%;
  height: 80px;
  vertical-align: middle;
  background: #07be8b;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
}
.container .left {
  float: left;
  margin-left: 10px;
}
.container .header .left span {
  font-size: 22px;
}
.container .header .left * {
  height: 40px;
  vertical-align: middle;
}
.container .right {
    float: right;
    margin-right: 10px;
}
.container .header {
    line-height: 80px;
    color: #fff;
}
.container .main .feature-1 {
    width: 100%;
    height: 603px;
    padding-top: 297px;
}
.container .main .feature {
    position: relative;
    height: 100%;
}
.container .clearfix {
    overflow: auto;
    zoom: 1;
}
.container .main .feature-1 .circle1 {
    position: absolute;
    width: 23%;
    left: 0;
    top: 0;
    z-index: -1;
}

.container .main .feature-1 .line1 {
    position: absolute;
    width: 55%;
    right: 0;
    bottom: 0;
    z-index: -1;
}
.container .center-container {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    line-height: 0px;
}
.container .left {
    float: left;
}
.bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft;
}
.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.container .main .feature-1 .left h3 {
    margin-top: 70px;
}
.container .main .feature .left h3, .container .main .feature .right h3 {
    font-size: 54px;
    font-weight: 400;
    color: #333;
}
.container .main .feature .left p, .container .main .feature .right p {
    font-size: 30px;
    text-align: left;
    color: #666;
    padding-top: 22px;
}

.container .main .feature .left a, .container .main .feature .right a {
    display: block;
    width: 170px;
    height: 44px;
    line-height: 44px;
    background: #07be8b;
    border-radius: 1px;
    color: #fff;
    text-align: center;
    font-size: 20px;
    margin-top: 70px;
    cursor: pointer;
}
.container .main .feature-1 .line1 {
    position: absolute;
    width: 55%;
    right: 0;
    bottom: 0;
    z-index: -1;
}
.container .main .feature-2 {
    height: 717px;
    padding-top: 183px;
}
.container .main .feature-2 .line2 {
    position: absolute;
    width: 67%;
    left: 0;
    bottom: 0;
    z-index: -1;
}
.container .main .feature-3 {
    padding-top: 177px;
    height: 723px;
}
.container .main .feature-3 .line3 {
    position: absolute;
    width: 49%;
    right: 0;
    bottom: 0;
    z-index: -1;
}
.container .main .function {
    position: relative;
}
.container .main .function .line4 {
    position: absolute;
    width: 48%;
    left: 0;
    top: 0;
    z-index: -1;
}
.container .main .function .evaluate-title, .container .main .function .function-title {
    font-size: 54px;
    color: #333;
    text-align: center;
    margin-top: 120px;
    font-weight: 400;
}
.container .center-container {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.container .main .function .function-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  margin-top: 0px;
  padding: 0;
  margin-top: 153px;
}
.container .main .function .function-list li {
    text-align: center;
    font-size: 0;
}
.container .main .function .function-list li img {
    height: 64px;
}
.container .main .function .function-list li h3 {
    font-size: 32px;
    color: #333;
    font-weight: 400;
    margin: 0;
        margin-top: 0px;
        margin-bottom: 0px;
    margin-top: 49px;
    margin-bottom: 30px;
}
.container .main .function .function-list li p {
    font-size: 20px;
    color: #666;
    margin: 0;
    line-height: 32px;
}
.container .main .function .evaluate-list {
    width: 1200px;
    text-align: center;
    padding-top: 149px;
    padding-bottom: 225px;
}
.container .main .function .evaluate-list div.first {
    margin-left: 0;
}
.container .main .function .evaluate-list div {
    display: inline-block;
    float: left;
    width: 365px;
    height: 416px;
    background: #fff;
    box-shadow: 0 10px 20px 0 rgba(102,102,102,.2);
    border-radius: 4px;
    text-align: center;
    margin-left: 23px;
    margin-top: 20px;
}
.container .main .function .evaluate-list div h3 {
    font-size: 20px;
    font-weight: 400;
    color: #333;
    margin-top: 23px;
}
.container .main .function .evaluate-list div h4 {
    font-size: 16px;
    font-weight: 400;
    color: #666;
    margin-top: 24px;
}
.container .main .function .evaluate-list div p {
    margin-top: 27px;
    font-size: 18px;
    font-weight: 400;
    color: #333;
    width: 83%;
    margin: 0 auto;
    line-height: 30px;
    text-align: left;
}
.container .main .function .evaluate-list div img {
    width: 116px;
    height: 116px;
    margin-top: 27px;
}
.container .main .footer {
    height: 312px;
    width: 100%;
    padding-top: 150px;
    text-align: center;
    background: #07be8b url(/src/assets/img/footer-line.png) center bottom no-repeat;
}
.container .main .footer .the-more span {
    display: inline-block;
    height: 70px;
    line-height: 70px;
    font-size: 54px;
    color: #fff;
}
.container .main .footer .the-more a {
    display: inline-block;
    width: 220px;
    height: 70px;
    line-height: 70px;
    font-size: 34px;
    color: #07be8b;
    background-color: #fff;
    margin-left: 30px;
    cursor: pointer;
}
.container .main .footer .company-info {
    margin-top: 150px;
    font: 1em sans-serif;
    font-size: 14px;
    color: #fff
}

.container .main .footer .company-info p {
    line-height: 27px;
    font: 1em sans-serif;
    color: #fff
}
</style>
