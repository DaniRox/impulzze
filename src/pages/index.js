import Head from "next/head";
import Navbar from "@/components/sections/Navbar";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

import SobreImpulzze from "@/components/sections/SobreImpulzze";
import ImpulzzeEmpresas from "@/components/sections/ImpulzzeEmpresas";
import ComoFuncionaEmpresas from "@/components/sections/ComoFuncionaEmpresas";
import RegistrarEmpresa from "@/components/sections/RegistrarEmpresa";
import CompromisoImpulzze from "@/components/sections/CompromisoImpulzze";
import ImpulzzeFreelancers from "@/components/sections/ImpulzzeFreelancers";
import ComoFuncionaFreelancers from "@/components/sections/ComoFuncionaFreelancers";
import RegistrarFreelancers from "@/components/sections/RegistrarFreelancers";
import BannerFooter from "@/components/sections/BannerFooter";
import Rrss from "@/components/Rrss";
import CasosDeExito from "@/components/sections/CasosDeExito";


export default function Home() {
    return (
        <>
            <Head>

            </Head>

            <Navbar />
            <Header />
            <main>
                <Rrss />
                <SobreImpulzze />

                <ImpulzzeEmpresas />
                <ComoFuncionaEmpresas />
                <RegistrarEmpresa />

                <CompromisoImpulzze />

                <ImpulzzeFreelancers />
                <ComoFuncionaFreelancers />
                <RegistrarFreelancers />

                <CasosDeExito />

                <BannerFooter/>

            </main>
            <Footer />

        </>
    )
}
