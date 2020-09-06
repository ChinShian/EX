<template>
  <div>
    <div class="a1-wrap">
      <div class="a1-header">
        <div class="a1-container-wrap">
          <h3 class="a1-text-top">塑膠製品產業 數位化轉型</h3>
          <h1 class="a1-title">
            <span class="wow fadeInDown" data-wow-duration=".6" data-wow-delay=".5s">塑膠業未來5年</span>
            <p class="wow fadeInDown" data-wow-duration=".6" data-wow-delay="1s">
              三大關鍵
              <br class="d-block d-md-none" />競爭策略
            </p>
          </h1>
          <p class="a1-text wow fadeIn" data-wow-duration=".5" data-wow-delay="1.5s">
            面對缺工、限塑政策、原料成本波動、反傾銷課稅，
            <br class="d-none d-md-block" />
            加上疫情後市場需求凍結等嚴峻挑戰，促使塑膠製品業者
            <br class="d-none d-md-block" />
            加速尋求轉型機會。
          </p>
        </div>
      </div>

      <section class="a1-part a1-vote-part">
        <div class="a1-container-wrap">
          <h3 class="a1-title">
            哪一個關鍵競爭策略最符合您企業的
            <span>戰略轉型</span>藍圖？
          </h3>
          <div class="d-md-flex">
            <div class="a1-vote-inner d-md-flex" v-for="(employeesDatas, index) in employeesData" :key="employeesDatas.search">
              <div class="a1-item flex-fill wow fadeIn" data-wow-duration=".3" data-wow-delay=".1s">
                <img class="pic img-fluid" :src="employeesDatas.img" alt="提效擴產" />
                <div class="vote-btn">
                  <input id="vote0" type="checkbox" />
                  <label for="vote0" @click="updateEmployee(employeesDatas.id, employeesDatas.date, employeesDatas.name)">
                    <img :src="imglike" alt="投票" class="vote-yet" />
                    <!-- <img src="/images/icon/liked.svg" alt="投票" class="voted" /> -->
                  </label>
                </div>
                <div class="a1-item-inner">
                  <div class="a1-number">
                    第
                    <span>{{ index + 1 }}</span
                    >名
                  </div>
                  <h2 class="al-vote-title">{{ employeesDatas.name }}</h2>
                  <p class="a1-total">累積票數：{{ employeesDatas.date }}</p>
                  <p class="a1-text">
                    {{ employeesDatas.txt }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="a1-part a1-digitize-part">
        <div class="a1-container-wrap">
          <h3 class="a1-title">
            數位化如何
            <span>加值塑膠</span>
            <br />射出成形廠轉型？
          </h3>
        </div>
        <div class="a1-input-form">
          <div class="a1-container-wrap d-flex flex-wrap no-gutters align-items-md-end">
            <div class="col-12 col-md-auto">
              <h3 class>
                <span>免費下載</span>
                <br class="d-none d-md-block" />塑膠業成功指南
              </h3>
            </div>
            <div class="col-md input-part">
              <div class="row no-gutters">
                <div class="inputText-group col-12 col-md">
                  <input id="contact-company2" type="text" required name="contact-company2" class="Email_required" />
                  <label for="contact-company2">公司名稱</label>
                </div>
                <div class="inputText-group col-6 col-md">
                  <input id="contact_person2" type="text" required name="contact_person2" class="Email_required" />
                  <label for="contact_person2">姓名</label>
                </div>
                <div class="inputText-group col-6 col-md">
                  <input id="telephone2" type="text" required name="telephone2" class="Email_required" />
                  <label for="telephone2">電話</label>
                </div>
                <div class="inputText-group col col-md">
                  <input id="contact-email2" type="text" required name="contact-email2" class="Email_required" />
                  <label for="contact-email2">Email</label>
                </div>
                <div class="col-auto col-md-auto btn-box">
                  <button type="button" class="btn btn-send" id="DownLoadForm">送出</button>
                </div>
              </div>
            </div>
          </div>
          <!-- thx page -->
          <div id="thx2">
            <div id="thxContent2">
              <p class="title2">檔案下載中!</p>
              <p class="suprtCall2">
                <span>如需其他支援性服務，</span>
                <span>請直撥免付費專線 0800-888-162，謝謝！</span>
              </p>
              <p id="goIndex2">
                <a href="javascript:;">繼續瀏覽網站</a>
              </p>
            </div>
          </div>
        </div>

        <div class="swiper-container">
          <div class="a1-menu swiper-pagination"></div>
          <div class="swiper-wrapper a1-swiper-wrapper">
            <div class="swiper-slide a1-slide a1-slide01">
              <div class="a1-container-wrap">
                <div class="d-flex flex-wrap">
                  <div class="text-area col-12 col-sm-4 order-1 order-sm-0 swiper-no-swiping">
                    <h4>次料對企業的影響</h4>
                    <ul>
                      <li>次料配比未做好管控，造成品質異常</li>
                      <li>現場喜歡拿新料，生產成本居高不下</li>
                    </ul>
                    <div class="btn-box">
                      次料管理怎麼做？
                      <br />申請塑膠業線上研討會回看
                      <a href="https://www.digiwin.com/tw/zlsq.html?id=2411" target="_blank" class="btn">
                        立即下載
                        <i class="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="video-area col-12 col-sm-6 order-0 order-sm-1 swiper-no-swiping">
                    <h4>次料管理怎麼做？顧問專家告訴您</h4>
                    <a data-fancybox href="https://www.youtube.com/embed/3Y8PCJNrMlc">
                      <img class="img-fluid" src="/images/video01.jpg" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide a1-slide a1-slide02">
              <div class="a1-container-wrap">
                <div class="d-flex flex-wrap">
                  <div class="text-area col-12 col-sm-4 order-1 order-sm-0 swiper-no-swiping">
                    <h4>生產資源-模具對企業的影響</h4>
                    <ul>
                      <li>模具數多，異動頻繁，難以清楚模具狀態</li>
                      <li>模具保養未落實，造成停機待修影響產能</li>
                    </ul>
                    <div class="btn-box">
                      模具管理怎麼做？
                      <br />免費申請線上研討會完整回看
                      <a href="https://www.digiwin.com/tw/zlsq.html?id=2411" target="_blank" class="btn">
                        立即下載
                        <i class="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="video-area col-12 col-sm-6 order-0 order-sm-1 swiper-no-swiping">
                    <h4>射出模具這樣管！顧問專家告訴您</h4>
                    <a data-fancybox href="https://www.youtube.com/embed/WaYqFA_cqQs">
                      <img class="img-fluid" src="/images/video02.jpg" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide a1-slide a1-slide03">
              <div class="a1-container-wrap">
                <div class="d-flex flex-wrap">
                  <div class="text-area col-12 col-sm-4 order-1 order-sm-0 swiper-no-swiping">
                    <h4>產銷排程對企業的影響</h4>
                    <ul>
                      <li>機台換模換線憑經驗，難以確保產能與交期</li>
                      <li>
                        排產條件複雜，須滿足多重連批(品號、模具、機台、顏色)等，導致製程閒置利用率不佳。
                      </li>
                    </ul>
                    <div class="btn-box">
                      產銷排程管理怎麼做？
                      <br />免費申請線上研討會完整回看
                      <a href="https://www.digiwin.com/tw/zlsq.html?id=2411" target="_blank" class="btn">
                        立即下載
                        <i class="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="video-area col-12 col-sm-6 order-0 order-sm-1 swiper-no-swiping">
                    <h4>產銷排產管理這樣做，有效實現訂單準交率</h4>
                    <a data-fancybox href="https://www.youtube.com/embed/evsTolT95xY">
                      <img class="img-fluid" src="/images/video03.jpg" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide a1-slide a1-slide04">
              <div class="a1-container-wrap">
                <div class="d-flex flex-wrap">
                  <div class="text-area col-12 col-sm-4 order-1 order-sm-0 swiper-no-swiping">
                    <h4>現場生產管理對企業的影響</h4>
                    <ul>
                      <li>進度資訊落後，無法即時掌握進度，影響生產週期。</li>
                      <li>
                        人工抄寫模溫、模壓、射速等生產數據，費工費時正確率低，產能效率不佳。
                      </li>
                    </ul>
                    <div class="btn-box">
                      現場生產管理怎麼做？
                      <br />觀看塑膠射出廠智造旅程
                      <a href="https://www.digiwin.com/tw/zlsq.html?id=2411" target="_blank" class="btn">
                        立即下載
                        <i class="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="video-area col-12 col-sm-6 order-0 order-sm-1 swiper-no-swiping">
                    <h4>走進塑膠射出廠，可視即時現場管理</h4>
                    <a data-fancybox href="https://www.youtube.com/embed/AktL7SWlQ_8">
                      <img class="img-fluid" src="/images/video04.jpg" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="a1-part a1-benefit-part">
        <h3>讓數字效益說話</h3>
        <div
          class="a1-container-wrap d-flex justify-content-between
          flex-wrap cmsms_stats stats_mode_counters stats_type_circles"
        >
          <div class="item col-6 col-sm-3">
            <img class="icon" src="/images/icon/icon01.svg" alt="生產效率提升15%" />
            <h4 class="text-main">
              <p>生產效率提升</p>
              <div class="cmsms_stat" data-percent="15">
                <span class="cmsms_stat_counter">0</span>
                <span class="cmsms_stat_units">%</span>
              </div>
            </h4>
            <div class="do">
              <div class="a1-title">做了什麼？</div>
              <div class="do-inner">
                做好現場進度管控
                <br />減少停等浪費
              </div>
            </div>
          </div>
          <div class="item col-6 col-sm-3">
            <img class="icon" src="/images/icon/icon02.svg" alt="每月產能增加330萬" />
            <h4 class="text-main">
              <p>每月產能增加</p>
              <div class="cmsms_stat" data-percent="330">
                <span class="cmsms_stat_counter">0</span>
                <span class="cmsms_stat_units">萬</span>
              </div>
            </h4>
            <div class="do">
              <div class="a1-title">做了什麼？</div>
              <div class="do-inner">
                落實模具保養管理
                <br />減少停機修模
              </div>
            </div>
          </div>
          <div class="item col-6 col-sm-3">
            <img class="icon" src="/images/icon/icon03.svg" alt="訂單準交率15%" />
            <h4 class="text-main">
              <p>訂單準交率</p>
              <div class="cmsms_stat" data-percent="96">
                <span class="cmsms_stat_counter">0</span>
                <span class="cmsms_stat_units">%</span>
              </div>
            </h4>
            <div class="do">
              <div class="a1-title">做了什麼？</div>
              <div class="do-inner">
                透過系統建議最佳排程
                <br />檢視開工齊料狀況
              </div>
            </div>
          </div>
          <div class="item col-6 col-sm-3">
            <img class="icon" src="/images/icon/icon04.svg" alt="材料成本月降 100萬" />
            <h4 class="text-main">
              <p>材料成本月降</p>
              <div class="cmsms_stat" data-percent="100">
                <span class="cmsms_stat_counter">0</span>
                <span class="cmsms_stat_units">萬</span>
              </div>
            </h4>
            <div class="do">
              <div class="a1-title">做了什麼？</div>
              <div class="do-inner">
                做好次料管理
                <br />減少新料耗用
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="btn btn-link">諮詢如何做到</a>
      </section>

      <section class="a1-part a1-logo-part">
        <div class="a1-container-wrap">
          <h3>
            攜手鼎新
            <img class="img-fluid" src="/images/sub-title.png" alt="數塑" />智轉型
          </h3>
          <a href="https://www.digiwin.com/tw/dsc/solution/WB002554/WB00255401_case" target="_blank">
            <picture>
              <source srcset="/images/logos.png" media="(min-width: 768px)" />
              <source srcset="/images/logos-m.png" media="(max-width: 767px)" />
              <img class="img-fluid logos" src="/images/logos.png" alt />
            </picture>
          </a>
          <!--
          <img class="img-fluid logos d-none d-md-block" src="/images/logos.png" alt=""/>
          <img class="img-fluid logos  d-block d-md-none " src="/images/logos-m.png" alt=""/>
          -->
          <a href="https://www.digiwin.com/tw/dsc/solution/WB002554/WB00255401_case" target="_blank" class="link-btn">
            了解更多標竿客戶轉型案例
            <i class="fa fa-chevron-circle-right"></i>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import firebase from '../firebaseInit';

const db = firebase.firestore();

export default {
  data() {
    return {
      name: '',
      date: 1000,
      img: '',
      txt: '',
      employeesData: [],
      search: '',
      sortType: 'date',
      number: 1,
      itname: [],
      imglike: '/images/icon/like.svg',
    };
  },
  methods: {
    readEmployees() {
      this.employeesData = [];
      db.collection('employees')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.employeesData.push({
              id: doc.id,
              name: doc.data().name,
              date: doc.data().date,
              img: doc.data().img,
              txt: doc.data().txt,
            });
            this.employeesData.sort(this.compare(this.sortType));
            console.log(doc.id, ' => ', doc.data());
          });
        })
        .then(() => {
          const localget = JSON.parse(localStorage.getItem('itname'));
          console.log(localget);
          console.log(localget[0] === '循環經濟');
          if (localget[0] === '循環經濟') {
            console.log('123');
            this.imglike = '/images/icon/liked.svg';
          }
        })
        .catch((error) => {
          console.log('Error getting documents: ', error);
        });
    },
    compare(attr) {
      console.log(attr);
      return (a, b) => {
        const val1 = a[attr];
        const val2 = b[attr];
        console.log(val1);
        return val2 - val1;
      };
    },
    updateEmployee(id, date, name) {
      console.log(date);

      db.collection('employees')
        .doc(id)
        .update({
          // name: name,
          date: date + 1,
        })
        .then(() => {
          console.log('Document successfully updated!');
          this.itname.push(name);
          const filteredStrings = this.itname.filter((item, index) => this.itname.indexOf(item) === index);
          localStorage.setItem('itname', JSON.stringify(filteredStrings));
          this.readEmployees();
        })
        .catch((error) => {
          console.error('Error updating document: ', error);
        });
    },
  },
  mounted() {
    this.readEmployees();
  },
};
</script>

