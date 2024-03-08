import React from 'react'
import { BlogHeader } from '../components/BlogHeader'
import { Blogs } from '../components/Blogs'
import { Pagination } from '../components/Pagination'

export const Home = () => {
  return (
    <div className='w-[100vw] h-[100vh] overflow-x-hidden relative'>
      <BlogHeader />
      <Blogs />
      <Pagination />
    </div>
  )
}
