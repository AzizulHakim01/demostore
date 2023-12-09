import React from 'react'
import Layout from '../components/Layout'
import SideBar from '../components/SideBar'
import Store from '../components/Store'

const Everything = () => {
  return (
    <Layout>
      <div className="">
        <div className="">
          <div className="">
            <SideBar/>
          </div>
          <div className="">
            <Store/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Everything