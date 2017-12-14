webpackJsonp([0],{334:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(336),s=function(n){return n&&n.__esModule?n:{default:n}}(i),A=e(335);e(337),t.default=function(){var n=document.querySelector(".news-container"),t=document.querySelector(".source-list"),e=document.querySelector(".news-source");n&&new s.default(n,t,e,A.defaultSource).init()}},335:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.apiKey="90e3266a077347219e896b2dec2ec141",t.defaultSource="bbc-news",t.customImageUrl="http://bydesignvsm.com/wp-content/uploads/2015/06/Black-Background-HD-Wallpaper-24.jpg",t.dateOptions={year:"numeric",month:"short",day:"numeric",timezone:"UTC",hour:"numeric",minute:"numeric"}},336:function(n,t,e){"use strict";function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),A=e(335),o=function(){function n(t,e,s,A){var o=this;i(this,n),this.clickHandler=function(n){var t=n.target;t.classList.contains("source-list__item")&&(o.source=t.getAttribute("data-source"),o.handleFetch())},this.newsContainer=t,this.newsSourceTitle=s,this.newsSourceControls=e,this.source=A}return s(n,[{key:"init",value:function(){this.handleFetch(this.source),this.newsSourceControls.addEventListener("click",this.clickHandler)}},{key:"render",value:function(n){this.newsSourceTitle.innerHTML=this.source,this.newsContainer.innerHTML=n}},{key:"parseData",value:function(n){return n.articles.reduce(function(n,t){var e=t.urlToImage,i=t.publishedAt,s=t.author,o=t.title,r=t.description,a=t.url,l=new Date(i).toLocaleString("en",A.dateOptions);return n+'\n                <div class="news-list-item">\n                    <div class="news-list-item__img" style="background-image: url('+(e||A.customImageUrl)+')"></div>\n                    <div class="news-list-item__wrapper">\n                        <div class="news-list-item__header">\n                            <div class="news-list-item__date">\n                                '+l+'\n                            </div>\n                        </div>\n                        <div class="news-list-item__data">\n                            <div class="news-list-item__content">\n                                <span class="news-list-item__author">'+s+'</span>\n                                <h1 class="news-list-item__title"><a href="#">'+o+'</a></h1>\n                                <p class="news-list-item__description">'+r+'</p>\n                                <a href="'+a+'" class="news-list-item__button">Read more</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n              '},"")}},{key:"handleFetch",value:function(){var n=this;fetch(this.buildUrl()).then(function(n){return n.json()}).then(function(t){return n.parseData(t)}).then(function(t){return n.render(t)}).catch(function(n){return console.error(n)})}},{key:"buildUrl",value:function(){if(this.source&&this.source.length>0)return"https://newsapi.org/v2/top-headlines?sources="+this.source+"&apiKey="+A.apiKey}}]),n}();t.default=o},337:function(n,t,e){var i=e(338);"string"==typeof i&&(i=[[n.i,i,""]]);var s={};s.transform=void 0;e(333)(i,s);i.locals&&(n.exports=i.locals)},338:function(n,t,e){t=n.exports=e(332)(!0),t.push([n.i,'.source-list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;padding:0;margin:0;padding-bottom:20px;list-style:none}.source-list__item{color:#fff;cursor:pointer}.source-list__item:hover{color:#dea6a6;transition:color .3s}.news-list-item{position:relative;padding:0 30px;width:500px;min-height:400px;margin-bottom:30px}@media only screen and (max-width:61.25em){.news-list-item{width:100%}}.news-list-item__content{margin:0;padding:0 15px}.news-list-item__content li{display:inline-block}.news-list-item__content a{color:#fff}.news-list-item__img{position:absolute;z-index:1;width:calc(100% - 60px);height:100%;-webkit-filter:brightness(70%);filter:brightness(70%);transition:-webkit-filter .15s ease-in;transition:filter .15s ease-in;transition:filter .15s ease-in,-webkit-filter .15s ease-in;background-size:cover}.news-list-item:hover .news-list-item__img{-webkit-filter:brightness(40%);filter:brightness(40%)}.news-list-item__wrapper{position:relative;padding:0 15px;min-height:400px;overflow:hidden;background-color:#fff;box-shadow:0 19px 38px rgba(0,0,0,.3),0 15px 12px rgba(0,0,0,.2)}.news-list-item__wrapper:hover .news-list-item__data{-webkit-transform:translateY(0);transform:translateY(0)}.news-list-item__data{position:absolute;bottom:0;left:0;width:100%;-webkit-transform:translateY(calc(70px + 1em));transform:translateY(calc(70px + 1em));transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.news-list-item__month{text-transform:uppercase}.news-list-item__month,.news-list-item__year{font-size:.75em}.news-list-item__header{padding:25px 0;color:#fff}.news-list-item__author{font-size:.75em}.news-list-item__title{margin-top:10px;margin-bottom:20px;font-size:2em;font-weight:300}@media only screen and (max-width:61.25em){.news-list-item__title{font-size:1.75em}}.news-list-item__description{height:70px;margin:0;line-height:1.3rem;font-size:1em}@media only screen and (max-width:61.25em){.news-list-item__description{font-size:.75em}}.news-list-item__wrapper{background-color:transparent;z-index:2}.news-list-item__wrapper:hover .news-list-item__content span{-webkit-transform:translate(-50%,-10px);transform:translate(-50%,-10px);opacity:1}.news-list-item__date{font-size:.75em}.news-list-item__content li{position:relative;margin:0 5px}.news-list-item__content span{transition:all .3s;opacity:0}.news-list-item__data{color:#fff;-webkit-transform:translateY(calc(70px + 4em));transform:translateY(calc(70px + 4em))}.news-list-item__title a{color:#fff}.news-list-item__button{position:relative;display:block;width:100px;margin:10px auto 40px;font-size:12px;font-weight:700;text-align:center;color:#fff}.news-list-item__button:after{content:"\\2192";opacity:0;position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);transition:all .3s}.news-list-item__button:hover:after{-webkit-transform:translate(5px,-50%);transform:translate(5px,-50%);opacity:1}',"",{version:3,sources:["D:/epam_study/frontcamp/es6_news_frontcamp17_without_framework/src/styles/D:/epam_study/frontcamp/es6_news_frontcamp17_without_framework/src/styles/source-list.less","D:/epam_study/frontcamp/es6_news_frontcamp17_without_framework/src/styles/D:/epam_study/frontcamp/es6_news_frontcamp17_without_framework/dynamic-styles.less","D:/epam_study/frontcamp/es6_news_frontcamp17_without_framework/src/styles/D:/epam_study/frontcamp/es6_news_frontcamp17_without_framework/src/styles/news-list-item.less"],names:[],mappings:"AAEA,aACI,oBAAA,oBAAA,aAAA,AACA,yBAAA,6BAAA,AACA,UAAA,AACA,SAAA,AACA,oBAAA,AACA,eAAA,CCAH,ADGD,mBACI,WAAA,AACA,cAAA,CCDH,ADID,yBACI,cAAA,AACA,oBAAA,CCFH,ACdD,gBACI,kBAAA,AACA,eAAA,AACA,YAAA,AACA,iBAAA,AACA,kBAAA,CDkBH,ACfD,2CACI,gBACI,UAAA,CDiBL,CACF,ACbD,yBACI,SAAA,AACA,cAAA,CDgBH,ACbD,4BACI,oBAAA,CDeH,ACZD,2BACI,UAAA,CDcH,ACVD,qBACI,kBAAA,AACA,UAAA,AACA,wBAAA,AACA,YAAA,AACA,+BAAA,uBAAA,AACA,uCAAA,+BAAA,2DAAA,AACA,qBAAA,CDaH,ACVD,2CACI,+BAAA,sBAAA,CDYH,ACRD,yBACI,kBAAA,AACA,eAAA,AACA,iBAAA,AACA,gBAAA,AACA,sBAAA,AACA,gEAAA,CDWH,ACRD,qDACI,gCAAA,uBAAA,CDUH,ACPD,sBACI,kBAAA,AACA,SAAA,AACA,OAAA,AACA,WAAA,AACA,+CAAA,uCAAA,AACA,iCAAA,yBAAA,8CAAA,CDSH,ACND,uBACI,wBAAA,CDQH,ACLD,6CACI,eAAA,CDQH,ACLD,wBACI,eAAA,AACA,UAAA,CDOH,ACJD,wBACI,eAAA,CDMH,ACHD,uBACI,gBAAA,AACA,mBAAA,AACA,cAAA,AACA,eAAA,CDKH,ACHD,2CACI,uBACI,gBAAA,CDKL,CACF,ACFD,6BACI,YAAA,AACA,SAAA,AACA,mBAAA,AACA,aAAA,CDIH,ACFD,2CACI,6BACI,eAAA,CDIL,CACF,ACDD,yBACI,6BAAA,AACA,SAAA,CDGH,ACAD,6DACI,wCAAA,gCAAA,AACA,SAAA,CDEH,ACCD,sBACI,eAAA,CDCH,ACED,4BACI,kBAAA,AACA,YAAA,CDAH,ACGD,8BACI,mBAAA,AACA,SAAA,CDDH,ACID,sBACI,WAAA,AACA,+CAAA,sCAAA,CDFH,ACKD,yBACI,UAAA,CDHH,ACMD,wBACI,kBAAA,AACA,cAAA,AACA,YAAA,AACA,sBAAA,AACA,eAAA,AACA,gBAAA,AACA,kBAAA,AACA,UAAA,CDJH,ACOD,8BACI,gBAAA,AACA,UAAA,AACA,kBAAA,AACA,QAAA,AACA,QAAA,AACA,mCAAA,2BAAA,AACA,kBAAA,CDLH,ACQD,oCACI,sCAAA,8BAAA,AACA,SAAA,CDNH",file:"dynamic-styles.less",sourcesContent:["/*--- source-list ---*/\n\n.source-list{\n    display: flex;\n    justify-content: space-around;\n    padding: 0;\n    margin: 0;\n    padding-bottom: 20px;\n    list-style: none;\n}\n\n.source-list__item{\n    color: white;\n    cursor: pointer;\n}\n\n.source-list__item:hover{\n    color: #dea6a6;\n    transition: color .3s\n}\n\n/*--- \\source-list ---*/","/*--- source-list ---*/\n.source-list {\n  display: flex;\n  justify-content: space-around;\n  padding: 0;\n  margin: 0;\n  padding-bottom: 20px;\n  list-style: none;\n}\n.source-list__item {\n  color: white;\n  cursor: pointer;\n}\n.source-list__item:hover {\n  color: #dea6a6;\n  transition: color 0.3s;\n}\n/*--- \\source-list ---*/\n/* news-list-item */\n.news-list-item {\n  position: relative;\n  padding: 0 30px;\n  width: 500px;\n  min-height: 400px;\n  margin-bottom: 30px;\n}\n@media only screen and (max-width: 61.25em) {\n  .news-list-item {\n    width: 100%;\n  }\n}\n/*-- news-list-item__content */\n.news-list-item__content {\n  margin: 0;\n  padding: 0 15px;\n}\n.news-list-item__content li {\n  display: inline-block;\n}\n.news-list-item__content a {\n  color: #fff;\n}\n/*-- news-list-item__img */\n.news-list-item__img {\n  position: absolute;\n  z-index: 1;\n  width: calc(100% - 60px);\n  height: 100%;\n  filter: brightness(70%);\n  transition: filter 0.15s ease-in;\n  background-size: cover;\n}\n.news-list-item:hover .news-list-item__img {\n  filter: brightness(40%);\n}\n/*-- news-list-item__wrapper */\n.news-list-item__wrapper {\n  position: relative;\n  padding: 0 15px;\n  min-height: 400px;\n  overflow: hidden;\n  background-color: #fff;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);\n}\n.news-list-item__wrapper:hover .news-list-item__data {\n  transform: translateY(0);\n}\n.news-list-item__data {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  transform: translateY(calc(70px + 1em));\n  transition: transform 0.3s;\n}\n.news-list-item__month {\n  text-transform: uppercase;\n}\n.news-list-item__month,\n.news-list-item__year {\n  font-size: 0.75em;\n}\n.news-list-item__header {\n  padding: 25px 0;\n  color: white;\n}\n.news-list-item__author {\n  font-size: 0.75em;\n}\n.news-list-item__title {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  font-size: 2em;\n  font-weight: 300;\n}\n@media only screen and (max-width: 61.25em) {\n  .news-list-item__title {\n    font-size: 1.75em;\n  }\n}\n.news-list-item__description {\n  height: 70px;\n  margin: 0;\n  line-height: 1.3rem;\n  font-size: 1em;\n}\n@media only screen and (max-width: 61.25em) {\n  .news-list-item__description {\n    font-size: 0.75em;\n  }\n}\n.news-list-item__wrapper {\n  background-color: transparent;\n  z-index: 2;\n}\n.news-list-item__wrapper:hover .news-list-item__content span {\n  transform: translate(-50%, -10px);\n  opacity: 1;\n}\n.news-list-item__date {\n  font-size: 0.75em;\n}\n.news-list-item__content li {\n  position: relative;\n  margin: 0 5px;\n}\n.news-list-item__content span {\n  transition: all 0.3s;\n  opacity: 0;\n}\n.news-list-item__data {\n  color: white;\n  transform: translateY(calc(70px + 4em));\n}\n.news-list-item__title a {\n  color: white;\n}\n.news-list-item__button {\n  position: relative;\n  display: block;\n  width: 100px;\n  margin: 10px auto 40px;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: center;\n  color: white;\n}\n.news-list-item__button::after {\n  content: '\\2192';\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  transition: all 0.3s;\n}\n.news-list-item__button:hover::after {\n  transform: translate(5px, -50%);\n  opacity: 1;\n}\n","/* news-list-item */\n\n.news-list-item {\n    position: relative;\n    padding: 0 30px;\n    width: 500px;\n    min-height: 400px;\n    margin-bottom: 30px;\n\n}\n@media only screen and (max-width: 61.25em) {\n    .news-list-item {\n        width: 100%\n    }\n}\n\n/*-- news-list-item__content */\n.news-list-item__content {\n    margin: 0;\n    padding: 0 15px;\n}\n\n.news-list-item__content li {\n    display: inline-block;\n}\n\n.news-list-item__content a {\n    color: #fff;\n}\n\n/*-- news-list-item__img */\n.news-list-item__img {\n    position: absolute;\n    z-index: 1;\n    width: ~'calc(100% - 60px)';\n    height: 100%;\n    filter: brightness(70%);\n    transition: filter .15s ease-in;\n    background-size: cover;\n}\n\n.news-list-item:hover .news-list-item__img {\n    filter: brightness(40%);\n}\n\n/*-- news-list-item__wrapper */\n.news-list-item__wrapper {\n    position: relative;\n    padding: 0 15px;\n    min-height: 400px;\n    overflow: hidden;\n    background-color: #fff;\n    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);\n}\n\n.news-list-item__wrapper:hover .news-list-item__data {\n    transform: translateY(0);\n}\n\n.news-list-item__data {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    transform: translateY(~'calc(70px + 1em)');\n    transition: transform 0.3s;\n}\n\n.news-list-item__month {\n    text-transform: uppercase;\n}\n\n.news-list-item__month, .news-list-item__year {\n    font-size: 0.75em;\n}\n\n.news-list-item__header {\n    padding: 25px 0;\n    color: white;\n}\n\n.news-list-item__author {\n    font-size: 0.75em;\n}\n\n.news-list-item__title {\n    margin-top: 10px;\n    margin-bottom: 20px;\n    font-size: 2em;\n    font-weight: 300;\n}\n@media only screen and (max-width: 61.25em) {\n    .news-list-item__title {\n        font-size: 1.75em;\n    }\n}\n\n.news-list-item__description {\n    height: 70px;\n    margin: 0;\n    line-height: 1.3rem;\n    font-size: 1em;\n}\n@media only screen and (max-width: 61.25em) {\n    .news-list-item__description {\n        font-size: 0.75em;\n    }\n}\n\n.news-list-item__wrapper {\n    background-color: transparent;\n    z-index: 2;\n}\n\n.news-list-item__wrapper:hover .news-list-item__content span {\n    transform: translate(-50%, -10px);\n    opacity: 1;\n}\n\n.news-list-item__date {\n    font-size: 0.75em;\n}\n\n.news-list-item__content li {\n    position: relative;\n    margin: 0 5px;\n}\n\n.news-list-item__content span {\n    transition: all 0.3s;\n    opacity: 0;\n}\n\n.news-list-item__data {\n    color: white;\n    transform: translateY(~'calc(70px + 4em)');\n}\n\n.news-list-item__title a {\n    color: white;\n}\n\n.news-list-item__button {\n    position: relative;\n    display: block;\n    width: 100px;\n    margin: 10px auto 40px;\n    font-size: 12px;\n    font-weight: 700;\n    text-align: center;\n    color: white;\n}\n\n.news-list-item__button::after {\n    content: '\\2192';\n    opacity: 0;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n    transition: all 0.3s;\n}\n\n.news-list-item__button:hover::after {\n    transform: translate(5px, -50%);\n    opacity: 1;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=0.js.map