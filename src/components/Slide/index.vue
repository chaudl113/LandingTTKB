<template>
  <div id="slider-top">
    <div class="container">
      <div class="row">
        <div class="row no-gutters line-logotxt">
          <div class="col-md-6 text-center">
            <img src="../../assets/TTKB.png" alt="" class="img-logoto" />
          </div>
          <div class="col-md-6 text-center">
            <h1 class="logotxt">Truy Tìm Kho Báu</h1>
            <p class="text-center des-logo">
              ”Truy tìm kho báu” dịch vụ trúng thưởng kết hợp triển khai cùng
              MobiFone, dịch vụ Truy tìm kho báu là dịch
              vụ cung cấp kiến thức và thông tin tổng hợp, được thể hiện dưới
              dạng trò chơi truy tìm kho báu được ẩn giấu trên những hòn đảo của
              tam giác quỷ Bermuda. Hàng ngày, khách hàng tham gia truy tìm kho
              báu bằng cách trả lời các câu hỏi trắc nghiệm, trả lời đúng các
              câu hỏi, khách hàng mở được kho báu và trúng thưởng. Giải thưởng
              là tiền được tặng trực tiếp vào tài khoản chính của thuê bao.
              Định kỳ vào ngày cuối cùng mỗi tuần/tháng, dịch vụ sẽ tổ chức một
              cuộc thi (mini game) truy tìm kho báu trực tuyến trên nền
              wapsite/ứng dụng của dịch vụ. Khách hàng tham gia cuộc thi này sẽ
              được nhận giải thưởng (tiền cộng vào TKC hoặc mã thẻ data) khi
              thỏa mãn các điều kiện của mini game (là người bắn viên đạn cuối
              cùng để phá đảo)..
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slide'
}
</script>

<style lang="scss" scoped>
.des-logo {
  padding: 10px;
}
.logotxt {
  font-size: 80px;
  color: #fdb325;
}
.img-logoto {
  max-height: 80% !important;
}
#slider-top {
  margin-top: 77px;
  padding-top: 10px;
  background: #162148;
  color: #fff;
  .container {
    margin-top: 5rem;
  }
}
@media screen and (max-width: 770px) {
  #slider-top {
    margin-top: 95px !important;
    .container {
      margin-top: 1rem;
      .img-logoto {
        max-height: 100% !important;
      }
    }
  }
}
@media screen and (max-width: 483px) {
  #slider-top {
    margin-top: 65px !important;
  }
}

img,
object,
embed {
  border: 0 none;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  height: auto;
}
</style>
