import React from 'react';
import { Question } from '../utils/Questions';
import { useContext, useState } from 'react';
import { QuestionContext } from '../Context/Question';
const AnotherUserParticipant = () => {
    const { question, answers } = useContext(QuestionContext);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    };

    return (
        <>
            <div className="flex justify-around mt-10">
                <h1 className="text-4xl text-center font-bold">
                    User Participant
                </h1>
            </div>
            <div className="ml-10 mt-10">
                <h2> Question : {question[0].question}</h2>
            </div>
            <form onSubmit={handleSubmit}>
                {answers.map(({ id, label, votes }) => {
                    return (
                        <div key={id} className=" flex gap-10 ml-10 mt-5">
                            <label htmlFor="answer">
                                <input
                                    type="radio"
                                    name="answer"
                                    value={label}
                                />
                                {label}
                            </label>
                        </div>
                    );
                })}
                <button className="bg-blue-200 py-3 px-6 mx-auto ml-10">
                    Submit
                </button>
            </form>
        </>
    );
};

export default AnotherUserParticipant;
