import React from 'react'
import Header from '../../components/common/header/header'

const MostViewedBlogs = ({ blogs}) => {
    const handleOnClick = (id)=>{
        console.log(`Blog ${id} clicked`)
    }
    return (
        <>
          <Header />
          <div className="flex flex-col bg-black min-h-screen p-4">
            <h1 className="text-white text-5xl font-extrabold mb-8 text-center font-serif">
            Most Viewed Blogs
            </h1>
            <div className="space-y-8 flex flex-col items-center">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="relative w-full lg:w-11/12 xl:w-10/12 p-1 rounded-lg bg-white border-transparent hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-600 transition-all duration-300"
                  onClick = {()=> handleOnClick(index)}
                >
                    <div className="p-6 bg-black bg-opacity-80 rounded-lg shadow-lg">
                  <h2 className="text-3xl font-bold text-white">{blog.title}</h2>
                  <p className="text-sm text-gray-400">{blog.date}</p>
                  <p className="text-base text-gray-200 mt-4">
                    {blog.content.substring(0, 150)}...
                  </p>
                </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
}

export default MostViewedBlogs