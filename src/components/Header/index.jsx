import React from "react";
import "../../styles/components/Header/styles.css";
import { BsSearch, BsFillInboxFill } from "react-icons/bs";
import { GiPadlockOpen } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import { AiTwotoneSetting, AiFillCaretDown } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header-main">
      <nav>
        <ul className="list-links">
          <li>
            <a href="#" className="active">
              Películas
            </a>
          </li>
          <li>
            <a href="#" className="">
              Series
            </a>
          </li>
          <li>
            <a href="#" className="">
              Anime
            </a>
          </li>
          <li>
            <a href="#" className="">
              Favoritos
            </a>
          </li>
          <li className="drop">
            <a href="#" className="">
              Género
            </a>
            <span className="drop-down">
              Todos
              <AiFillCaretDown />
            </span>
          </li>
          <li className="drop">
            <a href="#" className="">
              Ordenar por
            </a>
            <span className="drop-down">
              Tendencias
              <AiFillCaretDown />
            </span>
          </li>
        </ul>
        <ul className="list-icons">
          <li>
            <GiPadlockOpen />
          </li>
          <li>
            <BsSearch />
          </li>
          <li>
            <MdFavoriteBorder />
          </li>
          <li>
            <BsFillInboxFill />
          </li>
          <li>
            <FiHelpCircle />
          </li>
          <li>
            <FaDownload />
          </li>
          <li>
            <AiTwotoneSetting />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
