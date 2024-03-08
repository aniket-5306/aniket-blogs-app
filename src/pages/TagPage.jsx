import React from 'react'
import { BlogHeader } from '../components/BlogHeader'
import { useLocation, useNavigate } from 'react-router-dom'
import { Pagination } from '../components/Pagination';
import { Blogs } from '../components/Blogs';

export const TagPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

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
          <p className='text-lg font-semibold'>Blogs Tagged <span className='underline'>{`#${tag.replaceAll('%20',' ')}`}</span></p>
        </div>

      <Blogs />
      <Pagination />
      
    </div>
  )
}
