import { FormEvent, KeyboardEvent, useState } from 'react';

import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { Tweet } from '../components/Tweet';


import './cssPages/Status.css';
import { PaperPlaneRight } from 'phosphor-react';


export function Status(){
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
        'answ 1',
        'answ 2',
        'answ 3'
    ])
    
    function createNewAnswer(e: FormEvent){
        e.preventDefault()
        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
    }

    function handleHotkeySubmit(e: KeyboardEvent){
        if(e.key === 'Enter' && e.ctrlKey){
            setAnswers([newAnswer, ...answers])
            setNewAnswer('')
        }
    }

    return(
        <main className="status">
            <Header title="Tweet"/>
            <Tweet content="tweet"/>
            <Separator />
            
            <form className="answer-tweet-form" onSubmit={createNewAnswer}>
                <label htmlFor="tweet">
                    <img src="https://github.com/rafaoliveira22.png" alt="user profile image" />
                    <textarea 
                        id="tweet" 
                        value={newAnswer}
                        placeholder="Tweet your answer"
                        onKeyDown={handleHotkeySubmit}
                        onChange={(e) => {
                            setNewAnswer(e.target.value)
                        }}
                    />
                </label>

                <button type="submit">
                    <PaperPlaneRight />
                    <span>Answer</span>
                </button>
            </form>

            
            {answers.map(answer => {
                return <Tweet key={answer} content={answer}/>
            })}
        </main>
    )
}