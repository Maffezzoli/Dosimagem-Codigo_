import styled from "styled-components";




const Card = styled.div`
    margin: 20px;
    padding: 10px;
    width: 300px;
    height: 60px;
    background-color: var(--background);
    box-shadow: 00px 0px 10px rgba(0, 0, 0, 0.171);
    border: 1 solid black;

    #tipo {
        display: flex;
        flex-direction: column;
        height: 100%;
        font-family: 'Century Gothic', sans-serif;
        font-weight: light;

    }
    .container-aut{
        display: flex;
        flex-direction: row;
        gap:10%;
    }
    .ID {
        font-weight: bold;
        color: var(--detalhes);
        font-family: 'Century Gothic', sans-serif;
        font-weight: light;

    }
    #btncard{
        background-color: var(--detalhes);
        color:var(--secundaria);
        border:none;
        padding:5px 0px;
        cursor: pointer;
    }

`;

export {Card};