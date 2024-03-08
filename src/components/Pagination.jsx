import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {

    const {loading,currentPage,totalPages,pageHandler} = useContext(AppContext);

  return (
        !loading ?  
        (<div className='w-full border-t-2 fixed bottom-0 bg-white'>
            <div className='w-[50%] mx-auto flex justify-between py-3'>
                <div className='flex gap-3 items-center'>
                    {
                        (currentPage > 1) &&
                        <button 
                        className='border-2 rounded-md border-gray-200 px-3 py-1'
                        onClick={(event) => {
                            event.preventDefault();
                            pageHandler(currentPage - 1);
                        }}>
                            Prev
                        </button>
                    }
                    {
                        (currentPage < totalPages) &&
                        <button 
                        className='border-2 rounded-md border-gray-200 px-3 py-1'
                        onClick={(event) => {
                            event.preventDefault();
                            pageHandler(currentPage + 1);
                        }}>
                            Next
                        </button>
                    }
                </div>
                <div>
                    <p>Page {currentPage} of {totalPages}</p>
                </div>
            </div>
        </div>
        ) 
        :
        (<div></div>)
  )
}
