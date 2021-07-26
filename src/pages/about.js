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
} from '@fortawesome/free-solid-svg-icons'

function formatWithCharCode(lastName, firstName) {
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
                    <h3>{formatWithCharCode(lastName, firstName)}</h3>
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
                    <S.SectionTitle>SKILLS</S.SectionTitle>
                    <p>
                        Javascript ES6 Typescript Axios fetch API Webpack HTML5
                        | CSS3 Responsive Web Design styled-components SCSS CSS
                        module Front-End Framework React Redux + Reduck Toolkit
                        / Redux Thunk Vue.js / Vuex UI Framework Bootstrap
                        Vuetify Ant Design
                    </p>
                </S.ContentSection>

                <S.ContentSection className="experience">
                    <S.SectionTitle>EXPERIENCE</S.SectionTitle>
                </S.ContentSection>
            </S.ContentWrapper>
        </S.Wrapper>
    )
}

export default AboutPage
