import Style from '../styles/Header.module.css'

export default function Header(){
    return(
        <>
<div className={Style.header}>
  
  <a href="#default" className="logo"><h1>FOODGS</h1></a>
  <div className={Style.header_right}>
    <a className="active" href="#home">Home</a>
    
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
</>)
}