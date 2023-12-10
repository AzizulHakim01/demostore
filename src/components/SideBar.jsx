import React from 'react'
import SearchComponentForSidebar from './SearchComponentForSidebar'
import FilterByCategories from './FilterByCategories'
import MostViewedProducts from './MostViewedProducts'

const SideBar = () => {
  return (
    <div className='h-auto'>
        <div className="flex flex-col gap-4">
          <SearchComponentForSidebar/>
          <FilterByCategories/>
          <MostViewedProducts/>
        </div>
    </div>
  )
}

export default SideBar