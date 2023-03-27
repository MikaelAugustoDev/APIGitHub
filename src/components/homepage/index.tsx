import  styled  from "styled-components";
import LogoGithub from "../../assets/logo.svg";

const HomePage = () => {

    return (

        <> 

            <Main>

                <img src={LogoGithub} alt="Logo do Github"/>

                <Title>Escreva seu nome de usuário Github</Title>

                <Input type="text" id="buscar" placeholder="Digite Aqui"/>

                <Button type="submit" id="botao-buscar">Buscar</Button>

            </Main>

        </>


    )

}  

export { HomePage }

const Main = styled.main`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    gap: 20px;
`

const Title = styled.h1`
    font-weight: 300;
`

const Input = styled.input`
    width: 300px;
    height: 30px;
    border: none;
    text-align: center;
    border-bottom: 1px solid black;
    :focus {
        outline: none;
    }
`

const Button = styled.button`
    width: 150px;
    height: 30px;
    background: none;
    border: none;
    border: 1px solid black;
    border-radius: 2px;
    transition: 0.5s;

    :hover {
        cursor: pointer;
        transform: scale(1.06);
    }

`