import React from 'react';
import { ShieldCheck, Map, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative overflow-hidden" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '80px', background: 'var(--bg-subtle)' }}>
            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50 text-primary rounded-full border border-blue-100">
                            <ShieldCheck size={20} />
                            <span className="font-bold tracking-wider text-xs uppercase">Entidad Oficial de Trámites Internacionales</span>
                        </div>

                        <h1 className="serif text-secondary mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1' }}>
                            Tu Licencia Internacional <br />
                            <span className="text-primary">Sin Complicaciones</span>
                        </h1>

                        <p className="text-lg text-muted mb-10 leading-relaxed" style={{ maxWidth: '650px', margin: '0 auto' }}>
                            Tramita tu permiso oficial de conducción válido en más de 150 países.
                            Proceso 100% digital, rápido y con envío directo a tu domicilio.
                        </p>

                        <div className="flex flex-col sm-flex-row justify-center gap-4 mb-16">
                            <a href="#tramite" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Iniciar Solicitud <ArrowRight size={20} />
                            </a>
                            <a href="#verificar" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Verificar Estado
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-10 mt-10">
                            <div>
                                <h4 className="text-secondary font-bold text-xl">+150</h4>
                                <p className="text-xs text-muted uppercase tracking-widest">Países</p>
                            </div>
                            <div>
                                <h4 className="text-secondary font-bold text-xl">24h</h4>
                                <p className="text-xs text-muted uppercase tracking-widest">Respuesta</p>
                            </div>
                            <div>
                                <h4 className="text-secondary font-bold text-xl">100%</h4>
                                <p className="text-xs text-muted uppercase tracking-widest">Legal</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle background graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
                <Map size={800} />
            </div>
        </section>
    );
};

export default Hero;
