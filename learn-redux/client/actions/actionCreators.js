//increment
//index -- what to increment

// action creatures dispatches what happened on DOM
// but doesn't update the DOM (state) (like regular JS events)

//Which is why we need reducer -- updates state (like a listener)
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comment
// author -- who commented
// comment -- what was the comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comment
//postId -- tells which post
// i -- which comment to remove
export function removeCOmment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }

}