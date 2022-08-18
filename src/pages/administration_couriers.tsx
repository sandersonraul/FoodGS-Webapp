import style from '../styles/Crud.module.css'
import axios from 'axios'
import Link from 'next/link'
import { NextPage } from 'next';
const Route_Courier_Id = "couriers/[id]";
type Courier ={
    id:number,
    name:string,
    cpf:string,
    email:string,
    created_at:any,
    updated_at:any
}
type administration_couriersProps = {
    couriers: Courier[];
  };

const Administration_couriers: NextPage<administration_couriersProps> = ({ couriers }: administration_couriersProps)=>{
//   const posts = restaurant.data;
// posts.map()
console.log(couriers)
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
        <div className="container-sm">
          <h1>Couriers administration ok?</h1>
        <table className="table table-responsive">
        
  <thead className='table-dark'>

    <tr>
      <th scope="col">name</th>
      <th scope="col">cpf</th>
      <th scope="col">email</th>
      <th scope="col">created_at</th>
      <th scope="col">updated_at</th>
      <th scope='col'>...</th>
    </tr>
  </thead>
  <tbody className='table-group-divider'>
  {couriers.map((courier) => (
        <tr key={courier.id}>
          <td>{courier.name}</td>
          <td>{courier.cpf}</td>
          <td>{courier.email}</td>
          <td>{courier.created_at}</td>
          <td>{courier.updated_at}</td>
          <td><Link href={{pathname: Route_Courier_Id,
          query: {id:courier.id}}}>edit/</Link>
          <Link href={''}> remove</Link></td>
          </tr>
      ))}
    
  </tbody>
</table>
<a className="btn btn-primary" href="/create_de" role="button">Create deliveries</a>
        </div>
        </div>
        </>
    )
}

export async function getServerSideProps(){
    const res = await axios.get(`http://localhost:8090/couriers`);
      return { 
        props: {
          couriers: res.data
        }
      };
  }

export default Administration_couriers