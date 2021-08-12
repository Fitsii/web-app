import React, { ReactElement } from 'react'

import Layout from '../../app/components/layouts/Dashboard'

const Index = () => {
    return (
        <div>
            your dashboard
        </div>
    )

}
// eslint-disable-next-line 
Index.getLayout = (page: any) => (
    <Layout>{page}</Layout>
)

Index.layout = Layout;

export default Index
