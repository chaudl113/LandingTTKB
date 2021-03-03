<template>
  <section id="mota" class="blockdown">
    <div class="inner-page ">
      <h2 class="title">Mô tả Mini game</h2>

      <div class="img-in">
        <picture>

          <img src="../../assets/splash.png" alt=""
        /></picture>
      </div>
      <div class="info-device clearfix">
        <div class="bx-ios">
          <div class="bx-block">
          <div class="colright">
              <h2  >Yêu cầu thiết bị</h2>
              <p>
                + Khách hàng truy cập wapsite <a href="http://ttkb.vn">http://ttkb.vn</a> để tham gia các
                minigame của dịch vụ. <br/>
                + Để tham gia minigame, khách hàng cần có
                tài khoản để đăng nhập để sử dụng đầy đủ tính năng của dịch vụ. <br/>
                + Với khách hàng truy cập lần đầu và chưa có tài khoản, cần
                “Đăng ký” tài khoản. Bấm đăng ký và làm theo các hướng dẫn trên
                màn hình để tạo tài khoản. Yêu cầu để tạo tài khoản gồm có: số
                điện thoại và mật khẩu (mật khẩu do khách hàng tự tạo). Khách
                hàng cần nhập đúng số điện thoại của mình để nhận được mật khẩu
                OTP do hệ thống gửi. Khách hàng nhập OTP vào ô tương ứng để hoàn
                tất quá trình đăng ký tài khoản.<br/>
                + Sau khi đăng nhập thành công
                bằng tài khoản của mình, khách hàng bắt đầu tham gia minigame
                bằng việc bắn phá các hòn đảo trong game. Khách hàng sẽ tích lũy
                điểm qua mỗi lượt bắn. Minigame có nhiều đảo để khách hàng lựa
                chọn để tấn công. Chạm vào khẩu pháo (như trong hình bên) để
                bắn.<br/>
                + Khách hàng sẽ được xếp hạng dựa trên điểm số của mình có
                được.<br/>
                 + Khách hàng phá đảo sẽ nhận được giải thưởng của minigame
                và được lên level (hệ thống sẽ tự động chuyển khách hàng tới hòn
                đảo tiếp theo).<br/>
                 + Mỗi khách hàng có 20 lượt bắn miễn phí. Khi
                hết số lượt này, khách hàng có thể mua thêm lượt bắn.<br/>
                 + Khách
                hàng cũng có thể nâng cấp pháo để mỗi lượt bắn mang về nhiều
                điểm số hơn.<br/>
                 + Mua thêm lượt bắn và nâng cấp pháo được thực hiện
                thông qua kênh SMS. <br/>
                + Thông tin về xếp hạng của khách hàng
                (cho từng đảo và cho toàn bộ minigame) và thông tin về các giải
                thưởng đều minh bạch và được cung cấp trong minigame.
              </p>
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
.blockdown {
  background: url("../../assets/line.png") top center no-repeat;
  background-size: 100% auto;
  padding: 20px 0 50px 0;
  position: relative;
  color:#fff;
  .inner-page {
    margin: 0 auto;
    position: relative;
    img {
    border: 0 none;
    height: auto;
    width: 40%;
    vertical-align: middle;
    height: auto;
    padding-top: 50px;
}
}
.title {
    font-size: 36px;
    margin-bottom: 3%;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    line-height: 40px;
    color: #cfc39b;
        padding-top: 50px
}
.bx-block {
    border: 1px solid #ae903b;
    overflow: hidden;
        margin: 40px;
}
 .colright {
    padding: 15px;
    border-left: 1px solid #ae903b;
    min-height: 230px;
    h2 {
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 16px;
}
}
}
picture {
    display: flex;
    justify-content: center;
}

</style>
