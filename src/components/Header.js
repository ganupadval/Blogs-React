import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="">
          <a className="navbar-brand" href={{}}>
            <img
              src="/docs/5.2/assets/brand/bootstrap-logo.svg"
              alt=""
              width="20"
              height="14"
              className="d-inline-block align-text-top"
            />
            Blogpost
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#science">
                Science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#technology">
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Psychology">
                Psychology
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#health">
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#economics">
                Economics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#politics">
                Politics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#history">
                History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#litrature">
                Litrature
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#environment">
                Environment
              </a>
            </li>
          </ul>
        </div>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success btn-light" type="submit">
            Search
          </button>
        </form>
        <div className="nav">
          <li className="nav-item">
            <a className="nav-link active" href={{}}>
              Account
            </a>
          </li>
        </div>
      </nav>
    </div>
  );
}
