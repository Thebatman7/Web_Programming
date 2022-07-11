<template>
<div id="app">
  <div class="header">
    <router-link to="/">
      <div class="logo">
        <img class= "logo_iamge" src="/images/logo.png">
      </div>
    </router-link>
    <div class="title">
      <h1>Museum of Objects</h1>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <router-link to="/admin">Admin</router-link>
    <a class='git_link' href='https://github.com/Thebatman7' target="_blank">
      <i class="fa fa-github"></i>
    </a>
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #0a192f;
  color: #097429;
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
  background: linear-gradient(to left,
                    rgb(3, 87, 0),
                    rgb(2, 172, 25),
                    rgb(10, 104, 10),
                    rgb(4, 173, 80),
                    rgb(17, 129, 204),
                    rgb(11, 228, 163),
                    rgb(38, 235, 31),
                    rgb(3, 109, 17));
            -webkit-background-clip: text;
            color: transparent;
}

.logo {
  display:flex;
  width: 90px;
}
img {
  width: 70px;
  height: 80px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #0a192f;
  font-size: 12px;
}

.footer a {
  color: #097429;
  text-decoration: none;
  size: 30px;
  background: linear-gradient(to left,
                    rgb(3, 87, 0),
                    rgb(2, 172, 25),
                    rgb(10, 104, 10),
                    rgb(4, 148, 173),
                    rgb(1, 68, 190),
                    rgb(11, 228, 163),
                    rgb(235, 231, 31),
                    rgb(3, 109, 17));
            -webkit-background-clip: text;
            color: transparent;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}

.git_link {
  padding-left: 30px;
  font-size: 2em;
}
</style>
