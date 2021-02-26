<template>
  <nav class="navbar navbar-expand-lg navbar-light  fixed-top  ">
    <div class="container">
      <!-- <span>
        <div class="mr-auto">
          <a href="#" class="navbar-brand">Navbar</a>
        </div></span
      > -->

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
            <a class="nav-link menu-main-item-link " href="#"
              >Khuyến mại
            </a>
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
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
.navbar {
  background-color: #862600 !important;
  height: 77px;
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
</style>
