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

const skillsScore = {
    ['Javascript ES6']: 85,
    Typescript: 68,
    CSS3: 80,
    HTML5: 75,
}

const Skills = () => {
    const skills = []
    for (let key in skillsScore) {
        const value = skillsScore[key]
        skills.push(
            <S.Skill>
                {key}
                <div className="score-bar">
                    <div className="score" style={{ width: `${value}%` }} />
                </div>
            </S.Skill>
        )
    }
    return skills
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
                    <h4>Front-end Technical</h4>
                    <ul>
                        <Skills />
                    </ul>
                    <h4>Framework</h4>
                    <ul>
                        <li>React </li>
                        <li>Redux Toolkit / Redux Thunk</li>
                        <li> Vue.js / Vuex </li>
                    </ul>
                    <h4>Others</h4>
                    <ul>
                        <li>RWD</li>
                        <li>Axios fetch API</li>
                        <li>Webpack</li>
                        <li>styled-components </li>
                        <li> SCSS </li>
                        <li> CSS module </li>
                    </ul>
                </S.ContentSection>

                <S.ContentSection className="experience">
                    <S.SectionTitle>EXPERIENCE</S.SectionTitle>
                    <h3 className="company-name">
                        Elementum facilisis leo vel
                    </h3>
                    <h5 className="work-period">
                        Ut sem viverra aliquet eget sit amet tell
                    </h5>
                    <p>
                        Mauris commodo quis imperdiet massa tincidunt nunc
                        pulvinar sapien. Enim nunc faucibus a pellentesque sit
                        amet. Eu volutpat odio facilisis mauris sit. Nisi lacus
                        sed viverra tellus in hac. Ut enim blandit volutpat
                        maecenas volutpat blandit aliquam. Leo vel fringilla est
                        ullamcorper eget nulla. Tristique nulla aliquet enim
                        tortor at auctor urna nunc id. Auctor eu augue ut lectus
                        arcu bibendum at varius vel. Mauris vitae ultricies leo
                        integer malesuada nunc. Velit ut tortor pretium viverra
                        suspendisse potenti nullam ac tortor. Cursus euismod
                        quis viverra nibh cras pulvinar mattis. Quam lacus
                        suspendisse faucibus interdum posuere lorem ipsum dolor.
                        At volutpat diam ut venenatis tellus in metus. Sit amet
                        facilisis magna etiam tempor. Aliquam etiam erat velit
                        scelerisque in dictum non. Bibendum neque egestas congue
                        quisque egestas diam. Tortor at auctor urna nunc id
                        cursus. Egestas pretium aenean pharetra magna ac
                        placerat vestibulum. Enim tortor at auctor urna. Quis
                        vel eros donec ac odio. Sed tempus urna et pharetra
                        pharetra. Urna nec tincidunt praesent semper feugiat
                        nibh sed pulvinar. At tellus at urna condimentum mattis
                        pellentesque id nibh tortor. Dictum varius duis at
                        consectetur lorem donec massa sapien. Eget aliquet nibh
                        praesent tristique magna sit amet purus. Id ornare arcu
                        odio ut sem. Leo urna molestie at elementum eu facilisis
                        sed odio. Posuere morbi leo urna molestie at elementum
                        eu. Quis eleifend quam adipiscing vitae proin sagittis
                        nisl rhoncus. Nisl suscipit adipiscing bibendum est
                        ultricies integer. Nunc mattis enim ut tellus. Id
                        venenatis a condimentum vitae sapien pellentesque
                        habitant morbi tristique. Hendrerit dolor magna eget
                        est. Tincidunt eget nullam non nisi. Sit amet est
                        placerat in egestas erat imperdiet sed euismod. Risus at
                        ultrices mi tempus imperdiet nulla malesuada. Odio
                        facilisis mauris sit amet.
                    </p>
                </S.ContentSection>
            </S.ContentWrapper>
        </S.Wrapper>
    )
}

export default AboutPage
