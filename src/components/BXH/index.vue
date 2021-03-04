<template>
  <div id="bxhminigame">
    <div class="container " style="margin-top: 2rem;">
      <div class="row">
        <div class="col-md-12">
          <section class="leaderboard-progress">
            <div class=" contain text-center">
              <img
                alt="Android Basics Leaderboard"
                class="mb-2"
                src="../../assets/img_rank.png"
              />
              <h2 class="text-uppercase text-white title">
                Danh sách TOP GameMini
              </h2>
              <div class="ml-auto search-input">
                <div id="content" class="mr-auto InputButton">
                  <input
                    type="text"
                    v-model="searchBXHQuery"
                    name="input"
                    class="input"
                    id="search-BXH"
                    placeholder="Tìm kiếm"
                  />
                  <button
                    id="input-keyword-search"
                    class="FloatingButton"
                    type="submit"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div class="page-leaderboard">
            <div style="display: none;"></div>
            <div id="contain-all" class=" slideout-panel">
              <section class="ranking">
    <div class="contain">
      <div class="ranking-table">
        <div class="ranking-table-header-row">
          <div class="ranking-table-header-data h6">Rank</div>
          <div class="ranking-table-header-data h6">Thuê bao</div>
          <div class="ranking-table-header-data h6">
            Phần thuởng
          </div>
        </div>
        <div v-for="BXH in BXHTop3" :key="BXH.id"  class="ranking-table-row-leader-1">
          <div class="ranking-table-data-leader-1">
            <div class="medal-gold">
               <img v-bind:src="require('../../assets/rank_'+BXH.stt+'.png')" alt="" />
            </div>
          </div>
          <div class="ranking-table-data">
            {{BXH.sdt}}
          </div>
          <div class="ranking-table-data">
            <div class="complete"> {{BXH.phanthuong}}</div>
          </div>
        </div>

 <div  class="ranking-table-body">
          <div v-for="BXH in evenNumbers" :key="BXH.id" class="ranking-table-row">
            <div class="ranking-table-data">
              {{BXH.stt}}
            </div>
            <div class="ranking-table-data">
              {{BXH.sdt}}
            </div>
            <div class="ranking-table-data">
              <div class="complete">{{BXH.phanthuong}}</div>
            </div>
          </div>

        </div>
      </div>
      <!--Use Date Formatter-->
    </div>
  </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BXH',
  data () {
    return {
      searchBXHQuery: null
    }
  },
  computed: {
    BXH () {
      if (this.searchBXHQuery) {
        return this.$store.getters.BXH.filter((item) => {
          return this.searchBXHQuery.toLowerCase().split(' ').every(v => item.sdt.toLowerCase().includes(v))
        })
      } else {
        return this.$store.getters.BXH
      }
    },
    evenNumbers () {
      return this.BXH.filter(number => number.stt > 3)
    },
    BXHTop3 () {
      return this.BXH.filter(number => number.stt < 4)
    }
  }
}
</script>

<style lang="scss" scoped>

.contain {
    max-width: 73.75rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}
.ml-auto.search-input {
  text-align: right;

  ::-webkit-input-placeholder {
    /* Edge */
    color: red;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: red;
  }

  ::placeholder {
    color: red;
  }
  input {
    border-radius: 3px;
    border: solid 1px #efefef;
  }
  .FloatingButton {
    position: absolute;
    right: 5px;
    font-size: 20px;
    line-height: 0;
    color: #757575;
    background: transparent;
    border: none;
    bottom: 23px;
  }
}
.InputButton {
  font-size: 20px;
  min-height: 50px;
  position: relative;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
}

#bxhminigame {
background: url(/img/line.57ef7554.png) top center no-repeat;
    background-size: 100% auto;
    padding: 20px 0 50px 0;
    position: relative;
    background-color: #162148;
    color: #fff;
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
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

.mb-1 {
  margin-bottom: 0.75rem !important;
}

