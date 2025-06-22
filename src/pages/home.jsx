import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top" style={{ backgroundColor: '#f8f9fa', minHeight: '80px' }}>
        <div className="container">
          <Link className="navbar-brand fw-bold py-3" to="/" style={{ color: '#2c3e50' }}>
            <div className="d-flex align-items-center">
              <div className="me-3" style={{ width: '70px', height: '70px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="Logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '1.1rem' }}>Dra. Marcela Navarro Guzmán</span>
            </div>
          </Link>
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
      {/* Hero Section */}
      <section id="inicio" style={{ paddingTop: '80px', backgroundColor: '#f8f9fa' }}>
        <div className="container py-5">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <p className="text-uppercase text-secondary mb-3 fw-medium" style={{ letterSpacing: '1px' }}>
                BIENVENIDO A MI CONSULTA
              </p>
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#2c3e50', lineHeight: '1.2' }}>
                Atención médica personalizada con enfoque integral para tu bienestar
              </h1>
              <p className="lead mb-4" style={{ color: '#6c757d' }}>
                Especialista en Urología con más de 11 años de experiencia.
                Brindar a mis pacientes una atención óptima y oportuna es mi prioridad,
                con un manejo integral de cada patología desde tres enfoques: médico-quirúrgico-psicoemocional.
              </p>
              <div className="mb-3">
                <p className="text-muted mb-1"><strong>Código de profesional:</strong> MED9124</p>
                <p className="text-muted mb-0"><strong>Especialidad:</strong> Urología</p>
              </div>
              <div className="d-flex gap-3">
                <a href="https://wa.me/50687051691"
                  className="btn px-4 py-3 rounded-pill fw-medium"
                  style={{ backgroundColor: '#25d366', color: 'white', border: 'none' }}
                  target="_blank">
                  <i className="fab fa-whatsapp me-2"></i>
                  AGENDAR CITA
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
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
          </div>
        </div>
      </section>

      {/* Sobre Mí Section - Mejorada */}
      <section id="sobre-mi" className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h2 className="h1 fw-bold text-dark mb-4">Sobre Mí</h2>
              <p className="lead text-muted mb-4">
                Soy uróloga graduada de la Universidad de Costa Rica. Inicié mi carrera hace más de 11 años
                y aún sigue siendo una gran pasión, el aprendizaje continuo de esta especialidad.
              </p>
              <p className="text-muted mb-4">
                Mi principal interés es la Urología general con un enfoque integral de sus diversas patologías
                con énfasis en el manejo desde tres aristas: <strong>médico-quirúrgico-psicoemocional</strong>.
              </p>

              {/* Membresías */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body p-3">
                      <i className="fas fa-certificate text-primary mb-2"></i>
                      <h6 className="mb-1">Asociación Europea de Urología</h6>
                      <small className="text-muted">Miembro activo</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body p-3">
                      <i className="fas fa-certificate text-primary mb-2"></i>
                      <h6 className="mb-1">Asociación Americana de Urología</h6>
                      <small className="text-muted">Miembro activo</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body p-3">
                      <i className="fas fa-certificate text-primary mb-2"></i>
                      <h6 className="mb-1">Asociación Costarricense de Cirugía Urológica</h6>
                      <small className="text-muted">Miembro activo</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body p-3">
                      <i className="fas fa-certificate text-primary mb-2"></i>
                      <h6 className="mb-1">Confederación Americana de Urología (CAU)</h6>
                      <small className="text-muted">Miembro</small>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted mb-4">
                <em>"Mis fortalezas son mi fortaleza en Dios, mi pasión por esta carrera y la dedicación
                  a mis pacientes con calidez humana y empatía."</em>
              </p>

              <div className="text-center">
                <a href="DraNavarro/about" className="btn btn-outline-secondary px-4 py-2">
                  Ver más información
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="h1 fw-bold text-dark mb-4">Servicios</h2>
              <p className="lead text-muted mb-5">
                Procedimientos urológicos especializados con tecnología de vanguardia
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm"
                    style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-microscope text-secondary fs-3"></i>
                  </div>
                  <h4 className="text-dark mb-3">Biopsia de Próstata</h4>
                  <p className="text-muted mb-3">
                    Procedimiento diagnóstico para detectar anomalías prostáticas.
                    Disponible con y sin sedación según las necesidades del paciente.
                  </p>
                  <ul className="list-unstyled text-muted small">
                    <li><i className="fas fa-check text-success me-2"></i>Con y sin sedación</li>
                    <li><i className="fas fa-check text-success me-2"></i>Tecnología avanzada</li>
                    <li><i className="fas fa-check text-success me-2"></i>Resultados precisos</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm"
                    style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-cut text-secondary fs-3"></i>
                  </div>
                  <h4 className="text-dark mb-3">Frenuloplastia</h4>
                  <p className="text-muted mb-3">
                    Cirugía menor para corregir el frenillo corto del pene.
                    Mejora la función sexual y elimina molestias.
                  </p>
                  <ul className="list-unstyled text-muted small">
                    <li><i className="fas fa-check text-success me-2"></i>Procedimiento ambulatorio</li>
                    <li><i className="fas fa-check text-success me-2"></i>Recuperación rápida</li>
                    <li><i className="fas fa-check text-success me-2"></i>Mejora funcional</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm"
                    style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-fire text-secondary fs-3"></i>
                  </div>
                  <h4 className="text-dark mb-3">Cauterización de Papilomas</h4>
                  <p className="text-muted mb-3">
                    Eliminación efectiva de papilomas genitales y urinarios
                    con técnicas de cauterización avanzadas.
                  </p>
                  <ul className="list-unstyled text-muted small">
                    <li><i className="fas fa-check text-success me-2"></i>Eliminación completa</li>
                    <li><i className="fas fa-check text-success me-2"></i>Baja recurrencia</li>
                    <li><i className="fas fa-check text-success me-2"></i>Procedimiento seguro</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link to="/servicios" className="btn btn-outline-secondary px-4 py-3 rounded-pill fw-medium">
              VER TODOS LOS SERVICIOS
            </Link>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="h1 fw-bold text-dark mb-4">Contacto</h2>
              <p className="lead text-muted mb-5">
                Agenda tu cita y recibe atención médica especializada
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h4 className="text-dark mb-4">Información de Contacto</h4>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-map-marker-alt text-secondary"></i>
                    </div>
                    <div>
                      <h6 className="text-dark mb-1">Dirección</h6>
                      <p className="text-muted mb-0">ALAJUELA, SAN CARLOS, CIUDAD QUESADA, BARRIO LA LEYLA, 300 METROS OESTE DE LA GASOLINERA MECO. EDIFICIO AMBAR</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: '50px', height: '50px' }}>
                      <i className="fab fa-whatsapp text-success fs-4"></i>
                    </div>
                    <div>
                      <h6 className="text-dark mb-1">WhatsApp</h6>
                      <p className="text-muted mb-0">
                        <a href="https://wa.me/50687051691" className="text-decoration-none text-success" target="_blank">
                          +506 8705 1691
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-envelope text-secondary"></i>
                    </div>
                    <div>
                      <h6 className="text-dark mb-1">Email</h6>
                      <p className="text-muted mb-0">dra.uro.mng@gmail.com</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-clock text-secondary"></i>
                    </div>
                    <div>
                      <h6 className="text-dark mb-1">Horarios de Atención</h6>
                      <div className="text-muted small">
                        <div className="d-flex justify-content-between">
                          <span>Lunes:</span>
                          <span className="text-danger">Cerrado</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Martes:</span>
                          <span>1:20 PM - 6:00 PM</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Miércoles:</span>
                          <span className="text-danger">Cerrado</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Jueves:</span>
                          <span>1:20 PM - 6:00 PM</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Viernes:</span>
                          <span className="text-danger">Cerrado</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Sábado:</span>
                          <span>10:00 AM - 2:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h4 className="text-dark mb-4">Agendar Cita</h4>
                  <p className="text-muted mb-4">
                    Contáctame a través de WhatsApp para agendar tu cita.
                    Te responderé en el menor tiempo posible para coordinar tu consulta.
                  </p>
                  <div className="d-grid gap-2">
                    <a href="https://wa.me/50687051691?text=Hola%20Dra.%20Navarro%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                      className="btn btn-success btn-lg"
                      target="_blank">
                      <i className="fab fa-whatsapp me-2"></i>
                      Agendar por WhatsApp
                    </a>
                    <a href="mailto:dra.uro.mng@gmail.com?subject=Solicitud%20de%20Cita"
                      className="btn btn-outline-secondary">
                      <i className="fas fa-envelope me-2"></i>
                      Enviar Email
                    </a>
                  </div>
                  <div className="mt-4 p-3 bg-light rounded">
                    <h6 className="text-dark mb-2">
                      <i className="fas fa-info-circle me-2"></i>
                      Información Importante
                    </h6>
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

      {/* Footer */}
      <footer style={{ backgroundColor: '#6c757d' }} className="text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h5 className="mb-0">Dra. Marcela Navarro Guzmán</h5>
              <p className="mb-0 text-light">Especialista en Urología - MED9124</p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end gap-3">
                <a href="#" className="text-light">
                  <i className="fab fa-facebook fs-5"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="fab fa-instagram fs-5"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="fab fa-linkedin fs-5"></i>
                </a>
              </div>
              <p className="mb-0 mt-2 text-light small">
                © 2025 Todos los derechos reservados
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

export default App;