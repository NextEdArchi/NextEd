import { useState } from "react";
import "./header.css";
import LazyLoading from "../../template/Lazyloading";
import a from "../../asset/images/logo64.webp";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { data } from "./Data";
import { Link } from "react-router-dom";

const Header = () => {
  const [isHide, setIsHide] = useState(true);
  return (
    <header className="header">
      <div className="center">
        <Link className="logo a" href="/">
          <LazyLoading className="logo-img" src={a} alt="logo" />
        </Link>
        <nav>
          <ul className={`${isHide && "hide"}`}>
            {data.map(({ href, content }, index) => {
              return (
                <li key={index}>
                  <a
                    className="a"
                    href={href}
                    onClick={() => setIsHide(!isHide)}
                  >
                    {content}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul>
            <li>
              <Link className="a" to="community">
                Join Community
              </Link>
            </li>
          </ul>
        
        </nav>
        <ul>
            <li>
              <Link className="ab" to="community">
                Join Community
              </Link>
            </li>
        </ul>
        <div className="btn" onClick={() => setIsHide(!isHide)}>
          {isHide ? <MdOutlineMenu size={28} /> : <RxCross1 size={28} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
