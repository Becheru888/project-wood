import Call from '../assets/call.svg';  

export default function Contact(){
    return (
        <div className='contact'>
             <div style={{display:"flex", alignItems:'center'}}>
              <h3>Contactează-ne</h3>
              <img width="50px" style={{margin:'0 0 0 10px'}} src={Call}/>
            </div>
            <div>
              <p></p>
            </div>
        </div>
    )
}