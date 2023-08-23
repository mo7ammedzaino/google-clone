import "./index.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../../components/search";

function Home() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    // do something with input... come back and fix

    navigate(`/search?term=${input}`);
  };

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img src="img/logo.png" alt="Google" />
        <div className="home__inputContainer">
          <Search value={input} onChange={setInput} onSubmit={handleSearch} />
        </div>
      </div>
    </div>
  );
}

export default Home;
