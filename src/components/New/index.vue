<template>
  <section id="tintuc" class="blocknews">
    <div class="island">
      <img src="../../assets/daodaulau.png" alt="" />
    </div>
    <div class="inner-page clearfix container">
      <h3 class="title">Tin tức MỚI nhất</h3>

      <div class="row ">
        <div class="col-md-6 mt-5">
          <div class="post-news">
            <div class="thumb-img">
              <a
                href="#"
                ><img
                  src="../../assets/splash.png"
                  alt=""
              /></a>
            </div>

            <div class="post-script">
              <a class="link-post">ĐĂNG KÝ LẦN ĐẦU NHẬN 20 LƯỢT BẮN MIỄN PHÍ</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <div class="post-news">
            <div class="thumb-img">
              <a
                href="#"
                ><img
                  src="../../assets/splash.png"
                  alt=""
              /></a>
            </div>

            <div class="post-script">
              <a class="link-post">CHƠI NGAY TRÚNG NGAY NHIỀU PHẦN THƯỞNG</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <div class="post-news">
            <div class="thumb-img">
              <a
                href="#"
                ><img
                  src="../../assets/splash.png"
                  alt=""
              /></a>
            </div>

            <div class="post-script">
              <a class="link-post">ĐĂNG KÝ LẦN ĐẦU NHẬN 20 LƯỢT BẮN MIỄN PHÍ</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <div class="post-news">
            <div class="thumb-img">
              <a
                href="#"
                ><img
                  src="../../assets/splash.png"
                  alt=""
              /></a>
            </div>

            <div class="post-script">
              <a class="link-post">CHƠI NGAY TRÚNG NGAY NHIỀU PHẦN THƯỞNG</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.blocknews .block-left {
  width: 50%;
  position: relative;
}
.island {
  position: absolute;
  height: 100%;

  img {
    width: 100%;
    padding-left: 20px;
    width: 200px;
    height: 450px;
  }
}
@media only screen and (min-width: 2560px) {
  .island {
    position: absolute;
    height: 100%;

    img {
      width: 100%;
      padding-left: 150px;
    }
  }
}
.inner-page.clearfix.container {
  position: sticky;
}

.post-news {
  border: 1px solid #ae903b;
  position: relative;
}
.thumb-img img {
  width: 100%;
  height: 250px;
}
.listnews {
  padding: 0;
}
.title {
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  line-height: 40px;
  color: #cfc39b;
}
.blocknews {
  background: url("../../assets/line.png") top center no-repeat;
  background-size: 100% auto;
  padding: 50px 0 100px 0;
  position: relative;
  color: #fff;
}
.post-news .post-script {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  border-top: 1px solid #ae903b;
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
