import Banner from "../../components/Banner/Banner";
// import Card from "../../components/Card/Card";
import Contact from "../../components/Contact/Contact";
import Review from "../../components/Review/Review";
import Services from "../../components/Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            {/* <Card></Card> */}
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;