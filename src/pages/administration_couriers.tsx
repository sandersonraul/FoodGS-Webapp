import style from '../styles/Crud.module.css'
import axios from 'axios'
import Link from 'next/link'
import { NextPage } from 'next';
import Navbar from '../components/navbar';
import router from 'next/router';

const Route_Courier_Id = "couriers/[id]";
type Courier = {
  id: number,
  name: string,
  cpf: string,
  email: string,
  created_at: any,
  updated_at: any,
  active: boolean
}
type administration_couriersProps = {
  couriers: Courier[];
};

const Administration_couriers: NextPage<administration_couriersProps> = ({ couriers }: administration_couriersProps) => {
  const deleteCourier = async (courier_id: any) => {
    try {
      const response = axios.delete(`http://localhost:8090/couriers/${courier_id}`)
    } catch (error) {
      console.log(error)
    } router.push("/administration_res")
  }

  return (
    <>
      <Navbar />
      <div className={style.body}>
        <div className="container-sm">
          <h1 className='text-center'>Couriers administration</h1>
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
              {couriers.sort((a,b) => a.id - b.id).map((courier) => (
                <tr key={courier.id}>
                  {courier.active === true && <>
                    <td>{courier.name}</td>
                    <td>{courier.cpf}</td>
                    <td>{courier.email}</td>
                    <td>{courier.created_at}</td>
                    <td>{courier.updated_at}</td>
                    <td>
                      
                        <Link href={{
                          pathname: Route_Courier_Id,
                          query: { id: courier.id }
                        }}><button> Edit </button></Link>
                      
                      <button style={{marginLeft:"10px"}} onClick={() => deleteCourier(courier.id)}> remove</button>
                    </td>
                  </>}
                </tr>
              ))}

            </tbody>
          </table>
          <Link href={"courier_form"}>
            <a className="btn btn-primary" role="button">Create courier</a></Link>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:8090/couriers`);
  return {
    props: {
      couriers: res.data
    }
  };
}

export default Administration_couriers