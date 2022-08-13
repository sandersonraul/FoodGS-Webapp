import style from '../styles/Resform.module.css'

export default function Resform(){
    return (
        <>
<div className={style.body}>

<div className="container">
        <div className=" text-center mt-5 ">

            <h1 className={style.hei1}>Restaurant Form</h1>
                
            
        </div>

    
    <div className="row ">
      <div className="col-lg-7 mx-auto">
        <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
       
            <div className = "container">
                             <form id="contact-form" role="form">

            

            <div className="controls">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input id="name" type="text" name="name" className="form-control" placeholder="Please enter your name *" />
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="password">Password *</label>
                            <input id="password" type="pasword" name="password" className="form-control" placeholder="Please enter your password" />
                                                            </div>
                    </div>

                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input id="email" type="email" name="email" className="form-control" placeholder="Please enter your email *" />
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="cnpj">Cnpj *</label>
                            <input id="cnpj" type="text" name="cnpj" className="form-control" placeholder="Please enter your cnpj *" />
                            
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="form_message">Message *</label>
                            <textarea id="form_message" name="message" className="form-control" placeholder="Write your message here."></textarea>
                            </div>

                        </div>


                    <div className="col-md-12">
                       
                     <input type="submit" className="btn btn-success btn-send  pt-2 btn-block" value="Send Message">
                     </input>
                    
                </div>
          


        </div>
         </form>
        </div>
            </div>


    </div>


    </div>


</div>
</div>
</div>
<style jsx>{`.btn-send{
                        font-weight: 300;
                        text-transform: uppercase;
                        letter-spacing: 0.2em;
                        width: 80%;
                        margin-top:10px;
                        margin-left: 10%;
                        margin-right:10%;}
                        .card{
                            margin-left: 10px;
                            margin-right: 10px;
                        }
                     `}</style> 
        {/* <form>
  <label htmlFor="name">Name:</label><br/>
  <input type="text" id="name" name="name"/><br/>
  <label htmlFor="cnpj">Cnpj:</label><br/>
  <input type="text" id="cnpj" name="cnpj"/><br/>
  <label htmlFor="email">Email:</label><br/>
  <input type="email" id="email" name="email"/><br/>
  <label htmlFor="password">Password:</label><br/>
  <input type="password" id="password" name="password"></input><br/>
  <label htmlFor="address_id">address_id</label><br/>
  <input type="number" id="address_id" name="address_id"></input><br/>
        </form> */}
        
        </>
    )
}