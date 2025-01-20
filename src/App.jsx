import React, { useEffect, useRef } from "react";
import "./assets/styles/colors.css";
import "./assets/styles/fonts.css";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SobreImpulzze from "./sections/SobreImpulzze";

import ImpulzzeEmpresas from "./sections/ImpulzzeEmpresas";
import ComoFuncionaEmpresas from "./sections/ComoFuncionaEmpresas";
import RegistrarEmpresa from "./sections/RegistrarEmpresa";

import CompromisoImpulzze from "./sections/CompromisoImpulzze";

import ImpulzzeFreelancers from "./sections/ImpulzzeFreelancers";
import ComoFuncionaFreelancers from "./sections/ComoFuncionaFreelancers";
import RegistrarFreelancers from "./sections/RegistrarFreelancers";
import BannerFooter from "./sections/BannerFooter";
import Rrss from "./components/Rrss";


const App = () => {

    return (
        <div className="app">

            <Navbar />
            <Header />
            <main>
                <SobreImpulzze />

                <ImpulzzeEmpresas />
                <ComoFuncionaEmpresas />
                <RegistrarEmpresa />

                <CompromisoImpulzze />

                <ImpulzzeFreelancers />
                <ComoFuncionaFreelancers />
                <RegistrarFreelancers />

                <BannerFooter/>

            </main>
            <Footer />
        </div>
    );
};

export default App;
