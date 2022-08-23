import axios from 'axios';
import Router from 'next/router';
import { useState} from 'react';
import Navbar from '../components/navbar';
import style from '../styles/Resform.module.css'



export default function Resform() {
    /* set and attributes of the endpoint*/
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const submitRestaurant = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8090/restaurants',
                {
                    name: name,
                    email: email,
                    cnpj: cnpj

                }
            
            )
            
            



        } catch (error) {
            console.log(error)
        }Router.push('/administration_res')

        /* send to the adm restaurants route */

    }

    return (
        <>
            <Navbar />
            <div className={style.body}>

                <div className="container">
                    <div className=" text-center mt-5 ">

                        <h1 className={style.hei1}>Restaurant Form</h1>


                    </div>


                    <div className="row ">
                        <div className="col-lg-7 mx-auto">
                            <div className="card mt-2 mx-auto p-4 bg-light">
                                <div className="card-body bg-light">

                                    <div className="container">
                                        <form id="contact-form" role="form" onSubmit={submitRestaurant}>
                                            <div className="controls">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name *</label>
                                                        <input id="name"
                                                            type="text"
                                                            name="name"
                                                            className="form-control"
                                                            placeholder="Please enter your name *"
                                                            required
                                                            minLength={5}
                                                            maxLength={50}
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
                                                            required
                                                            minLength={5}
                                                            maxLength={50}
                                                            placeholder="Please enter your email *"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="cnpj">Cnpj *</label>
                                                        <input
                                                            id="cnpj"
                                                            type="text"
                                                            name="cnpj"
                                                            required
                                                            minLength={5}
                                                            maxLength={50}
                                                            className="form-control"
                                                            placeholder="Please enter your cnpj *"
                                                            onChange={(e) => setCnpj(e.target.value)}
                                                        />

                                                    </div>
                                                </div>


                                                <div className="col-md-12">


                                                    <button type="submit" className="btn btn-success btn-send  pt-2 btn-block">
                                                        Register
                                                    </button>

                                                
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
            {/* style for a button */}
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