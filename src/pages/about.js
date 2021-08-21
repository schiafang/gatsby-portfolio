import React from 'react'
import Seo from '../components/seo'
import * as S from '../styles/about'

import { profileInfo, skillsList, experienceList } from '../datas/about-data'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
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
                    <a
                        href={link}
                        data-label={value}
                        key={value}
                        target="_blank"
                    >
                        <Icon icon={label} />
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
                                    {item.projects ? (
                                        item.projects.map((item, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <span className="project">
                                                        {item.name}
                                                    </span>

                                                    <p className="description">
                                                        {item.description}
                                                    </p>
                                                    {item.skills && (
                                                        <span className="skills">
                                                            {item.skills}
                                                        </span>
                                                    )}
                                                    <ul
                                                        className={
                                                            item.jobListType
                                                                ? item.jobListType
                                                                : 'disc'
                                                        }
                                                    >
                                                        {item.job.map(
                                                            (
                                                                jobItem,
                                                                jobIndex
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        jobIndex
                                                                    }
                                                                >
                                                                    {jobItem}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </React.Fragment>
                                            )
                                        })
                                    ) : (
                                        <React.Fragment>
                                            <span className="project">
                                                {item.project}
                                            </span>
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
                                                {item.job.map(
                                                    (jobItem, jobIndex) => (
                                                        <li key={jobIndex}>
                                                            {jobItem}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </React.Fragment>
                                    )}
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
