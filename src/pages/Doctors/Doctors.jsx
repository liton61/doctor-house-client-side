import { useState } from "react";
import About from "../../components/About/About";
import useDoctors from "../../hooks/useDoctors";
import DoctorsCategory from "./DoctorsCategory";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Doctors = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [doctors] = useDoctors();
    const child = doctors.filter(doctor => doctor.category === 'Child Health');
    const heart = doctors.filter(doctor => doctor.category === 'Heart Health');
    const skin = doctors.filter(doctor => doctor.category === 'Skin Care');
    return (
        <div>
            <About></About>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="lg:w-1/2 mx-auto text-center lg:px-0 md:px-8 px-5 mb-10">
                    <TabList>
                        <Tab>Child</Tab>
                        <Tab>Heart</Tab>
                        <Tab>Skin</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <DoctorsCategory doctor={child}></DoctorsCategory>
                </TabPanel>
                <TabPanel>
                    <DoctorsCategory doctor={heart}></DoctorsCategory>
                </TabPanel>
                <TabPanel>
                    <DoctorsCategory doctor={skin}></DoctorsCategory>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Doctors;