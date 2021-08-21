import {
    faFacebookF,
    faGithub,
    faTwitter,
    faMediumM,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

export const profileInfo = {
    lastName: '佳芳',
    firstName: '宋',
    nickName: 'Carey',
    jobTitle: 'Front-End Developer',
    thumbnail: '',
    brief:
        '商業設計背景，透過線上教育自主學習跨領域轉職，目前在公司擔任前端開發工程師，能與 UXUI 設計師及前後端開發團隊夥伴進行有效的溝通協作，樂於學習新技術與工具，重視使用者體驗與細節處理，對自我程式碼品質要求，學習並實踐模組化開發，持續精進希望未來能成為專業的全端開發者。',
    location: 'Taipei, Taiwan',
    email: 'schiafang@gmail.com',
    mobile: '+886 976-216-703',
    socialLink: {
        github: {
            link: 'https://github.com/schiafang',
            label: faGithub,
        },
        linkedin: {
            link: 'https://www.linkedin.com/in/carey-sung/',
            label: faLinkedin,
        },
        medium: {
            link: null,
            label: faMediumM,
        },
        facebook: {
            link: null,
            label: faFacebookF,
        },
        twitter: {
            link: null,
            label: faTwitter,
        },
    },
}

export const skillsList = [
    {
        category: 'Front-end skills',
        list: [
            'Javascript ES6',
            'HTML5 / CSS3',
            'Typescript',
            'Responsive Web Design',
            'styled-components',
            'Sass / SCSS',
            'CSS module',
            'Webpack',
        ],
    },
    {
        category: 'Familiar framework, library',
        list: [
            'React',
            'Redux Toolkit / Redux Thunk',
            'Vue.js / Vuex',
            'Bootstrap',
            'GatsbyJS',
        ],
    },
    {
        category: 'Back-end skills',
        list: [
            'Node.js / Express.js',
            'Handlebars',
            'MongoBD / mongoose',
            'MySQL / Sequelize',
            'RESTful API',
            'Strapi',
            'Socket.io',
        ],
    },
    {
        category: 'Others',
        list: [
            'Heroku deploy',
            'Axios',
            'Git / Git Flow',
            'NPM / Yarn Package Manager',
            'JIRA project management',
            'GraphQL',
            'Jmeter 測試 API',
            'AWS Codepipeline, Codebuild 導入 CI/CD',
            'mockoon 前端模擬測試 API',
            'storybook',
            'Cypress testing',
        ],
    },
]

export const experienceList = [
    {
        organization: 'TXI Partners x 沐學雲創',
        period: 'November 2020 - Present',
        projects: [
            {
                name: '3D 教育平台 1.0 網站開發',
                skills: 'Typescript  React  redux-thunk  css-modules',
                description:
                    '建立 3D 模型教材為主的線上課程平台，可由老師自由編輯課程並上架',
                jobListType: 'decimal',
                job: [
                    '將可複用元件模組化',
                    '網站頁面切版，並提供可優化的細節與使用者更友善的操作流程',
                    '課程篩選功能，利用動態資料產生篩選條件',
                    '會員登入註冊以及會員資料設定修改功能',
                    '建立與編輯課程功能開發',
                    '多國語系 i18n 環境建置，完成全站中英文切換',
                    '協助整合 Unity 團隊開發的 3D 課程',
                    '與後端工程師溝通調整 API 資料需求以及與 UXUI 討論使用者操作流程的可行性',
                ],
            },
            {
                name: '社群平台產品 DEMO',
                description: '知識交流社群平台 MVP',
                skills:
                    'Typescript  React  Redux-Toolkit  styled-components  Ant Design',
                job: ['使用 Ant Design 套件快速開發公司 demo 產品'],
            },
            {
                name:
                    '3D 教育平台 2.0 網站前端開發、優化維護及支援後端 API 開發與優化',
                description:
                    '因應商業模式的轉換，從 1.0 教育平台為基礎重新架構規劃新的使用者流程，2.0 以系統管理為主要開發並改變原有課程的結構分類，更符合老師在編輯教材上的需求，系統管理分別有管理員後台、老師前台課程管理以及學生課程紀錄等',
                skills:
                    'Typescript  React  Redux-Toolkit  react-router-config  styled-components  storybook  redux-form  mockoon Strapi  Jmeter  Socket.io',
                jobListType: 'decimal',
                job: [
                    '使用 storybook 開發測試模組化元件',
                    '前後台路由規劃，會員不同身份路由判斷設定',
                    '頁面主要架構共用的 layout 與 component 切分規劃及切版',
                    '撰寫並定義 mockoon 文件欄位，模擬後端 API',
                    '老師與管理員後台系統、學生課程學習記錄等資料管理頁面',
                    '建立後台管理員大量匯入會員資料功能，並在前端頁面上進行各欄位基本驗證',
                    '主動將留言功能從發送 Rest API 轉換成 socket 方式，並優化操作體驗，在編輯課程同時能即時回應留言',
                    '前後端後續維護與效能優化',
                    '主動導入 CI/CD，設定 AWS Codepipeline 及撰寫 Codebuild buildspec 腳本',
                    '負責完成課程中留言評論以及課程紀錄後端 API 功能',
                    '後端發送二次驗證信功能，修改前端會員驗證信流程',
                ],
            },
            {
                name: '產品 Landing Page (Desktop)',
                description: '公司產品簡介與聯絡表單頁面',
                skills: 'Typescript  React  styled-components  Gatsby',
                job: [
                    '使用 GatsbyJS 快速建立公司 Landing page，加入 CSS 動態效果優化網站',
                ],
            },
        ],
    },
    {
        organization: 'Alpha Camp Full-Stack Web Development 全端網頁開發',
        period: 'October 2019 - August 2020',
        description: '',
        job: ['前後端網頁開發技能訓練'],
    },
    {
        organization: '中原大學   商業設計學系 | 學士 ',
        period: 'September 2007 - June 2011',
        description: '',
        job: ['平面設計、廣告行銷、攝影、影像製作、商品設計'],
    },
]
