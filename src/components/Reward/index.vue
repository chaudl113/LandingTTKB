<template>
  <div id="main-index">
    <div class="container">
      <div class="index-hd">
        <div class="text-center text-uppercase tt-hd">
          Danh sách trúng thưởng
        </div>
        <div class="row">
          <div class="col-sm-6 bo-list-hd">
            <div class="list-hd">
              <div class="tt">Live ngày dd/MM/yyyy</div>
              <ul>
                <li>1. xxxxxx: 10.000</li>
                <li>2. xxxxxx: 10.000</li>
                <li>3. xxxxxx: 10.000</li>
                <li>4. xxxxxx: 10.000</li>
                <li>5. xxxxxx: 10.000</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 bo-list-hd">
            <div class="list-hd">
              <div class="tt">Live ngày dd/MM/yyyy</div>
              <ul>
                <li>1. xxxxxx: 10.000</li>
                <li>2. xxxxxx: 10.000</li>
                <li>3. xxxxxx: 10.000</li>
                <li>4. xxxxxx: 10.000</li>
                <li>5. xxxxxx: 10.000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RewardComponents',
  data () {
    return {
      searchBXHQuery: null
    }
  },
  computed: {
    bxhMiniGame () {
      if (this.searchBXHQuery) {
        return this.$store.getters.bxhMiniGame.filter(item => {
          return this.searchBXHQuery
            .toLowerCase()
            .split(' ')
            .every(v => item.sdt.toLowerCase().includes(v))
        })
      } else {
        return this.$store.getters.bxhMiniGame
      }
    },
    evenNumbers () {
      return this.bxhMiniGame.filter(number => number.stt > 3)
    },
    BXHTop3 () {
      return this.bxhMiniGame.filter(number => number.stt < 4)
    }
  }
}
</script>
<style >
#main-index{
  background-color: #fff;
    color: #810042 !important;
;
}
.tt-hd {
    font-size: 40px;
    padding: 35px 0;
}
.list-hd {
    border-radius: 6px;
    box-shadow: 0 0 5px rgb(0 0 0 / 52%);
    margin-bottom: 50px;
}
.list-hd .tt {
    font-family: "Roboto-Bold";
    padding: 20px;
    background-image: linear-gradient(to right, #fdb325 , #ffca60);
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}
</style>
