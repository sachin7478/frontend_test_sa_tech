import React, {useEffect, useState} from "react";
import {QUESTIONS} from "./questions";
import SingleQuestion from './SingleQuestion';

const App = () =>{
    let [allAnswer, setAllAnswered] = useState([])
    let [result, setResult] = useState({})
    const updateAnswer = (key, ans) =>{
      setAllAnswered(prev =>{
        let obj = {key:key, ans:ans}
        return [...prev, obj]
      })
    }

    useEffect(()=>{
      const trueAnswers = allAnswer.filter(({ans, key})=>{
        return ans === true
      })
      let trueAns = trueAnswers?.length || 0
      const resObj = {
        answered: allAnswer?.length || 0,
        trueAnswers: trueAns,
        score: (trueAns * 100) / Object.keys(QUESTIONS).length
      }
      console.log(resObj)
      console.log('res', resObj)
      setResult(resObj)
    },[allAnswer])
  
    return (
      <div className="main__wrap">
        <main className="container">
          <div className="score">
            <div>
              Answered Questions : <span style={{color:'blue', weight:'900'}}>{result.answered}</span>
            </div>
            <div>
              True Answers : <span style={{color:'green', weight:'900'}}>{result.trueAnswers}</span>
            </div>
            <div>
              Score Questions : <span style={{color:'orange', weight:'900'}}>{result.score}%</span>
            </div>
          </div>
          <hr />
          <div>
            {
              Object.keys(QUESTIONS).map((key) =>{
                return <SingleQuestion QId={key} question={QUESTIONS[key]} key={key} updateAnswer={updateAnswer}/>
              })
            }
          </div>
        </main>
      </div>
    );
}

export default App;