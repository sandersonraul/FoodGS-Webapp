import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import style from '../styles/Crud.module.css'
import Navbar from '../components/navbar';
/* Type of the endpoint */
type Restaurant = {
  id: number,
  name: string,
  cnpj: string,
  email: string,
  active: boolean,
  created_at: any,
  updated_at: any
}
/* Props to the page */
type administration_restaurantsProps = {
  restaurants: Restaurant[];
};



const Administration_restaurants: NextPage<administration_restaurantsProps> = ({ restaurants }: administration_restaurantsProps) => {
  /* Delete function */
  
  const deleteRestaurant = async (restaurant_id: any) => {
    try {
      const response = axios.delete(`http://localhost:8090/restaurants/${restaurant_id}`)
    } catch (error) {
      console.log(error)
    }
  }
  return (

    <>
    {/* HTML */}

      <Navbar />

      <ul>


      </ul>
      <div className={style.body}>
        <div className="container-sm">
          <h1 className='text-center'>Restaurant administration</h1>
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
              {restaurants.sort((a,b) => a.id - b.id).map((restaurant) => (
/* If to determine if the table is active or not
  And map function to map the whole table
*/
                <tr key={restaurant.id}>
                  {restaurant.active === true && <>
                    <td>{restaurant.name}</td>
                    <td>{restaurant.cnpj}</td>
                    <td>{restaurant.email}</td>
                    <td>{restaurant.created_at}</td>
                    <td>{restaurant.updated_at}</td>
                    <td>
                      {/* Query to pass the id to the dynamic page */}
                      <Link href={{
                      pathname: "restaurants/[id]",
                      query: { id: restaurant.id }
                    }}><button >
                          Edit
                    </button></Link>
                      <button style={{marginLeft:"10px"}} onClick={() => deleteRestaurant(restaurant.id)}> remove</button>
                    </td>
                  </>}
                </tr>
              ))}

            </tbody>
          </table>
          <Link href={"Resform"}>
            <a className="btn btn-primary" role="button">Create Restaurant</a></Link>
        </div>
      </div>
    </>
  )
}
// your token
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiI5ZWJjZTZlNC01MTgxLTRjMTktODZjOS1jZmU3MDMyYzgzODciLCJleHAiOjE2NjEwMTQ0ODB9.IyYTeOFsSHSbCKk_Y1Hki1vYzJ8CTpNS7-jaJcFsdFU"
export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:8090/restaurants`,
    {
      headers: {
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