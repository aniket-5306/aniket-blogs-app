import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import { BlogHeader } from '../components/BlogHeader';
import { BlogDetails } from '../components/BlogDetails';
import { Spinner } from '../components/Spinner';

export const BlogPage = () => {

  const {loading, setLoading} = useContext(AppContext);

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  
  const [currentBlog, setCurrentBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const blogId = location.pathname.split("/").at(-1);


  async function fetchRelatedBlogs(){
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      let result = await fetch(url);
      let data = await result.json();
      console.log("in fetchRelatedBlogs");
      console.log(data.relatedBlogs);
      setCurrentBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } 
    catch (error) {
      console.log("Error in fetching related blog data!");
      setCurrentBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect( () =>{
    if(blogId){
      fetchRelatedBlogs();
    }
  }, [location.pathname])

  return (
    <div className='w-[100vw] h-[100vh] overflow-x-hidden relative'>  

      <BlogHeader />

      {
        loading ? 
        (
          <div className='max-w-[50%] h-screen mx-auto flex flex-col items-center justify-center py-5 gap-9'>
          <Spinner />
          </div>
        ) 
        :
        (
          <div className='max-w-[50%] mx-auto flex flex-col py-5 gap-3 mt-16 mb-16'>
              <div>
                <button
                  className='border-2 rounded-md border-gray-200 px-3 py-1'
                  onClick={ () => navigate(-1) }
                  >
                    Back
                </button>
              </div>

              {
                currentBlog ? 
                (
                  <div className='flex flex-col gap-9'>
                    <BlogDetails post = {currentBlog}/>
                  <div className='flex flex-col gap-9 mt-16'>
                    <h2 className='text-xl font-bold underline'>Related Blogs</h2>
                      {
                          relatedBlogs.map( (post) => 
                                <BlogDetails key={post.id} post = {post} />
                            )
                      }
                  </div>
                  </div>
                ) 
                : 
                (<p>No Blog Found!</p>)
              }

            </div>
        )

      }

  </div>    
  )
}
