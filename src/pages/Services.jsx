import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {
    FaMoneyBillWave,
    FaCcVisa,
    FaCreditCard,
    FaMobileAlt,
    FaInfoCircle,
    FaWhatsapp

} from 'react-icons/fa';
import {
    Stethoscope,
    RotateCcw,
    Microscope,
    Scissors,
    Zap,
    Activity,
    Search,
    Wrench
} from "lucide-react";

const ServicesPage = () => {
    const services = [
        {
            id: 1,
            title: "Consulta Médica Especializada",
            description: "Evaluación integral con diagnóstico profesional y plan de tratamiento personalizado.",
            icon: Stethoscope
        },
        {
            id: 2,
            title: "Reconsulta",
            description: "Seguimiento a consulta previa. Traer resultados solicitados por el médico.",
            icon: RotateCcw
        },
        {
            id: 3,
            title: "Biopsia de Próstata",
            description: "Diagnóstico especializado para detectar anomalías en el tejido prostático. Requiere laboratorios previos.",
            icon: Microscope
        },
        {
            id: 4,
            title: "Vasectomía",
            description: "Procedimiento anticonceptivo masculino permanente. Alta efectividad y recuperación rápida.",
            icon: Scissors
        },
        {
            id: 5,
            title: "Cauterización de Papilomas",
            description: "Eliminación rápida y segura de lesiones cutáneas causadas por VPH.",
            icon: Zap
        },
        {
            id: 6,
            title: "Circuncisión",
            description: "Intervención ambulatoria para remover el prepucio. Mejora la higiene y puede reducir infecciones.",
            icon: Activity
        },
        {
            id: 7,
            title: "Cistoscopia",
            description: "Estudio endoscópico para evaluar vejiga y uretra. Útil para diagnosticar infecciones y obstrucciones.",
            icon: Search
        },
        {
            id: 8,
            title: "Frenoplastia",
            description: "Cirugía menor para liberar el frenillo del pene. Mejora funcionalidad y evita molestias.",
            icon: Wrench
        }
    ];


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
                                Ofrecemos una amplia gama de procedimientos urológicos especializados,
                                realizados con la más alta tecnología y estándares de calidad médica.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="https://wa.me/50687051691"
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
                <FaWhatsapp size={28} color="white" />
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

            {/* Lista Completa de Servicios - NUEVA SECCIÓN MODERNIZADA */}
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

                    {/* Services Grid con estilo consistente */}
                    <div className="row g-4 mb-5">
                        {services.map((service) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={service.id} className="col-lg-6">
                                    <div className="card border-0 shadow-sm h-100 hover-lift">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start mb-3">
                                                <div
                                                    className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                                                    style={{ width: '60px', height: '60px', minWidth: '60px' }}
                                                >
                                                    <IconComponent size={24} strokeWidth={1.5} color="#6c757d" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h4 className="text-dark mb-2 fw-bold">{service.title}</h4>
                                                    <p className="text-muted mb-0 lh-base">{service.description}</p>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-3 border-top">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    {/* Call to Action mejorado */}
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="bg-light rounded-4 p-5 text-center">
                                <h3 className="h4 fw-bold text-dark mb-3">
                                    ¿Necesitas más información sobre nuestros servicios?
                                </h3>
                                <p className="text-muted mb-4">
                                    Contacta con nuestro equipo médico para resolver todas tus dudas y programar tu cita
                                </p>
                                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                                    <a href="https://wa.me/50687051691"
                                        className="btn px-4 py-3 rounded-pill fw-medium"
                                        style={{ backgroundColor: '#25d366', color: 'white', border: 'none' }}
                                        target="_blank">
                                        <i className="fab fa-whatsapp me-2"></i>
                                        Agendar Cita
                                    </a>
                                    <button className="btn btn-outline-primary px-4 py-3 rounded-pill fw-medium">
                                        Contactar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Añadir estilos CSS para hover effect */}
            <style jsx>{`
                .hover-lift {
                    transition: all 0.3s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
                }
            `}</style>

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
                                        border: '2px solid white',
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