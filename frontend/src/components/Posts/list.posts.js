import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

const ListPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    // const response = await axios.get("http://1.9.77.70:5000/posts");
    const response = await axios.get("http://192.168.124.125:5000/posts");
    setPosts(response.data);
  };

  return (
    <section id="list_posts" className="md:px-32 lg:px-28 px-5 mb-10 py-2.5">
      <div className="pt-5 mb-5">
        <h1 className="text-4xl text-start dark:text-white">
          Arman Spirit News Bandung
        </h1>
        <p className="text-1xl text-gray-700 dark:text-gray-400 mt-3">
          The place where my mind roams free (there are free tutorials too!)
        </p>
        <div className="mt-3">
          <Link to={`/add`}>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create new post
            </button>
          </Link>
        </div>
      </div>
      <div className="mb-5">
        <h1 className="text-2xl dark:text-white">Featured</h1>
        <hr className="mt-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, index) => {
          if (index < 2) {
            return (
              <React.Fragment key={index}>
                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white border dark:border-gray-700 dark:bg-gray-800 shadow-lg">
                    <img
                      className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                      src={post.thumbnail}
                      alt=""
                    />
                    <div className="px-4 py-6 md:p-6 flex flex-col justify-start relative">
                      <div className="mb-14">
                        <a href="/posts">
                          <h5 className="text-gray-900 dark:text-white text-xl font-medium mb-2">
                            {post.title}
                          </h5>
                        </a>
                        <p className="text-gray-700 dark:text-gray-400 text-base mb-4">
                          {post.description}
                        </p>
                      </div>
                      <div className="inline-flex ml-4 mb-4 absolute bottom-0 left-0">
                        <img
                          className="rounded-full w-9 h-9 mr-3"
                          src="https://armandwipangestu.vercel.app/static/media/me.07f08a71dc0b0a340041.png"
                          alt="Avatar"
                        />
                        <div className="block">
                          <h3 className="text-xs mb-1 dark:text-white">
                            Arman
                          </h3>
                          <p className="text-xs text-gray-400">11 Nov 2022</p>
                        </div>
                      </div>
                      <div className="absolute right-0 bottom-0 mr-5 mb-4 dark:text-white">
                        <FontAwesomeIcon icon={farBookmark} />
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          }
        })}
      </div>
      <div className="mb-5 mt-5">
        <h1 className="text-2xl dark:text-white">All Stories</h1>
        <hr className="mt-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => {
          if (index >= 2) {
            return (
              <React.Fragment key={index}>
                <div className="max-w-xl relative bg-white rounded-lg border dark:border-gray-700 dark:bg-gray-800 mb-5 mr-3">
                  <a href="/posts">
                    <img className="rounded-t-lg" src={post.thumbnail} alt="" />
                  </a>
                  <div className="px-4 py-6 md:p-5 mb-20">
                    <a href="/posts">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {post.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                      {post.description}
                    </p>
                  </div>
                  <div className="inline-flex ml-4 mb-4 absolute bottom-0 left-0 md:px-2 md:py-2">
                    <img
                      className="rounded-full w-9 h-9 mr-3"
                      src="https://armandwipangestu.vercel.app/static/media/me.07f08a71dc0b0a340041.png"
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
              </React.Fragment>
            );
          }
        })}
      </div>
    </section>
  );
};

export default ListPost;
