import "./Option.css"
import {useContext} from "react";
import {QuizContext} from "../context/quiz.jsx";

const Option = ({option, selectOption, answer}) => {
    const [quizState, dispatch] = useContext(QuizContext)
    return (
        <div className={`option ${quizState.answerSelected && option === answer ? "correct" : ""}
        ${quizState.answerSelected && option !== answer ? "wrong" : ""}`}
             onClick={()=> selectOption(option)}>
    <p>{option}</p>
        </div>
    );
};

export default Option;