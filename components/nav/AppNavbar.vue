<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary w-100">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
.nav-link {
  color: white;
}

.nav-link:hover {
  text-decoration: underline;
  color: #B54A29;
}

.navbar {
  position: fixed;
  z-index: 100;
}

.basket_button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.svg-container-navbar {
  max-width: 25px;
  max-height: 25px;
  fill: white;
}

.svg-container-navbar:hover {
  fill: #B54A29;
}

.navbar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #242d24;
  transform: translateY(-100%);
  transition: transform 0.25s ease-in-out;
}

.navbar .container-fluid {
  position: relative;
}

.navbar.-shown.can-background-display::before {
  transform: translateY(0);
}

.nav-link {
  margin: auto auto;
}

.nav-link.with-icon {
  display: flex;
  align-items: center;
}
</style>
