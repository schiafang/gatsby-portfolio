import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import * as S from '../styles/work'

const WorkPage = () => (
    <S.Wrapper>
        {/* <section>
            <img src="https://images.cakeresume.com/Y3MER/schiafang/233137f1-a2a1-47c5-873f-3997713a9889.png" />

            <div className="project-introduction">
                <h2>
                    Gatsyby Blog Template (in progress 🚧)
                    <a
                        href="https://github.com/schiafang/gatsby-portfolio"
                        target="_blank"
                    >
                        <Icon icon={faGithub} />
                    </a>
                </h2>
                <p>
                    GraphQL 與 GatsbyJS 練習專案，製作個人履歷與 Blog 模板網站
                </p>
                <ul>
                    <li>透過 markdown 檔案產生文章頁面</li>
                    <li>可利用 md 內容中 tags 作為分類篩選</li>
                    <li>暗黑模式切換</li>
                </ul>
            </div>
        </section> */}

        <section>
            <a href="https://schiafang.github.io/tripday-vue/" target="_blank">
                <img src="https://images.cakeresume.com/Y3MER/schiafang/9448cddd-aae8-4a04-bab7-edd9b8d6a2af.png" />
            </a>
            <div className="project-introduction">
                <h2>
                    <div className="title">
                        Tripday <span className="year">2020</span>
                    </div>
                    <a
                        href="https://github.com/schiafang/tripday-vue"
                        target="_blank"
                    >
                        <Icon icon={faGithub} />
                    </a>
                </h2>
                <p>
                    以台灣旅遊平台 kkday 作為樣板的前端框架 Vue 練習專案，透過
                    JSON Server 發送模擬 Restful API 資料，使用 Axios
                    串接模擬資料及第三方 API。
                </p>
                <ul>
                    <li>
                        串接 Google Map API 顯示各地商品地點以及商家 Google 評論
                    </li>
                    <li>可切換顯示當日匯率台幣或美金</li>
                    <li>會員登入註冊功能並使用 Vuex 做狀態管理保存登入狀態</li>
                    <li>收藏商品、管理個人資料</li>
                    <li>關鍵字搜尋目的地及行程</li>
                    <li>
                        可選購行程，使用優惠卷折扣，完成結帳後收到確認訊息並可查詢訂單
                    </li>
                </ul>
            </div>
        </section>

        <section>
            <a href="https://radiant-headland-29348.herokuapp.com/signin">
                <img
                    src="https://images.cakeresume.com/Y3MER/schiafang/ddb621cc-eafb-4134-99f9-982c268635ba.png"
                    target="_blank"
                />
            </a>

            <div className="project-introduction">
                <h2>
                    <div className="title">
                        Simple Twitter <span className="year">2020</span>
                    </div>
                    <a
                        href="https://github.com/schiafang/twitter-fullstack-2020"
                        target="_blank"
                    >
                        <Icon icon={faGithub} />
                    </a>
                </h2>
                <p>
                    多人協作全端專案，參考推特打造 MVP 版本社群平台，並使用
                    Trello 工具作團體協作專案管理練習。
                </p>
                <span>個人負責項目</span>
                <ul>
                    <li>專案進度管理</li>
                    <li>前端 HTML / CSS 切版</li>
                    <li>後端註冊登入驗證功能</li>
                    <li>管理員後台功能</li>
                    <li>設定編輯個人資料</li>
                    <li>追蹤與取消追蹤功能 </li>
                    <li>SVG import to font awesome</li>
                    <li>人氣使用者清單</li>
                    <li>後端自動化測試修正專案</li>
                    <li>Heroku 部署</li>
                    <li>公開聊天室</li>
                </ul>
            </div>
        </section>

        <section>
            <a
                href="https://secret-brushlands-56466.herokuapp.com/"
                target="_blank"
            >
                <img src="https://images.cakeresume.com/Y3MER/schiafang/246d5ff1-62af-4b0e-95fa-e197359a6dbe.png" />
            </a>

            <div className="project-introduction">
                <h2>
                    <div className="title">
                        Expense tracker <span className="year">2020</span>
                    </div>
                    <a
                        href="https://github.com/schiafang/expense-tracker"
                        target="_blank"
                    >
                        <Icon icon={faGithub} />
                    </a>
                </h2>
                <p>
                    全端 ODM 資料庫練習專案，使用 Javascript Node.js Express
                    搭配 MongoDB 打造的支出紀錄本
                </p>
                <ul>
                    <li>可新增、編輯、刪除支出</li>
                    <li>透過月份或類別篩選支出紀錄</li>
                    <li>總支出金額的顏色會隨著不同級距改變顏色</li>
                    <li>可註冊登入管理個人支出紀錄</li>
                    <li>
                        第三方登入可透過 Facebook、Google 或 Github 帳戶登入
                    </li>
                </ul>
            </div>
        </section>
    </S.Wrapper>
)

export default WorkPage
