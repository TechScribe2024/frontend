import React from "react";
import Header from "../../components/common/header/header";
import { Link, useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Stay Ahead of Tech Trends",
    content:
      "Tech blogs provide insights into the latest trends and innovations, helping you stay informed about the ever-changing tech landscape.",
  },
  {
    id: 2,
    title: "Learn from Industry Experts",
    content:
      "Get advice and knowledge from seasoned professionals in the tech world. Blogs often feature interviews, case studies, and expert opinions.",
  },
  {
    id: 3,
    title: "Hands-on Tutorials and Guides",
    content:
      "Tech blogs offer practical guides and step-by-step tutorials on various technologies, helping you sharpen your skills through hands-on learning.",
  },
  {
    id: 4,
    title: "Connect with a Tech Community",
    content:
      "Reading and engaging with tech blogs allows you to be part of a vibrant community of developers, designers, and tech enthusiasts.",
  },
];

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <div className="flex flex-col flex-grow px-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Create Blogs</h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Others</h1>
        <h1 className="italic text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400 via-yellow-400 via-green-400 via-blue-500 to-purple-600 mb-6">
          Learn
        </h1>

        <div className="flex justify-center items-center mb-6">
          <button className="bg-white text-black p-5 rounded-lg text-xl italic font-bold">
            <Link to="/createBlog"> Start Blogging</Link>
          </button>
        </div>

        <div className="px-10 text-center text-red-600 font-bold italic text-xl md:text-2xl mb-6 ">
          Discover the latest tech blogs
          <p className="text-center text-gray-400  py-6 text-lg md:text-sm mb-6">
            Unlock your potential by diving into the world of tech blogs! Stay
            ahead of the curve with the latest advancements, discover innovative
            tools, and gain insights directly from industry leaders. Our curated
            content empowers you to enhance your skills, spark creativity, and
            navigate the ever-evolving tech landscape. Don't just follow the
            trends—become a part of the conversation! Join us on this exciting
            journey of knowledge and innovation!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="border text-white p-5 rounded-lg shadow-md"
            >
              <h2 className="text-md font-semibold mb-2 text-orange-600">
                {item.title}
              </h2>
              <p className="text-sm text-gray-400">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <div className="p-5 rounded-lg shadow-md w-full max-w-md ">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-4 text-center">
              Stay updated with the latest blog posts!
            </p>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md mb-3 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
