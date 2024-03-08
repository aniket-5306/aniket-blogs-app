import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner';
import { BlogDetails } from './BlogDetails';

export const Blogs = () => {

  const {loading,posts} = useContext(AppContext);

  return (
    <div className='max-w-[50%] mx-auto flex flex-col py-5 gap-9 mt-16 mb-16'>
        {
            loading ? 
            (
            <div className='max-w-full h-screen flex flex-col items-center justify-center -mt-16'>
              <Spinner /> 
            </div>
            ) :
            (   posts.length == 0 ? 
                (<div>No Post Found!</div>) :
                (   
                    posts.map( (post) => (
                            <BlogDetails key={post.id} post = {post} />
                    ))
                )    
            )
        }
    </div>
  );
}
