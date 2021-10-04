import Call from '../assets/call.svg';  

export default function Contact(){
    return (
        <div className='contact'>
             <div style={{display:"flex", alignItems:'center'}}>
              <h3>Contactează-ne</h3>
              <img width="50px" style={{margin:'0 0 0 10px'}} src={Call}/>
            </div>
            <div>
                <p>Raspundem bucurosi la orice intrebare aveti. Ne puteti contacta la numarul de telefon de mai jos, s-au direct prin email.</p>
                <p>Reprezentant: <span>Nicolas Branescu</span></p>
                <p>Numar de telefon: <span>0765009429</span></p>
                <p>Email: nicolas-branescu@cabanute-luxoase.ro</p>
            </div>
        </div>
    )
}