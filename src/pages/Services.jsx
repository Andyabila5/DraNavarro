import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServicesPage = () => {
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
                                <a className="nav-link fw-medium py-3" href="/" style={{ color: '#6c757d' }}>INICIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium py-3" href="/About" style={{ color: '#6c757d' }}>SOBRE MÍ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium py-3" href="/servicios" style={{ color: '#2c3e50', borderBottom: '2px solid #2c3e50' }}>SERVICIOS</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Services */}
            <section style={{ paddingTop: '80px', backgroundColor: '#f8f9fa' }}>
                <div className="container py-5">
                    <div className="row align-items-center min-vh-50">
                        <div className="col-lg-6">
                            <p className="text-uppercase text-secondary mb-3 fw-medium" style={{ letterSpacing: '1px' }}>
                                SERVICIOS ESPECIALIZADOS
                            </p>
                            <h1 className="display-4 fw-bold mb-4" style={{ color: '#2c3e50', lineHeight: '1.2' }}>
                                Procedimientos Urológicos de Alta Calidad
                            </h1>
                            <p className="lead mb-4" style={{ color: '#6c757d' }}>
                                Ofrezco una amplia gama de procedimientos urológicos especializados,
                                realizados con la más alta tecnología y estándares de calidad médica.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="https://wa.me/506870516918"
                                    className="btn px-4 py-3 rounded-pill fw-medium"
                                    style={{ backgroundColor: '#25d366', color: 'white', border: 'none' }}
                                    target="_blank">
                                    <i className="fab fa-whatsapp me-2"></i>
                                    AGENDAR CONSULTA
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <div className="position-relative">
                                <div className="bg-white rounded-4 shadow-lg p-5 mx-auto" style={{ maxWidth: '400px' }}>
                                    <div className="rounded-4 overflow-hidden d-flex align-items-center justify-content-center" style={{ height: '300px', backgroundColor: '#f8f9fa' }}>
                                        <img
                                            src="Logo.png"
                                            alt="Logo Dra. Marcela Navarro Guzmán"
                                            style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
                                        />
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

            {/* Introducción a Servicios */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="h1 fw-bold text-dark mb-4">Nuestros Servicios</h2>
                            <p className="lead text-muted mb-5">
                                Realizamos procedimientos urológicos especializados con tecnología de vanguardia
                                y un enfoque personalizado en la atención al paciente. Cada procedimiento se realiza
                                bajo estrictos protocolos de seguridad y con opciones de sedación según las necesidades del paciente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Procedimientos Principales */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h2 className="h1 fw-bold text-dark mb-4">Procedimientos Especializados</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        {/* Biopsia de Próstata */}
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                                            style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                                            <i className="fas fa-microscope text-secondary fs-4"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-dark mb-2">Biopsia de Próstata</h4>
                                            <p className="text-secondary small mb-0">Con y sin sedación disponible</p>
                                        </div>
                                    </div>
                                    <p className="text-muted mb-3">
                                        Procedimiento diagnóstico para obtener muestras de tejido prostático y detectar
                                        posibles anomalías. Realizamos este procedimiento tanto con sedación para mayor
                                        comodidad del paciente, como sin sedación para casos específicos.
                                    </p>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="border rounded p-3 text-center mb-2">
                                                <i className="fas fa-bed text-success mb-2"></i>
                                                <h6 className="text-dark mb-1">Con Sedación</h6>
                                                <p className="small text-muted mb-0">Mayor comodidad</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="border rounded p-3 text-center mb-2">
                                                <i className="fas fa-user-check text-primary mb-2"></i>
                                                <h6 className="text-dark mb-1">Sin Sedación</h6>
                                                <p className="small text-muted mb-0">Procedimiento rápido</p>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled text-muted small">
                                        <li><i className="fas fa-check text-success me-2"></i>Diagnóstico preciso</li>
                                        <li><i className="fas fa-check text-success me-2"></i>Tecnología de vanguardia</li>
                                        <li><i className="fas fa-check text-success me-2"></i>Resultados confiables</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Frenuloplastia */}
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                                            style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                                            <i className="fas fa-cut text-secondary fs-4"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-dark mb-2">Frenuloplastia</h4>
                                            <p className="text-secondary small mb-0">Con y sin sedación disponible</p>
                                        </div>
                                    </div>
                                    <p className="text-muted mb-3">
                                        Procedimiento quirúrgico menor para corregir el frenillo corto del pene.
                                        Mejora la función sexual y elimina molestias. Ofrecemos ambas opciones:
                                        con sedación para mayor tranquilidad o sin sedación como procedimiento ambulatorio.
                                    </p>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="border rounded p-3 text-center mb-2">
                                                <i className="fas fa-bed text-success mb-2"></i>
                                                <h6 className="text-dark mb-1">Con Sedación</h6>
                                                <p className="small text-muted mb-0">Sin molestias</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="border rounded p-3 text-center mb-2">
                                                <i className="fas fa-clock text-primary mb-2"></i>
                                                <h6 className="text-dark mb-1">Sin Sedación</h6>
                                                <p className="small text-muted mb-0">Ambulatorio</p>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled text-muted small">
                                        <li><i className="fas fa-check text-success me-2"></i>Recuperación rápida</li>
                                        <li><i className="fas fa-check text-success me-2"></i>Mejora la función sexual</li>
                                        <li><i className="fas fa-check text-success me-2"></i>Procedimiento seguro</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Cauterización de Papilomas */}
                        <div className="col-lg-12">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8">
                                            <div className="d-flex align-items-start mb-3">
                                                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                                                    style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                                                    <i className="fas fa-fire text-secondary fs-4"></i>
                                                </div>
                                                <div>
                                                    <h4 className="text-dark mb-2">Cauterización de Papilomas</h4>
                                                    <p className="text-secondary small mb-0">Procedimiento ambulatorio especializado</p>
                                                </div>
                                            </div>
                                            <p className="text-muted mb-3">
                                                Tratamiento efectivo para la eliminación de papilomas en el área genital y urinaria.
                                                Utilizamos técnicas de cauterización avanzadas para remover estas lesiones de manera
                                                segura y eficaz, minimizando el riesgo de recurrencia.
                                            </p>
                                            <ul className="list-unstyled text-muted">
                                                <li><i className="fas fa-check text-success me-2"></i>Eliminación completa de lesiones</li>
                                                <li><i className="fas fa-check text-success me-2"></i>Técnica mínimamente invasiva</li>
                                                <li><i className="fas fa-check text-success me-2"></i>Baja probabilidad de recurrencia</li>
                                                <li><i className="fas fa-check text-success me-2"></i>Recuperación ambulatoria</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <div className="bg-light rounded-4 p-4">
                                                <i className="fas fa-shield-alt text-success fs-1 mb-3"></i>
                                                <h5 className="text-dark mb-2">Tratamiento Seguro</h5>
                                                <p className="text-muted small mb-0">
                                                    Procedimiento ambulatorio con alta tasa de éxito y mínimas complicaciones
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Información Adicional */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="h1 fw-bold text-dark mb-4">¿Por Qué Elegir Nuestros Servicios?</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="text-center">
                                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm"
                                    style={{ width: '80px', height: '80px' }}>
                                    <i className="fas fa-user-md text-secondary fs-3"></i>
                                </div>
                                <h4 className="text-dark mb-3">Experiencia Especializada</h4>
                                <p className="text-muted">
                                    Más de 9 años de experiencia en procedimientos urológicos con
                                    resultados exitosos y pacientes satisfechos.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center">
                                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm"
                                    style={{ width: '80px', height: '80px' }}>
                                    <i className="fas fa-hospital text-secondary fs-3"></i>
                                </div>
                                <h4 className="text-dark mb-3">Tecnología Avanzada</h4>
                                <p className="text-muted">
                                    Utilizamos equipos de última generación y técnicas modernas
                                    para garantizar los mejores resultados.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center">
                                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm"
                                    style={{ width: '80px', height: '80px' }}>
                                    <i className="fas fa-heart text-secondary fs-3"></i>
                                </div>
                                <h4 className="text-dark mb-3">Atención Personalizada</h4>
                                <p className="text-muted">
                                    Cada paciente recibe un plan de tratamiento personalizado
                                    adaptado a sus necesidades específicas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso de Atención */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <h2 className="h1 fw-bold text-dark mb-4">Proceso de Atención</h2>
                            <p className="lead text-muted">
                                Nuestro proceso está diseñado para brindar la mejor experiencia al paciente
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <div className="card border-0 shadow-sm h-100 text-center">
                                <div className="card-body p-4">
                                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                        style={{ width: '60px', height: '60px' }}>
                                        <span className="fw-bold fs-4">1</span>
                                    </div>
                                    <h5 className="text-dark mb-3">Consulta Inicial</h5>
                                    <p className="text-muted">
                                        Evaluación completa y diagnóstico personalizado de su condición.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card border-0 shadow-sm h-100 text-center">
                                <div className="card-body p-4">
                                    <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                        style={{ width: '60px', height: '60px' }}>
                                        <span className="fw-bold fs-4">2</span>
                                    </div>
                                    <h5 className="text-dark mb-3">Plan de Tratamiento</h5>
                                    <p className="text-muted">
                                        Desarrollo de un plan personalizado con todas las opciones disponibles.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card border-0 shadow-sm h-100 text-center">
                                <div className="card-body p-4">
                                    <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                        style={{ width: '60px', height: '60px' }}>
                                        <span className="fw-bold fs-4">3</span>
                                    </div>
                                    <h5 className="text-dark mb-3">Procedimiento</h5>
                                    <p className="text-muted">
                                        Realización del procedimiento con los más altos estándares de calidad.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card border-0 shadow-sm h-100 text-center">
                                <div className="card-body p-4">
                                    <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                        style={{ width: '60px', height: '60px' }}>
                                        <span className="fw-bold fs-4">4</span>
                                    </div>
                                    <h5 className="text-dark mb-3">Seguimiento</h5>
                                    <p className="text-muted">
                                        Control post-procedimiento y seguimiento de la recuperación.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Ubicación del Consultorio */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <h2 className="h1 fw-bold text-dark mb-4">Ubicación del Consultorio</h2>
                            <p className="lead text-muted mb-4">
                                Visítenos en nuestro consultorio ubicado en San Carlos, Costa Rica
                            </p>
                        </div>
                    </div>
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <h4 className="text-dark mb-4">
                                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                                        Información de Contacto
                                    </h4>
                                    <div className="mb-3">
                                        <h6 className="text-dark mb-2">
                                            <i className="fas fa-building text-secondary me-2"></i>
                                            Dirección
                                        </h6>
                                        <p className="text-muted mb-0">Calle 8, San Carlos, Costa Rica</p>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="text-dark mb-2">
                                            <i className="fas fa-phone text-secondary me-2"></i>
                                            Teléfono
                                        </h6>
                                        <p className="text-muted mb-0">+506 8705 1691</p>
                                    </div>
                                    <div className="mb-4">
                                        <h6 className="text-dark mb-2">
                                            <i className="fas fa-clock text-secondary me-2"></i>
                                            Horarios de Atención
                                        </h6>
                                        <p className="text-muted mb-1">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                                        <p className="text-muted mb-0">Sábados: 8:00 AM - 12:00 PM</p>
                                    </div>
                                    <a href="https://wa.me/50687051691"
                                        className="btn px-4 py-2 rounded-pill fw-medium w-100"
                                        style={{ backgroundColor: '#25d366', color: 'white', border: 'none' }}
                                        target="_blank">
                                        <i className="fab fa-whatsapp me-2"></i>
                                        AGENDAR CITA POR WHATSAPP
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body p-0">
                                    <div style={{ height: '400px', borderRadius: '0.5rem', overflow: 'hidden' }}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.8234567890123!2d-84.435800!3d10.340600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIwJzI2LjIiTiA4NMKwMjYnMDguOSJX!5e0!3m2!1ses!2scr!4v1234567890123!5m2!1ses!2scr"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Ubicación del Consultorio - Dra. Marcela Navarro Guzmán"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="h1 fw-bold text-dark mb-4">¿Necesita Alguno de Estos Procedimientos?</h2>
                            <p className="lead text-muted mb-4">
                                Contáctenos para una consulta personalizada y conozca cuál es la mejor opción para su caso
                            </p>
                            <div className="d-flex gap-3 justify-content-center">
                                <a href="https://wa.me/50687051691"
                                    className="btn px-4 py-3 rounded-pill fw-medium"
                                    style={{ backgroundColor: '#25d366', color: 'white', border: 'none' }}
                                    target="_blank">
                                    <i className="fab fa-whatsapp me-2"></i>
                                    CONSULTAR AHORA
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

export default ServicesPage;