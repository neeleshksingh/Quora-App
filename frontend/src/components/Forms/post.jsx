import React, { useEffect, useState } from "react";
import "../styles/form.css";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Post() {
  const [data, setData] = useState({
    content: "",
    img: null,
    heading : ""
  });
  const [image, setImage] = useState("");
  const [imgurl, setImgurl] = useState("");
  const nav = useNavigate();
  const [error, setError] = useState({});

  useEffect(() => {
    if (imgurl) {
      console.log("imgurl", imgurl);
      axios
        .post(
          "http://localhost:3000/post/",
          {
            img: imgurl,
            content: data.content,
            heading : data.heading
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.data.error) {
            setError(response.data.error);
          } else {
            alert("Your Post has been uploaded successfully");
            nav("/main");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [imgurl]);

  const ImageUpload = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "images");
    data.append("cloud_name", "neeleshks");
    axios
      .post("https://api.cloudinary.com/v1_1/neeleshks/image/upload", data)
      .then((response) => setImgurl(response.data.secure_url))
      .catch((error) => console.log(error));
  };

  const addImg = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      setImage(event.target.files[0]);
    };
    input.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!data.content && !image) {
        setError({ message: "Please enter text or upload an image." });
        return;
      }
      if (!data.content) {
        data.content = " ";
      }
      if (!image) {
        ImageUpload(e);
        return;
      }
      ImageUpload(e);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex-col form-container">
      <form action="" id="post-form">
        <input type="text" placeholder="Heading" className="post-heading" value={data.heading}
        onChange={(e) => setData({ ...data, heading: e.target.value })}
        />
        <textarea
          name="say-something"
          id="say"
          cols="30"
          rows="10"
          placeholder="Say Something..."
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        ></textarea>
        <div className="add-footer flex-row">
          <AddToPhotosIcon onClick={addImg} className="image-btn" />
          <button className="login-btn" onClick={handleSubmit}>
            Post
          </button>
        </div>
      </form>
      <div>
        {error.message && <p className="error-message">{error.message}</p>}
      </div>
    </div>
  );
}

export default Post;
