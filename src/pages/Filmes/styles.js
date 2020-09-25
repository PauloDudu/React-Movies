import styled from 'styled-components';

export const Header = styled.header`

    nav {
        background-color: brown;
    }
    
    .navbar-light {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        color: black;
        font-weight: bold;
    }
`;

export const Container = styled.div`
    padding: 20px;
    color: whitesmoke;

    h2 {
        background: red;
    }
`;

export const Filme = styled.div`
    max-width: 800px;
    color: white;
    margin: 60px auto;


`;

export const Info = styled.div`
    margin: auto auto;
    margin-bottom: 60px;
    border: .7px solid gray;
    padding: 20px;
    transition: .2s;
    border-radius: 5px;

    &:hover {
        background: gray;
        padding: 30px;
    }
`;