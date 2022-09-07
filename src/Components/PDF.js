import React from 'react'
import Pdf from "react-to-pdf"


const ref = React.createRef();

const PDF = ({fname , lname , email, contact}) => {
    return (
        <><div className='container PDF'>
            <div ref={ref}>
                <h1>Hello {fname} {lname}</h1>
                <h3>Your Email id id :{email}</h3>
                And contact number is {contact}
                <h1>Thanks :) </h1>
                <p>Have a good Day...</p>
            </div>

            <Pdf targetRef={ref} >
                {({ toPdf }) => <button className='btns' onClick={toPdf}>Convert to pdf</button>}
            </Pdf>
        </div>
            
        </>

    )
}

export default PDF