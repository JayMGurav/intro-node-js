const {users,posts} = require('./data')

const getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = users.find(user => user.id === id)
    cb(user)
  }, 150)
}

const getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    const Posts = posts.filter(post => post.createdBy === userId)
    cb(Posts)
  }, 150)
}

module.exports = {
    getPostsForUser,
    getUserById
}