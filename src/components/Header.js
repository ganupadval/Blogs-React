import React from 'react'

export default function Header() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-light">
      <div class="">
        <a class="navbar-brand" href="#">
          <img
            src="/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt=""
            width="20"
            height="14"
            class="d-inline-block align-text-top"
          />
          Blogpost
        </a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNavAltMarkup"
      >
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#science">Science</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#technology">Technology</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#Psychology">Psychology</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#health">Health</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#economics">Economics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#politics">Politics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#history">History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#litrature">Litrature</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#environment">Environment</a>
          </li>
        </ul>
      </div>

      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class="nav">
        <li class="nav-item"><a class="nav-link active" href="">Account</a></li>
      </div>
    </nav>
    </div>
  )
}
