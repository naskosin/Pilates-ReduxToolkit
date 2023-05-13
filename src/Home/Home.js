import './Home.css';
import { CarouselComponent } from '../NaskoCarousel/NaskoCarousel'

export const Home = () =>{
    
        
    const images = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg']
        return(
            <section className='HomeSection'>
           <article className='HomeArticle'>
           <CarouselComponent image={images}/> 
           </article>
            </section>
        )
    }