import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import style from '../styles/Resform.module.css'



export default function Create_co(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const submitcourier = async (e: { preventDefault: () => void; }) =>{
    e.preventDefault();
    try{
    const response = await axios.post('http://192.168.0.106:8090/couriers',
    {
        name:name, 
        email:email,
        password:password,
        cpf:cpf
    });
    console.log(response.data)
} catch(error){
        console.log(error)
    }

}
return (
    <>

<ul className="nav nav-pills nav-fill justify-content-center">
  <li className="nav-item">
  <Link href="/administration_res"><a className="nav-link" >Administration of restaurants</a></Link>
  </li>
  <li className="nav-item">
  <Link href="/administration_couriers"><a className="nav-link" >Administration of couriers</a></Link>
  </li>
</ul>
    <div className={style.body}>

<div className="container">
        <div className=" text-center mt-5 ">

            <h1 className={style.hei1}>Courier Form</h1>
                
            
        </div>

    
    <div className="row ">
      <div className="col-lg-7 mx-auto">
        <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
       
            <div className = "container">
                             <form id="contact-form" onSubmit={submitcourier} role="form">

            

            <div className="controls">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input 
                            id="name" 
                            type="text" 
                            name="name" 
                            className="form-control" 
                            placeholder="Please enter your name *" 
                            onChange={(e)=> setName(e.target.value)}
                            />
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="Email">Email *</label>
                            <input 
                            id="Email" 
                            type="text" 
                            name="Email" 
                            className="form-control" 
                            placeholder="Please enter your Email"
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                                                            </div>
                    </div>

                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="Password">Password *</label>
                            <input 
                            id="Password" 
                            type="password" 
                            name="Password" 
                            className="form-control" 
                            placeholder="Please enter your password *" 
                            onChange={(e)=> setPassword(e.target.value)} />
                           
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="Cpf">Cpf *</label>
                            <input 
                            id="Cpf" 
                            type="text" 
                            name="Cpf" 
                            className="form-control" 
                            placeholder="Please enter your Cpf*"
                            onChange={(e)=> setCpf(e.target.value)}
                            />
                            
                        </div>
                    </div>
                    <div className="col-md-12">
                       
                     <input type="submit" className="btn btn-success btn-send  pt-2 btn-block" value="Teu toba">
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