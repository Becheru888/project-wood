import Info from '../assets/info.svg';    

export default function About(){
    return (
        <div id='about' className='about'>
            <div style={{display:"flex", alignItems:'center'}}>
              <h3>Despre noi</h3>
              <img width="50px" style={{margin:'0 0 0 10px'}} src={Info}/>
            </div>
            <div className='description'>
            <p>Cu peste 20 de ani de experiență ne putem mândri ca am putut realiza foarte multe proiecte de diferite complexitați. Având o echipă puternică și creativă în spate care depune un efort considerabil ca produsele la care lucrăm sa fie dovada calitații promise. Tipologiile întâlnite in echipa noastră sunt: Coordonatorul, Creativul, Supervizorul, Omul de echipă, Finalizatorul.    </p>
            <p style={{margin:'50px 0 20px 0', fontWeight:'600'}}>Functionăm după cateva reguli bine întelese de toată lumea din echipă:</p>
             <ul className="list-group">
                <li className="list-group-item">Facem totul cu pasiune.</li>
                <li className="list-group-item">Folosim doar resurse de calitate.</li>
                <li className="list-group-item">Ne adaptăm 100% la nevoile si cerințele clientului.</li>
                <li className="list-group-item">Oferim si solicităm respect.</li>
                <li className="list-group-item">Transparența nu poate lipsi.</li>
             </ul>
            </div>
        </div>
    )
}