import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const LIKE_POST = "LIKE_POST";
export const DISLIKE_POST = "DISLIKE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const GET_POST_ERRORS = "GET_POST_ERRORS";

export const getPosts = (num) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3000/api/post/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_POSTS, payload: array });
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (data) => { 
  return (dispatch) => {
    return axios
      .post(`http://localhost:3000/api/post/`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_POST_ERRORS, payload: res.data.errors });
        } else {
          dispatch({ type: GET_POST_ERRORS, payload: "" });
        }
      });
  };
};

export const likePost = (userId ,postId ) => { 
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `http://localhost:3000/api/post/like/` + userId,
      data: { id: postId },
    })
      .then((res) => {
        dispatch({ type: LIKE_POST, payload: { userId, postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const dislikePost = (postId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `http://localhost:3000/api/post/dislike/` + postId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: DISLIKE_POST, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const updatePost = (postId, message) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3000/api/post/${postId}`,
      data: { message },
    })
      .then((res) => {
        dispatch({ type: UPDATE_POST, payload: { message, postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `http://localhost:3000/api/post/${postId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_POST, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const addComment = (postId, commenterId, text, commenterPseudo) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `http://localhost:3000/api/post/comment-post/${postId}`,
      data: { commenterId, text, commenterPseudo },
    })
      .then((res) => {
        dispatch({ type: ADD_COMMENT, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const editComment = (postId, commentId, text) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `http://localhost:3000/api/post/edit-comment-post/${postId}`,
      data: { commentId, text },
    })
      .then((res) => {
        dispatch({ type: EDIT_COMMENT, payload: { postId, commentId, text } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteComment = (postId, commentId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `http://localhost:3000/api/post/delete-comment-post/${postId}`,
      data: { commentId },
    })
      .then((res) => {
        dispatch({ type: DELETE_COMMENT, payload: { postId, commentId } });
      })
      .catch((err) => console.log(err));
  };
};
