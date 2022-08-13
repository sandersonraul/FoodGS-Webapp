import style from '../styles/Resform.module.css'
export default function Caddress(){
return (
    <>
    <div className={style.body}>

<div className="container">
        <div className=" text-center mt-5 ">

            <h1 className={style.hei1}>Address Form</h1>
                
            
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
                            <label htmlFor="city">City *</label>
                            <input id="city" type="text" name="city" className="form-control" placeholder="Please enter your name *" />
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="state">state *</label>
                            <input id="state" type="text" name="state" className="form-control" placeholder="Please enter your state" />
                                                            </div>
                    </div>

                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="Cep">Cep *</label>
                            <input id="Cep" type="text" name="Cep" className="form-control" placeholder="Please enter your cep *" />
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="number">number *</label>
                            <input id="number" type="text" name="number" className="form-control" placeholder="Please enter your number*" />
                            
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="neighborhood">neighborhood *</label>
                            <input id="neighborhood" type="text" name="neighborhood" className="form-control" placeholder="Please enter your neighborhood *" />
                            
                        </div>
                    </div>


                    <div className="col-md-12">
                       
                     <input type="submit" className="btn btn-success btn-send  pt-2 btn-block" value="Teu toba">
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
    </>
)
}