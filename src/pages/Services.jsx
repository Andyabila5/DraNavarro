import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {
    FaMoneyBillWave,
    FaCcVisa,
    FaCreditCard,
    FaMobileAlt,
    FaInfoCircle
} from 'react-icons/fa';


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

            {/* Lista Completa de Servicios */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <h2 className="h1 fw-bold text-dark mb-4">Nuestros Servicios</h2>
                            <p className="lead text-muted mb-5">
                                Procedimientos especializados con precios transparentes y requisitos claros para cada servicio
                            </p>
                        </div>
                    </div>

                    {/* Consulta Médica Especializada */}
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <div className="card border-0 shadow-lg">
                                <div className="card-body p-5">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="d-flex align-items-start mb-4">
                                                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-4 shadow"
                                                    style={{ width: '70px', height: '70px', minWidth: '70px' }}>
                                                    <i className="fas fa-stethoscope fs-4"></i>
                                                </div>
                                                <div>
                                                    <h3 className="text-dark mb-2">Consulta Médica Especializada</h3>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <span className="badge bg-success fs-6 me-3">₡55,000 + IVA</span>
                                                        <span className="text-muted">Primera consulta</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <h5 className="text-dark mb-3">El precio incluye:</h5>
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <h6 className="text-secondary mb-2">Para hombres mayores de 45 años:</h6>
                                                    <ul className="list-unstyled text-muted">
                                                        <li><i className="fas fa-check-circle text-success me-2"></i>PSA Total y Libre</li>
                                                        <li><i className="fas fa-check-circle text-success me-2"></i>Ultrasonido de próstata</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className="text-secondary mb-2">Para mujeres con infección urinaria:</h6>
                                                    <ul className="list-unstyled text-muted">
                                                        <li><i className="fas fa-check-circle text-success me-2"></i>EGO (si es posible)</li>
                                                        <li><i className="fas fa-check-circle text-success me-2"></i>Urocultivo</li>
                                                        <li><i className="fas fa-check-circle text-success me-2"></i>Ultrasonido de vías urinarias</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <h6 className="text-secondary mb-2">Para hombres con infección/retención/prostatitis:</h6>
                                                    <ul className="list-unstyled text-muted">
                                                        <li><i className="fas fa-check-circle text-success me-2"></i>EGO (si es posible)</li>
                                                        <li><i className="fas fa-check-circle text-success me-2"></i>PSA Total y Libre</li>
                                                        <li><i className="fas fa-check-circle text-success me-2"></i>Urocultivo</li>
                                                        <li><i className="fas fa-check-circle text-success me-2"></i>Ultrasonido de vías urinarias</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className="text-secondary mb-2">Para pacientes con hematuria:</h6>
                                                    <ul className="list-unstyled text-muted">
                                                        <li><i className="fas fa-check-circle text-success me-2"></i>Hemograma</li>
                                                        <li><i className="fas fa-check-circle text-success me-2"></i>EGO</li>
                                                        <li><i className="fas fa-check-circle text-success me-2"></i>Ultrasonido de vías urinarias</li>
                                                        <li><i className="fas fa-exclamation-triangle text-warning me-2"></i>Pruebas de coagulación (si está anticoagulado)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="bg-light rounded-4 p-4 h-100">
                                                <h5 className="text-dark mb-3">
                                                    <i className="fas fa-info-circle text-primary me-2"></i>
                                                    Información Importante
                                                </h5>
                                                <p className="text-muted small mb-3">
                                                    La consulta se adapta según su condición específica e incluye todos los estudios necesarios para un diagnóstico preciso.
                                                </p>
                                                <div className="alert alert-warning mb-0" role="alert">
                                                    <small><strong>Nota:</strong> Los estudios incluidos varían según el motivo de consulta y edad del paciente.</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reconsulta */}
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8">
                                            <div className="d-flex align-items-start">
                                                <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                                                    style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                                                    <i className="fas fa-redo-alt fs-5"></i>
                                                </div>
                                                <div>
                                                    <h4 className="text-dark mb-2">Reconsulta</h4>
                                                    <span className="badge bg-info fs-6 mb-3">₡25,000 + IVA</span>
                                                    <p className="text-muted mb-2">Válida dentro de un lapso de 2 meses desde la consulta inicial.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="alert alert-info mb-0" role="alert">
                                                <small><strong>Requisito:</strong> Llevar resultados de laboratorio si fueron solicitados en consulta anterior.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Procedimientos Quirúrgicos */}
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h2 className="h3 fw-bold text-dark text-center">Procedimientos Quirúrgicos</h2>
                        </div>
                    </div>

                    {/* Biopsia de Próstata */}
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <div className="card border-0 shadow-lg">
                                <div className="card-body p-5">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="d-flex align-items-start mb-4">
                                                <div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-4 shadow"
                                                    style={{ width: '70px', height: '70px', minWidth: '70px' }}>
                                                    <i className="fas fa-microscope fs-4"></i>
                                                </div>
                                                <div>
                                                    <h3 className="text-dark mb-2">Biopsia de Próstata</h3>
                                                    <span className="badge bg-danger fs-6 mb-3">₡300,000 + IVA</span>
                                                </div>
                                            </div>

                                            <h5 className="text-dark mb-3">Requisitos previos:</h5>
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <h6 className="text-secondary mb-2">Laboratorios requeridos:</h6>
                                                    <ul className="list-unstyled text-muted">
                                                        <li><i className="fas fa-vial text-primary me-2"></i>Hemograma completo</li>
                                                        <li><i className="fas fa-vial text-primary me-2"></i>Pruebas de coagulación</li>
                                                        <li><i className="fas fa-vial text-primary me-2"></i>Urocultivo y EGO</li>
                                                        <li><i className="fas fa-vial text-primary me-2"></i>Glicemia en ayunas</li>
                                                        <li><i className="fas fa-vial text-primary me-2"></i>PSA total y libre</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className="text-secondary mb-2">Preparación especial:</h6>
                                                    <ul className="list-unstyled text-muted">
                                                        <li><i className="fas fa-pills text-success me-2"></i>Antibióticos (según indicación)</li>
                                                        <li><i className="fas fa-pills text-success me-2"></i>Laxante</li>
                                                        <li><i className="fas fa-utensils text-warning me-2"></i>Dieta especial (se brinda flyer)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="bg-light rounded-4 p-4 h-100">
                                                <h5 className="text-dark mb-3">
                                                    <i className="fas fa-clipboard-list text-danger me-2"></i>
                                                    Información del Procedimiento
                                                </h5>
                                                <p className="text-muted small mb-3">
                                                    Procedimiento diagnóstico especializado para detectar anomalías en el tejido prostático con alta precisión.
                                                </p>
                                                <div className="alert alert-danger mb-0" role="alert">
                                                    <small><strong>Importante:</strong> Se requiere completar todos los laboratorios y seguir la preparación especial antes del procedimiento.</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Otros Procedimientos en Grid */}
                    <div className="row g-4">
                        {/* Vasectomía */}
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                                            style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                                            <i className="fas fa-cut fs-5"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-dark mb-2">Vasectomía</h4>
                                            <span className="badge bg-success fs-6 mb-3">₡180,000 + IVA</span>
                                        </div>
                                    </div>

                                    <h6 className="text-secondary mb-2">Requisitos:</h6>
                                    <ul className="list-unstyled text-muted mb-3">
                                        <li><i className="fas fa-user-friends text-primary me-2"></i>Venir con acompañante</li>
                                        <li><i className="fas fa-razor text-primary me-2"></i>Rasurado previo</li>
                                        <li><i className="fas fa-clock text-warning me-2"></i>3 horas de ayuno</li>
                                    </ul>

                                    <div className="alert alert-success" role="alert">
                                        <small><i className="fas fa-file-alt me-2"></i><strong>Incluye:</strong> Flyer con cuidados y recomendaciones post-operatorias</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cauterización de Papilomas */}
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                                            style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                                            <i className="fas fa-fire fs-5"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-dark mb-2">Cauterización de Papilomas</h4>
                                            <span className="badge bg-warning fs-6 mb-3">₡55,000 + IVA</span>
                                            <p className="text-muted small mb-0">*Precio según valoración</p>
                                        </div>
                                    </div>

                                    <p className="text-muted mb-3">
                                        Eliminación efectiva de papilomas con técnicas de cauterización avanzadas.
                                        El precio final se determina según el caso específico.
                                    </p>

                                    <div className="alert alert-info" role="alert">
                                        <small><i className="fas fa-info-circle me-2"></i><strong>Nota:</strong> El precio se determina según el caso y extensión del tratamiento requerido.</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Circuncisión */}
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                                            style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                                            <i className="fas fa-scalpel fs-5"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-dark mb-2">Circuncisión</h4>
                                            <span className="badge bg-primary fs-6 mb-2">₡500,000 + IVA</span>
                                            <p className="text-muted small mb-0">Con anestesia local</p>
                                            <p className="text-muted small mb-0">Sedación: +₡70,000</p>
                                        </div>
                                    </div>

                                    <h6 className="text-secondary mb-2">Requisitos:</h6>
                                    <ul className="list-unstyled text-muted mb-3">
                                        <li><i className="fas fa-clock text-warning me-2"></i>6 horas de ayuno</li>
                                        <li><i className="fas fa-user-friends text-primary me-2"></i>Acompañante</li>
                                    </ul>

                                    <h6 className="text-secondary mb-2">Laboratorios requeridos:</h6>
                                    <ul className="list-unstyled text-muted mb-3 small">
                                        <li><i className="fas fa-vial text-primary me-2"></i>Hemograma completo</li>
                                        <li><i className="fas fa-vial text-primary me-2"></i>Pruebas de coagulación</li>
                                        <li><i className="fas fa-vial text-primary me-2"></i>Glicemia en ayunas</li>
                                    </ul>

                                    <div className="alert alert-primary" role="alert">
                                        <small><i className="fas fa-calendar-check me-2"></i><strong>Incluye:</strong> Una cita de control post-operatoria</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cistoscopia */}
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                                            style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                                            <i className="fas fa-search fs-5"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-dark mb-2">Cistoscopia</h4>
                                            <span className="badge bg-info fs-6 mb-2">₡150,000 + IVA</span>
                                            <p className="text-muted small mb-0">Con anestesia local</p>
                                            <p className="text-muted small mb-0">Sedación: +₡70,000</p>
                                        </div>
                                    </div>

                                    <h6 className="text-secondary mb-2">Requisitos:</h6>
                                    <ul className="list-unstyled text-muted mb-3">
                                        <li><i className="fas fa-vial text-primary me-2"></i>EGO y Urocultivo sin infección</li>
                                        <li><i className="fas fa-user-friends text-primary me-2"></i>Acompañante</li>
                                    </ul>

                                    <p className="text-muted mb-3">
                                        Examen diagnóstico para visualizar el interior de la vejiga y la uretra.
                                    </p>

                                    <div className="alert alert-info" role="alert">
                                        <small><i className="fas fa-exclamation-circle me-2"></i><strong>Importante:</strong> Los cultivos deben estar sin datos de infección</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Frenoplastia */}
                        <div className="col-lg-12">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8">
                                            <div className="d-flex align-items-start mb-3">
                                                <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                                                    style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                                                    <i className="fas fa-band-aid fs-5"></i>
                                                </div>
                                                <div>
                                                    <h4 className="text-dark mb-2">Frenoplastia</h4>
                                                    <span className="badge bg-secondary fs-6 mb-2">₡150,000 + IVA</span>
                                                    <p className="text-muted small mb-0">Con anestesia local | Sedación: +₡70,000</p>
                                                </div>
                                            </div>

                                            <h6 className="text-secondary mb-2">Requisitos:</h6>
                                            <ul className="list-unstyled text-muted mb-3">
                                                <li><i className="fas fa-user-friends text-primary me-2"></i>Acompañante</li>
                                                <li><i className="fas fa-clock text-warning me-2"></i>6 horas de ayuno</li>
                                            </ul>

                                            <p className="text-muted mb-0">
                                                Procedimiento quirúrgico para corregir el frenillo corto del pene, mejorando la función sexual.
                                            </p>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="bg-light rounded-4 p-4">
                                                <h6 className="text-dark mb-2">
                                                    <i className="fas fa-clock text-secondary me-2"></i>
                                                    Preparación
                                                </h6>
                                                <p className="text-muted small mb-0">
                                                    Procedimiento ambulatorio que requiere ayuno previo y acompañante para la seguridad del paciente.
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

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <h2 className="h1 fw-bold text-dark mb-4">Métodos de Pago Aceptados</h2>
                            <p className="lead text-muted mb-4">
                                Aceptamos diversos métodos de pago para su comodidad
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm h-100 text-center">
                                <div className="card-body p-4">
                                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                        style={{ width: '70px', height: '70px' }}>
                                        <FaMoneyBillWave size={28} />
                                    </div>
                                    <h5 className="text-dark mb-3">Efectivo</h5>
                                    <p className="text-muted mb-0">
                                        Pago en efectivo al momento de la consulta o procedimiento
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm h-100 text-center">
                                <div className="card-body p-4">
                                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                        style={{ width: '70px', height: '70px' }}>
                                        <FaCcVisa size={28} />
                                    </div>
                                    <h5 className="text-dark mb-3">Tarjetas de Crédito</h5>
                                    <p className="text-muted mb-0">Visa, MasterCard y American Express</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm h-100 text-center">
                                <div className="card-body p-4">
                                    <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                        style={{ width: '70px', height: '70px' }}>
                                        <FaCreditCard size={28} />
                                    </div>
                                    <h5 className="text-dark mb-3">Tarjetas de Débito</h5>
                                    <p className="text-muted mb-0">Todas las tarjetas de débito nacionales</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm h-100 text-center">
                                <div className="card-body p-4">
                                    <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                        style={{ width: '70px', height: '70px' }}>
                                        <FaMobileAlt size={28} />
                                    </div>
                                    <h5 className="text-dark mb-3">Transferencias</h5>
                                    <p className="text-muted mb-0">SINPE Móvil y transferencias bancarias</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-8 mx-auto">
                            <div className="alert alert-info text-center" role="alert">
                                <h5 className="alert-heading d-flex justify-content-center align-items-center gap-2">
                                    <FaInfoCircle />
                                    Información Importante sobre Pagos
                                </h5>
                                <p className="mb-3">• Todos los precios están sujetos al IVA vigente</p>
                                <p className="mb-3">• Los pagos deben realizarse antes o al momento del procedimiento</p>
                                <p className="mb-0">• Para procedimientos quirúrgicos, se requiere confirmación de pago con anticipación</p>
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
        </div>
    );
};

export default ServicesPage;