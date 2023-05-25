// import qs from 'qs';
// import client from './client';

// export const writePost = ({ title, body, tags }) =>
//   client.post('/api/posts', { title, body, tags });

// export const readPost = id => client.get(`/api/posts/${id}`);

// export const listPosts = ({ page, username, tag }) => {
//   const queryString = qs.stringify({
//     page,
//     username,
//     tag,
//   });
//   return client.get(`/api/posts?${queryString}`);
// };

// export const updatePost = ({ id, title, body, tags }) =>
//   client.patch(`/api/posts/${id}`, {
//     title,
//     body,
//     tags,
//   });

// export const removePost = id => client.delete(`/api/posts/${id}`);
import client from "./client";

export const writePost = ({ title, body, tags, postCount, category  }) => 
  client.post('/api/posts', { title, body, tags, postCount, category  });

export const readPost = (id) => client.get(`/api/posts/${id}`);


export const listPosts = ({ page, username, tag, title, body, postCount, category }) => {
    return client.get(`/api/posts`, {
        params: {page, username, tag, title, postCount, body, category},
    });
};


export const updatePost = ({id, title, body, tags}) => client.patch(`/api/posts/${id}`, {title, body, tags})

export const removePost = id => client.delete(`/api/posts/${id}`);
