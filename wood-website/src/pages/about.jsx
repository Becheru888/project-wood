import Info from '../assets/info.svg';    

export default function About(){
    return (
        <div className='about'>
            <div style={{display:"flex", alignItems:'center'}}>
              <h3>Despre noi</h3>
              <img width="50px" style={{margin:'0 0 0 10px'}} src={Info}/>
            </div>
            <div className='description'>
            <p>Cu peste 20 de ani de experienta ne putem mandri ca am putut realiza diferite proiecte de diferite compexitati.<br/> Avand o echipa puternica si creativa in spate care depune un efort considerabil ca produsele la care lucram sa fie dovada calitatii promise.</p>
            <p style={{margin:'50px 0 20px 0'}}>Functionam dupa cateva reguli bine intelese de toata lumea din echipa:</p>
             <ul className="list-group">
                <li className="list-group-item">Facem totul cu pasiune.</li>
                <li className="list-group-item">Folosim doar resurse de calitate.</li>
                <li className="list-group-item">Ne adaptam 100% la nevoile si cerintele clientului.</li>
                <li className="list-group-item">Oferim si solictitam respect.</li>
                <li className="list-group-item">Transaprenta nu poate lipsi.</li>
             </ul>
            </div>
        </div>
    )
}