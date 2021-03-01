<template>
  <div id="slider-top">
    <div class="container " style="margin-top: 2rem;">
      <div class="row">
        <div class="col-md-12">
          <section class="leaderboard-progress">
            <div class="contain text-center">
              <!-- <img
                alt="Android Basics Leaderboard"
                class="mb-2"
                src="../../assets/img_rank.png"
              /> -->
              <h2 class="text-uppercase text-white title">
                Danh sách trúng thưởng
              </h2>
              <div class="ml-auto search-input">
                <form id="content" class="mr-auto InputButton">
                  <input
                    type="text"
                    name="input"
                    class="input"
                    id="search-input"
                    placeholder="Tìm kiếm"
                  />
                  <button
                    id="input-keyword-search"
                    class="FloatingButton"
                    type="submit"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </form>
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
                    <div class="ranking-table-row-leader-1">
                      <div class="ranking-table-data-leader-1">
                        <div class="medal-gold">
                          <img src="../../assets/rank_1.png" alt="" />
                        </div>
                      </div>
                      <div class="ranking-table-data">
                        Steven A
                      </div>
                      <div class="ranking-table-data">
                        <div class="complete"></div>
                      </div>
                    </div>
                    <div class="ranking-table-row-leader-2">
                      <div class="ranking-table-data-leader-2">
                        <div class="medal-silver">
                          <img src="../../assets/rank_2.png" alt="" />
                        </div>
                      </div>
                      <div class="ranking-table-data">
                        Raghav M
                      </div>
                      <div class="ranking-table-data">
                        <div class="complete"></div>
                      </div>
                    </div>
                    <div class="ranking-table-row-leader-3">
                      <div class="ranking-table-data-leader-3">
                        <div class="medal-bronze">
                          <img src="../../assets/rank_3.png" alt="" />
                        </div>
                      </div>
                      <div class="ranking-table-data">
                        Ryan Z
                      </div>
                      <div class="ranking-table-data">
                        <div class="complete"></div>
                      </div>
                    </div>
                    <div class="ranking-table-body">
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          4
                        </div>
                        <div class="ranking-table-data">
                          Joseph R
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          5
                        </div>
                        <div class="ranking-table-data">
                          Muwaffaq I
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          6
                        </div>
                        <div class="ranking-table-data">
                          Joshua L
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          7
                        </div>
                        <div class="ranking-table-data">
                          Nick M
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          8
                        </div>
                        <div class="ranking-table-data">
                          Ravindra R
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          9
                        </div>
                        <div class="ranking-table-data">
                          Ricardo M
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          10
                        </div>
                        <div class="ranking-table-data">
                          Shubham R
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          11
                        </div>
                        <div class="ranking-table-data">
                          Flavio S
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          12
                        </div>
                        <div class="ranking-table-data">
                          Igor S
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          13
                        </div>
                        <div class="ranking-table-data">
                          Mycah H
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          14
                        </div>
                        <div class="ranking-table-data">
                          hemant d
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          15
                        </div>
                        <div class="ranking-table-data">
                          Santhosh S
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          16
                        </div>
                        <div class="ranking-table-data">
                          Joseph D
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          17
                        </div>
                        <div class="ranking-table-data">
                          Kevin C
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          18
                        </div>
                        <div class="ranking-table-data">
                          yasser m
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          19
                        </div>
                        <div class="ranking-table-data">
                          Miguel �ngel M
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          20
                        </div>
                        <div class="ranking-table-data">
                          Peter K
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          21
                        </div>
                        <div class="ranking-table-data">
                          Atikur R
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          22
                        </div>
                        <div class="ranking-table-data">
                          Matthew Y
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          23
                        </div>
                        <div class="ranking-table-data">
                          Anwar S
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          24
                        </div>
                        <div class="ranking-table-data">
                          Jake Y
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          25
                        </div>
                        <div class="ranking-table-data">
                          Lokesh R
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          26
                        </div>
                        <div class="ranking-table-data">
                          Christopher P
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          27
                        </div>
                        <div class="ranking-table-data">
                          Mingxin O
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          28
                        </div>
                        <div class="ranking-table-data">
                          August E
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          29
                        </div>
                        <div class="ranking-table-data">
                          Samsruti D
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          30
                        </div>
                        <div class="ranking-table-data">
                          Harsh V
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          31
                        </div>
                        <div class="ranking-table-data">
                          Keenan P
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          32
                        </div>
                        <div class="ranking-table-data">
                          Rouz A
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          33
                        </div>
                        <div class="ranking-table-data">
                          Ron R
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          34
                        </div>
                        <div class="ranking-table-data">
                          Sean O
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          35
                        </div>
                        <div class="ranking-table-data">
                          Michael D
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          36
                        </div>
                        <div class="ranking-table-data">
                          Devishree R
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          37
                        </div>
                        <div class="ranking-table-data">
                          Ali R
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          38
                        </div>
                        <div class="ranking-table-data">
                          Alvin A
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          39
                        </div>
                        <div class="ranking-table-data">
                          Arthur N
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          40
                        </div>
                        <div class="ranking-table-data">
                          Choulhyouc L
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          41
                        </div>
                        <div class="ranking-table-data">
                          Zeeshan H
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          42
                        </div>
                        <div class="ranking-table-data">
                          Goran �
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          43
                        </div>
                        <div class="ranking-table-data">
                          sovannarong k
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          44
                        </div>
                        <div class="ranking-table-data">
                          Luke M
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          45
                        </div>
                        <div class="ranking-table-data">
                          Chenzhe X
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          46
                        </div>
                        <div class="ranking-table-data">
                          Jae Hee L
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          47
                        </div>
                        <div class="ranking-table-data">
                          Jason P
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          48
                        </div>
                        <div class="ranking-table-data">
                          Sebastiano D
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          49
                        </div>
                        <div class="ranking-table-data">
                          Julia S
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          50
                        </div>
                        <div class="ranking-table-data">
                          Ken C
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          51
                        </div>
                        <div class="ranking-table-data">
                          Puneet C
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          52
                        </div>
                        <div class="ranking-table-data">
                          Jason C
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          53
                        </div>
                        <div class="ranking-table-data">
                          Napon M
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          54
                        </div>
                        <div class="ranking-table-data">
                          Alexander W
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          55
                        </div>
                        <div class="ranking-table-data">
                          Seddik B
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          56
                        </div>
                        <div class="ranking-table-data">
                          Guilhermino Marcos S
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          57
                        </div>
                        <div class="ranking-table-data">
                          Uma Shankar G
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          58
                        </div>
                        <div class="ranking-table-data">
                          Irvin S
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          59
                        </div>
                        <div class="ranking-table-data">
                          Omar A
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          60
                        </div>
                        <div class="ranking-table-data">
                          Andreas O
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          61
                        </div>
                        <div class="ranking-table-data">
                          Omar A
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          62
                        </div>
                        <div class="ranking-table-data">
                          Hiizu F
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          63
                        </div>
                        <div class="ranking-table-data">
                          Luis Felipe M
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          64
                        </div>
                        <div class="ranking-table-data">
                          Isabel P
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          65
                        </div>
                        <div class="ranking-table-data">
                          Thai T
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          66
                        </div>
                        <div class="ranking-table-data">
                          Yehuda G
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          67
                        </div>
                        <div class="ranking-table-data">
                          Wolfgang S
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          68
                        </div>
                        <div class="ranking-table-data">
                          Bagus A
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          69
                        </div>
                        <div class="ranking-table-data">
                          Michael N
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          70
                        </div>
                        <div class="ranking-table-data">
                          Alex S
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          71
                        </div>
                        <div class="ranking-table-data">
                          Netzahualc�yotl H
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          72
                        </div>
                        <div class="ranking-table-data">
                          Chad S
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          73
                        </div>
                        <div class="ranking-table-data">
                          Haris K
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          74
                        </div>
                        <div class="ranking-table-data">
                          Phong N
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          75
                        </div>
                        <div class="ranking-table-data">
                          Demitrio F
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          76
                        </div>
                        <div class="ranking-table-data">
                          Edward H
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          77
                        </div>
                        <div class="ranking-table-data">
                          Gavin R
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          78
                        </div>
                        <div class="ranking-table-data">
                          Adam W
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          79
                        </div>
                        <div class="ranking-table-data">
                          vikash k
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          80
                        </div>
                        <div class="ranking-table-data">
                          Vikrant J
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          81
                        </div>
                        <div class="ranking-table-data">
                          Ryan T
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          82
                        </div>
                        <div class="ranking-table-data">
                          Greg K
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          83
                        </div>
                        <div class="ranking-table-data">
                          Muhammad A
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          84
                        </div>
                        <div class="ranking-table-data">
                          Navendu A
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          85
                        </div>
                        <div class="ranking-table-data">
                          Masoom S
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          86
                        </div>
                        <div class="ranking-table-data">
                          Gadi K
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          87
                        </div>
                        <div class="ranking-table-data">
                          Azeez O
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          88
                        </div>
                        <div class="ranking-table-data">
                          Marcus D
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          89
                        </div>
                        <div class="ranking-table-data">
                          Vamsi A
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          90
                        </div>
                        <div class="ranking-table-data">
                          Joshua R
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          91
                        </div>
                        <div class="ranking-table-data">
                          Daemian K
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          92
                        </div>
                        <div class="ranking-table-data">
                          Anthony N
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          93
                        </div>
                        <div class="ranking-table-data">
                          Sebastian V
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          94
                        </div>
                        <div class="ranking-table-data">
                          m yusuf rahman t
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          95
                        </div>
                        <div class="ranking-table-data">
                          Dina P
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          96
                        </div>
                        <div class="ranking-table-data">
                          Motaz B
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          97
                        </div>
                        <div class="ranking-table-data">
                          Anirudha J
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          98
                        </div>
                        <div class="ranking-table-data">
                          Karl J
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          99
                        </div>
                        <div class="ranking-table-data">
                          Maryna K
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
                        </div>
                      </div>
                      <div class="ranking-table-row">
                        <div class="ranking-table-data">
                          100
                        </div>
                        <div class="ranking-table-data">
                          Matthew L
                        </div>
                        <div class="ranking-table-data">
                          <div class="complete"></div>
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
  name: 'Rank'
}
</script>

