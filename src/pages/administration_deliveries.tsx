import style from '../styles/Crud.module.css'
import axios from 'axios'
import Link from 'next/link'
import { NextPage } from 'next';
import Navbar from '../components/navbar';
import router from 'next/router';

const Route_Delivery_Id = "deliveries/[id]";
type Delivery = {
    id: number,
    status: string,
    created_at: any,
    updated_at: any,
}
type administration_deliveriesProps = {
    deliveries: Delivery[];
};

const Administration_deliveries: NextPage<administration_deliveriesProps> = ({ deliveries }: administration_deliveriesProps) => {
    const deleteDelivery = async (delivery_id: any) => {
        try {
            const response = axios.delete(`http://localhost:8090/deliveries/${delivery_id}`)
        } catch (error) {
            console.log(error)
        } router.push("/administration_res")
    }

    return (
        <>
            <Navbar />
            <div className={style.body}>
                <div className="container-sm">
                    <h1 className='text-center'>Deliveries Administration</h1>
                    <table className="table table-responsive">

                        <thead className='table-dark'>

                            <tr>
                                <th scope="col">status</th>
                                <th scope="col">created_at</th>
                                <th scope="col">updated_at</th>
                                <th scope='col'>...</th>
                            </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {deliveries.sort((a,b) => a.id - b.id).map((delivery) => (
                                <tr key={delivery.id}>
                                    <td>{delivery.status}</td>
                                    <td>{delivery.created_at}</td>
                                    <td>{delivery.updated_at}</td>
                                    <td>
                                        <button>
                                            <Link href={{
                                                pathname: Route_Delivery_Id,
                                                query: { id: delivery.id }
                                            }}>edit/</Link>
                                        </button>
                                        <button onClick={() => deleteDelivery(delivery.id)}> remove</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiI5ZWJjZTZlNC01MTgxLTRjMTktODZjOS1jZmU3MDMyYzgzODciLCJleHAiOjE2NjEwMTQ0ODB9.IyYTeOFsSHSbCKk_Y1Hki1vYzJ8CTpNS7-jaJcFsdFU"

export async function getServerSideProps() {
    
    const res = await axios.get(`http://localhost:8090/deliveries`,
    
    {
        headers: {
          "x-access-token": token
        }
      });
    
    return {
        props: {
            deliveries: res.data
        }
    };
}

export default Administration_deliveries