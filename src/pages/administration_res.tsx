import axios  from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import style from '../styles/Crud.module.css'

const Route_Restaurant_Id = "restaurants/[id]";
type Restaurant ={
  id:number,
  name:string,
  cnpj:string,
  email:string,
  active: boolean,
  created_at:any,
  updated_at:any
}
type administration_restaurantsProps = {
  restaurants: Restaurant[];
};



const Administration_restaurants: NextPage<administration_restaurantsProps> = ({ restaurants }: administration_restaurantsProps ) => {
  const deleteComent = async (restaurant_id: any ) =>{
    try{
    const response = axios.delete(`http://localhost:8090/restaurants/${restaurant_id}`)
  }catch(error){
    console.log(error)
  }}
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

<ul>

{/* {restaurants.map((restaurant) =>(
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))} */}


</ul>
        <div className={style.body}>
        <div className="container-sm">
          <h1>Restaurant administration ok?</h1>
        <table className="table table-responsive">
        
  <thead className='table-dark'>

    <tr>
      <th scope="col">name</th>
      <th scope="col">cpnj</th>
      <th scope="col">email</th>
      <th scope="col">created_at</th>
      <th scope="col">updated_at</th>
      <th scope='col'>...</th>
    </tr>
  </thead>
  <tbody className='table-group-divider'>
    {restaurants.map((restaurant) => (
      
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.cnpj}</td>
          <td>{restaurant.email}</td>
          <td>{restaurant.created_at}</td>
          <td>{restaurant.updated_at}</td>
          <td><button><Link href={{pathname: Route_Restaurant_Id,
          query: {id:restaurant.id}}}>edit/</Link></button>
          <button onClick={()=>deleteComent(restaurant.id)}> remove</button></td>
          </tr>
      ))}

  </tbody>
</table>
        </div>
        </div>
        </>
    )
}

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiI0NTY0MjJjMC05ZGRhLTQ1ZjAtODU0YS1iODY0M2IwMTYwMGIiLCJleHAiOjE2NjA4NDMzOTJ9.oIcXUuJ9QlmxzXdNiSDkY0enQQGx4mgpgsdjm0hRm1I"
export async function getServerSideProps(){
  const res = await axios.get(`http://localhost:8090/restaurants`,
  {headers:{
    "x-access-token": token
  }
  });
    return { 
      props: {
        restaurants: res.data
      }
    };
}

export default Administration_restaurants