@media screen and (min-width: 48rem) {
  .mb-1 {
    margin-bottom: 1.5rem !important;
  }
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

@media screen and (min-width: 48rem) {
  .mb-2 {
    margin-bottom: 1rem !important;
  }
}

.turquoise {
  color: #02ccba !important;
}

.white {
  color: #fff !important;
}

.text-center {
  text-align: center !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

section {
  display: block;
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
  outline-width: 0;
}

img {
  border-style: none;
}

svg:not(:root) {
  overflow: hidden;
}

input {
  font: inherit;
  margin: 0;
}

input {
  overflow: visible;
}

[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}

#contain-all {
  width: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  margin-bottom: 50px;
}

.contain {
  max-width: 73.75rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.contain::after {
  clear: both;
  content: "";
  display: table;
}

@media screen and (min-width: 48rem) {
  .contain {
    padding-top: 6rem;
  }
}

@media screen and (min-width: 73.75rem) {
  .contain {
    padding-left: 0;
    padding-right: 0;
  }
}

.contain--small {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin: 0 auto;
}

@media screen and (min-width: 48rem) {
  .contain--small {
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
  }
}

body {
  color: #525c65;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  line-height: 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #525c65;
  font-weight: 400;
}

@media screen and (min-width: 48rem) {
  p {
    margin-bottom: 1.5rem;
  }
}

@media screen and (min-width: 48rem) {
  p {
    font-size: 1rem;
    line-height: 1.75rem;
  }
}

p.lead {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.75rem;
}

@media screen and (min-width: 48rem) {
  p.lead {
    margin-bottom: 3rem;
  }
}

@media screen and (min-width: 48rem) {
  p.lead {
    font-size: 1.125rem;
    line-height: 2rem;
  }
}

p a {
  border-bottom: 1px solid #91daee;
  cursor: pointer;
}

a {
  border-bottom: none;
  text-decoration: none;
  color: #525c65;
  transition: color 0.3s ease;
}

a:active,
a:focus,
a:hover {
  color: #24292d;
}

a.white {
  color: #fff;
}

a.white:hover {
  color: #cccccc;
}

.text-only {
  font-size: 0.8125rem;
  line-height: 1.5rem;
  width: auto;
  border-bottom: none;
  color: #02b3e4;
  display: inline-block;
  text-decoration: none;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  font-weight: 600;
  transition: color 0.3s ease, background 0.3s ease;
}

@media screen and (min-width: 48rem) {
  .text-only {
    font-size: 0.8125rem;
    line-height: 1.5rem;
  }
}

.text-only:hover {
  text-decoration: none;
  color: #028bb1;
}

h2,
h3,
.h6 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #2e3d49;
  -webkit-font-smoothing: antialiased;
}

@media screen and (min-width: 48rem) {
  h2,
  h3,
  .h6 {
    margin-bottom: 1.5rem;
  }
}

h2 {
  font-size: 1.75rem;
  line-height: 2.25rem;
  font-weight: 300;
}

@media screen and (min-width: 48rem) {
  h2 {
    font-size: 2rem;
    line-height: 2.25rem;
  }
}

h3 {
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: 300;
}

@media screen and (min-width: 48rem) {
  h3 {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
}

.h6 {
  font-size: 0.8125rem;
  line-height: 1.5rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  font-weight: 600;
  color: #7d97ad;
}

@media screen and (min-width: 48rem) {
  .h6 {
    font-size: 0.8125rem;
    line-height: 1.5rem;
  }
}

label {
  margin-top: 0;
  margin-bottom: 0.75rem;
  display: block;
}

@media screen and (min-width: 48rem) {
  label {
    margin-bottom: 1.5rem;
  }
}

ul {
  padding: 0;
  list-style-type: none;
  margin-top: 0;
  margin-bottom: 0.75rem;
}

@media screen and (min-width: 48rem) {
  ul {
    margin-bottom: 1.5rem;
  }
}

ul:last-child {
  margin-bottom: 0;
}

img,
svg {
  margin: 0;
  max-width: 100%;
  height: auto;
}

:target:before {
  content: "";
  display: inline-block;
  height: 130px;
  margin: -130px 0 0;
}

.page-leaderboard .logo-wordmark #wordmark {
  fill: #fff;
}
.button,
.button--primary {
  display: block;
  cursor: pointer;
  appearance: none;
  user-select: none;
  text-align: center;
  white-space: nowrap;
  vertical-align: top;
  text-decoration: none;
  vertical-align: middle;
  height: 3rem;
  padding: 0 0.5rem;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  font-size: 0.8125rem;
  font-family: "Open Sans", sans-serif;
  line-height: 2.625rem;
  -webkit-font-smoothing: antialiased;
  border-radius: 0.25rem;
  letter-spacing: 0.125rem;
  transition: all 0.3s ease;
}

.button--primary {
  box-shadow: 8px 10px 20px 0px rgba(46, 61, 73, 0.15);
}

.button--primary:hover {
  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
}

.button--primary {
  width: 13.75rem;
  color: #fff;
  background-color: #02b3e4;
  border: 0.125rem solid transparent;
}

.button--primary:focus,
.button--primary:hover {
  outline: none;
  color: white;
  border-color: transparent;
  background-color: #029fcb;
}

.hero {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.page-leaderboard {
  background: rgba(120, 120, 120, 0.45);
  border-radius: 10px;
}

.page-leaderboard .leaderboard-progress {
  clear: both;
}

.page-leaderboard .leaderboard-progress .contain {
  padding: 3em 1.5em 2em 1.5em;
}

@media (min-width: 70em) {
  .page-leaderboard .leaderboard-progress .contain {
    padding: 6em 0 4.5em 0;
  }
}

.page-leaderboard .leaderboard-progress p {
  max-width: 48.5em;
  margin: 0 auto;
}

/*! CSS Used from: Embedded */

iframe#_hjRemoteVarsFrame {
  display: none !important;
  width: 1px !important;
  height: 1px !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

.title {
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  line-height: 40px;
  color: #cfc39b;
}
.ranking {
  clear: both;
  margin-bottom: 50px;
}

.ranking .contain {
  padding: 0 1.5em;
}

.ranking .ranking-table {
  max-width: 66em;
  margin: 0 auto;
}

.ranking .ranking-table-body {
  box-shadow: 0 0 0.75em 0 rgba(46, 60, 73, 0.12);
  border: solid 0.063em #dbe2e8;
  max-height: 24.625em;
  overflow: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

@media (min-width: 33em) {
  .ranking .ranking-table-body {
    max-height: 15.125em;
  }
}

.ranking .ranking-table-header-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1.125em;
}
.ranking-table-header-data.h6 {
  color: #fff !important;
}
@media (min-width: 33em) {
  .ranking .ranking-table-header-row {
    padding-top: 1.875em;
  }
}

.ranking .ranking-table-header-data {
  text-align: center;
  align-self: center;
}

.ranking .ranking-table-header-data:first-child {
  width: 20%;
}

@media (min-width: 48em) {
  .ranking .ranking-table-header-data:first-child {
    width: 15%;
  }
}

.ranking .ranking-table-header-data:nth-child(2) {
  padding-left: 9%;
  text-align: left;
  width: 50%;
}

@media (min-width: 33em) {
  .ranking .ranking-table-header-data:nth-child(2) {
    padding-left: 6.3%;
  }
}

@media (min-width: 48em) {
  .ranking .ranking-table-header-data:nth-child(2) {
    padding-left: 9%;
    width: 55%;
  }
}

@media (min-width: 70em) {
  .ranking .ranking-table-header-data:nth-child(2) {
    padding-left: 4%;
  }
}

.ranking .ranking-table-header-data:nth-child(3) {
  width: 30%;
}

@media (min-width: 33em) {
  .ranking .ranking-table-header-data:nth-child(3) {
    width: 25%;
  }
}

.ranking .ranking-table-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0.875em;
  padding-bottom: 0.875em;
  background-color: #fff;
}

@media (min-width: 33em) {
  .ranking .ranking-table-row {
    padding-top: 1.125em;
    padding-bottom: 1.125em;
  }
}

.ranking .ranking-table-row:nth-child(even) {
  background-color: #e8e8e8;
}

.ranking .ranking-table-row-leader-1,
.ranking .ranking-table-row-leader-2,
.ranking .ranking-table-row-leader-3 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0.875em;
  padding-bottom: 0.875em;
  background-color: #fff;
  box-shadow: 0 0 0.75em 0 rgba(46, 60, 73, 0.12);
  margin-bottom: 1.25em;
}

