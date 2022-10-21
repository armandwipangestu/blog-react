import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const navigate = useNavigate();

  const savePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://1.9.77.70:5000/posts`, {
        title,
        tag,
        description,
        content,
        thumbnail,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="add_post">
      <form onSubmit={savePost}>
        <div className="px-5 py-2.5 md:px-32 lg:px-28 mb-10">
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Thumbnail
              </label>
              <textarea
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder="123-45-678"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required=""
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Title
              </label>
              <textarea
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder="John"
                required=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tag
              </label>
              <textarea
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder="Doe"
                required=""
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Description
              </label>
              <textarea
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder="Doe"
                required=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Content
              </label>
              <textarea
                type="text"
                rows="5"
                id="company"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder="Flowbite"
                required=""
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddPost;
