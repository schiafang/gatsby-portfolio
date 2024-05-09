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
    jobTitle: 'Front-End / Web3 Developer',
    thumbnail: '',
    brief: `設計系背景，三年前端開發經驗，目前工作為公司內部前後端項目開發，包括前端切版與模組化 元件、串接處理資料、調用合約及串接加密錢包，抓取鏈上交易數據等各種開發工作，有基礎後端知識，在開發過程中與後端有更好的合作和溝通，能主動提出優化的可能性與團隊成員一起討論。前端開發工作外，也時常協助其他部門解決各種問題，主動優化運營後台操作流程，協助設計市場部門等工作，樂衷學習嘗試新技術，喜歡思考找出更有效率的解決問題方式或工作流程。過去創業經驗、自我進修轉職及新創公司快速變化的環境中，需要面臨各種問題與挑戰，培養能適應快速變化與挑戰。
`,
    location: 'Hsinchu, Taiwan / Remote',
    email: 'schiafang@gmail.com',
    mobile: '',
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
        category: 'Front-end Skills',
        list: [
            'Javascript / Typescript',
            'HTML5 / CSS3',
            'Responsive Web Design',
            'Tailwind CSS / CSS Module',
            'styled-components',
            'Webpack',
        ],
    },
    {
        category: 'Familiar Framework, Library',
        list: [
            'React / Nextjs',
            'Zustand / React SWR',
            'Redux Toolkit / Redux Thunk',
            'shadcn-ui / Chakra',
            'Vue.js',
            'Gatsby / Ant Design',
            'GraphQL',
        ],
    },
    {
        category: 'Back-end Skills',
        list: [
            'Node.js / Express.js',
            'MySQL / Sequelize',
            'MongoBD / mongoose',
            'RESTful API',
            'Strapi',
            'Websocket',
        ],
    },
    {
        category: 'Others',
        list: [
            'Git / Git Flow',
            'Docker',
            'cloudflare',
            'Jenkins',
            'JIRA',
            'Jmeter',
            'GCP Deployment',
            'AWS Codepipeline, Codebuild CI/CD',
            'mockoon mock API',
            'storybook',
            'Cypress Testing',
            'Ethers.js / IPFS',
            'Sentry / Mixpanel',
        ],
    },
]

export const experienceList = [
    {
        organization: 'Maxity',
        period: 'December 2021 - Present',
        projects: [
            {
                name: '交易策略 API',
                skills:
                    'Express.js / MySQL / Websocket / Tailwind CSS / shadcn',
                description: '',
                job: [
                    '串接多帳號 BinanceAPI 執行交易',
                    'Websocket即時更新價格面板',
                    '前端介面及串接後端 API',
                    '資料庫記錄歷史數據',
                    '每日定時任務',
                ],
            },
            {
                name: '遊戲平台網站前後台',
                description: '',
                link: 'https://betloki.com',
                skills: 'Typescript / Next.js 13 / Radix UI / Zustand / Docker',
                job: [
                    '獨立完成前端及管理後台開發',
                    '建立網站前端架構及配置',
                    'i18n 多語言架構配置',
                    'Jenkins 腳本部署至 GCP',
                    'SEO Metadata',
                    'Next.js server cookies',
                ],
            },
            {
                name: 'Solana NFT 鑄造網站',
                description: '',
                link: 'https://lokibox.betloki.com/mint',
                skills: 'React / Vite',
                job: [
                    '串接 Candymachine 鑄造功能及測試',
                    '推特登入',
                    '部署至 cloudflare Page',
                ],
            },
            {
                name: 'Landing page 網站前端',
                description: '',
                link: 'https://maxity.io',
                skills: 'Nextjs 12',
                job: [
                    '前端開發，優化效能Lighthouse分數與SEO',
                    'Defi 質押功能串接合約',
                    '靜態文章 MDX 檔案載入',
                    'Mixpanel 追蹤埋點',
                ],
            },
            {
                name: '支援項目內部開發工作',
                description: '',
                skills: '',
                job: [
                    '其他專案前端及後台靜態網頁建置',
                    '智能合約腳本操作',
                    '協助設計師腳本批量生成 NFT、上傳 IPFS',
                    '運營工作協助，優化運營後台流程',
                ],
            },
            {
                name: 'NFT 交易市場開發',
                description: '',
                link: 'https://app.maxity.io',
                skills: 'Nextjs 12 / Sentry / Ethers / SWR',
                job: [
                    '建立網站前端架構及配置',
                    '前端功能開發-串接錢包，前端切版、對接後端api',
                    '智能合約串接',
                    '缺少設計稿下優化各尺寸版本UI',
                    '內嵌APP頁面，與手機端工程師合作對接',
                    '鏈上數據抓取統計及呈現、IPFS服務上傳儲存',
                    'SEO 優化',
                    '修復 Bugs 並透過 Sentry 埋點監控錯誤',
                    '與外包後端工程師溝通對接',
                ],
            },
        ],
    },
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