@media (min-width: 33em) {
  .ranking .ranking-table-row-leader-1,
  .ranking .ranking-table-row-leader-2,
  .ranking .ranking-table-row-leader-3 {
    padding-top: 0.125em;
    padding-bottom: 0.125em;
  }
}

.ranking .ranking-table-row-leader-1 .ranking-table-data-leader-1,
.ranking .ranking-table-row-leader-2 .ranking-table-data-leader-2,
.ranking .ranking-table-row-leader-3 .ranking-table-data-leader-3 {
  display: flex;
  justify-content: center;
  width: 20%;
}

@media (min-width: 48em) {
  .ranking .ranking-table-row-leader-1 .ranking-table-data-leader-1,
  .ranking .ranking-table-row-leader-2 .ranking-table-data-leader-2,
  .ranking .ranking-table-row-leader-3 .ranking-table-data-leader-3 {
    width: 15%;
  }
}

.ranking .ranking-table-row-leader-1 .ranking-table-data-leader-1 .medal-gold,
.ranking .ranking-table-row-leader-2 .ranking-table-data-leader-2 .medal-silver,
.ranking
  .ranking-table-row-leader-3
  .ranking-table-data-leader-3
  .medal-bronze {
  margin-top: -1.313em;
  height: 2.875em;
  width: 2.875em;
}

