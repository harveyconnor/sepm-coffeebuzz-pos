<template>
  <ul class="sidebar navbar-nav">
    <li class="nav-item">
      <router-link to="/" class="nav-link">
        <i class="fas fa-fw fa-home"></i>
        <span>Home</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/coffee" class="nav-link">
        <i class="fas fa-fw fa-coffee"></i>
        <span>Coffee</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/sandwiches" class="nav-link">
        <i class="fas fa-fw fa-hamburger"></i>
        <span>Sandwiches</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/help" class="nav-link">
        <i class="fas fa-fw fa-question"></i>
        <span>Help</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/cart" class="nav-link">
        <i class="fas fa-fw fa-shopping-cart"></i>
        <span>Cart</span>
      </router-link>
    </li>
  </ul>
</template>