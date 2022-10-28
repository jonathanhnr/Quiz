import './App.css'
import Welcome from "./components/Welcome.jsx";
import {QuizContext} from "./context/quiz.jsx";
import {useContext, useEffect} from "react";
import Question from "./components/Question.jsx";
import GameOver from "./components/GameOver.jsx";



function App() {

    const [quizState, dispatch] = useContext(QuizContext)

    useEffect(() => {
        dispatch({type: "REORDER_QUESTIONS"})
    },[] )

    return (
        <div className="App">
            <h1>Quiz de programacao</h1>
            {quizState.gameStage === "Start" && <Welcome/>}
            {quizState.gameStage === "Playing" && <Question/>}
            {quizState.gameStage === "End" && <GameOver/>}
        </div>
    )
}

export default App
