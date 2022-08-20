import style from '../styles/Navbar.module.css'
import Link from 'next/link'
export default function Navbar(){
    return(
        <>
<div className={style.color}>
  
<ul className="nav nav-tabs">
        <li className="nav-item ">
          <Link href="/administration_res"><a className="nav-link"> <strong>  Administration of restaurants </strong></a></Link>
        </li>
        <li className="nav-item">
        
          <Link href="/administration_couriers"><a className="nav-link" > <strong>  Administration of couriers </strong></a></Link>
        </li>
        <li className="nav-item">
          <Link href="/administration_deliveries"><a className="nav-link"> <strong> Administration of deliveries </strong></a></Link>
        </li>
      </ul>
  </div>
</>)
}