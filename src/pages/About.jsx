import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top" style={{ backgroundColor: '#f8f9fa', minHeight: '80px' }}>
        <div className="container">
          <a className="navbar-brand fw-bold py-3" href="/" style={{ color: '#2c3e50' }}>
            <div className="d-flex align-items-center">
              <div className="me-3" style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #e9ecef' }}>
                <img src="Logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '1.1rem' }}>Dra. Marcela Navarro Guzmán</span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link fw-medium py-3" to="/" style={{ color: '#6c757d' }}>INICIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium py-3" to="/about" style={{ color: '#6c757d' }}>SOBRE MÍ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium py-3" to="/servicios" style={{ color: '#6c757d' }}>SERVICIOS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section - About */}
      <section style={{ paddingTop: '80px', backgroundColor: '#f8f9fa' }}>
        <div className="container py-5">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-12 text-center">
              <p className="text-uppercase text-secondary mb-3 fw-medium" style={{ letterSpacing: '1px' }}>
                CONOCE A TU ESPECIALISTA
              </p>
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#2c3e50', lineHeight: '1.2' }}>
                Dra. Marcela Navarro Guzmán
              </h1>
              <p className="lead mb-4" style={{ color: '#6c757d', maxWidth: '800px', margin: '0 auto' }}>
                Médico Especialista en Urología graduada en la Universidad de Costa Rica,
                con un enfoque integral y personalizado para cada paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Información Personal */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="bg-white rounded-4 shadow-lg p-4 mx-auto" style={{ maxWidth: '400px' }}>
                  <div className="rounded-4 overflow-hidden" style={{ height: '500px', backgroundColor: '#e9ecef' }}>
                    <img
                      src="DraNavarro.png"
                      alt="Dra. Marcela Navarro Guzmán"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="h1 fw-bold text-dark mb-4">Mi Historia Profesional</h2>
              <p className="text-muted mb-4">
                Con más de 11 años de experiencia en el campo de la urología, me he dedicado a
                proporcionar atención médica especializada con un enfoque integral y personalizado.
                Mi principal interés es la Urología general con un enfoque integral de sus diversas
                patologías con énfasis en el manejo desde tres aristas: médico-quirúrgico-psicoemocional.
              </p>
              <p className="text-muted mb-4">
                Soy uróloga graduada de la Universidad de Costa Rica. Inicié mi carrera hace más de
                11 años y aún sigue siendo una gran pasión el aprendizaje continuo de esta especialidad.
                Mis fortalezas son mi fortaleza en Dios, mi pasión por esta carrera y la dedicación
                a mis pacientes con calidez humana y empatía.
              </p>
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-graduation-cap text-secondary me-3 fs-5"></i>
                  <span className="fw-medium text-dark">Código de profesional:</span>
                  <span className="text-muted ms-2">MED9124</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-stethoscope text-secondary me-3 fs-5"></i>
                  <span className="fw-medium text-dark">Especialidad:</span>
                  <span className="text-muted ms-2">Urología</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-calendar-alt text-secondary me-3 fs-5"></i>
                  <span className="fw-medium text-dark">Experiencia:</span>
                  <span className="text-muted ms-2">Más de 11 años</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/50687051691"
        className="position-fixed rounded-circle d-flex align-items-center justify-content-center shadow-lg"
        style={{
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          backgroundColor: '#25d366',
          zIndex: 1000,
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          animation: 'pulse 2s infinite'
        }}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.backgroundColor = '#128c7e';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.backgroundColor = '#25d366';
        }}
      >
        <i className="fab fa-whatsapp text-white fs-3"></i>
      </a>

      {/* CSS para la animación del botón flotante */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>

      {/* Formación Académica */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="h1 fw-bold text-dark mb-4">Formación Académica</h2>
              <p className="lead text-muted">
                Mi preparación académica y profesional me permite ofrecer atención médica de la más alta calidad
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                      style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                      <i className="fas fa-university text-secondary fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-dark mb-2">Licenciatura en Medicina</h5>
                      <p className="text-muted mb-2">Universidad de Costa Rica</p>
                      <p className="text-secondary small mb-0">Graduada con honores</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                      style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                      <i className="fas fa-medal text-secondary fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-dark mb-2">Especialización en Urología</h5>
                      <p className="text-muted mb-2">Universidad de Costa Rica</p>
                      <p className="text-secondary small mb-0">Especialidad médica especializada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                      style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                      <i className="fas fa-certificate text-secondary fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-dark mb-2">Educación Médica Continua</h5>
                      <p className="text-muted mb-2">Diversos Congresos Internacionales</p>
                      <p className="text-secondary small mb-0">Actualización constante en avances urológicos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                      style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                      <i className="fas fa-users text-secondary fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-dark mb-2">Membresías Profesionales</h5>
                      <p className="text-muted mb-2">Múltiples Asociaciones Internacionales</p>
                      <p className="text-secondary small mb-0">Miembro activo de asociaciones de urología</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membresías Profesionales */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="h1 fw-bold text-dark mb-4">Membresías Profesionales</h2>
              <p className="lead text-muted">
                Miembro activo de prestigiosas asociaciones de urología a nivel internacional
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                      style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                      <i className="fas fa-globe-europe text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-dark mb-2">Asociación Europea de Urología</h5>
                      <p className="text-muted mb-0">Miembro activo de la EAU (European Association of Urology)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                      style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                      <i className="fas fa-flag-usa text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-dark mb-2">Asociación Americana de Urología</h5>
                      <p className="text-muted mb-0">Miembro activo de la AUA (American Urological Association)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-info rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                      style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                      <i className="fas fa-map-marker-alt text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-dark mb-2">Asociación Costarricense de Cirugía Urológica</h5>
                      <p className="text-muted mb-0">Miembro activo comprometido con la urología nacional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                      style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                      <i className="fas fa-globe-americas text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-dark mb-2">Confederación Americana de Urología</h5>
                      <p className="text-muted mb-0">Miembro de la CAU, promoviendo la excelencia urológica continental</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía de Trabajo */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="h1 fw-bold text-dark mb-4">Mi Filosofía de Trabajo</h2>
              <p className="lead text-muted mb-5">
                Enfoque integral de la urología desde tres aristas fundamentales
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="text-center">
                <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm"
                  style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-user-md text-primary fs-3"></i>
                </div>
                <h4 className="text-dark mb-3">Enfoque Médico</h4>
                <p className="text-muted">
                  Diagnóstico preciso y tratamiento basado en evidencia científica,
                  utilizando las técnicas más avanzadas disponibles.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm"
                  style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-procedures text-success fs-3"></i>
                </div>
                <h4 className="text-dark mb-3">Enfoque Quirúrgico</h4>
                <p className="text-muted">
                  Procedimientos quirúrgicos especializados cuando son necesarios,
                  con técnicas mínimamente invasivas y resultados óptimos.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm"
                  style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-heart text-warning fs-3"></i>
                </div>
                <h4 className="text-dark mb-3">Enfoque Psicoemocional</h4>
                <p className="text-muted">
                  Atención integral que considera el bienestar emocional del paciente,
                  brindando apoyo y comprensión durante todo el proceso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Especialización */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="h1 fw-bold text-dark mb-4">Áreas de Especialización</h2>
              <p className="lead text-muted">
                Experiencia especializada en diversas patologías urológicas
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="text-dark mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Patologías Renales
                  </h5>
                  <p className="text-muted">
                    Diagnóstico y tratamiento de cálculos renales, infecciones urinarias,
                    y otras patologías del sistema renal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="text-dark mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Patologías Prostáticas
                  </h5>
                  <p className="text-muted">
                    Manejo integral de hiperplasia prostática benigna, prostatitis
                    y seguimiento de patologías prostáticas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="text-dark mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Incontinencia Urinaria
                  </h5>
                  <p className="text-muted">
                    Evaluación y tratamiento de diferentes tipos de incontinencia urinaria
                    tanto en hombres como en mujeres.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="text-dark mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Medicina Preventiva
                  </h5>
                  <p className="text-muted">
                    Programas de prevención y detección temprana de patologías urológicas,
                    promoviendo la salud integral del paciente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="h1 fw-bold text-dark mb-4">¿Listo para tu consulta?</h2>
              <p className="lead text-muted mb-4">
                Agenda tu cita y recibe atención médica especializada y personalizada
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <a href="https://wa.me/50687051691"
                  className="btn px-4 py-3 rounded-pill fw-medium"
                  style={{ backgroundColor: '#25d366', color: 'white', border: 'none' }}
                  target="_blank">
                  <i className="fab fa-whatsapp me-2"></i>
                  AGENDAR CITA
                </a>
                <a href="/" className="btn btn-outline-secondary px-4 py-3 rounded-pill fw-medium">
                  VOLVER AL INICIO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-4">
                <div
                  className="me-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid white', // <- corregido
                  }}
                >
                  <img
                    src="Logo.png"
                    alt="Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h5 className="mb-1">Dra. Marcela Navarro Guzmán</h5>
                  <p className="text-white-50 mb-0">Especialista en Urología</p>
                </div>
              </div>
              <p className="text-white-50 mb-4">
                Brindando atención urológica especializada con los más altos estándares de calidad y tecnología médica.
              </p>
            </div>

            <div className="col-lg-3">
              <h6 className="text-white mb-3">Enlaces Rápidos</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-white-50 text-decoration-none">
                    <i className="fas fa-home me-2"></i>Inicio
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="text-white-50 text-decoration-none">
                    <i className="fas fa-user-md me-2"></i>Sobre Mí
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/servicios" className="text-white-50 text-decoration-none">
                    <i className="fas fa-stethoscope me-2"></i>Servicios
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3">
              <h6 className="text-white mb-3">Contacto</h6>
              <p className="text-white-50 mb-2">
                <i className="fab fa-whatsapp me-2"></i>
                +506 8705-1691
              </p>

              {/* Horarios de Atención */}
              <h6 className="text-white mt-4 mb-2">Horarios de Atención</h6>
              <ul className="list-unstyled text-white-50 mb-0 small">
                <li>Lunes: Cerrado</li>
                <li>Martes: 1:20 PM - 6:00 PM</li>
                <li>Miércoles: Cerrado</li>
                <li>Jueves: 1:20 PM - 6:00 PM</li>
                <li>Viernes: Cerrado</li>
                <li>Sábado: 10:00 AM - 2:00 PM</li>
                <li>Domingo: Cerrado</li>
              </ul>
            </div>
          </div>

          <hr className="border-secondary my-4" />

          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-white-50 mb-0">
                © 2025 Dra. Marcela Navarro Guzmán. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="text-white-50 mb-0">
                Especialista en Urología
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bootstrap JS and Font Awesome */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
};

export default AboutPage;