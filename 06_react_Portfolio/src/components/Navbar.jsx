import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand " href="#Home">
            Portfolio
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#Home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#projects"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#projects">
                      Project 1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Project 2
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
            <a href="https://github.com/AkhileshEdd/React-js/tree/main/06_react_Portfolio" className="fs-2 mx-2 text-decoration-none link-secondary">
              <AiFillGithub />
            </a>
            <a href="#" className="fs-2 mx-2 text-decoration-none link-secondary">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
