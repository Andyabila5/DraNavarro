import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const Home = () => {


  useEffect(() => {

    window.scrollTo(0, 0);
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('#navbarNav');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = window.bootstrap?.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .navbar-brand .logo-wrapper { width: 50px; height: 50px; }
        .navbar-brand .brand-name { font-size: 0.9rem; }
        @media (min-width: 992px) {
          .navbar-brand .logo-wrapper { width: 70px; height: 70px; }
          .navbar-brand .brand-name { font-size: 1.1rem; }
        }
        .hero-title { font-size: 2rem; }
        .hero-image-wrapper { max-width: 280px; margin: 0 auto; }
        .hero-image-wrapper .inner { height: 350px; }
        @media (min-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .hero-image-wrapper { max-width: 350px; }
          .hero-image-wrapper .inner { height: 430px; }
        }
        @media (min-width: 992px) {
          .hero-title { font-size: 3rem; }
          .hero-image-wrapper { max-width: 400px; }
          .hero-image-wrapper .inner { height: 500px; }
        }
        .whatsapp-float { width: 50px; height: 50px; bottom: 15px; right: 15px; }
        @media (min-width: 768px) {
          .whatsapp-float { width: 60px; height: 60px; bottom: 20px; right: 20px; }
        }
        .navbar-collapse .nav-link { padding: 0.5rem 1rem !important; }
        .schedule-row { display: flex; justify-content: space-between; gap: 8px; }
      `}</style>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top" style={{ backgroundColor: '#f8f9fa', minHeight: '70px' }}>
        <div className="container">
          <Link className="navbar-brand fw-bold py-2" to="/" style={{ color: '#2c3e50' }}>
            <div className="d-flex align-items-center">
              <div className="logo-wrapper me-2 me-lg-3 overflow-hidden d-flex align-items-center justify-content-center flex-shrink-0">
                <img src={`${import.meta.env.BASE_URL}Logo.png`} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="brand-name">Dra. Marcela Navarro Guzmán</span>
            </div>
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link fw-medium py-2 py-lg-3" to="/" style={{ color: '#6c757d' }}>INICIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium py-2 py-lg-3" to="/about" style={{ color: '#6c757d' }}>SOBRE MÍ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium py-2 py-lg-3" to="/servicios" style={{ color: '#6c757d' }}>SERVICIOS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" style={{ paddingTop: '70px', backgroundColor: '#edece9' }}>
        <div className="container py-4 py-lg-5">
          <div className="row align-items-center" style={{ minHeight: '90vh' }}>
            <div className="col-lg-6 text-center order-1 order-lg-2 mb-4 mb-lg-0">
              <div className="hero-image-wrapper">
                <div className="bg-white rounded-4 shadow-lg p-3 p-md-4">
                  <div className="inner rounded-4 overflow-hidden" style={{ backgroundColor: '#e9ecef' }}>
                    <img src={`${import.meta.env.BASE_URL}DraNavarro.png`} alt="Dra. Marcela Navarro Guzmán" className="w-100 h-100" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
              <p className="text-uppercase text-secondary mb-2 fw-medium" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>BIENVENIDO A MI CONSULTA</p>
              <h1 className="hero-title fw-bold mb-2" style={{ color: '#2c3e50', lineHeight: '1.2' }}>Nova UroClinica</h1>
              <h1 className="hero-title fw-bold mb-3" style={{ color: '#2c3e50', lineHeight: '1.2' }}>Dra Navarro G</h1>
              <p className="mb-3" style={{ color: '#6c757d', fontSize: '1rem' }}>
                Es un centro especializado para brindar a mis pacientes una atención óptima y oportuna,
                con un manejo integral de cada patología desde tres enfoques: médico-quirúrgico-psicoemocional.
              </p>
              <div className="mb-3">
                <p className="text-muted mb-1 small"><strong>Código de profesional:</strong> MED9124</p>
                <p className="text-muted mb-0 small"><strong>Especialidad:</strong> Urología</p>
              </div>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <a href="https://wa.me/50687051691" className="btn px-4 py-2 py-lg-3 rounded-pill fw-medium" style={{ backgroundColor: '#25d366', color: 'white', border: 'none' }} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp me-2"></i>AGENDAR CITA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mí Section */}
      <section id="sobre-mi" className="py-5" style={{ backgroundColor: '#edece9' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h2 className="h1 fw-bold text-dark mb-4">Sobre Mí</h2>
              <p className="lead text-muted mb-4">
                Soy uróloga graduada de la Universidad de Costa Rica. Inicié mi carrera hace más de 11 años y aún sigue siendo una gran pasión, el aprendizaje continuo de esta especialidad.
              </p>
              <p className="text-muted mb-4">
                Mi principal interés es la Urología general con un enfoque integral de sus diversas patologías con énfasis en el manejo desde tres aristas: <strong>médico-quirúrgico-psicoemocional</strong>.
              </p>
              <div className="row g-3 mb-4">
                {['Asociación Europea de Urología', 'Asociación Americana de Urología', 'Asociación Costarricense de Cirugía Urológica', 'Confederación Americana de Urología (CAU)'].map((nombre, i) => (
                  <div className="col-12 col-md-6" key={i}>
                    <div className="card border-0 bg-light h-100">
                      <div className="card-body p-3">
                        <i className="fas fa-certificate text-primary mb-2"></i>
                        <h6 className="mb-1">{nombre}</h6>
                        <small className="text-muted">Miembro activo</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted mb-4"><em>"Mis fortalezas son mi fortaleza en Dios, mi pasión por esta carrera y la dedicación a mis pacientes con calidez humana y empatía."</em></p>
              <Link to="/about" className="btn btn-outline-secondary px-4 py-2">Ver más información</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-5" style={{ backgroundColor: '#edece9' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="h1 fw-bold text-dark mb-4">Servicios</h2>
              <p className="lead text-muted mb-5">Procedimientos urológicos especializados con tecnología de vanguardia</p>
            </div>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fa-microscope', titulo: 'Biopsia de Próstata', desc: 'Procedimiento diagnóstico para detectar anomalías prostáticas. Disponible con y sin sedación según las necesidades del paciente.', items: ['Con y sin sedación', 'Tecnología avanzada', 'Resultados precisos'] },
              { icon: 'fa-cut', titulo: 'Frenuloplastia', desc: 'Cirugía menor para corregir el frenillo corto del pene. Mejora la función sexual y elimina molestias.', items: ['Procedimiento ambulatorio', 'Recuperación rápida', 'Mejora funcional'] },
              { icon: 'fa-fire', titulo: 'Cauterización de Papilomas', desc: 'Eliminación efectiva de papilomas genitales y urinarios con técnicas de cauterización avanzadas.', items: ['Eliminación completa', 'Baja recurrencia', 'Procedimiento seguro'] },
            ].map((s, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className="card border-0 shadow-sm h-100 text-center">
                  <div className="card-body p-4">
                    <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: '80px', height: '80px' }}>
                      <i className={`fas ${s.icon} text-secondary fs-3`}></i>
                    </div>
                    <h4 className="text-dark mb-3">{s.titulo}</h4>
                    <p className="text-muted mb-3">{s.desc}</p>
                    <ul className="list-unstyled text-muted small">
                      {s.items.map((item, j) => (
                        <li key={j}><i className="fas fa-check text-success me-2"></i>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            {/* Usamos Link para navegación interna correcta */}
            <Link to="/servicios" className="btn btn-outline-secondary px-4 py-3 rounded-pill fw-medium">
              VER TODOS LOS SERVICIOS
            </Link>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-5" style={{ backgroundColor: '#edece9' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="h1 fw-bold text-dark mb-4">Contacto</h2>
              <p className="lead text-muted mb-5">Agenda tu cita y recibe atención médica especializada</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-3 p-md-4">
                  <h4 className="text-dark mb-4">Información de Contacto</h4>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                      <i className="fas fa-map-marker-alt text-secondary"></i>
                    </div>
                    <div>
                      <h6 className="text-dark mb-1">Dirección</h6>
                      <p className="text-muted mb-0 small">ALAJUELA, SAN CARLOS, CIUDAD QUESADA, BARRIO LA LEYLA, 300 METROS OESTE DE LA GASOLINERA MECO. EDIFICIO AMBAR</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                      <i className="fab fa-whatsapp text-success fs-5"></i>
                    </div>
                    <div>
                      <h6 className="text-dark mb-1">WhatsApp</h6>
                      <a href="https://wa.me/50687051691" className="text-decoration-none text-success" target="_blank" rel="noopener noreferrer">+506 8705 1691</a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                      <i className="fas fa-envelope text-secondary"></i>
                    </div>
                    <div>
                      <h6 className="text-dark mb-1">Email</h6>
                      <p className="text-muted mb-0 small">dra.uro.mng@gmail.com</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                      <i className="fas fa-clock text-secondary"></i>
                    </div>
                    <div className="w-100">
                      <h6 className="text-dark mb-2">Horarios de Atención</h6>
                      <div className="text-muted small">
                        {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map(dia => (
                          <div className="schedule-row" key={dia}><span>{dia}:</span><span>1:00 PM - 5:30 PM</span></div>
                        ))}
                        <div className="schedule-row"><span>Sábado:</span><span className="text-danger">Cerrado</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-3 p-md-4">
                  <h4 className="text-dark mb-4">Agendar Cita</h4>
                  <p className="text-muted mb-4">Contáctame a través de WhatsApp para agendar tu cita. Te responderé en el menor tiempo posible.</p>
                  <div className="d-grid gap-2">
                    <a href="https://wa.me/50687051691?text=Hola%20Dra.%20Navarro%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita" className="btn btn-success btn-lg" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp me-2"></i>Agendar por WhatsApp
                    </a>
                  </div>
                  <div className="mt-4 p-3 bg-light rounded">
                    <h6 className="text-dark mb-2"><i className="fas fa-info-circle me-2"></i>Información Importante</h6>
                    <ul className="list-unstyled mb-0 small text-muted">
                      <li>• Confirma tu cita con 24 horas de anticipación</li>
                      <li>• Trae todos tus estudios médicos previos</li>
                      <li>• Llega 15 minutos antes de tu cita</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/50687051691"
        className="whatsapp-float position-fixed rounded-circle d-flex align-items-center justify-content-center shadow-lg"
        style={{ backgroundColor: '#25d366', zIndex: 1000, textDecoration: 'none', transition: 'all 0.3s ease', animation: 'pulse 2s infinite' }}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.backgroundColor = '#128c7e'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#25d366'; }}
      >
        <i className="fab fa-whatsapp text-white fs-4"></i>
      </a>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 flex-shrink-0" style={{ width: '55px', height: '55px', borderRadius: '50%', overflow: 'hidden', border: '2px solid white' }}>
                  <img src={`${import.meta.env.BASE_URL}Logo.png`} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h5 className="mb-1" style={{ fontSize: '1rem' }}>Dra. Marcela Navarro Guzmán</h5>
                  <p className="text-white-50 mb-0 small">Especialista en Urología</p>
                </div>
              </div>
              <p className="text-white-50 mb-0">Brindando atención urológica especializada con los más altos estándares de calidad y tecnología médica.</p>
            </div>
            <div className="col-6 col-lg-3">
              <h6 className="text-white mb-3">Enlaces Rápidos</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none small"><i className="fas fa-home me-2"></i>Inicio</Link></li>
                <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none small"><i className="fas fa-user-md me-2"></i>Sobre Mí</Link></li>
                <li className="mb-2"><Link to="/servicios" className="text-white-50 text-decoration-none small"><i className="fas fa-stethoscope me-2"></i>Servicios</Link></li>
              </ul>
            </div>
            <div className="col-6 col-lg-3">
              <h6 className="text-white mb-3">Contacto</h6>
              <p className="text-white-50 mb-2 small"><i className="fab fa-whatsapp me-2"></i>+506 8705-1691</p>
              <h6 className="text-white mt-3 mb-2">Horarios</h6>
              <ul className="list-unstyled text-white-50 mb-0" style={{ fontSize: '0.8rem' }}>
                <li>Lun - Vie: 1:00 PM - 5:30 PM</li>
                <li>Sábado: Cerrado</li>
                <li>Domingo: Cerrado</li>
              </ul>
            </div>
          </div>
          <hr className="border-secondary my-4" />
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="text-white-50 mb-0 small">© 2025 Dra. Marcela Navarro Guzmán. Todos los derechos reservados.</p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <p className="text-white-50 mb-0 small">Especialista en Urología</p>
            </div>
          </div>
        </div>
      </footer>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
};

export default Home;