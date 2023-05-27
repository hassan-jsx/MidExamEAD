import { createContext } from 'react';
import { Question } from '../utils/Questions';
import { useState } from 'react';
export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
    const [question, setQuestion] = useState(Question);
    const [answers, setAnswers] = useState(question[0].choices);
    console.log('question', question);
    return (
        <QuestionContext.Provider
            value={{
                question,
                setQuestion,
                answers,
                setAnswers,
            }}>
            {children}
        </QuestionContext.Provider>
    );
};