<style lang="scss" scoped>
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

#slider-top {
  margin-top: 77px;
  padding-top: 10px;
  // background-image: url("../../assets/Island.jpeg");
  // height: 100%;

  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  background:#162148;
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

.page-leaderboard .ranking {
  clear: both;
  margin-bottom: 50px;
}

.page-leaderboard .ranking .contain {
  padding: 0 1.5em;
}

.page-leaderboard .ranking .ranking-table {
  max-width: 66em;
  margin: 0 auto;
}

.page-leaderboard .ranking .ranking-table-body {
  box-shadow: 0 0 0.75em 0 rgba(46, 60, 73, 0.12);
  border: solid 0.063em #dbe2e8;
  max-height: 24.625em;
  overflow: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

@media (min-width: 33em) {
  .page-leaderboard .ranking .ranking-table-body {
    max-height: 15.125em;
  }
}

.page-leaderboard .ranking .ranking-table-header-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1.125em;
}
.ranking-table-header-data.h6 {
  color: #fff !important;
}
@media (min-width: 33em) {
  .page-leaderboard .ranking .ranking-table-header-row {
    padding-top: 1.875em;
  }
}

.page-leaderboard .ranking .ranking-table-header-data {
  text-align: center;
  align-self: center;
}

.page-leaderboard .ranking .ranking-table-header-data:first-child {
  width: 20%;
}

