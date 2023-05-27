import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionContext } from '../Context/Question';

const PollDisplay = () => {
    const navigate = useNavigate();
    const { question, answers } = useContext(QuestionContext);
    return (
        <>
            <div className="flex justify-around mt-10">
                <h1 className="text-4xl text-center font-bold">Pool Display</h1>
                <button
                    onClick={() => {
                        navigate('/user');
                    }}
                    className="bg-blue-400 px-5 py-3 rounded-md">
                    Add user
                </button>
            </div>
            <div className="ml-7 text-2xl mt-3">
                <h1 className="font-bold inline-block"> Question 01 :</h1>
                <span className="ml-3">{question[0].question}</span>
                {answers.map(({ id, label, votes }) => {
                    return (
                        <div key={id} className=" flex gap-10">
                            <span>{label}</span>
                            <span> vote : {votes}</span>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default PollDisplay;
