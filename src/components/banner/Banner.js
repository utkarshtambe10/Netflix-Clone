import React from "react";
import "../banner/Banner.css";

function Banner() {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className="banner" style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://i.pinimg.com/originals/62/cb/b8/62cbb8138fd6c38a72198e09859a5426.jpg")`,
      backgroundPosition: "center center",
    }}>
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(`This is a description`, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;