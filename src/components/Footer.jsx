import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Contact } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="glass-dark py-12" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
            <div className="container">
                <div className="grid grid-cols-1 md-grid grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md-grid col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Contact className="text-primary" size={32} />
                            <span className="text-2xl font-bold serif text-white">LIO</span>
                        </div>
                        <p className="text-sm opacity-60 mb-6">
                            License International Official (LIO) es la entidad líder en la tramitación de permisos internacionales de conducción con validez global.
                        </p>
                        <div className="flex gap-4">
                            <Facebook size={20} className="hover:text-primary cursor-pointer transition-all" />
                            <Instagram size={20} className="hover:text-primary cursor-pointer transition-all" />
                            <Twitter size={20} className="hover:text-primary cursor-pointer transition-all" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-primary">Enlaces Rápidos</h4>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-all font-medium">Inicio</a>
                            <a href="#precios" className="text-sm opacity-60 hover:opacity-100 transition-all font-medium">Planes y Precios</a>
                            <a href="#requisitos" className="text-sm opacity-60 hover:opacity-100 transition-all font-medium">Requisitos</a>
                            <a href="#verificar" className="text-sm opacity-60 hover:opacity-100 transition-all font-medium">Verificar Licencia</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-primary">Soporte</h4>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-all font-medium">Preguntas Frecuentes</a>
                            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-all font-medium">Términos y Condiciones</a>
                            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-all font-medium">Política de Privacidad</a>
                            <a href="#admin" className="text-sm opacity-20 hover:opacity-100 transition-all font-medium">Admin Access</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-primary">Contacto</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-sm opacity-60">
                                <Mail size={16} className="text-primary" />
                                <span>license.internationa.official@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm opacity-60">
                                <Phone size={16} className="text-primary" />
                                <span>+58 4244296940</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm opacity-60">
                                <MapPin size={16} className="text-primary" />
                                <span>Ave. Central 456, Intl Business Hub</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white border-opacity-10 text-center">
                    <p className="text-[10px] opacity-40 uppercase tracking-widest">
                        © 2024 License International Official (LIO). Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
