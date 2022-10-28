import "./Welcome.css"
import Quiz from "../img/quiz.svg"
import {useContext} from "react";
import {QuizContext} from "../context/quiz.jsx";

const Welcome = () => {
     const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div id="welcome">
            <h2>Seja bem vindo</h2>
            <p>Clique no botao para iniciar</p>
            <button onClick={() => dispatch({type:"CHANGE_STATE" })}>iniciar</button>
            <img src={Quiz} alt="Inicio do quiz"/>
        </div>
    );
};

export default Welcome;