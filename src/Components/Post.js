import React, { useState } from 'react'
import styled from 'styled-components'
import PDF from './PDF'

const Post = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [number, SetNumber] = useState("")
    const [country, SetCountry] = useState("")
    const [city, setCity] = useState("")
    const [submitform, setSubmitform] = useState(false)


    const Submitform = (e) => {
        e.preventDefault()
        setSubmitform(true)
    }

    return (<>
        
        <h2>CONVERT YOUR DATA INTO PDF... </h2>
        {
            !submitform ? (

                <Container>
                    <div className="container">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label">First name</label>
                                <input name='fname' onChange={(e) => setFname(e.target.value)} value={fname} type="text" className="form-control" required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Last name</label>
                                <input type="text" name='lname' onChange={(e) => setLname(e.target.value)} value={lname} className="form-control" required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Mobile Number</label>
                                <div className="input-group">
                                    <input type="number" name='number' onChange={(e) => SetNumber(e.target.value)} value={number} className="form-control" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Email</label>
                                <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Country</label>
                                <input type="text" name='country' onChange={(e) => SetCountry(e.target.value)} value={country} className="form-control" required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">City</label>
                                <input type="text" name='city' onChange={(e) => setCity(e.target.value)} value={city} className="form-control" required />
                            </div>
                            <div className="col-12">
                                <button onClick={Submitform} type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>

                </Container>
            ) : <PDF fname={fname} lname={lname} email={email} contact={number} />
        }

    </>
    )

}

export default Post


const Container = styled.div`

    width: 100%;
    max-width: 800px;
    display: table;
    margin: 0 auto;
    padding: 20px 50px;
    form{
        border-radius: 2px;
        box-shadow: 2px 4px 5px;
        background-image: linear-gradient(to left, #0ba360 0%, #3cba92 100%);
        margin-top: 2rem;
        padding: 12px;
        label{
        color: black;
        font-size: 1.2rem;
        }
}

`