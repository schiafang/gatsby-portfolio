import React from 'react'
import Seo from '../components/seo'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: calc(100vh - 120px);
    line-height: 1.62;
    letter-spacing: 1.2px;
`

const IndexPage = () => (
    <Wrapper>
        <Seo title="CAREY" />
        <div>
            <h1>Hi, there</h1>
            <p>Aliquam faucibus in tincidunt eget tempor.</p>
            <p>Consectetur donec sapien faucibus et molestie.</p>
        </div>
    </Wrapper>
)

export default IndexPage
