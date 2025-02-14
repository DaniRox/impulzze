import { useRef, useEffect } from 'react';
import styles from "@/components/sections/CasosDeExito.module.css";
import CardComentario from "../CardComentario";
import ArrowLeft from "../ArrowLeft";
import ArrowRight from "../ArrowRight";

const CasosDeExito = () => {
    // Referencia al contenedor de las tarjetas
    const contentRef = useRef(null);

    // Datos de las tarjetas
    const cards = [
        { img: "/images/client1.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { img: "/images/client2.jpg", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { img: "/images/client1.jpg", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
        { img: "/images/client2.jpg", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
    ];

    // Función para desplazamiento suave
    const smoothScroll = (element, targetPosition, duration) => {
        const start = element.scrollLeft; // Posición inicial
        const distance = targetPosition - start; // Distancia a recorrer
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutCubic(timeElapsed, start, distance, duration);
            element.scrollLeft = run;
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        // Función de easing (suavizado)
        const easeInOutCubic = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        };

        requestAnimationFrame(animation);
    };

    // Función para desplazarse hacia la izquierda
    const handleArrowRightClick = () => {
        if (contentRef.current) {
            const scrollAmount = 300; // Cantidad de desplazamiento
            const targetPosition = Math.max(0, contentRef.current.scrollLeft - scrollAmount); // Evitar scroll negativo
            smoothScroll(contentRef.current, targetPosition, 500); // Duración de 500ms
        }
    };

    // Función para desplazarse hacia la derecha
    const handleArrowLeftClick = () => {
        if (contentRef.current) {
            const scrollAmount = 300; // Cantidad de desplazamiento
            const maxScroll = contentRef.current.scrollWidth - contentRef.current.clientWidth; // Límite máximo de scroll
            const targetPosition = Math.min(maxScroll, contentRef.current.scrollLeft + scrollAmount); // Evitar scroll excesivo
            smoothScroll(contentRef.current, targetPosition, 500); // Duración de 500ms
        }
    };

    // Efecto para manejar el movimiento infinito
    useEffect(() => {
        const container = contentRef.current;

        const handleScroll = () => {
            if (!container) return;

            const { scrollLeft, scrollWidth, clientWidth } = container;

            // Si llegamos al final, teletransportarnos al inicio
            if (scrollLeft >= scrollWidth - clientWidth) {
                container.scrollTo({ left: 0, behavior: "instant" });
            }

            // Si llegamos al inicio, teletransportarnos al final
            if (scrollLeft <= 0) {
                container.scrollTo({ left: scrollWidth - clientWidth, behavior: "instant" });
            }
        };

        // Agregar listener de scroll
        container.addEventListener("scroll", handleScroll);

        // Limpiar listener al desmontar el componente
        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className={styles.CasosDeExito} id="CasosDeExito">
            <h1 className={styles.CasosDeExito__title}>A quienes Impulzzamos dicen...</h1>

            {/* Botón para la flecha izquierda */}
            <button
                className={styles.arrowLeft}
                onClick={handleArrowLeftClick}
                aria-label="Desplazarse hacia la izquierda"
            >
                <ArrowLeft
                    size={80}
                    color="var(--maiz)"
                />
            </button>

            {/* Botón para la flecha derecha */}
            <button
                className={styles.arrowRight}
                onClick={handleArrowRightClick}
                aria-label="Desplazarse hacia la derecha"
            >
                <ArrowRight
                    size={80}
                    color="var(--maiz)"
                />
            </button>

            {/* Contenedor de las tarjetas */}
            <div
                className={styles.CasosDeExitoContent}
                ref={contentRef}
            >
                {/* Duplicar las tarjetas para crear el efecto infinito */}
                {[...cards, ...cards].map((card, index) => (
                    <CardComentario
                        key={index}
                        img={card.img}
                        text={card.text}
                    />
                ))}
            </div>
        </section>
    );
};

export default CasosDeExito;
