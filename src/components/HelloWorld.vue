<template>
  <div class="hello">
    <p class="wow animated fadeInUp">
      将进酒
    </p>

    <section>
      <div
        class="wow animated slideInLeft"
        data-wow-duration="2s"
        data-wow-delay="1s"
      >
        君不见黄河之水天上来，奔流到海不复回。<br />
      </div>
      <div
        class="wow animated slideInLeft"
        data-wow-duration="3s"
        data-wow-delay="1s"
      >
        君不见高堂明镜悲白发，朝如青丝暮成雪。<br />
      </div>
      <div class="wow bounceOutUp" data-wow-duration="2s" data-wow-delay="1s">
        人生得意须尽欢，莫使金樽空对月。<br />
      </div>
      <div class="wow animated fadeIn">
        天生我材必有用，千金散尽还复来。<br />
      </div>
      <div class="wow fadeInDown">烹羊宰牛且为乐，会须一饮三百杯。<br /></div>
      <div class="wow fadeInLeft">岑夫子，丹丘生，将进酒，杯莫停。<br /></div>
      <div class="wow fadeInLeftBig">与君歌一曲，请君为我倾耳听：<br /></div>
      <div class="wow fadeOutRightBig">
        钟鼓馔玉不足贵，但愿长醉不复醒。<br />
      </div>
      <div class="wow flipInX">古来圣贤皆寂寞，惟有饮者留其名。<br /></div>

      <div class="wow flipOutY">陈王昔时宴平乐，斗酒十千恣欢谑。<br /></div>
      <div class="wow lightSpeedIn">主人何为言少钱，径须沽取对君酌。<br /></div>
      <div class="wow rotateIn">五花马，千金裘，<br /></div>
      <div class="wow rotateInUpLeft">
        呼儿将出换美酒，与尔同销万古愁。<br />
      </div>
    </section>
    <!--动画持续时间为2秒, 动画开始之前的延迟播放的时间为5s 元素底部距离浏览器底部400像素时开始播放动画, 动画重复次数为2次-->
    <p
      class="wow  slideInLeft"
      data-wow-duration="2s"
      data-wow-delay="5s"
      data-wow-offset="0"
      data-wow-iteration="2"
    >
      End
    </p>
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    const wow = new WOW({
      boxClass: "wow", // 默认属性名
      animateClass: "animated", // 默认触发的动画类(包含在animate css中)
      offset: 0, // 为所有添加wow的元素设置 data-wow-delay属性 的默认值
      mobile: true, // 是否在移动设备中开启动画
      live: true, // 持续监测页面中是否插入新的wow元素
    });
    wow.init();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
p {
  font-size: 50px;
  text-align: center;
  color: #64b587;
  line-height: 100px;
}

section {
  font-size: 30px;
  color: #a84631;
  text-align: center;
  line-height: 60px;
  margin: 0 auto;
}

section div {
  height: 100px;
  line-height: 100px;
}
</style>
