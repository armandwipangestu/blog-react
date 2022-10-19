import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBookMark } from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

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
    <section id="posts" className="md:px-32 lg:px-48 px-5 mb-10 py-2.5">
      <div className="pt-5 mb-5">
        {/* <Link to={`/add`} className="">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Create new post
            </span>
          </button>
        </Link> */}
        <h1 className="text-4xl text-start">Arman Spirit News Bandung</h1>
        <p className="text-1xl text-gray-700 mt-3">
          The place where my mind roams free (there are free tutorials too!)
        </p>
        <div className="mt-3">
          <Link to={`/add`}>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Create new post
            </button>
          </Link>
        </div>
      </div>
      <div className="mb-5">
        <h1 className="text-2xl">Featured</h1>
        <hr className="mt-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, index) => {
          if (index < 2) {
            return (
              <>
                <a href="#">
                  <div class="relative border-gray-200 dark:border-gray-700 mb-5 mr-3 flex flex-col bg-white dark:bg-gray-800 rounded-md lg:flex-row md:max-w-2xl">
                    {/* <div class=""> */}
                    <img
                      class="object-cover w-full h-100 lg:h-100 lg:w-56"
                      src={post.thumbnail}
                      alt=""
                    />
                    <div class="flex flex-col p-5 md:p-10 lg:p-10 lg:py-5 leading-normal relative">
                      <div className="mb-14">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                          {post.title}
                        </h5>
                        <p class="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">
                          {post.content}
                        </p>
                      </div>
                      <div className="inline-flex ml-4 mb-4 absolute bottom-0 left-0 md:p-5">
                        <img
                          className="rounded-full w-9 h-9 mr-3"
                          src="https://www.gravatar.com/avatar/55dd4fd20aa96b50486e49214b1346f0?s=250&d=mm&r=x"
                          alt="Avatar"
                        />
                        <div className="block">
                          <h3 className="text-xs mb-1 dark:text-white">
                            Arman
                          </h3>
                          <p className="text-xs text-gray-400">11 Nov 2022</p>
                        </div>
                      </div>
                      <div className="absolute right-0 bottom-0 mr-5 mb-4 dark:text-white md:p-5">
                        <FontAwesomeIcon icon={farBookmark} />
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                </a>
              </>
            );
          }
        })}
      </div>
      <div className="mb-5 mt-5">
        <h1 className="text-2xl">All Stories</h1>
        <hr className="mt-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => {
          if (index > 2) {
            return (
              <>
                {/* <a
                  href="#"
                  class="flex flex-col items-center bg-white rounded-md border md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    class="object-cover w-full h-100 md:h-100 md:w-56"
                    src={post.thumbnail}
                    alt=""
                  />
                  <div class="flex flex-col justify-between p-5 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                      {post.title}
                    </h5>
                    <p class="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">
                      {post.content}
                    </p>
                    <div className="inline-flex mb-4 mt-3">
                      <img
                        className="rounded-full w-9 h-9 mr-3"
                        src="https://www.gravatar.com/avatar/55dd4fd20aa96b50486e49214b1346f0?s=250&d=mm&r=x"
                        alt="Avatar"
                      />
                      <div className="block">
                        <h3 className="text-xs mb-1 dark:text-white">Arman</h3>
                        <p className="text-xs text-gray-400">11 Nov 2022</p>
                        {/* <FontAwesomeIcon icon={faBookmark} /> */}
                {/*</div>
                    </div>
                  </div>
                </a> */}
                <div class="max-w-xl relative bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-5 mr-3">
                  <a href="#">
                    <img class="rounded-t-lg" src={post.thumbnail} alt="" />
                  </a>
                  <div class="p-5 mb-20">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {post.title}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                      {post.content}
                    </p>
                  </div>
                  <div className="inline-flex ml-4 mb-4 absolute bottom-0 left-0 md:px-2 md:py-2">
                    <img
                      className="rounded-full w-9 h-9 mr-3"
                      src="https://www.gravatar.com/avatar/55dd4fd20aa96b50486e49214b1346f0?s=250&d=mm&r=x"
                      alt="Avatar"
                    />
                    <div className="block">
                      <h3 className="text-xs mb-1 dark:text-white">Arman</h3>
                      <p className="text-xs text-gray-400">11 Nov 2022</p>
                    </div>
                  </div>
                  <div className="absolute right-0 bottom-0 mr-5 mb-4 dark:text-white md:px-2 md:py-2">
                    <FontAwesomeIcon icon={farBookmark} />
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </section>
  );
};

export default PostList;
