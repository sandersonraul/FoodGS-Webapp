import axios from 'axios';
import Router, { useRouter } from 'next/router'
import { useState } from 'react';
import style from '../../styles/Resform.module.css'
export default function Updateres() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const submitRestaurant = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8090/restaurants/${router.query.id}`,
                {
                    name: name,
                    email: email,
                    cnpj: cnpj
                });
            console.log("teste:", response.data)
        } catch (error) {
            console.log(error)
        } Router.push('/administration_res')

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
                                                        <label htmlFor="cnpj">Cnpj *</label>
                                                        <input
                                                            id="cnpj"
                                                            type="text"
                                                            name="cnpj"
                                                            className="form-control"
                                                            placeholder="Please enter your cnpj *"
                                                            onChange={(e) => setCnpj(e.target.value)}
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