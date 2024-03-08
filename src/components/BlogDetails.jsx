import React from 'react'
import { NavLink } from 'react-router-dom'

export const BlogDetails = ({post}) => {

  return (
    <div className='w-full flex flex-col gap-3'>
        <NavLink to={`/blog/${post.id}`}>
            <h1 className='text-lg font-bold'>{post.title}</h1>
        </NavLink>
        <div className='flex flex-col gap-1'>
            <p>By <span className='text-xs italic'>{post.author}</span> on <NavLink to={`/categories/${post.category}`}><span className='text-sm font-semibold underline'>{post.category}</span></NavLink></p>
            <p className='text-xs'>Posted On {post.date}</p>
        </div>
        <p className='text-md'>{post.content}</p>
        <div className='flex flex-wrap gap-2 underline text-blue-500 text-sm'>
            {
                post.tags.map((tag,index) => (
                    <NavLink key={index} to={`/tags/${tag}`}>
                        <span>{`#${tag}`}</span>
                    </NavLink>
                ))
            }
        </div>
    </div>
  )
}
