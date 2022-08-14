import Link from 'next/link'
import style from '../styles/Crud.module.css'
export default function Admde(){
    return (
        <>
        <ul className="nav nav-pills nav-fill justify-content-center">
  <li className="nav-item">
   <Link href="/administration_res"><a className="nav-link" >Administration of restaurants</a></Link>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/admde">Administration of deliveries</a>
  </li>
</ul>
        <div className={style.body}>
        <div className="container-sm">
          <h1>Deliveries administration ok?</h1>
        <table className="table table-responsive">
        
  <thead className='table-dark'>

    <tr>
      <th scope="col">id</th>
      <th scope="col">city</th>
      <th scope="col">state</th>
      <th scope="col">cep</th>
      <th scope="col">number</th>
      <th scope="col">neighborhood</th>
      <th scope='col'>...</th>
    </tr>
  </thead>
  <tbody className='table-group-divider'>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Edit/remove</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Edit/remove</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Edit/remove</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Edit/remove</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Edit/remove</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Edit/remove</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Edit/remove</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Edit/remove</td>
    </tr>
  </tbody>
</table>
<a className="btn btn-primary" href="/create_de" role="button">Create deliveries</a>
        </div>
        </div>
        </>
    )
}