import axios from 'axios'
import Router  from 'next/router'
import { useState } from 'react'
import style from '../styles/Resform.module.css'
import Navbar from '../components/navbar'

export default function Courier_form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const submitcourier = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8090/couriers',
                {
                    name: name,
                    email: email,
                    password: password,
                    cpf: cpf
                });
            console.log(response.data)
        } catch (error) {
            console.log(error)
        } Router.push('/administration_couriers')

    } 
    return (
        <>

            <Navbar/>
            <div className={style.body}>

                <div className="container">
                    <div className=" text-center mt-5 ">

                        <h1 className={style.hei1}>Courier Form</h1>


                    </div>


                    <div className="row ">
                        <div className="col-lg-7 mx-auto">
                            <div className="card mt-2 mx-auto p-4 bg-light">
                                <div className="card-body bg-light">

                                    <div className="container">
                                        <form id="contact-form" onSubmit={submitcourier} role="form">



                                            <div className="controls">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name *</label>
                                                        <input
                                                            id="name"
                                                            type="text"
                                                            name="name"
                                                            required
                                                            minLength={4}
                                                            maxLength={50}
                                                            className="form-control"
                                                            placeholder="Please enter your name *"
                                                            onChange={(e) => setName(e.target.value)}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email *</label>
                                                        <input
                                                            id="email"
                                                            type="text"
                                                            name="email"
                                                            required
                                                            minLength={6}
                                                            maxLength={50}
                                                            className="form-control"
                                                            placeholder="Please enter your email"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="password">Password *</label>
                                                        <input
                                                            id="password"
                                                            type="password"
                                                            name="password"
                                                            required
                                                            minLength={5}
                                                            maxLength={50}
                                                            className="form-control"
                                                            placeholder="Please enter your password *"
                                                            onChange={(e) => setPassword(e.target.value)} />

                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="Cpf">Cpf *</label>
                                                        <input
                                                            id="Cpf"
                                                            type="text"
                                                            name="Cpf"
                                                            required
                                                            minLength={5}
                                                            maxLength={50}
                                                            className="form-control"
                                                            placeholder="Please enter your Cpf*"
                                                            onChange={(e) => setCpf(e.target.value)}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="col-md-12">

                                                    <input type="submit" className="btn btn-success btn-send  pt-2 btn-block" value="Register">
                                                    </input>

                                                </div>



                                            </div>
                                        </form>
                                    </div>
                                </div>


                            </div>


                        </div>


                    </div>
                </div>
            </div>
            <style jsx>{`.btn-send{
                        font-weight: 300;
                        text-transform: uppercase;
                        letter-spacing: 0.2em;
                        width: 80%;
                        margin-top:10px;
                        margin-left: 10%;
                        margin-right:10%;}
                        .card{
                            margin-left: 10px;
                            margin-right: 10px;
                        }
                     `}</style>
        </>
    )
}