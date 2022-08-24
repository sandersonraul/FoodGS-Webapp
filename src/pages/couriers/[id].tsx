import axios from 'axios';
import Router, { useRouter } from 'next/router'
import { useState, useCallback } from 'react';
import toast from "../../components/Toast"
import style from '../../styles/Resform.module.css'
export default function UpdateCouriers() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const submitCourier = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8090/couriers/${router.query.id}`,
                {
                    name: name,
                    email: email,
                    cpf: cpf
                });
        } catch (error) {
            console.log(error)
        } Router.push('/administration_couriers')

    }
    
    return (
        <>
            <div className={style.body}>

                <div className="container">
                    <div className=" text-center mt-5 ">

                        <h1 className={style.hei1}>Want to join us? Register you restaurant!</h1>


                    </div>
                    <div className="row ">
                        <div className="col-lg-7 mx-auto">
                            <div className="card mt-2 mx-auto p-4 bg-light">
                                <div className="card-body bg-light">

                                    <div className="container">
                                        <form id="contact-form" role="form" onSubmit={submitCourier}>
                                            <div className="controls">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name *</label>
                                                        <input id="name"
                                                            type="text"
                                                            name="name"
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
                                                            type="email"
                                                            name="email"
                                                            className="form-control"
                                                            placeholder="Please enter your email *"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="cpf">Cpf *</label>
                                                        <input
                                                            id="cpf"
                                                            type="text"
                                                            name="cpf"
                                                            className="form-control"
                                                            placeholder="Please enter your cpf *"
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
    );
}