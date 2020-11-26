import Header from '../components/Header'
import Footer from '../components/Footer';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import MultiCarouselPage from '../components/MultiCarouselPage';


const Home = () =>{
    return (
        <>
        <Header />
        <Search />
        <Categories />
        <Carousel />
        <MultiCarouselPage />
        <Footer />
        </>
    )
}

export default Home;