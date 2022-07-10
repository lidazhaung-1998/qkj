<template>
  <div>
    <Swiper class="homeads" :options="swiperOptions" ref="swiper">
      <SwiperSlide class="bg1">
        <div class="hometxt wow bounceInDown">
          赋能全科医学&nbsp; &nbsp; 培养百姓名医
        </div>
      </SwiperSlide>
      <SwiperSlide class="bg2">
        <div class="hometxt wow bounceInDown">
          构建全科医学培训体系 &nbsp; &nbsp; 推动全科医学学术发展
        </div>
      </SwiperSlide>
      <SwiperSlide class="bg3">
        <div class="hometxt wow bounceInDown">
          以专业为基础 &nbsp; &nbsp;以共赢为中心
        </div>
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
    <div class="main">

      <div id="why">
        <h1 class="wow fadeInDown">医学测评</h1>
        <h2 class="wow fadeInUp">
          <div class="layout">重点从基本要求、专业能力、晋阶提升能力三个维度，全面启动能力等级测，科学准确评价
            医生的执业能力和水平,甚至可定制您本单位专属评测。
          </div>
        </h2>
        <div class="layout">
          <ul>
            <li class="wow fadeInDown">
              <div><img alt="" src="~@/static/images/icona.png"><strong>全科医生</strong>
                <p>专业技术能力智慧测评</p>
              </div>
            </li>
            <li class="wow fadeInUp">
              <div><img alt="" src="~@/static/images/iconb.png"><strong>医疗机构</strong>
                <p>专业技术能力智慧测评</p>
              </div>
            </li>
            <li class="wow fadeInDown">
              <div><img alt="" src="~@/static/images/iconc.png"><strong>定向内容</strong>
                <p>专业技术能力智慧测评</p>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <div id="feature">
        <h1 class="wow fadeInDown">核心优势</h1>
        <h2 class="wow fadeInUp">全科界医学评测的核心优势</h2>
        <div class="layout">
          <ul>
            <li class="wow fadeInDown">
              <div>
                <svg width="48" height="48" viewBox="0 0 48 48"
                     xmlns="http://www.w3.org/2000/svg">

                  <rect width="48" height="48" fill="white" fill-opacity="0.01"
                        stroke-linejoin="round" stroke-width="4" stroke="none" fill-rule="evenodd"/>
                  <g transform="translate(4.000000, 4.000000)">
                    <path
                        d="M20,26 C26.627417,26 32,20.4693999 32,13.6470588 L32,0 L8,0 L8,13.6470588 C8,20.4693999 13.372583,26 20,26 Z"
                        fill="#5ff0d1" fill-rule="nonzero" stroke-linejoin="round" stroke-width="4"
                        stroke="#09ae88"/>
                    <path d="M8,17 L8,7 L0,7 C0,13.6666667 4,17 8,17 Z" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="4" stroke="#09ae88" fill="none"
                          fill-rule="evenodd"/>
                    <path d="M32,17 L32,7 L40,7 C40,13.6666667 36,17 32,17 Z" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="4" stroke="#09ae88" fill="none"
                          fill-rule="evenodd"/>
                    <path d="M20,28 L20,32" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="4" stroke="#09ae88" fill="none" fill-rule="evenodd"/>
                    <polygon fill="#5ff0d1" fill-rule="nonzero"
                             points="11 38 14.690036 32 25.0425158 32 29 38" stroke-linejoin="round"
                             stroke-width="4" stroke="#09ae88"/>
                  </g>
                </svg>
                <strong>专业可靠</strong>
                <p>十余年企业服务行业经验，资深团队为您制定专属的行业解决方案</p>
              </div>
            </li>
            <li class="wow fadeInUp">
              <div>
                <svg width="48" height="48" viewBox="0 0 48 49"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                  <path d="M48 1H0V49H48V1Z" fill="white" fill-opacity="0.01"/>
                  <path
                      d="M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z"
                      fill="#5ff0d1" stroke="#09ae88" stroke-width="4" stroke-linejoin="round"/>
                  <path d="M15 23L22 30L34 18" stroke="#09ae88" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
                <strong>安全省心</strong>
                <p>测评内容覆盖医学方方面面，让您足不出户即可完成医学全面测评</p>
              </div>
            </li>
            <li class="wow fadeInDown">
              <div>
                <svg width="48" height="48" viewBox="0 0 48 48"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                  <path
                      d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
                      fill="#5ff0d1" stroke="#09ae88" stroke-width="4" stroke-linecap="round"
                      stroke-linejoin="round"/>
                </svg>
                <strong>服务保障</strong>
                <p>工作日5分钟内响应，关键环节及时提醒，主动帮助客户解决疑难问题</p>
              </div>
            </li>
            <li class="wow fadeInDown">
              <div>
                <svg width="48" height="48" viewBox="0 0 48 48"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                  <path
                      d="M15 14.3845C19.1254 15.9999 24.0083 15.9999 24.0083 15.9999C24.0083 15.9999 28.88 15.9999 33 14.3845C37.5017 19.6384 40.6564 26.5644 42.7297 32.3974C44.8286 38.3026 40.2005 43.9999 33.9334 43.9999H14.0197C7.76812 43.9999 3.14583 38.3287 5.23423 32.4363C7.29788 26.6137 10.4548 19.6854 15 14.3845Z"
                      fill="#5ff0d1" stroke="#09ae88" stroke-width="4" stroke-linejoin="round"/>
                  <path d="M18 28H30" stroke="#09ae88" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M18 34H30" stroke="#09ae88" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M24.0083 28V38" stroke="#09ae88" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M30 22L24 28L18 22" stroke="#09ae88" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M24 16C31.1797 16 37 13.3137 37 10C37 6.68629 31.1797 4 24 4C16.8203 4 11 6.68629 11 10C11 13.3137 16.8203 16 24 16Z"
                        stroke="#09ae88" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <strong>无隐形消费</strong>
                <p>收费标准公开透明 ，拒绝任何隐形消费</p>
              </div>
            </li>
            <li class="wow fadeInUp">
              <div>
                <svg width="48" height="48" viewBox="0 0 48 48"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="11" r="7" fill="#5ff0d1" stroke="#09ae88" stroke-width="4"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4 41C4 32.1634 12.0589 25 22 25" stroke="#09ae88" stroke-width="4"
                        stroke-linecap="round" stroke-linejoin="round"/>
                  <rect x="27" y="31" width="14" height="10" fill="#5ff0d1" stroke="#09ae88"
                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M37 31V28C37 26.3431 35.6569 25 34 25C32.3431 25 31 26.3431 31 28V31"
                        stroke="#09ae88" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <strong>隐私保护</strong>
                <p>智能系统，保障客户数据安全，严格防控客户资料外泄</p>
              </div>
            </li>
            <li class="wow fadeInDown">
              <div>
                <svg width="48" height="48" viewBox="0 0 48 48"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                  <path d="M16 22L10 12L4 22" stroke="#09ae88" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10 28C13.3137 28 16 25.3137 16 22H4C4 25.3137 6.68629 28 10 28Z" fill="#5ff0d1"
                        stroke="#09ae88" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M44 22L38 12L32 22" stroke="#09ae88" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M38 28C41.3137 28 44 25.3137 44 22H32C32 25.3137 34.6863 28 38 28Z"
                        fill="#5ff0d1" stroke="#09ae88" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M24 6V42" stroke="#09ae88" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M10 12H24H38" stroke="#09ae88" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M10 12H24H38" stroke="#09ae88" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M38 42H24H10" stroke="#09ae88" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
                <strong>售后无忧</strong>
                <p>退货退款永久保，卖家及时投诉，全力支持</p>
              </div>
            </li>

          </ul>
        </div>
      </div>


      <div id="news">
        <h1 class="wow fadeInDown">新闻资讯</h1>
        <h2 class="wow fadeInUp">展示医疗行业最新新闻资讯以及公司相关会议、活动等动态</h2>
        <div class="layout">
          <div class="homenews">
            <div class="homenewsleft">
              <div class="focusimg wow zoomIn">
                <div><img alt="" src="images/n1.jpg">
                  <div class="focuslink"><a href="#">全景医学影像:公益战“疫” 共克时艰</a>
                    <p>2020-09-21</p>
                  </div>
                </div>
                <div><img alt="" src="images/n2.jpg">
                  <div class="focuslink"><a href="#">全景医学影像:公益战“疫” 共克时艰</a>
                    <p>2020-09-21</p>
                  </div>
                </div>
                <div><img alt="" src="images/n3.jpg">
                  <div class="focuslink"><a href="#">全景医学影像:公益战“疫” 共克时艰</a>
                    <p>2020-09-21</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="homenewsright wow fadeInDown"><strong>行业动态<a href="#">浏览更多新闻</a></strong>
              <ul class="homenewslist">
                <li><a href="#">发展社区养老，构建新型养老模式<label>2022-05-12</label></a>
                </li>
                <li><a href="#">如何推进家庭医生签约服务高质量发展？<label>2022-05-12</label></a>
                </li>
                <li><a href="#">“十四五”期间如何推动城乡社区医疗卫生服务体系高质量发展<label>2022-05-12</label></a>
                </li>
                <li><a href="#">两会中的基层卫生声音：建议新增全科医学科为国家临床重点专科<label>2022-05-12</label></a>
                </li>
                <li><a href="#">我国基层医疗卫生机构绩效考核政策进展及实践<label>2022-05-12</label></a>
                </li>
                <li><a href="#">方庄社区智能语音外呼平台携手全科医生助力健康服务<label>2022-05-12</label></a>
                </li>
                <li><a href="#">医防融合下网格化家庭医生签约服务“12345”模式<label>2022-05-12</label></a>
                </li>

              </ul>
            </div>
          </div>


        </div>

      </div>


      <div id="clint">
        <h1 class="wow fadeInDown">重点客户</h1>
        <h2 class="wow fadeInUp">全科界服务过的重点客户</h2>
        <div class="layout">
          <ul class="wow fadeInDown">
            <li><a href="#"><img alt="" src="images/a.jpg"></a></li>
            <li><a href="#"><img alt="" src="images/b.jpg"></a></li>
            <li><a href="#"><img alt="" src="images/c.jpg"></a></li>
            <li><a href="#"><img alt="" src="images/d.jpg"></a></li>
            <li><a href="#"><img alt="" src="images/e.jpg"></a></li>
            <li><a href="#"><img alt="" src="images/f.jpg"></a></li>

          </ul>
        </div>

      </div>


    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import { WOW } from 'wowjs';
  import 'wowjs/css/libs/animate.css'
  import 'swiper/css/swiper.min.css'

  new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
  }).init();
  export default {
    name: 'Index',
    props: [],
    data () {

      return {
        swiperOptions: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination'
          }
          // preventDefault: true,
          // allowTouchMove: false,
          // preventClicksPropagation: true
        }
      }
    },
    components: {
      Swiper,
      SwiperSlide
    }
  }
