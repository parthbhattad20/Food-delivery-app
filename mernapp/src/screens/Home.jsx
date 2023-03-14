import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from '../components/Card';
import Carasoul from "../components/Carasoul";

const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Carasoul/>
            </div>
            <Card/>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
