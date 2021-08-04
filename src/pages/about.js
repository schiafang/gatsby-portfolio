import React from 'react'
import Seo from '../components/seo'
import * as S from '../styles/about'
import Instagram from '../images/instagram.svg'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faGithub,
    faLinkedin,
    faTwitter,
    faMediumM,
    faJsSquare,
} from '@fortawesome/free-brands-svg-icons'
import {
    faQuoteRight,
    faQuoteLeft,
    faEnvelope,
    faPhone,
    faRocket,
} from '@fortawesome/free-solid-svg-icons'

function formatFullname(lastName, firstName) {
    const reg = /[^\u4e00-\u9fa5]/
    if (!reg.test(lastName) || !reg.test(lastName)) {
        return firstName + ' ' + lastName
    }
    return lastName + ' ' + firstName
}

const profileInfo = {
    lastName: '佳芳',
    firstName: '宋',
    nickName: 'Carey',
    jobTitle: 'Junior Front-end developer',
    thumbnail: '',
    // thumbnail:
    //     'https://images.unsplash.com/photo-1620510625142-b45cbb784397?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
    brief:
        'Morbi tristique senectus et netus et. Cursus sit amet dictum sit amet justo donec enim. Volutpat est velit egestas dui id. Nibh sit amet commodo nulla facilisi nullam vehicula. Diam donec adipiscing tristique risus nec feugiat. ',
    location: 'Taipei, Taiwan',
    email: 'schiafang@gmail.com',
    mobile: '+886976216703',
    socialLink: {
        github: {
            link: 'https://github.com/schiafang',
            label: <Icon icon={faGithub} />,
        },
        linkedin: {
            link: 'https://www.linkedin.com/in/carey-sung/',
            label: <Icon icon={faLinkedin} />,
        },
        medium: {
            link: 'https://www.facebook.com/',
            label: <Icon icon={faMediumM} />,
        },
        facebook: {
            link: 'https://www.facebook.com/',
            label: <Icon icon={faFacebookF} />,
        },
        instagram: {
            link: 'dd',
            label: <Instagram />,
            // label: <Icon icon={faInstagram} />,
        },
        twitter: {
            link: null,
            label: <Icon icon={faTwitter} />,
        },
    },
}

const AboutPage = () => {
    const {
        thumbnail,
        lastName,
        firstName,
        nickName,
        jobTitle,
        brief,
        email,
        mobile,
    } = profileInfo

    const SocialLink = () => {
        let linkComponents = []
        for (let value in profileInfo.socialLink) {
            let key = profileInfo.socialLink
            let { link, label } = key[value]

            if (link) {
                linkComponents.push(
                    <a href={link} data-label={value} key={value}>
                        {label}
                    </a>
                )
            }
        }
        return linkComponents
    }

    return (
        <S.Wrapper>
            <Seo title="About" />
            <S.Info>
                <div className="thumbnail">
                    {thumbnail && <img src={thumbnail} />}
                </div>

                <div className="name">
                    <h3>{formatFullname(lastName, firstName)}</h3>
                    <h4>{nickName}</h4>
                </div>

                <span className="job-title">{jobTitle}</span>
                <p className="brief">
                    <Icon icon={faQuoteLeft} />
                    {brief}
                    <Icon icon={faQuoteRight} />
                </p>
                <div className="contact-info">
                    <span>
                        <a href={`mailto:${email}`} data-label="email">
                            <Icon icon={faEnvelope} />
                        </a>
                        {email}
                    </span>
                    <span>
                        <a href={`tel:${mobile}`}>
                            <Icon icon={faPhone} />
                        </a>
                        {mobile}
                    </span>
                </div>

                <div className="social-link">
                    <SocialLink />
                </div>
            </S.Info>
            <S.ContentWrapper>
                <S.ContentSection className="skills">
                    <S.SectionTitle className="skills">SKILLS</S.SectionTitle>
                    <div>
                        <h4>Front-end Technical</h4>
                        <ul>
                            <li>Javascript ES6 </li>
                            <li>Typescript</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Framework</h4>
                        <ul>
                            <li>React </li>
                            <li>Redux Toolkit / Redux Thunk</li>
                            <li> Vue.js / Vuex </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Others</h4>
                        <ul>
                            <li>RWD</li>
                            <li>Axios fetch API</li>
                            <li>Webpack</li>
                            <li>styled-components </li>
                            <li> SCSS </li>
                            <li> CSS module </li>
                            <li>Bootstrap</li>
                            <li>Vuetify</li>
                            <li> Ant Design</li>
                            <li></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Back-ends</h4>
                        <ul>
                            <li> Node.js </li>
                            <li> Express.js</li>
                            <li>Handlebars</li>
                            <li>sMongoBD / mongoose</li>
                            <li> MySQL / Sequelize </li>
                            <li> RESTful API </li>
                            <li>Strapi</li>
                            <li>Socket.io</li>
                        </ul>
                    </div>
                </S.ContentSection>

                <S.ContentSection className="experience">
                    <S.SectionTitle>EXPERIENCE & EDUCATION</S.SectionTitle>
                    <section className="section-item">
                        <h3 className="company-name">
                            TXI Partners x 沐學雲創
                        </h3>
                        <h5 className="period">2020 年 11 月 - 在職中</h5>
                        <span className="project">
                            3D 教育平台 1.0 網站開發
                        </span>
                        <h4 className="project-description">
                            建立 3D
                            模型教材為主的線上課程平台，可由老師自由編輯課程並上架
                        </h4>
                        <ul className="decimal">
                            <li>將可複用元件模組</li>
                            <li>
                                網頁各頁面 RWD
                                切版，主動與設計師討論可優化的細節與流程
                            </li>
                            <li>篩選功能利用動態資料產生篩選條件</li>
                            <li>會員登入註冊以及會員資料設定修改功能</li>
                            <li>建立課程功能開發</li>
                            <li>多國語系 i18n 環境建置，完成全站中英文切換</li>
                            <li>協助串接 Unity 3D 課程與修復問題</li>
                            <li>使用 Axios 串接後端 API</li>
                            <li>
                                與後端工程師溝通調整 API 內容以及與 UX
                                討論使用者操作流程的可行性
                            </li>
                            <li>優化版面細節以及使用者流程</li>
                        </ul>
                    </section>
                    <section className="section-item">
                        <h3 className="company-name">
                            Alpha Camp Full-Stack Web Development 全端網頁開發
                        </h3>
                        <h5 className="period">2019 年 10 月 - 2020 年 8 月</h5>

                        <ul className="disc">
                            <li>前後端網頁開發技能訓練</li>
                        </ul>
                    </section>

                    <section className="section-item">
                        <h3 className="company-name">
                            CYCU Commercial Design 中原大學商業設計學系
                        </h3>
                        <h5 className="period">2007 年 9 月 - 2011 年 6 月</h5>

                        <h4 className="project-description">
                            平面設計、廣告行銷、攝影、影像製作、商品設計
                        </h4>
                    </section>

                    <Icon icon={faRocket} />
                </S.ContentSection>
            </S.ContentWrapper>
        </S.Wrapper>
    )
}

export default AboutPage
