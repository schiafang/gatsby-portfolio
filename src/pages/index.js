import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => (
    <>
        <Seo title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <StaticImage
            src="../images/gatsby-astronaut.png"
            width={400}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
        />
        <p>
            <Link to="/blog">Blog List</Link>
        </p>
    </>
)

export default IndexPage
