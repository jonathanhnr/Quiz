import "./GameOver.css"
import wellDone from "../img/welldone.svg"
import {useContext} from "react";
import {QuizContext} from "../context/quiz.jsx";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    return (
        <div id={"gameover"}>
            <h2>Fim do jogo</h2>
            <p>Pontuação:{quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} {""} perguntas</p>
            <img src={wellDone} alt="Fim do quiz"/>
            <button onClick={() => dispatch({type:"NEW_GAME"})}>Reiniciar</button>
        </div>
    );
};

export default GameOver;