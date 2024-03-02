import { Outlet, Link, NavLink } from "react-router-dom";
import React, { Component, useState, useEffect, useRef } from "react";
import Popup from "../Popup.js";
import Notify from "../Notify.js";
import "../../style.css";
import { themeContext } from "../../context.js";
import GenerateNotifications from "../GenerateNotifications.js";

import "@fortawesome/fontawesome-free/css/all.css";

const Button = ({ color, onClickFunction }) => (
  <button
    style={{
      width: "100%",
      height: "12px",
      borderRadius: "100%",
      backgroundColor: color,
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s ease-in-out",
      outline: "none", // Remove focus outline
      boxShadow: "1px 2px 9px #F4AAB9",
    }}
    onClick={onClickFunction}
  />
);

const COMP = () => {
  const buttonColors = [
    "#fffefc",
    "#1e2542",
    "#3d1599",
    "#006064",
    "#33a1ff",
    "#a1ff33",
  ];

  const handleClick = (buttonIndex) => {
    // console.log(`Button ${buttonIndex + 1} clicked!`);
    if (buttonIndex == 0) {
      lightTheme();
    } else if (buttonIndex == 1) {
      darkTheme();
    } else if (buttonIndex == 2) {
      violetTheme();
    } else if (buttonIndex == 3) {
      cyanTheme();
    } else if (buttonIndex == 4) {
      blueTheme();
    } else if (buttonIndex == 5) {
      limeTheme();
    }
  };

  const [theme, setTheme] = React.useState("dark");
  const [colorq, setColor] = useState("bg-gray-100 text-black");

  const darkTheme = () => {
    setTheme("dark");
  };
  const lightTheme = () => {
    setTheme("light");
  };
  const violetTheme = () => {
    setTheme("violet");
  };
  const cyanTheme = () => {
    setTheme("cyan");
  };
  const blueTheme = () => {
    setTheme("blue");
  };
  const limeTheme = () => {
    setTheme("lime");
  };

  const [currentMenu, setMenu] = useState("Dashboard");
  const [buttonPopup, setButtonPopup] = useState(false);
  const [notify, setNotify] = useState(false);

  const notificationRef = useRef(null);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let curLink = document.location.pathname;
    // let curMenu = currentMenu;
    let linkObj = {
      "/view/LegalAII": "Legal_AI",
      "/view/DocumentAI": "Document",
    };
    linkObj[curLink] ? setMenu(linkObj[curLink]) : "Dashboard";
  });

  useEffect(() => {
    if (theme == "dark") {
      setColor("bg-gray-800 text-white");
    } else if (theme == "light") {
      setColor("bg-gray-100");
    } else if (theme == "violet") {
      setColor("tw-bg-purple-950 text-white");
    } else if (theme == "cyan") {
      setColor("tw-bg-cyan-950 text-white");
    } else if (theme == "blue") {
      setColor("tw-bg-blue-950 text-white");
    } else if (theme == "lime") {
      setColor("tw-bg-lime-950 text-white");
    }
  }, [theme]);

  console.log(colorq);

  return (
    <>
      <themeContext.Provider
        value={{
          theme,
          darkTheme,
          lightTheme,
          violetTheme,
          cyanTheme,
          blueTheme,
          limeTheme,
        }}
      >
        <nav
          id="sidebarMenu"
          className={colorq + " sidebar d-lg-block  collapse "}
          data-simplebar="init"
          style={{ boxShadow: "1px 2px 9px #F4AAB9" }}
        >
          <div className="simplebar-wrapper" style={{ margin: 0 }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer" />
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                <div
                  className="simplebar-content-wrapper"
                  tabIndex={0}
                  role="region"
                  aria-label="scrollable content"
                  style={{ height: "auto", overflow: "hidden" }}
                >
                  <div className="simplebar-content" style={{ padding: 0 }}>
                    <div className="sidebar-inner px-4 pt-3">
                      <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                        <div className="collapse-close d-md-none">
                          <a
                            href="#sidebarMenu"
                            data-bs-toggle="collapse"
                            data-bs-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="true"
                            aria-label="Toggle navigation"
                          >
                            <svg
                              className="icon icon-xs"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>

                      <ul className="nav flex-column pt-3 pt-md-0">
                        <li className="">
                          <a className="nav-link d-flex align-items-center">
                            <span className="sidebar-icon">
                              <img
                                src="../../assets/img/brand/logo.png"
                                height={40}
                                width={40}
                                alt="chimera Logo"
                              />
                            </span>
                            <span className="mt-1 ms-1 sidebar-text">
                              ChimeraAI
                            </span>
                          </a>
                        </li>

                        <li
                          className={` ${
                            currentMenu === "Legal_AI " ? "" : ""
                          } `}
                          style={{
                            boxShadow:
                              currentMenu === "Legal_AI"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/LegalAII"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("Legal_AI");
                            }}
                          >
                            <span className="sidebar-icon">
                              <img
                                src="/assets/icons/balance.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">Vital AI</span>
                          </Link>
                        </li>
                        <li
                          className={` ${currentMenu === "Document" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "Document"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/DocumentAI"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("Document");
                            }}
                          >
                            <span className="sidebar-icon">
                              <img
                                src="/assets/icons/balance.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">Document AI</span>
                          </Link>
                        </li>

                        <li
                          role="separator"
                          className="dropdown-divider mt-4 mb-3 border-gray-700"
                        />

                        <li className="nav-item">
                          <a
                            href="#"
                            className="btn btn-secondary d-flex align-items-center justify-content-center btn-upgrade-pro"
                          >
                            <span className="sidebar-icon d-inline-flex align-items-center justify-content-center">
                              <svg
                                className="icon icon-xs me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <button
                              className="sidebar-text"
                              onClick={() => {
                                setButtonPopup(true);
                              }}
                            >
                              Connect with us
                            </button>
                            <Popup
                              trigger={buttonPopup}
                              setTrigger={setButtonPopup}
                            >
                              <h2 style={{ textAlign: "center" }}>Connect</h2>{" "}
                              <h3 style={{ textAlign: "center" }}>
                                <a href="https://www.chimeratechnologies.com/">
                                  enquiries@chimeratechnologies.com
                                </a>
                              </h3>
                            </Popup>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "auto", height: 621 }}
            />
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{ width: 0, display: "none" }}
            />
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{ height: 0, display: "none" }}
            />
          </div>
        </nav>

        <main class="content" id={theme}>
          <nav
            className={
              colorq +
              " navbar navbar-top navbar-expand navbar-dashboard navbar-dark"
            }
            style={{
              // backgroundColor: "black",
              position: "fixed",
              width: "100%",
              height: "10%",
              borderRadius: "0%",
              left: 0,
              zIndex: 1,
              boxShadow: "1px 2px 9px #F4AAB9",
            }}
          >
            <ul
              className="navbar-nav align-items-center"
              style={{ right: "1%", position: "fixed" }}
            >
              <li
                className="nav-item dropdown"
                onMouseOver={() => {
                  setDropdownVisible(true);
                }}
                onClick={() => {
                  setDropdownVisible(!dropdownVisible);
                }}
              >
                <a>
                  <div
                    ref={dropdownRef}
                    className="position-relative  "
                    style={{ width: "40px" }}
                  >
                    <i
                      className="fa-solid fa-sun fa-fw fa-xl margin-right-md fa-spin"
                      style={{
                        color: "var(--white)",
                        "--fa-animation-duration": "4s",
                      }}
                    ></i>
                  </div>
                </a>

                {dropdownVisible && (
                  <div
                    style={{
                      marginTop: "10px",
                      width: "80px",
                      height: "55px",
                      border: "2px solid #ddd",
                      padding: "10px",
                      borderRadius: "10px",
                      position: "fixed",
                      zIndex: "10",
                      backgroundColor: "AppWorkspace",
                    }}
                    onMouseOver={() => {
                      setDropdownVisible(true);
                    }}
                    onMouseOut={() => {
                      setDropdownVisible(false);
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "10px",
                      }}
                    >
                      {buttonColors.map((color, index) => (
                        <Button
                          key={index}
                          color={color}
                          onClickFunction={() => handleClick(index)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link text-dark notification-bell unread dropdown-toggle"
                  data-unread-notifications="true"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                  onClick={() => setNotify(!notify)}
                >
                  {theme === "dark" ||
                  theme === "violet" ||
                  theme === "cyan" ||
                  theme === "blue" ||
                  theme === "lime" ? (
                    <svg
                      className="icon icon-sm "
                      fill="currentColor"
                      stroke="#001f3f"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  ) : (
                    <svg
                      className="icon icon-sm text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  )}
                  <Notify
                    className="itis"
                    trigger={notify}
                    setTrigger={setNotify}
                  >
                    {/* <p>AITrism feature will be enabled in the next release</p> */}
                    <GenerateNotifications />
                  </Notify>
                </a>
              </li>
              <li className="nav-item dropdown ms-lg-3">
                <Link
                  className="nav-link dropdown-toggle pt-1 px-0"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => {
                    location.href("/");
                  }}
                >
                  <div className="media d-flex align-items-center">
                    <img
                      className="avatar rounded-circle"
                      alt="Image placeholder"
                      src="../../assets/img/team/user.png"
                    />
                    <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                      <span className="mb-0 font-small fw-bold ex">
                        Chinnasamy
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <svg
                      className="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                    My Profile
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <svg
                      className="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Settings
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <svg
                      className="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Messages
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <svg
                      className="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Support
                  </a>
                  <div role="separator" className="dropdown-divider my-1" />
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <svg
                      className="dropdown-icon text-danger me-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </a>
                </div>
              </li>
            </ul>

            <div className="container-fluid px-0">
              <div
                className="d-flex justify-content-between w-100"
                id="navbarSupportedContent"
              >
                <div className="d-flex align-items-center">
                  {/* Search form */}
                  <form
                    className="navbar-search form-inline"
                    id="navbar-search-main"
                  >
                    <div className="input-group input-group-merge search-bar"></div>
                  </form>
                  {/* / Search form */}
                </div>
                {/* Navbar links */}
              </div>
            </div>
          </nav>
          <Outlet />
        </main>
      </themeContext.Provider>
    </>
  );
};

export default COMP;
// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/blogs">Blogs</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;