<style lang="scss" scoped>
/*thx page*/
#thx2 {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  background-color: #000\9;
  z-index: 999999;
  color: #fff;
  font-family: Arial, '微軟正黑體', '新細明體';
  font-size: 19px;
  line-height: 27px;
  text-align: center;
}

#thx2:before {
  content: '';
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}

#thxContent2 {
  width: 50%;
  max-width: 500px;
  margin: 0 auto;
  background-color: #5a9bc6;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding: 50px;
  border-radius: 5px;
  position: relative;
}

.suprtCall2 span {
  display: block;
}

#thxContent2 h3 {
  text-align: center;
  margin-bottom: 15px;
  font-size: 30px;
}

#thxContent2 .thxSourLoad4 {
  display: inline-block;
  *display: inline;
  zoom: 1;
  width: 150px;
  height: 45px;
}

#goIndex2 {
  width: 82%;
  max-width: 200px;
  height: 45px;
  line-height: 45px;
  background-color: #ff7e00;
  border-radius: 3px;
  margin: 25px auto 0;
  border: 1px solid #fff;
}

#goIndex2 a {
  display: block;
  color: #fff;
  text-decoration: none;
}
@media (max-width: 768px) {
  #thxContent2 {
    width: 85%;
    max-width: 85%;
    margin: 0 auto;
  }
}
</style>
