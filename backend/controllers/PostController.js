import PostModel from "../models/PostModel.js";

export const getPosts = async (req, res) => {
  try {
    const response = await PostModel.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPostById = async (req, res) => {
  try {
    const response = await PostModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = async (req, res) => {
  try {
    await PostModel.create(req.body);
    res.status(201).json({ msg: "Post Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = async (req, res) => {
  try {
    await PostModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Post Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = async (req, res) => {
  try {
    await PostModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Post Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