</script>

<style lang="scss" scoped>
  .homeads {
    height: 970px;

    .bg1 {
      background-image: url('~@/static/images/img1.jpg');
    }

    .bg2 {
      background-image: url('~@/static/images/img2.jpg');
    }

    .bg3 {
      background-image: url('~@/static/images/img3.jpg');
    }

    .swiper-slide {
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;

      .hometxt {
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        text-align: center;
        color: #fff;
        font-size: 50px;
        letter-spacing: 2px;
        text-shadow: -2px -1px 8px rgba(0, 0, 0, .8);
      }
    }

    &::v-deep .swiper-pagination {
      bottom: 30px;

      .swiper-pagination-bullet {
        width: 64px;
        height: 6px;
        border-radius: 4px;
      }

      .swiper-pagination-bullet-active {
        background-color: #fff;
      }
    }
  }

  .main {
    min-height: 500px;
    text-align: center;
    #why {
      background-color: #fff;
      padding-bottom: 50px;
      padding-top: 50px;

      h1 {
        text-align: center;
        font-size: 40px;
      }

      h2 {
        margin-top: 24px;

        div {
          margin: auto;
          width: 700px;
          font-weight: normal;
          color: #666;
          padding: 10px;
          padding-top: 0;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
        }
      }

      .layout {
        margin: 0 auto;
        width: 1300px;

        ul {
          display: table;
          table-layout: fixed;
          width: 100%;
          margin-top: 30px;

          li {
            display: table-cell;
            vertical-align: top;
            padding: 10px;

            div {
              transition: all .3s;
              padding-top: 20px;
              border-right: 1px #ddd solid;
              padding-bottom: 30px;
              cursor: pointer;

              &:hover {
                transform: scale(1.2);
                z-index: 3;
                background-color: #dffff8;
                position: relative;
                border-radius: 10px;
                border: 0;
                box-shadow: 0px 0px 30px rgba(0, 0, 0, .1);
              }

              strong {
                display: block;
                font-size: 24px;
                padding-bottom: 20px;
              }

              p {
                padding-left: 50px;
                padding-right: 50px;
                color: #666
              }

              img {
                height: 120px
              }
            }
          }

          li:last-child {
            div {
              border-right: 0;
            }
          }
        }
      }

    }
  }

</style>