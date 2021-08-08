import React from 'react'
import Seo from '../components/seo'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: calc(100vh - 120px);
`

const IndexPage = () => (
    <Wrapper>
        <Seo title="CAREY" />
        <div>
            <h1>Hi, there</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
        </div>
    </Wrapper>
)

export default IndexPage
