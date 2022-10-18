import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await axios.get("http://1.9.77.70:5000/posts");
    setPosts(response.data);
  };

  const deletePosts = async (id) => {
    try {
      await axios.delete(`http://1.9.77.70:5000/posts/${id}`);
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="posts" className="mb-10">
      <div className="p-10">
        <Link to={`/add`} className="">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Create new post
            </span>
          </button>
        </Link>
      </div>
      <div className="px-10 grid grid-cols-1 md:grid-cols-5 gap-4">
        {posts.map((post, index) => (
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href={post.thumbnail} target="_blank">
              <img class="rounded-t-lg" src={post.thumbnail} alt="" />
            </a>
            <div class="p-5">
              <div className="mb-2 text-xs inline-flex items-center font-bold leading-sm px-3.5 py-1.5 bg-green-200 text-green-800/60 rounded-md">
                {post.tag}
              </div>
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.title}
                </h5>
              </a>
              <p class="mt-2 mb-3 font-normal text-sm text-gray-400 dark:text-gray-400">
                {post.content}
              </p>
              {/* <a
                href="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a> */}
            </div>
          </div>

          // <div className="flex items-stretch justify-center p-3">
          //   <div className="flex-1 rounded-lg shadow-2xl max-w-sm bg-gray-800 text-white">
          //     <div className="h-full p-6">
          //       <div className="inline-flex justify-between mb-4">
          //         <img
          //           className="rounded-full w-8 h-8 mr-3"
          //           src={post.thumbnail}
          //           alt="Avatar"
          //         />
          //         <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          //       </div>
          //       <br />
          //       <p>{post.content}</p>
          //       <div className="mt-2 text-xs inline-flex items-center font-bold leading-sm px-4 py-1.5 bg-gray-900 rounded-full mr-2 mb-3">
          //         {post.tag}
          //       </div>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </section>
  );
};

export default PostList;
