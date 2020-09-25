import React, { useState, useEffect } from "react";

import api from "../../services/api";

import { Header, Info, Filme } from "./styles";

const Filmes = () => {
  const [filmes, setFilmes] = useState([]);

  const mostrarFilmes = async () => {
    try {
      const listaFilmes = await api.get("filmes");
      console.log("Carregando filmes...");

      setFilmes(listaFilmes.data);
    } catch (error) {
      console.log("loadtask error", error);
    }
  };

  useEffect(() => {
    mostrarFilmes();
  }, []);

  return (
    <>
      <Header>
        <div className="nave-bar">
          <nav className="navbar navbar-expand-sm navbar-light">
            <img id="logo" alt="Logo movies" />
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Mais
                </a>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    href="http://www.adorocinema.com/filmes/numero-cinemas/"
                    target="blank"
                  >
                    Filmes em Cartaz
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </Header>

      <Filme>
        {filmes.map((filme) => {
          return (
            <Info>
              <h2> {filme.nome} </h2>
              <h3> Data de lançamento: {filme.dataLancamento} </h3>
              <p><h5> {filme.descricao} </h5></p>
            </Info>
          )
        })}
      </Filme>

      
    </>
  );
};
export default Filmes;
