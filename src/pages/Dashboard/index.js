import React from "react";

import { Container, Header } from "./styles.js";

const img1 = require("../../images/banner-capitao-america.png");
const img2 = require("../../images/banner-pantera-negra.png");
const img3 = require("../../images/banner-endgame.png");

const Dashboard = () => (
  <>
    <Header>
    <div className="nave-bar">
            <nav class="navbar navbar-expand-sm navbar-light">
                <img id="logo" alt="Logo movies"/>                
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/filmes">Filmes</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Mais
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="http://www.adorocinema.com/filmes/numero-cinemas/" target="blank">Filmes em Cartaz</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </Header>

    <Container id="container">
      <div id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1}></img>
          </div>

          <div class="carousel-item">
            <img src={img2}></img>
          </div>

          <div class="carousel-item">
            <img src={img3}></img>
          </div>
        </div>

        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </Container>
  </>
);

export default Dashboard;
