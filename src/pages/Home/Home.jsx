import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import ExpertDoctors from "../../components/ExpertDoctors/ExpertDoctors";
import Location from "../../components/Location/Location";
import Review from "../../components/Review/Review";
import Services from "../../components/Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Location></Location>
            <Review></Review>
            <ExpertDoctors></ExpertDoctors>
            <Contact></Contact>
        </div>
    );
};

export default Home;