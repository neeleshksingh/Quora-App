import React from "react";
import "../styles/form.css";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

function Post() {
    const handleSubmit = (e) =>{
        e.preventDefault()
        try{

        } catch(e){
            
        }
    }
  return (
    <div className="flex-row form-con">
      <form action="" id="post-form">
        <textarea
          name="say-something"
          id="say"
          cols="30"
          rows="10"
          placeholder="Say Something..."
        ></textarea>
        <div className="add-footer flex-row">
          <AddToPhotosIcon />
          <button className="login-btn" onClick={handleSubmit}>Post</button>
        </div>
      </form>
    </div>
  );
}

export default Post;
