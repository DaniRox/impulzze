import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { db } from '@/lib/firebase'; // Importa Firestore
import { collection, addDoc } from 'firebase/firestore'; // Funciones para interactuar con Firestore
import styles from '@/components/sections/RegistrarFreelancers.module.css';

const RegistrarFreelancers = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre_completo: '',
    email: '',
    pais_residencia: '',
    area_especializacion: '',
    nivel_experiencia: '',
    idiomas: '',
    portafolio_linkedin: ''
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Datos del formulario
    const templateParams = {
      nombre_completo: formData.nombre_completo,
      email: formData.email,
      pais_residencia: formData.pais_residencia,
      area_especializacion: formData.area_especializacion,
      nivel_experiencia: formData.nivel_experiencia,
      idiomas: formData.idiomas,
      portafolio_linkedin: formData.portafolio_linkedin
    };

    try {
      // Enviar correo con EmailJS
      await emailjs.send('service_9g69neg', 'template_vmlp1gb', templateParams, 'd4NQOWbtLhhfJ_82K');

      // Guardar los datos en Firestore
      await addDoc(collection(db, 'freelancers'), formData);

      // Limpia el formulario
      setFormData({
        nombre_completo: '',
        email: '',
        pais_residencia: '',
        area_especializacion: '',
        nivel_experiencia: '',
        idiomas: '',
        portafolio_linkedin: ''
      });

      alert('¡Tu solicitud ha sido enviada!');
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      alert('Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.');
    }
  };

  return (
    <section className={styles.RegistrarFreelancers} id="RegistraFreelancers">
      <div className={styles.RegistrarFreelancers__titles}>
        <h1 className={styles.RegistrarFreelancers__title}>Se Impulzzer hoy y Comienza a Impulzzar tu Carrera</h1>
        <h2 className={styles.RegistrarFreelancers__subtitle}>
          Completa la información a continuación para comenzar a publicar proyectos y recibir propuestas.
        </h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.col1}>
          <input
            type="text"
            name="nombre_completo"
            placeholder="Nombre completo"
            className={styles.formInput}
            value={formData.nombre_completo}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className={styles.formInput}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="pais_residencia"
            placeholder="País de residencia"
            className={styles.formInput}
            value={formData.pais_residencia}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="area_especializacion"
            placeholder="Área de especialización"
            className={styles.formInput}
            value={formData.area_especializacion}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.col2}>
          <input
            type="text"
            name="nivel_experiencia"
            placeholder="Nivel de experiencia"
            className={styles.formInput}
            value={formData.nivel_experiencia}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="idiomas"
            placeholder="Idiomas"
            className={styles.formInput}
            value={formData.idiomas}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="portafolio_linkedin"
            placeholder="Portafolio/LinkedIn"
            className={styles.formInput}
            value={formData.portafolio_linkedin}
            onChange={handleChange}
            required
          />
          <input type="submit" className={styles.formSubmit} value="Unirme a Impulzze" />
        </div>
      </form>
    </section>
  );
};

export default RegistrarFreelancers;
