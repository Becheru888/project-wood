import Clock from '../assets/clock.svg';
import Temp from '../assets/temp.svg';
import Saving from '../assets/saving.svg';

export default function Home(){
    return (
        <div className='home'>
        <div className='headline-wrapper'>
            <h1 className='headline'>Transformăm lemnul in artă</h1>
            <p className='subheadline'>Casele din lemn sunt privite mai degrabă ca niște construcții de vacanță, destinate petrecerii timpului pe perioade scurte de timp, însă ele pot fi și locuințe permanente.</p>
        </div>
        <div className='benefits'>
          <div className='box'>
             <div className='icon'>
                <img src={Clock}/>
             </div>
             <div className='box-wrapper'>
                <h3>Timp mai scurt de construcție.</h3>
                <div className='divide'></div>
                <p> O casă de lemn se construiește mai repede decât una din cărămidă sau din beton. Sunt tipuri de case din lemn care pot fi montate și în 2-3 zile dacă fundația este pregătită.</p>
             </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <img src={Temp}/>
            </div>
            <div className='box-wrapper'>
                <h3>Casele din lemn asigură o mai bună izolație termică.</h3>
                <div className='divide'></div>
                <p> Lemnul este un bun izolator termic și asta se vede și în interiorul unei case din lemn: este mai răcoroasă vara și mai călduroasă iarna.</p>
             </div>
          </div>
          <div className='box'>
           <div className='icon'>
             <img src={Saving}/>
           </div>
           <div className='box-wrapper'>
                <h3>Construirea locuințelor din lemn costă mai puțin.</h3>
                <div className='divide'></div>
                <p>Se spune că o casă din lemn, fără mobilă și alte amenajări interioare, poate fi mai ieftină și cu 30-35% comparativ cu o casă din cărămidă sau beton.</p>
             </div>
          </div>
        </div>
    </div>
    )
}