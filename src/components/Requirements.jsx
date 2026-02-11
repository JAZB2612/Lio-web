import React from 'react';
import { FileText, User, Camera, Mail, Phone, CreditCard, Globe } from 'lucide-react';

const Requirements = () => {
    const reqs = [
        { icon: <User size={24} />, title: 'Datos Personales', desc: 'Nombre completo, fecha de nacimiento, estatura, tipo de sangre y color de ojos.' },
        { icon: <Globe size={24} />, title: 'Residencia', desc: 'País de nacimiento y país de residencia actual.' },
        { icon: <FileText size={24} />, title: 'Documentación', desc: 'Pasaporte o Cédula de identidad vigente.' },
        { icon: <CreditCard size={24} />, title: 'Licencia Local', desc: 'Foto de tu licencia de conducir vigente de tu país.' },
        { icon: <Camera size={24} />, title: 'Fotografías', desc: 'Foto tipo carnet y foto de tu firma en fondo blanco.' },
        { icon: <Mail size={24} />, title: 'Contacto', desc: 'Correo electrónico y número de teléfono con código de área.' },
    ];

    return (
        <section id="requisitos">
            <div className="container">
                <div className="grid grid-cols-1 md-grid grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl mb-6">Requisitos para tu <span className="text-primary">Trámite</span></h2>
                        <p className="text-muted mb-8">
                            Para procesar tu licencia internacional de manera exitosa, necesitaremos que tengas a la mano la siguiente información y documentos. El proceso es totalmente digital y seguro.
                        </p>

                        <div className="grid grid-cols-1 sm-grid grid-cols-2 gap-4">
                            {reqs.map((req, index) => (
                                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-bg-subtle transition-all">
                                    <div className="text-primary">{req.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1">{req.title}</h4>
                                        <p className="text-xs text-muted">{req.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass shadow-lg rounded-2xl p-8" style={{ border: '2px dashed var(--primary)' }}>
                            <div className="text-center">
                                <div className="inline-block p-4 bg-primary text-white rounded-full mb-4">
                                    <FileText size={32} />
                                </div>
                                <h3 className="mb-4">¿Todo Listo?</h3>
                                <p className="text-sm text-muted mb-6">
                                    Si tienes estos documentos preparados, puedes iniciar tu solicitud ahora mismo. El tiempo estimado de llenado es de 5 minutos.
                                </p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-xs font-medium">Validación Instantánea</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-xs font-medium">Encriptación de Datos AES-256</span>
                                    </div>
                                </div>
                                <a href="#tramite" className="btn btn-primary w-full mt-8">
                                    Ir al Formulario
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Requirements;
