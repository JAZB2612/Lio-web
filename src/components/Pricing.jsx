import React from 'react';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const plans = [
        {
            title: 'Vigencia 1 Año',
            price: '$70',
            description: 'Ideal para viajes cortos o estancias temporales.',
            features: ['Documento Digital', 'Documento Físico vía Courier', 'Válido en 150+ países', 'Soporte 24/7'],
            recommended: false,
        },
        {
            title: 'Vigencia 2 Años',
            price: '$100',
            description: 'Nuestra opción más equilibrada para viajeros frecuentes.',
            features: ['Todo lo del plan 1 año', 'Envío prioritario', 'Renovación con descuento', 'Asesoría legal básica'],
            recommended: true,
        },
        {
            title: 'Vigencia 5 Años',
            price: '$150',
            description: 'Tranquilidad a largo plazo para residentes y viajeros globales.',
            features: ['Todo lo del plan 2 años', 'Vigencia máxima extendida', 'Reposición gratuita', 'Soporte VIP prioritario'],
            recommended: false,
        },
    ];

    return (
        <section id="precios" className="bg-bg-subtle">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl mb-4">Nuestros Planes y Vigencias</h2>
                    <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Selecciona el periodo que mejor se adapte a tus necesidades de viaje internacional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md-grid grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`card relative flex flex-col ${plan.recommended ? 'scale-105 border-2 border-primary' : ''}`}
                            style={plan.recommended ? { position: 'relative', zIndex: 1, transform: 'scale(1.05)' } : {}}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2" style={{ transform: 'translate(-50%, -50%)', background: 'var(--primary)', color: 'white', padding: '4px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Star size={14} fill="white" /> RECOMENDADO
                                </div>
                            )}

                            <h3 className="text-xl mb-2">{plan.title}</h3>
                            <div className="flex items-center gap-1 mb-4">
                                <span className="text-3xl font-bold text-secondary">{plan.price}</span>
                                <span className="text-muted">USD</span>
                            </div>
                            <p className="text-sm text-muted mb-6">{plan.description}</p>

                            <div className="flex-col gap-3 mb-8">
                                {plan.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-center gap-2 mb-2">
                                        <Check size={18} className="text-primary" />
                                        <span className="text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="#tramite" className={`btn w-full ${plan.recommended ? 'btn-primary' : 'btn-outline'}`}>
                                Seleccionar Plan
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
