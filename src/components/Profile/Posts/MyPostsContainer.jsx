import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost, updatePostText} from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
  return {
    text: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};
const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updatePostText,
})(MyPosts)
export default MyPostsContainer;