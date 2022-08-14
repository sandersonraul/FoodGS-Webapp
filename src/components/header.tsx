import Style from '../styles/Header.module.css'
import Link from 'next/link'
export default function Header(){
    return(
        <>
<div className={Style.header}>
  
  <Link href="/" className="logo">
    <a><h1>FOODGS</h1>
      </a>
    </Link>
  <div className={Style.header_right}>
   {/* <Link href="/home" className="active"> <a>Home</a></Link> */}
    
    <Link href="/administration_couriers"><a>Couriers</a></Link>
    <Link href="/administration_res"><a>Restaurants</a></Link>
  </div>
</div>
</>)
}