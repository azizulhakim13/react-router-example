import Hero from "../components/Hero";
import Services from "../components/Services";
import HomePricing from "../components/HomePricing";
import BusinessPricing from "../components/BusinessPricing";


const Home = () => {
    return ( 
        <div className="home">
            <Hero />
            <Services />
            <HomePricing />
            <BusinessPricing />


        </div>
    );
}

export default Home;
