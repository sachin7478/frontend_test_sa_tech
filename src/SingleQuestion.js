import React, { useState } from "react";

const SingleQuestion  = ({question, QId, updateAnswer}) =>{
    let [boolanswered, setAnswered] = useState(false)
    let updateQuestion = (e) => {
        const val = 'true' === e.target.id;
        e.target.style.backgroundColor ="green"
        updateAnswer(QId, val)
        setAnswered(true)
    }

    return(<>
        <div className="singleQuestion">
            <div>
                {question}
            </div>
            <div className="btnGroup">
                <button disabled={boolanswered} type="button" id="true" onClick={updateQuestion}>Yes</button>
                <button disabled={boolanswered} type="button" id="false" onClick={updateQuestion}>No</button>
            </div>
        </div>
    </>)
}
export default SingleQuestion;