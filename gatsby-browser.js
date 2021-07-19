import React from 'react'
import Layout from './src/components/layout'
import './src/styles/reset.css'
import './src/styles/code.css'
import 'prismjs/themes/prism-tomorrow.css'

export const wrapRootElement = ({ element }) => {
    return <Layout>{element}</Layout>
}
