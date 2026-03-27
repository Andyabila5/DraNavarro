import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { FaMoneyBillWave, FaCcVisa, FaCreditCard, FaMobileAlt, FaWhatsapp } from 'react-icons/fa';
import { Stethoscope, RotateCcw, Microscope, Scissors, Zap, Activity, Search, Wrench } from "lucide-react";

const ServicesPage = () => {

    // 🔹 Soluciona el problema de que abra en medio de la página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Cerrar menú en móvil
    useEffect(() => {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        const navbarCollapse = document.querySelector('#navbarNavServices');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = window.bootstrap?.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) bsCollapse.hide();
                }
            });
        });
    }, []);

    const services = [
        { id: 1, title: "Consulta Médica Especializada", description: "Evaluación integral con diagnóstico profesional y plan de tratamiento personalizado.", icon: Stethoscope },
        { id: 2, title: "Reconsulta", description: "Seguimiento a consulta previa. Traer resultados solicitados por el médico.", icon: RotateCcw },
        { id: 3, title: "Biopsia de Próstata", description: "Diagnóstico especializado para detectar anomalías en el tejido prostático. Requiere laboratorios previos.", icon: Microscope },
        { id: 4, title: "Vasectomía", description: "Procedimiento anticonceptivo masculino permanente. Alta efectividad y recuperación rápida.", icon: Scissors },
        { id: 5, title: "Cauterización de Papilomas", description: "Eliminación rápida y segura de lesiones cutáneas causadas por VPH.", icon: Zap },
        { id: 6, title: "Circuncisión", description: "Intervención ambulatoria para remover el prepucio. Mejora la higiene y puede reducir infecciones.", icon: Activity },
        { id: 7, title: "Cistoscopia", description: "Estudio endoscópico para evaluar vejiga y uretra. Útil para diagnosticar infecciones y obstrucciones.", icon: Search },
        { id: 8, title: "Frenoplastia", description: "Cirugía menor para liberar el frenillo del pene. Mejora funcionalidad y evita molestias.", icon: Wrench }
    ];

    return (
        <div className="App">
            <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .hover-lift { transition: all 0.3s ease; }
        .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important; }

        /* Navbar responsive */
        .navbar-brand .logo-wrapper-sv { width: 50px; height: 50px; }
        .navbar-brand .brand-name-sv { font-size: 0.9rem; }
        @media (min-width: 992px) {
          .navbar-brand .logo-wrapper-sv { width: 65px; height: 65px; }
          .navbar-brand .brand-name-sv { font-size: 1.1rem; }
        }

        /* Hero responsive */
        .hero-sv-title { font-size: 1.8rem; line-height: 1.2; }
        @media (min-width: 768px) { .hero-sv-title { font-size: 2.3rem; } }
        @media (min-width: 992px) { .hero-sv-title { font-size: 2.8rem; } }

        .hero-sv-img { height: 260px; }
        @media (min-width: 768px) { .hero-sv-img { height: 340px; } }
        @media (min-width: 992px) { .hero-sv-img { height: 400px; } }

        /* WhatsApp float */
        .whatsapp-float-sv { width: 50px; height: 50px; bottom: 15px; right: 15px; }
        @media (min-width: 768px) { .whatsapp-float-sv { width: 60px; height: 60px; bottom: 20px; right: 20px; } }

        /* Métodos de pago responsive */
        .payment-card-icon { width: 60px; height: 60px; }
        @media (min-width: 768px) { .payment-card-icon { width: 70px; height: 70px; } }

        /* Footer responsive */
        .footer-schedule { font-size: 0.8rem; }
      `}</style>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top" style={{ backgroundColor: '#f8f9fa', minHeight: '70px' }}>
                <div className="container">
                    <Link className="navbar-brand fw-bold py-2" to="/" style={{ color: '#2c3e50' }}>
                        <div className="d-flex align-items-center">
                            <div className="logo-wrapper-sv me-2 me-lg-3 overflow-hidden d-flex align-items-center justify-content-center flex-shrink-0" style={{ borderRadius: '50%', border: '2px solid #e9ecef' }}>
                                <img src={`${import.meta.env.BASE_URL}Logo.png`} alt="Logo" style={{ width: '90%', height: '90%', objectFit: 'cover' }} />
                            </div>
                            <span className="brand-name-sv">Dra. Marcela Navarro Guzmán</span>
                        </div>
                    </Link>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavServices"
                        aria-controls="navbarNavServices"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavServices">
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
            <section style={{ paddingTop: '70px', backgroundColor: '#f8f9fa' }}>
                <div className="container py-4 py-lg-5">
                    <div className="row align-items-center g-4">

                        {/* Imagen primero en móvil */}
                        <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
                            <div className="bg-white rounded-4 shadow-lg p-3 mx-auto" style={{ maxWidth: '340px' }}>
                                <div className="rounded-4 d-flex align-items-center justify-content-center hero-sv-img" style={{ backgroundColor: '#f8f9fa', width: '100%' }}>
                                    <img src={`${import.meta.env.BASE_URL}Dra3.jpg`} alt="Dra. Marcela Navarro Guzmán" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>

                        {/* Texto */}
                        <div className="col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-start">
                            <p className="text-uppercase text-secondary mb-2 fw-medium" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>
                                SERVICIOS ESPECIALIZADOS
                            </p>
                            <h1 className="hero-sv-title fw-bold mb-3" style={{ color: '#2c3e50' }}>
                                Procedimientos Urológicos de Alta Calidad
                            </h1>
                            <p className="mb-4" style={{ color: '#6c757d' }}>
                                Ofrecemos una amplia gama de procedimientos urológicos especializados,
                                realizados con la más alta tecnología y estándares de calidad médica.
                            </p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="https://wa.me/50687051691"
                                    className="btn px-4 py-2 py-lg-3 rounded-pill fw-medium"
                                    style={{ backgroundColor: '#25d366', color: 'white', border: 'none' }}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="fab fa-whatsapp me-2"></i>AGENDAR CONSULTA
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Botón flotante WhatsApp */}
            <a
                href="https://wa.me/50687051691"
                className="whatsapp-float-sv position-fixed rounded-circle d-flex align-items-center justify-content-center shadow-lg"
                style={{ backgroundColor: '#25d366', zIndex: 1000, textDecoration: 'none', transition: 'all 0.3s ease', animation: 'pulse 2s infinite' }}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.backgroundColor = '#128c7e'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#25d366'; }}
            >
                <FaWhatsapp size={24} color="white" />
            </a>

            {/* Lista de Servicios */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <h2 className="h1 fw-bold text-dark mb-4">Nuestros Servicios</h2>
                            <p className="lead text-muted">
                                Procedimientos especializados con requisitos claros para cada servicio
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 mb-5">
                        {services.map((service) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={service.id} className="col-12 col-lg-6">
                                    <div className="card border-0 shadow-sm h-100 hover-lift">
                                        <div className="card-body p-3 p-md-4">
                                            <div className="d-flex align-items-start mb-3">
                                                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm flex-shrink-0" style={{ width: '55px', height: '55px' }}>
                                                    <IconComponent size={22} strokeWidth={1.5} color="#6c757d" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="text-dark mb-2 fw-bold">{service.title}</h5>
                                                    <p className="text-muted mb-0 small lh-base">{service.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* Métodos de Pago */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <h2 className="h1 fw-bold text-dark mb-4">Métodos de Pago Aceptados</h2>
                            <p className="lead text-muted">Aceptamos diversos métodos de pago para su comodidad</p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                icon: FaMoneyBillWave,
                                color: 'bg-success',
                                title: 'Efectivo',
                                desc: 'Pago en efectivo al momento de la consulta o procedimiento'
                            },
                            {
                                icon: FaCreditCard,
                                color: 'bg-primary',
                                title: 'Tarjetas de Crédito y Débito',
                                desc: 'Visa, MasterCard, American Express y tarjetas de débito'
                            },
                            {
                                icon: FaMobileAlt,
                                color: 'bg-warning',
                                title: 'Transferencias',
                                desc: 'SINPE Móvil y transferencias bancarias'
                            },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="col-6 col-lg-4">
                                    <div className="card border-0 shadow-sm h-100 text-center">
                                        <div className="card-body p-3 p-md-4">
                                            <div className={`${item.color} text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 payment-card-icon`}>
                                                <Icon size={24} />
                                            </div>
                                            <h6 className="text-dark mb-2">{item.title}</h6>
                                            <p className="text-muted mb-0 small">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Ubicación */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <h2 className="h1 fw-bold text-dark mb-4">Ubicación del Consultorio</h2>
                            <p className="lead text-muted">Visítenos en nuestro consultorio ubicado en San Carlos, Costa Rica</p>
                        </div>
                    </div>
                    <div className="row g-4 align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body p-3 p-md-4">
                                    <h4 className="text-dark mb-4"><i className="fas fa-map-marker-alt text-primary me-2"></i>Información de Contacto</h4>
                                    <div className="mb-3">
                                        <h6 className="text-dark mb-1"><i className="fas fa-building text-secondary me-2"></i>Dirección</h6>
                                        <p className="text-muted mb-0 small">NOVA UROCLINICA by Dra. Navarro, San Carlos, Costa Rica</p>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="text-dark mb-1"><i className="fas fa-phone text-secondary me-2"></i>Teléfono</h6>
                                        <p className="text-muted mb-0">+506 8705 1691</p>
                                    </div>
                                    <div className="mb-4">
                                        <h6 className="text-dark mb-1"><i className="fas fa-clock text-secondary me-2"></i>Horarios de Atención</h6>
                                        <p className="text-muted mb-1 small">Lunes a Viernes: 1:00 PM - 5:30 PM</p>
                                        <p className="text-muted mb-0 small">Sábado y Domingo: Cerrado</p>
                                    </div>
                                    <a href="https://wa.me/50687051691"
                                        className="btn px-4 py-2 rounded-pill fw-medium w-100"
                                        style={{ backgroundColor: '#25d366', color: 'white', border: 'none' }}
                                        target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-whatsapp me-2"></i>AGENDAR CITA POR WHATSAPP
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body p-0">
                                    <div style={{ height: '350px', borderRadius: '0.5rem', overflow: 'hidden' }}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.822996164596!2d-84.43725062419842!3d10.340712492793735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa065d16e43a39b%3A0xd5efab948478f1e!2sNOVA%20UROCLINICA%20by%20Dra.%20Navarro!5e0!3m2!1ses!2scr!4v1700000000000!5m2!1ses!2scr"
                                            width="100%" height="100%" style={{ border: 0 }}
                                            allowFullScreen="" loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Ubicación NOVA UROCLINICA"
                                        ></iframe>
                                    </div>
                                    <div className="p-3">
                                        <a href="https://www.google.com/maps/place/NOVA+UROCLINICA+by+Dra.+Navarro/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary w-100">
                                            Ver en Google Maps
                                        </a>
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
                            <p className="text-white-50 mb-0 small">Brindando atención urológica especializada con los más altos estándares de calidad y tecnología médica.</p>
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
                            <ul className="list-unstyled text-white-50 mb-0 footer-schedule">
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

export default ServicesPage;