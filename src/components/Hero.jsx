import React from 'react';
import { ShieldCheck, Globe, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative overflow-hidden" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '100px', background: 'linear-gradient(135deg, #0a1128 0%, #1c2541 100%)' }}>
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{ background: 'radial-gradient(circle, #c5a059 0%, transparent 70%)', transform: 'translate(20%, -20%)' }}></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-5" style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)', transform: 'translate(-20%, 20%)' }}></div>

            <div className="container relative z-10 grid grid-cols-1 md-grid grid-cols-2 items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <ShieldCheck className="text-primary" size={24} />
                        <span className="text-white font-medium tracking-wider text-sm">ENTIDAD OFICIAL INTERNACIONAL</span>
                    </div>
                    <h1 className="text-white serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                        Tu Licencia de Conducir <span className="text-primary">Internacional</span>
                    </h1>
                    <p className="text-white opacity-80 text-lg mb-8" style={{ maxWidth: '90%' }}>
                        Tramita tu documento oficial para conducir en más de 150 países. Proceso 100% digital, seguro y con respaldo global. Obtén tu vigencia de hasta 5 años hoy mismo.
                    </p>
                    <div className="flex gap-4">
                        <a href="#tramite" className="btn btn-primary">
                            Iniciar Mi Solicitud <ArrowRight size={20} />
                        </a>
                        <a href="#precios" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                            Ver Planes
                        </a>
                    </div>

                    <div className="flex gap-8 mt-12">
                        <div className="flex flex-col">
                            <span className="text-primary font-bold text-2xl">100%</span>
                            <span className="text-white opacity-60 text-sm">Válido Legalmente</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-primary font-bold text-2xl">24h</span>
                            <span className="text-white opacity-60 text-sm">Procesamiento</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-primary font-bold text-2xl">+150</span>
                            <span className="text-white opacity-60 text-sm">Países Admitidos</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="sm-hidden md-flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative">
                        {/* Aesthetic card representation */}
                        <div className="glass-dark" style={{ width: '400px', height: '250px', borderRadius: '20px', padding: '30px', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
                            <div className="flex justify-between items-start mb-8">
                                <div className="flex flex-col">
                                    <span className="text-primary text-xs font-bold tracking-widest uppercase">International</span>
                                    <span className="text-white text-lg font-bold serif">Driving License</span>
                                </div>
                                <Globe className="text-white opacity-30" size={40} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="w-24 h-32 bg-white opacity-10 rounded-lg"></div>
                                <div className="flex flex-col gap-2">
                                    <div className="h-2 w-full bg-white opacity-20 rounded"></div>
                                    <div className="h-2 w-3/4 bg-white opacity-20 rounded"></div>
                                    <div className="h-2 w-1/2 bg-white opacity-20 rounded"></div>
                                    <div className="mt-4 flex items-center gap-2">
                                        <Clock size={14} className="text-primary" />
                                        <span className="text-white opacity-40 text-xs">Válido: 2026 - 2031</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative holographic effect */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary opacity-20" style={{ borderRadius: '50%', filter: 'blur(30px)' }}></div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="bg-green-100 p-2 rounded-full" style={{ background: '#ecfdf5', color: '#059669' }}>
                                <ShieldCheck size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-secondary">Aprobado</span>
                                <span className="text-[10px] text-muted">Documento Oficial</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