@media (min-width: 48em) {
  .page-leaderboard .ranking .ranking-table-header-data:first-child {
    width: 15%;
  }
}

.page-leaderboard .ranking .ranking-table-header-data:nth-child(2) {
  padding-left: 9%;
  text-align: left;
  width: 50%;
}

@media (min-width: 33em) {
  .page-leaderboard .ranking .ranking-table-header-data:nth-child(2) {
    padding-left: 6.3%;
  }
}

@media (min-width: 48em) {
  .page-leaderboard .ranking .ranking-table-header-data:nth-child(2) {
    padding-left: 9%;
    width: 55%;
  }
}

@media (min-width: 70em) {
  .page-leaderboard .ranking .ranking-table-header-data:nth-child(2) {
    padding-left: 4%;
  }
}

.page-leaderboard .ranking .ranking-table-header-data:nth-child(3) {
  width: 30%;
}

@media (min-width: 33em) {
  .page-leaderboard .ranking .ranking-table-header-data:nth-child(3) {
    width: 25%;
  }
}

.page-leaderboard .ranking .ranking-table-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0.875em;
  padding-bottom: 0.875em;
  background-color: #fff;
}

@media (min-width: 33em) {
  .page-leaderboard .ranking .ranking-table-row {
    padding-top: 1.125em;
    padding-bottom: 1.125em;
  }
}

.page-leaderboard .ranking .ranking-table-row:nth-child(even) {
  background-color: #e8e8e8;
}

.page-leaderboard .ranking .ranking-table-row-leader-1,
.page-leaderboard .ranking .ranking-table-row-leader-2,
.page-leaderboard .ranking .ranking-table-row-leader-3 {
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
  .page-leaderboard .ranking .ranking-table-row-leader-1,
  .page-leaderboard .ranking .ranking-table-row-leader-2,
  .page-leaderboard .ranking .ranking-table-row-leader-3 {
    padding-top: 0.125em;
    padding-bottom: 0.125em;
  }
}

.page-leaderboard
  .ranking
  .ranking-table-row-leader-1
  .ranking-table-data-leader-1,
