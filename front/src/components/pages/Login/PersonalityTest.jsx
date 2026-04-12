import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PersonalityTest.css';
import { toast } from 'react-toastify';
import api from '../../../config/axios_instance';
import { ENV } from '../../../config/config';


// Define the questions for the personality test
const questions = [
  {
    id: 1,
    title:'Question 1',
    text: 'Am the life of the party',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    alpha:"A"
  },
  {
    id: 2,
    title:'Question 2',
    text: 'Sympathize with others’ feelings',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    alpha:"B"
  },
  {
    id: 3,
    title:'Question 3',
    text: 'Get chores done right away',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    alpha:"C"
  },
  {
    id: 4,
    title:'Question 4',
    text: 'Have frequent mood swings',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    alpha:"D"
  },
  {
    id: 5,

 title:'Question 5',  
   text: 'Have a vivid imagination',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    alpha:"E"
  },
  {
    id: 6,

 title:'Question 6',    text: 'Don’t talk a lot',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 7,

  title:'Question 7',   
  text: 'Am not interested in other people’s problems',
  options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 8,

 title:'Question 8',   
  text: 'Often forget to put things back in their proper place',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 9,

 title:'Question 9',    text: 'Am relaxed most of the time',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 10,
     title:'Question 10',
    text: 'Am not interested in abstract ideas',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 11,
     title:'Question 11',
    text: 'Talk to a lot of different people at parties',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 12,
     title:'Question 12',
    text: 'Feel others’ emotions',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 13,
     title:'Question 13',
    text: 'Like order',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 14,
     title:'Question 14',
    text: 'Get upset easily',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 15,
     title:'Question 15',
    text: 'Have difficulty understanding abstract ideas',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 16,
     title:'Question 16',
    text: 'Keep in the background',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 17,
     title:'Question 17',
    text: 'Am not really interested in others',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 18,
     title:'Question 18',
    text: 'Make a mess of things',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 19,
     title:'Question 19',
    text: 'Seldom feel blue',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 20,
     title:'Question 20',
    text: 'Do not have a good imagination',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
];

/**
 * Functional component for the PersonalityTest form.
 *
 * This component provides a personality test form with multiple-choice questions.
 *
 * @component
 * @returns {JSX.Element} PersonalityTest component
 */
const PersonalityTest = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const questionsPerPage = 10; 

// Function to handle moving to the next set of questions
  const handleNext = () => {

    const nextQuestion = currentQuestion + questionsPerPage;
    if (nextQuestion >= questions.length) return;

    if (userAnswers.slice(currentQuestion, nextQuestion).some((answer) => answer === null)) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      setCurrentQuestion(nextQuestion);
    }
  };

   // Function to handle moving to the previous set of questions
  const handlePrev = () => {
    setShowErrorMessage(false);
    const prevQuestion = Math.max(currentQuestion - questionsPerPage, 0);
    setCurrentQuestion(prevQuestion);
  };

/**
 * Handles selecting an answer for a question.
 *
 * @param {string} selectedOption - The selected option for the question.
 * @param {number} questionId - The ID of the question being answered.
 */
  const handleAnswer = (selectedOption, questionId) => {
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionId - 1] = selectedOption; 
      return updatedAnswers;
    });
  };
  
/**
 * Handles form submission.
 *
 * @param {Event} e - The form submission event.
 */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const hasUnansweredQuestions = userAnswers.some((answer) => answer === null);
    if (hasUnansweredQuestions) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      try {
        const user = JSON.parse(localStorage.getItem("user")); 
        const token = JSON.parse(localStorage.getItem("token")); 
        const response = await api.post(`${ENV.appClientUrl}/personality/${user?.id}`, { userAnswers: userAnswers }, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });

        if(response?.data?.success) {
          toast.success(`You have an ${response?.data?.userPersonality} personality!`);
          navigate('/users/dashboard');
        }else{
          toast.error(response?.data?.message);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message)
      }
    }
  };

  /**
 * Starts the personality test by setting the testStarted state to true
 * and resetting the current question index to 0.
 *
 * @param {Event} e - The event object.
 */
  const startTest = (e) => {
    e.preventDefault();
    setTestStarted(true);
    setCurrentQuestion(0);
  };

  /**
 * Renders the questions for the personality test.
 * 
 * @returns {JSX.Element} - The JSX for rendering the questions.
 */
  const renderQuestions = () => {
    return questions.slice(currentQuestion, currentQuestion + questionsPerPage).map((question, index) => (
      <React.Fragment key={question.id}>
        <label>{question.title}</label>
        <h3>{question.text}</h3>
        {showErrorMessage && (
          <p className="error-message">Select an option.</p>
        )}
        <div className='opt_wraper'>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="option-container">
              <input
                type="radio"
                value={option}
                checked={userAnswers[currentQuestion + index] === option}
                onChange={() => handleAnswer(option, question.id)}
              />
              <label >
                {option}
              </label>
            </div>
          ))}
        </div>
      </React.Fragment>
    ));
  };

  return (
    <div className="sign-form personality_test_wraper">
      <div className="sign-body personality__body" id="container">
        <Link to={`/login`}>
          <p>
            <i className="arrow left"></i>Back to Login
          </p>
        </Link>
        {testStarted ? (
          <form>
            <>
            {showErrorMessage && (
                <p className="error-message">Select an option for all questions.</p>
              )}
              {renderQuestions()}
              <div className="button-container">
                {currentQuestion > 0 && (
                  <button type="button" onClick={handlePrev} className="prev-button">
                    Previous
                  </button>
                )}
                {currentQuestion + questionsPerPage < questions.length ? (
                  <button type="button" onClick={handleNext} className="next-button">
                    Next
                  </button>
                ) : (
                  <button type="button" onClick={handleFormSubmit} className="submit-button">
                    Submit
                  </button>
                )}
              </div>
            </>
          </form>
        ) : (
          <div className="startTestPage">
            <form onSubmit={startTest} className='align-items-center'>
              <h2 id="startTestPageHeading">Personality Test</h2>
              <p>Get to know your personality now!</p>
              <button type="button" id="startTestPageButton" onClick={startTest}>
                Start
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalityTest;

