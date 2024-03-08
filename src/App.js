import React, { useContext, useEffect } from "react";
import {BlogHeader} from './components/BlogHeader'
import { Blogs } from "./components/Blogs";
import { Pagination } from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import { Home } from './pages/Home'
import { BlogPage } from './pages/BlogPage'
import { CategoryPage } from './pages/CategoryPage'
import { TagPage } from './pages/TagPage'

function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1);
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1);
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }

  },[location.pathname, location.search]);

  return (
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/blog/:blogId" element = {<BlogPage/>} />
        <Route path="/categories/:category" element = {<CategoryPage/>} />
        <Route path="/tags/:tag" element = {<TagPage/>} />
      </Routes>
  );
}

export default App;
