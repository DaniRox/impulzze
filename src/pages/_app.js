import Head from 'next/head';
import "@/styles/reset.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
            <title>Impulzze - Conecta con talento global sin fronteras</title>
                <link rel="icon" href="/impFavicon.png" />
                <meta name="description" content="Impulzze es la plataforma ideal para empresas que buscan freelancers expertos y para talentos que desean oportunidades sin límites. Conecta, crece y lleva tu visión al siguiente nivel." />
                <meta name="keywords" content="freelancers globales, conectar con talento, encuentra talento freelance, trabajo remoto de calidad, comunidad Impulzze, conectar con empresas" />
                <meta name="author" content="Impulzze" />

                <meta property="og:title" content="Impulzze - Conecta con talento global sin fronteras" />
                <meta property="og:description" content="Impulzze es la plataforma ideal para empresas que buscan freelancers expertos y para talentos que desean oportunidades sin límites. Conecta, crece y lleva tu visión al siguiente nivel." />
                <meta property="og:image" content="https://tu-dominio.com/imagen-og.jpg" />
                <meta property="og:url" content="https://tu-dominio.com" />
                <meta property="og:type" content="website" />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Component {...pageProps} />
        </>
    )
}
