<template>
  <section class="blockdown">
    <div class="inner-page ">
      <h2 class="title">Hướng dẫn</h2>

      <div class="info-device clearfix">
        <div class="bx-ios">
          <div class="bx-block">
            <div class="colleft">
              Mua đạn
            </div>
            <div class="colright">
              <p>
                - Cú pháp:
                <a href="sms://9639;?&body=MUA%DAN">MUA DAN gửi 9639</a><br />
                - Giá cước: 3.000đ<br />
                - Cước mua thêm đạn/ nâng cấp pháo sẽ được trừ khi khách hàng
                gửi tin nhắn yêu cầu đến dịch vụ. <br />
                - Mỗi lần mua đạn, khách hàng nhận thêm 20 viên đạn.
              </p>
            </div>
            <div class="colright-3">
              <a href="sms://9639;?&body=MUA%DAN" class="btn btn-info"
                >MUA NGAY</a
              >
            </div>
          </div>
        </div>
        <div class="bx-androi">
          <div class="bx-block">
            <div class="colleft">
              iOS
            </div>
            <div class="colright">
              <h2>Yêu cầu thiết bị</h2>
              <p>
                Cấu hình iOS đề nghị:<br />
                - iPhone 5S hoặc cao hơn<br />
                - Phiên bản: iOS 8.0 hoặc cao hơn<br />
                - Dung lượng bộ nhớ trống: 2GB hoặc nhiều hơn<br />
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
  color: #fff;
  margin-bottom: -50px;
  background: #160e1e;
  .inner-page {
    margin: 0 auto;
    position: relative;
  }

  .title {
    font-size: 36px;
    margin-bottom: 3%;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    line-height: 40px;
    color: #cfc39b;
  }
  .bx-block {
    border: 1px solid #ae903b;
    overflow: hidden;
    margin: 40px;
  }
}

.colleft {
  float: left;
  width: 20%;
  padding: 10px;
  text-align: center;
}

.colright {
  float: left;
  width: 60%;
  padding: 15px;
  border-left: 1px solid #ae903b;
  min-height: 150px;
  h2 {
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 16px;
  }
}

.colright-3 {
  display: none;
  float: left;
  width: 20%;
  padding: 15px;
  border-left: 1px solid #ae903b;
  min-height: 150px;

  position: relative;
  h2 {
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 16px;
  }
  a {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}

@media only screen and (min-width: 0px) and (max-width: 900px) {
  .bx-block .colright {
    float: none;
    width: 100%;
    padding: 15px;
    border-left: none;
    border-top: 1px solid #ae903b;
    min-height: inherit;
  }

  .bx-block .colleft {
    float: none;
    width: 100%;
    padding: 10px;
    text-align: center;
  }
  .colright-3 {
    display: block;
    float: none;
    width: 100%;
    padding: 15px;
    border-top: 1px solid #ae903b;

    position: relative;
    h2 {
      text-transform: uppercase;
      margin-bottom: 5px;
      font-size: 16px;
    }
    a {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
