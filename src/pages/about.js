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
    lastName: 'Orci sagittis ',
    firstName: 'Duis',
    nickName: 'Quis',
    jobTitle: 'Leo duis ut diam quam nulla',
    thumbnail: '',
    brief:
        'Morbi tristique senectus et netus et. Cursus sit amet dictum sit amet justo donec enim. Volutpat est velit egestas dui id. Nibh sit amet commodo nulla facilisi nullam vehicula. Diam donec adipiscing tristique risus nec feugiat. ',
    location: 'Taipei, Taiwan',
    email: 'Adipisci@gmail.com',
    mobile: '',
    socialLink: {
        github: {
            link: 'https://github.com/',
            label: <Icon icon={faGithub} />,
        },
        linkedin: {
            link: 'https://www.linkedin.com/',
            label: <Icon icon={faLinkedin} />,
        },
        medium: {
            link: 'https://www.medium.com/',
            label: <Icon icon={faMediumM} />,
        },
        facebook: {
            link: 'https://www.facebook.com/',
            label: <Icon icon={faFacebookF} />,
        },
        instagram: {
            link: 'https://www.instagram.com/',
            label: <Instagram />,
        },
        twitter: {
            link: null,
            label: <Icon icon={faTwitter} />,
        },
    },
}

const skillsList = [
    {
        category: 'Language',
        list: ['Javascript ES6', 'Typescript', 'CSS3', 'HTML5'],
    },
    {
        category: 'Framework and library',
        list: [
            'React',
            'Redux Toolkit / Redux Thunk',
            'Vue.js / Vuex',
            'Gatsby',
            'Bootstrap',
        ],
    },
    {
        category: 'Others',
        list: [
            'RWD',
            'Axios fetch API',
            'Webpack',
            'styled-components',
            'SCSS',
            'CSS module',
        ],
    },
    {
        category: 'Back-ends Skill',
        list: [
            'Node.js',
            'Express.js',
            'Handlebars',
            'MongoBD / mongoose',
            'MySQL / Sequelize',
            'RESTful API',
            'Strapi',
            'Socket.io',
        ],
    },
]

const experienceList = [
    {
        organization: 'Adipiscing bibendum est',
        period: 'November 2020 - Present',
        jobListType: 'decimal',
        description: '',
        job: [
            'Nunc mattis enim ut tellus. At varius velpharetra vel turpis nunc eget lorem dolor.',
            ' Eleifend quam adipiscing vitae proin sagittisnisl rhoncus mattis rhoncus. In arcu cursuseuismod quis viverra. Et egestas quis ipsumsuspendisse ultrices.',
        ],
    },
    {
        organization: ' Nunc sed velit dignissim sodales',
        period: 'October 2019 - August 2020',
        description: '',
        job: [
            'Auctor urna nunc id cursus metus. Scelerisquemauris pellentesque pulvinar pellentesquehabitant.',
            'Facilisi morbi tempus iaculis urna id. Viverra orci sagittis eu volutpat odio facilisis mauris sit',
        ],
    },
]

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
                        {email && (
                            <a href={`mailto:${email}`} data-label="email">
                                <Icon icon={faEnvelope} />
                                {email}
                            </a>
                        )}
                    </span>
                    <span>
                        {mobile && (
                            <a href={`tel:${mobile}`}>
                                <Icon icon={faPhone} />
                                {mobile}
                            </a>
                        )}
                    </span>
                </div>

                <div className="social-link">
                    <SocialLink />
                </div>
            </S.Info>
            <S.ContentWrapper>
                {skillsList.length > 0 && (
                    <S.ContentSection className="skills">
                        <S.SectionTitle className="skills">
                            SKILLS
                        </S.SectionTitle>
                        {skillsList.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h4>{item.category}</h4>
                                    <ul>
                                        {item.list.map(
                                            (listItem, listIndex) => (
                                                <li key={listIndex}>
                                                    {listItem}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )
                        })}
                    </S.ContentSection>
                )}
                {experienceList.length > 0 && (
                    <S.ContentSection className="experience">
                        <S.SectionTitle>EXPERIENCE & EDUCATION</S.SectionTitle>

                        {experienceList.map((item, index) => {
                            return (
                                <section className="section-item" key={index}>
                                    <h3 className="organization">
                                        {item.organization}
                                    </h3>
                                    <h5 className="period">{item.period}</h5>
                                    <p className="description">
                                        {item.description}
                                    </p>
                                    <ul
                                        className={
                                            item.jobListType
                                                ? item.jobListType
                                                : 'disc'
                                        }
                                    >
                                        {item.job.map((jobItem, jobIndex) => (
                                            <li key={jobIndex}>{jobItem}</li>
                                        ))}
                                    </ul>
                                </section>
                            )
                        })}

                        <Icon icon={faRocket} />
                    </S.ContentSection>
                )}
            </S.ContentWrapper>
        </S.Wrapper>
    )
}

export default AboutPage
