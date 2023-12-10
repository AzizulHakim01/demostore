import React from 'react'
import Layout from '../components/Layout'
import SideBar from '../components/SideBar'
import Store from '../components/Store'

const Everything = () => {
  return (
    <Layout>
      <div className=" bg-[#F5F7F9]">
        <div className="mx-auto md:w-[1400px] grid md:grid-cols-4 gap-4 items-start justify-between">
          <div className="col-span-1 px-2 py-4 sticky top-0">
            <SideBar/>
          </div>
          <div className="col-span-3 bg-white px-2 py-4 rounded-md md:mt-4 md:mb-5">
            <Store/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Everything