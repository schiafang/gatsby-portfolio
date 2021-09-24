import React from 'react'
import Layout from './src/components/layout'
import './src/styles/reset.css'
import './src/styles/code.css'
import 'prismjs/themes/prism-tomorrow.css'
import netlifyIdentity from 'netlify-identity-widget'

window.netlifyIdentity = netlifyIdentity

netlifyIdentity.init()

export const wrapRootElement = ({ element }) => {
    return <Layout>{element}</Layout>
}

export const onRouteUpdate = ({ prevLocation }) => {
    window.previousPath = prevLocation ? prevLocation.pathname : null
}
