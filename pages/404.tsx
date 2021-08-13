import React from 'react'
import Error from '../app/components/pages/Error'
import Layout from '../app/components/layouts/Default'

const Custom404 = () => {
    return (
        <Error title="404" subtitle="Opps! You have some problems" />
    )
}

// eslint-disable-next-line 
Custom404.getLayout = (page: any) => (
    <Layout>{page}</Layout>
)

Custom404.layout = Layout;

export default Custom404