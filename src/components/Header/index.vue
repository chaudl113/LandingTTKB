<template>
  <div>
    <span>
      <div class="fixed-top  menu-m nav-menuu-m">
        <div class="img-icon-mobi">
          <img src="../../assets/logo_login.png" alt="" />
        </div>
        <div class="play">
          <a class="play-link" href="http://ttkb.vn/minigame/index.html" target="_blank">
            <img src="../../assets/button_play.png" alt="">
          </a
          >
        </div>
      </div>
      <div class="fixed-bottom  menu-m">
        <ul>
          <li class="">
            <router-link
              to="/"
              v-scroll-to="{ el: '#slider-top', offset: -100 }"
            >
              <div class="icon">
                <i class="fa fa-home" aria-hidden="true"> </i>
                <p>Trang chủ</p>
              </div>
            </router-link>
          </li>
<li class="">
            <router-link to="/wap/minigame" v-scroll-to="{ el: '#minigame', offset: -95 }">
              <div class="icon">
                <i class="fa fa-university" aria-hidden="true"></i>
                <p>Minigame</p>
              </div>
            </router-link>
          </li>

 <li class="" v-scroll-to="{ el: '#bxhminigame', offset: -50 }">
            <router-link to="/bonus-list">
              <div class="icon">
                <i class="fa fa-trophy" aria-hidden="true"></i>
                <p>BXH Minigame</p>
              </div>
            </router-link>
          </li>
 <li>
            <router-link to="/guideline" v-scroll-to="{ el: '#huongdan', offset: -70 }">
              <div class="icon">
                <i class="fa fa-book" aria-hidden="true"></i>

                <p>Huớng dẫn</p>
              </div>
            </router-link>
          </li>
           <li class="">
            <router-link to="/wap/regulation" v-scroll-to="{ el: '#reg', offset: -40 }">
              <div class="icon">
               <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                <p>Giới thiệu</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </span>
    <nav
      class="navbar navbar-expand-lg navbar-light  fixed-top text-uppercase "
    >
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav  mt-2 mt-lg-0">
            <li class="nav-item active"  v-scroll-to="{ el: '#slider-top', offset: -180 }" >
              <router-link to="/" class="nav-link menu-main-item-link "
                >Trang chủ
              </router-link>
              </li>
               <li
              class="nav-item"
              v-scroll-to="{ el: '#main-index', offset: -180 }"
            >
              <router-link class="nav-link menu-main-item-link " to="/wap/reward">DS trúng thưởng</router-link>
            </li>

            <li
              class="nav-item"
              v-scroll-to="{ el: '#huongdan', offset: -180 }"
            >
              <router-link class="nav-link menu-main-item-link " to="/guideline">Hướng dẫn</router-link>
            </li>
          </ul>

          <div class="mx-auto">
            <router-link tag="a"  to="/"  class="navbar-brand"
              ><img class="logo-image" src="../../assets/logo_login.png" alt=""
            /></router-link>
          </div>

          <ul class="navbar-nav  mt-2 mt-lg-0">
            <li
              class="nav-item "
              v-scroll-to="{ el: '#minigame', offset: -100 }"
            >
              <router-link class="nav-link menu-main-item-link " to="/wap/minigame">MINIGAME </router-link>
            </li>
            <li
              class="nav-item "  v-scroll-to="{ el: '#bxhminigame', offset: -180 }"
            >
            <router-link class="nav-link menu-main-item-link " to="/bonus-list"
                >BXH MINIGAME
              </router-link>
            </li>
              <li
              class="nav-item "  v-scroll-to="{ el: '#reg', offset: -180 }"
            >
            <router-link class="nav-link menu-main-item-link " to="/wap/regulation"
                >Giới thiệu dịch vụ
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.img-icon-mobi {
  height: 100%;
  width: 50%;
    padding-top: 1%;
    padding-left: 1%;
  float:left;
  position: absolute;
    left: 8%;
  img {
    width: 50%;
  }
}
.play{
  float:right;
  width: 44%;
    padding: 6%;
  .play-link{
    width: 100%;

   button.btn.btn-primary{
      font-size:10px;
    font-weight:900;
     display:flex;
  justify-content: center;
   }
  }

}
.nav-menuu-m {
  background: url("../../assets/nv-m.png") top center no-repeat;
  background-size: 100% 100%;
  padding: 0px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: none !important;
}
.icon i {
  font-size: 30px;
  color: #fff;
}
.menu-m {
  display: none;
  background-color: #862600 !important;
  a {
    color: #fff671 !important;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    word-break: break-word;
    p {
      // padding-top:5px;
    }
  }
  ul {
    overflow: hidden;
    box-sizing: border-box;
    padding: 0;
  }
}
@media only screen and (min-width: 0px) and (max-width: 990px) {
  .menu-m {
    display: block;
    position: relative;
  }
  .navbar {
    display: none !important;
  }
}
@media only screen and (min-width: 0px) and (max-width: 555px) {
  .menu-m {
    a {
      font-size: 10px;
      font-weight: 700;
      cursor: pointer;
      transition: color 0.2s ease-in-out;
      word-break: break-word;
    }
    p {
      // padding-top:10px;
    }
  }
}

.menu-m li.active {
  background-color: #2a256c;
}
.menu-m li a img {
  width: 40%;
  margin-bottom: 2px;
}
.menu-m li {
  width: 20%;
  padding-top: 10px;
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
  right: calc(50% - 130px);
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
  width: 250px;
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
