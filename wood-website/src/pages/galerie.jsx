import Pic1 from '../assets/pictures/ex1.png';
import Pic2 from '../assets/pictures/ex2.png';
import Pic3 from '../assets/pictures/ex3.png';
import Pic4 from '../assets/pictures/ex4.png';
import Pic5 from '../assets/pictures/ex5.png';
import Pic6 from '../assets/pictures/ex6.png';
import Pic7 from '../assets/pictures/ex7.png';
import Pic8 from '../assets/pictures/ex8.png';
import Pic9 from '../assets/pictures/ex9.png';
import Pic10 from '../assets/pictures/ex10.png';
import Pic11 from '../assets/pictures/ex11.png';
import Pic12 from '../assets/pictures/ex12.png';
import Pic13 from '../assets/pictures/ex13.png';
import Pic14 from '../assets/pictures/ex14.png';
import Pic15 from '../assets/pictures/ex15.png';
import Pic16 from '../assets/pictures/ex16.png';
import Pic17 from '../assets/pictures/ex17.png';
import ImgGal from '../assets/image-gallery.svg';


export default function Galerie(){
    const pics = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12, Pic13, Pic14, Pic15, Pic16, Pic17]
    console.log(pics)
    // Pic7, Pic8, Pic9, Pic10, Pic11, Pic12, Pic13, Pic14, Pic15
    return (
        <div id="galery" className='galerie'>
            <div style={{display:"flex", alignItems:'center'}}>
              <h3>Galeria cu lucrări</h3>
              <img className='section-icon' width="50px" style={{margin:'0 0 0 10px'}} src={ImgGal}/>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
             <ol className="carousel-indicators">
                {pics.map((pic, index) => 
                     <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
                )}
            </ol>
            <div className="carousel-inner">
              {pics.map((pic, index) => 
                 <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
                    <img className="d-block w-100 pic" src={pic} alt="slide"/>
                </div>
              )}
            </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}