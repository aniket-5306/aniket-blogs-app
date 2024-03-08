import React from 'react'
import { createContext, useState } from 'react'
import { baseUrl } from '../baseUrl';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    async function fetchBlogPosts(page=1, tag=null, category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log("Api Response",data);
            setCurrentPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        } catch (error) {
            console.log("Some error occured in fetching data!");
            setCurrentPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

    function pageHandler(page){
        navigate({ search: `?page=${page}` });
        setCurrentPage(page);
    }

    const value = {
        loading,
        setLoading,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        fetchBlogPosts,
        pageHandler
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
