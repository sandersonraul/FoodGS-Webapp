import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import api from "../services/api";
import { useContext } from 'react';
import Link from 'next/link';

// const defaultEndpoint = 'http://127.0.0.1:8090/restaurants'
// type Episode = {
//   id: string;
//   title: string;
//   members: string;
//   description: string;
//   thumbnail: string;
// };

// type EpisodeProps = {
//   episode: Episode;
// };
// export async function getServerSideProps() {
//   const res = await fetch(defaultEndpoint);
//   const data = await res.json();
//   return{
//     props:{
//       data
//     }
//   }
  
// }



function Home () {
// console.log('data',data)
// const { name, cnpj, email, password, active, address_id } = data;
// const { results = []} = data
  return(
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
      <h1 className='text-start'>Column</h1>
      <p className='text-start'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
    <div className="col">
      <img src='/image/teamwork_and_team_building.png'></img>
    </div>
  </div>
  <h1 className={styles.spacing}>How does it work?</h1>
  <div className='row row-cols1 row-cols-md3 g-4'>
    <div className='col'>
      <img src='/image/Food.png' width="80%" height="80%"></img>
      <p className='text-center'>The restaurant put the order</p>
    </div>
    <div className='col'>
      <img src='/image/courier.png' width="80%" height="80%"></img>
      <p className='text-center'>We let available a service to a restaurant user, to inform us what order they want to deliver</p>
    </div>
    <div className='col'>
      <img src='/image/cliente.png' width="80%" height="80%"/>
      <p className='text-center'>And we deliver to the restaurant client the order</p>
    </div>
  </div>
  <button type="button" className="btn btn-primary" data-bs-toggle="button">Toggle button</button>
</div>
</section>
      {/* <ul>{results.map((result: { id: any; name: any; })=>{
      const {id, name} = result;
      return (
        <li key={id} className="card">
          <a href=''>
          <h1>{name}</h1>
          </a>

        </li>
      )
     })}
      <li></li>
     </ul>  */}
     </>
  ) 
 
}

export default Home