@media (min-width: 33em) {
  .ranking .ranking-table-row-leader-1 .ranking-table-data-leader-1 .medal-gold,
  .ranking
    .ranking-table-row-leader-2
    .ranking-table-data-leader-2
    .medal-silver,
  .ranking
    .ranking-table-row-leader-3
    .ranking-table-data-leader-3
    .medal-bronze {
    margin-top: -1.563em;
    height: 3.875em;
    width: 3.875em;
  }
}

.ranking .ranking-table-row-leader-1 {
  border: solid 0.125em #ecc81a;
}

.medal-gold img {
  padding-top: 20px;
  margin-left: 15px;
  width: 30px;
}
.ranking .ranking-table-row-leader-2 {
  border: solid 0.125em #dbe2e8;
}

.medal-silver img {
  padding-top: 20px;
  margin-left: 15px;
  width: 30px;
}

.ranking .ranking-table-row-leader-3 {
  border: solid 0.125em #dfdfd1;
}

.medal-bronze img {
  padding-top: 20px;
  margin-left: 15px;
  width: 30px;
}
.ranking .ranking-table-data {
  align-self: center;
  color: #525c65;
  font-size: 1em;
}

.ranking .ranking-table-data:first-child {
  text-align: center;
  width: 20%;
  color: #525c65;
  font-weight: 600;
}

@media (min-width: 33em) {
  .ranking .ranking-table-data:first-child {
    font-size: 1.25em;
  }
}

@media (min-width: 48em) {
  .ranking .ranking-table-data:first-child {
    width: 15%;
  }
}

.ranking .ranking-table-data:nth-child(2) {
  color: #2e3d49;
  width: 55%;
  font-size: 0.875em;
  padding-left: 9%;
}

@media (min-width: 33em) {
  .ranking .ranking-table-data:nth-child(2) {
    font-size: 1em;
  }
}

@media (min-width: 48em) {
  .ranking .ranking-table-data:nth-child(2) {
    font-size: 1em;
    width: 55%;
  }
}

@media (min-width: 70em) {
  .ranking .ranking-table-data:nth-child(2) {
    font-size: 1em;
    padding-left: 4%;
  }
}

.ranking .ranking-table-data:nth-child(3) {
  font-size: 0.875em;
  text-align: center;
  width: 25%;
  padding-right: 4%;
}

@media (min-width: 33em) {
  .ranking .ranking-table-data:nth-child(3) {
    padding-right: 0%;
    font-size: 1em;
  }
}

.ranking .ranking-table-data:nth-child(3) .complete {
  margin: -1.25em auto;
  transform: translateY(33%);

}

</style>
