import React from "react";

function Header() {
  return (
    <div className="card text-center">
      <header className="grid bg-Dark_Blue">
        <h1 className="header-text grid justify-items-center justify-center m-3 text-4xl">
          {" "}
          Marc Hamilton{" "}
        </h1>
        <nav className="">
          <ul className="header-nav grid justify-center sm:grid-cols-2 m-4">
            <li>
              <a
                className="mb-5 inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-Baby_Blue text-white font-semibold tracking-wide shadow-md hover:bg-Navy_Blue hover:text-Baby_Blue hover:shadow-lg hover:-translate-y-0.5 focus:bg-Navy_Blue focus:outline-none transition duration-200 ease-out"
                href="/"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="mb-5 inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-Baby_Blue text-white font-semibold tracking-wide shadow-md hover:bg-Navy_Blue hover:text-Baby_Blue hover:shadow-lg hover:-translate-y-0.5 focus:bg-Navy_Blue focus:outline-none transition duration-200 ease-out"
                href="/My-Projects"
              >
                My Projects
              </a>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
