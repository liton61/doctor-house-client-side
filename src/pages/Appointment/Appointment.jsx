import About from "../../components/About/About";
import Cover from "../../components/Cover/Cover";
import AvailableServices from "./AvailableServices";
import AvailableSlots from "./AvailableSlots";


const Appointment = () => {
    return (
        <div>
            <Cover></Cover>
            <About></About>
            <AvailableServices></AvailableServices>
            <AvailableSlots></AvailableSlots>
        </div>
    );
};

export default Appointment;