<template>
<div>
   <span>
        <div class="fixed-top  menu-m">
          <ul>
            <li class="">
              <a href="https://lienquan.garena.vn">
                <img
                  src="https://lienquan.garena.vn/asset/images/icon-home.png"
                  alt=""
                />
                <br />
                Trang chủ
              </a>
            </li>
            <li class="">
              <a href="https://lienquan.garena.vn/tin-tuc">
                <img
                  src="https://lienquan.garena.vn/asset/images/icon-news.png"
                  alt=""
                />
                <br />
                Tin tức</a
              >
            </li>

            <li>
              <a href="https://colienquan.garena.vn/">
                <img
                  src="https://lienquan.garena.vn/asset/images/caothu.png"
                  alt=""
                />
                <br />HƯỚNG DẪn</a
              >
            </li>
            <li class="active">
              <a href="https://lienquan.garena.vn/gioi-thieu">
                <img
                  src="https://lienquan.garena.vn/asset/images/icon-hv.png"
                  alt=""
                />
                <br />
                MÔ TẢ
              </a>
            </li>
          </ul>
        </div></span
      >
      <nav class="navbar navbar-expand-lg navbar-light  fixed-top text-uppercase ">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link menu-main-item-link " href="#">Trang chủ </a>
          </li>
          <li class="nav-item">
            <a class="nav-link menu-main-item-link " href="#">Rank</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled menu-main-item-link " href="#"
              >Tin tức</a
            >
          </li>
        </ul>

        <div class="mx-auto">
          <a href="#" class="navbar-brand"
            ><img class="logo-image" src="../../assets/logo_login.png" alt=""
          /></a>
        </div>

        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link menu-main-item-link " href="#">Khuyến mại </a>
          </li>
          <li class="nav-item">
            <a class="nav-link menu-main-item-link " href="#">Hướng dẫn</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled menu-main-item-link " href="#"
              >Mô tả
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>

</template>

<script>
export default {}
</script>

<style lang="scss">
.menu-m {
  display: none;
  background-color: #862600 !important;
  a {
    color: #fff671 !important;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    word-break: break-word;
  }
  ul {
    overflow: hidden;
    box-sizing: border-box;
    padding: 0;
}
}
@media only screen and (min-width: 0px) and (max-width: 900px) {
  .menu-m {
    display: block;
    position: relative;
  }
  .navbar{display:none!important}
}
.menu-m li.active {
    background-color: #2a256c;
}
.menu-m li a img {
  width: 40%;
  margin-bottom: 2px;
}
.menu-m li {
  width: 25%;
  padding: 5px;
  text-align: center;
  float: left;
}

.btdown {
  float: right;
  width: 30%;
  padding-top: 2%;
  padding: 5px;
}
.navbar {
  background-color: #862600 !important;
  height: 77px;
  box-sizing: content-box;
}

.navbar-brand {
  position: absolute;
  right: calc(50% - 140px);
  top: -5px;
}
.header-brand-text {
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
}

.menu-main-item-link {
  padding: 0 24px;
  display: block;
  color: #fff671 !important;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  word-break: break-word;
}
ul,
ol {
  list-style: none;
  margin: 0 !important;
}

.nav-item:hover > .menu-main-item-link {
  color: #41efff !important;
}

img.logo-image {
  width: 300px;
  /* padding-top: 66px; */
}

img {
  border: 0 none;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  height: auto;
}
</style>
