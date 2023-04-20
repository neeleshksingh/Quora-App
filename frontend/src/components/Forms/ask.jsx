import React, { useState } from "react";
import "../styles/form.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Ask() {
  const [data, setData] = useState({
    ask: ""
  });
  const nav = useNavigate();
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/ask/",
        {
          ask: data.ask
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
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
  };

  return (
    <div className="flex-col form-container">
      <form action="" id="post-form">
        <textarea
          name="say-something"
          id="say"
          cols="30"
          rows="10"
          placeholder="Say Something..."
          value={data.ask}
          onChange={(e) => setData({ ask: e.target.value })}
        ></textarea>
        <div className="add-footer flex-row">
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

export default Ask;