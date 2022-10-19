import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const navigate = useNavigate();

  const savePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://1.9.77.70:5000/posts`, {
        title,
        tag,
        content,
        thumbnail,
      });
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  // return (
  //   <div className="columns mt-5 is-centered">
  //     <div className="column is-half">
  //       <form onSubmit={savePost}>
  //         <div className="field">
  //           <label className="label">Title</label>
  //           <div className="control">
  //             <input
  //               type="text"
  //               className="input"
  //               value={title}
  //               onChange={(e) => setTitle(e.target.value)}
  //             />
  //           </div>
  //         </div>
  //         <div className="field">
  //           <label className="label">Tag</label>
  //           <div className="control">
  //             <input
  //               type="text"
  //               className="input"
  //               value={tag}
  //               onChange={(e) => setTag(e.target.value)}
  //             />
  //           </div>
  //         </div>
  //         <div className="field">
  //           <button type="submit" className="button is-success">
  //             Save
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
  return (
    <form onSubmit={savePost}>
      <div class="grid gap-6 md:grid-cols-2 p-6">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Title
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // placeholder="John"
            required=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Tag
          </label>
          <input
            type="text"
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // placeholder="Doe"
            required=""
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
        <div>
          <label
            for="company"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Content
          </label>
          <input
            type="text"
            id="company"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // placeholder="Flowbite"
            required=""
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Thumbnail
          </label>
          <input
            type="tel"
            id="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // placeholder="123-45-678"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required=""
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>
      </div>
      <div className="px-6">
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddPost;
