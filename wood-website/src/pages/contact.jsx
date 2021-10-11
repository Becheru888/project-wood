import Call from '../assets/call.svg';  
import Logo from '../assets/Logo-svg.svg';

export default function Contact(){
    return (
        <div id='contact' className='contact'>
             <div style={{display:"flex", alignItems:'center'}}>
              <h3>Contactează-ne</h3>
              <img className='section-icon' width="50px" style={{margin:'0 0 0 10px'}} src={Call}/>
            </div>
            <p style={{fontWeight:'500'}}>Program: Luni - Vineri 08:00 - 18:00</p>
            <p className='contact-info-p'>Vă răspundem bucuroși la orice intrebare aveți. <br/> Ne puteți contacta la numărul de telefon de mai jos, prin email, sau trimiteți un mesaj direct pe pagina noastră de facebook folosind iconița din dreapta jos a ecranului.</p>
            <div className='contact-info'>
                <div className='contact-logo'><img src={Logo} width="50px"/></div>
                <p><span>Reprezentant: </span> Nicolas Branescu</p>
                <p><span>Numar de telefon:</span> 0765009429</p>
                <p><span>Email:</span> nicolas-branescu@cabanute-luxoase.ro</p>
            </div>
        </div>
    )
}