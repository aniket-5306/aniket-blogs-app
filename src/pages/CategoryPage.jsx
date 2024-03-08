import React from 'react'
import { BlogHeader } from '../components/BlogHeader'
import { Blogs } from '../components/Blogs'
import { Pagination } from '../components/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'

export const CategoryPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll('%20',' ');

  return (
    <div className='w-[100vw] h-[100vh] overflow-x-hidden relative'>

      <BlogHeader />

      <div className='max-w-[50%] mx-auto flex items-center py-5 gap-3 mt-16 -mb-16'>

        <button
        className='border-2 rounded-md border-gray-200 px-3 py-1'
        onClick={ () => navigate(-1) }
        >
          Back
        </button>
        <p className='text-lg font-semibold'>Blogs on <span className='underline'>{category}</span></p>
      </div>

      <Blogs />
      <Pagination />

    </div>
  )
}
