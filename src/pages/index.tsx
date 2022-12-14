
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import style from '../styles/Resform.module.css'
import Axios from 'axios'
import Router from 'next/router'



const Home = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const submitRestaurant = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:8090/restaurants',
        {
          name: name,
          email: email,
          cnpj: cnpj
        }
      )
      //console log to token
      console.log(response.data[1])
    }
    catch (error) {
      console.log(error)
    }

    Router.push('/administration_res')
  }
  return (
    <>
      <section className={styles.home} id="home">

        <div className={styles.content}>
          <h3>Your best delivery service you could ever ask for</h3>
        </div>

      </section>
      <section className={styles.body}>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1 className='text-start'>About</h1>
              <p className='text-start'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="col">
              <Image src={'/image/teamwork_and_team_building.png'} width={"80%"} height={"60%"} layout="responsive"></Image>
            </div>
          </div>
          <h1 className={styles.spacing}>How does it work?</h1>
          <div className='row row-cols1 row-cols-md3 g-4'>
            <div className='col'>
              <Image src={'/image/Food.png'} width={"80%"} height={"80%"} layout="responsive"></Image>

              <p className='text-center'>The restaurant put the order</p>
            </div>
            <div className='col'>
              <Image src={'/image/courier.png'} layout="responsive" width={"80%"} height={"80%"}></Image>

              <p className='text-center'>We let available a service to a restaurant user, to inform us what order they want to deliver</p>
            </div>
            <div className='col'>
              <Image src={'/image/cliente.png'} layout="responsive" width={"80%"} height={"80%"}></Image>

              <p className='text-center'>And we deliver to the restaurant client the order</p>
            </div>
          </div>
        </div>
      </section>

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

export default Home

