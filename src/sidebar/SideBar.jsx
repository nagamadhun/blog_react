import React from "react";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          className=""
          src="https://img.freepik.com/free-vector/illustrated-about-me-concept_52683-59123.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
          delectus et? Asperiores possimus accusamus, minus obcaecati id
          praesentium voluptatum omnis velit quos veritatis facere incidunt
          ducimus necessitatibus nam veniam in?
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Style</li>
          <li className="sideBarListItem">Sport</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <ul className="topList">
            <i className="sideBarIcon fa-brands fa-square-facebook"></i>
            <i className="sideBarIcon fa-brands fa-square-twitter"></i>
            <i className="sideBarIcon fa-brands fa-square-pinterest"></i>
            <i className="sideBarIcon fa-brands fa-square-instagram"></i>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
