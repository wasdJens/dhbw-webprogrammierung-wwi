const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts() {
  const response = await fetch(apiUrl);
  const posts = await response.json();
  return posts;
}

async function getPost(id) {
  const response = await fetch(`${apiUrl}/${id}`);
  const post = await response.json();
  return post;
}

async function createPost(post) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const createdPost = await response.json();
  return createdPost;
}

async function updatePost(id, post) {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const updatedPost = await response.json();
  return updatedPost;
}

async function deletePost(id) {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE'
  });
  const deletedPost = await response.json();
  return deletedPost;
}

const main = async () => {
  const posts = await getPosts();
  console.log('GetPosts: ', posts);

  const post = await getPost(1);
  console.log(post);

  const createdPost = await createPost({
    title: 'foo',
    body: 'bar',
    userId: 1
  });
  console.log('CreatePost: ', createdPost);

  const updatedPost = await updatePost(1, {
    title: 'foo',
    body: 'bar',
    userId: 1
  });
  console.log('UpdatePost: ', updatedPost);

  const deletedPost = await deletePost(1);
  console.log('DeletePost: ', deletedPost);
}

main();