.page-leaderboard
  .ranking
  .ranking-table-row-leader-2
  .ranking-table-data-leader-2,
.page-leaderboard
  .ranking
  .ranking-table-row-leader-3
  .ranking-table-data-leader-3 {
  display: flex;
  justify-content: center;
  width: 20%;
}

@media (min-width: 48em) {
  .page-leaderboard
    .ranking
    .ranking-table-row-leader-1
    .ranking-table-data-leader-1,
  .page-leaderboard
    .ranking
    .ranking-table-row-leader-2
    .ranking-table-data-leader-2,
  .page-leaderboard
    .ranking
    .ranking-table-row-leader-3
    .ranking-table-data-leader-3 {
    width: 15%;
  }
}

.page-leaderboard
  .ranking
  .ranking-table-row-leader-1
  .ranking-table-data-leader-1
  .medal-gold,
.page-leaderboard
  .ranking
  .ranking-table-row-leader-2
  .ranking-table-data-leader-2
  .medal-silver,
.page-leaderboard
  .ranking
  .ranking-table-row-leader-3
  .ranking-table-data-leader-3
  .medal-bronze {
  margin-top: -1.313em;
  height: 2.875em;
  width: 2.875em;
}

@media (min-width: 33em) {
  .page-leaderboard
    .ranking
    .ranking-table-row-leader-1
    .ranking-table-data-leader-1
    .medal-gold,
  .page-leaderboard
    .ranking
    .ranking-table-row-leader-2
    .ranking-table-data-leader-2
    .medal-silver,
  .page-leaderboard
    .ranking
    .ranking-table-row-leader-3
    .ranking-table-data-leader-3
    .medal-bronze {
    margin-top: -1.563em;
    height: 3.875em;
    width: 3.875em;
  }
}

.page-leaderboard .ranking .ranking-table-row-leader-1 {
  border: solid 0.125em #ecc81a;
}

.medal-gold img {
  padding-top: 20px;
  margin-left: 15px;
  width: 30px;
}
.page-leaderboard .ranking .ranking-table-row-leader-2 {
  border: solid 0.125em #dbe2e8;
}

.medal-silver img {
  padding-top: 20px;
  margin-left: 15px;
  width: 30px;
}

.page-leaderboard .ranking .ranking-table-row-leader-3 {
  border: solid 0.125em #dfdfd1;
}

.medal-bronze img {
  padding-top: 20px;
  margin-left: 15px;
  width: 30px;
}
.page-leaderboard .ranking .ranking-table-data {
  align-self: center;
  color: #525c65;
  font-size: 1em;
}

.page-leaderboard .ranking .ranking-table-data:first-child {
  text-align: center;
  width: 20%;
  color: #525c65;
  font-weight: 600;
}

@media (min-width: 33em) {
  .page-leaderboard .ranking .ranking-table-data:first-child {
    font-size: 1.25em;
  }
}

@media (min-width: 48em) {
  .page-leaderboard .ranking .ranking-table-data:first-child {
    width: 15%;
  }
}

.page-leaderboard .ranking .ranking-table-data:nth-child(2) {
  color: #2e3d49;
  width: 55%;
  font-size: 0.875em;
  padding-left: 9%;
}

@media (min-width: 33em) {
  .page-leaderboard .ranking .ranking-table-data:nth-child(2) {
    font-size: 1em;
  }
}

@media (min-width: 48em) {
  .page-leaderboard .ranking .ranking-table-data:nth-child(2) {
    font-size: 1em;
    width: 55%;
  }
}

@media (min-width: 70em) {
  .page-leaderboard .ranking .ranking-table-data:nth-child(2) {
    font-size: 1em;
    padding-left: 4%;
  }
}

.page-leaderboard .ranking .ranking-table-data:nth-child(3) {
  font-size: 0.875em;
  text-align: center;
  width: 25%;
  padding-right: 4%;
}

@media (min-width: 33em) {
  .page-leaderboard .ranking .ranking-table-data:nth-child(3) {
    padding-right: 0%;
    font-size: 1em;
  }
}

.page-leaderboard .ranking .ranking-table-data:nth-child(3) .complete {
  margin: -1.25em auto;
  transform: translateY(18%);
  background: url(https://d125fmws0bore1.cloudfront.net/assets/pages/leaderboard/leaderboard-complete-316433dd02f79185962dbaa82ad025c4722722e8ad276abe2aa00463a145691e.svg)
    no-repeat;
  background-size: contain;
  width: 3em;
  height: 3em;
}

@media (min-width: 33em) {
  .page-leaderboard .ranking .ranking-table-data:nth-child(3) .complete {
    width: 3.5em;
    height: 3.5em;
  }
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
</style>
