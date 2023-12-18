import Banner from "../../components/Banner/Banner";
// import Card from "../../components/Card/Card";
import Contact from "../../components/Contact/Contact";
import ExpertDoctors from "../../components/ExpertDoctors/ExpertDoctors";
import Review from "../../components/Review/Review";
import Services from "../../components/Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            {/* <Card></Card> */}
            <Review></Review>
            <ExpertDoctors></ExpertDoctors>
            <Contact></Contact>
        </div>
    );
};

export default Home;