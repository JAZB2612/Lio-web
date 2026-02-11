import React, { useState } from 'react';
import { User, FileText, Camera, Send, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ApplicationForm = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const [formData, setFormData] = useState({
        nombreCompleto: '',
        paisNacimiento: '',
        paisResidencia: '',
        estatura: '',
        tipoSangre: '',
        colorOjos: '',
        email: '',
        telefono: '',
        fechaNacimiento: '',
        vigencia: '1 year',
    });

    const [capturedFiles, setCapturedFiles] = useState({
        fotoCarnet: null,
        fotoFirma: null,
        fotoID: null,
        fotoLicencia: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            setCapturedFiles(prev => ({ ...prev, [name]: files[0] }));
        }
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const validateStep = () => {
        if (step === 1) {
            return formData.nombreCompleto && formData.nombreCompleto.trim() !== '' &&
                formData.paisNacimiento && formData.paisNacimiento.trim() !== '' &&
                formData.fechaNacimiento && formData.fechaNacimiento !== '' &&
                formData.paisResidencia && formData.paisResidencia.trim() !== '';
        }
        if (step === 2) {
            return formData.estatura && formData.estatura.trim() !== '' &&
                formData.tipoSangre && formData.tipoSangre !== '' &&
                formData.colorOjos && formData.colorOjos.trim() !== '';
        }
        if (step === 3) {
            return capturedFiles.fotoCarnet &&
                capturedFiles.fotoFirma &&
                capturedFiles.fotoID &&
                capturedFiles.fotoLicencia;
        }
        if (step === 4) {
            return formData.email && formData.email.trim() !== '' &&
                formData.telefono && formData.telefono.trim() !== '';
        }
        return true;
    };

    const handleNext = () => {
        if (validateStep()) {
            nextStep();
        } else {
            alert('Por favor, rellene todos los campos obligatorios de este paso antes de continuar.');
        }
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault();

        if (!validateStep()) {
            alert('Por favor, complete su Correo y Teléfono antes de enviar la solicitud.');
            return;
        }

        const btn = document.getElementById('submit-btn');
        if (btn) {
            btn.disabled = true;
            btn.innerText = "Enviando...";
        }

        // Construimos el FormData manualmente para asegurar que todo esté incluido
        const formDataObj = new FormData();
        formDataObj.append('form-name', 'tramite-licencia');

        // Datos de texto
        Object.keys(formData).forEach(key => {
            formDataObj.append(key, formData[key]);
        });

        // Archivos desde el estado
        Object.keys(capturedFiles).forEach(key => {
            if (capturedFiles[key]) {
                formDataObj.append(key, capturedFiles[key]);
            }
        });

        fetch("/", {
            method: "POST",
            body: formDataObj,
        })
            .then((response) => {
                if (response.ok) {
                    window.location.href = "/success.html";
                } else {
                    throw new Error("Respuesta del servidor no válida");
                }
            })
            .catch((error) => {
                alert("Error al enviar: " + error.message);
                if (btn) {
                    btn.disabled = false;
                    btn.innerText = "Enviar Solicitud";
                }
            });
    };

    return (
        <section id="tramite" className="bg-bg-subtle">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="text-center mb-8">
                    <h2 className="text-3xl mb-2">Solicitud de Licencia</h2>
                    <p className="text-muted">Completa el formulario para iniciar tu trámite internacional.</p>
                </div>

                {/* Steps Indicator */}
                <div className="steps-container">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`step-item ${step === i ? 'active' : ''} ${step > i ? 'completed' : ''}`}>
                            <div className="step-dot">{i}</div>
                            <span className="text-[10px] font-bold uppercase tracking-wider md-hidden">Paso {i}</span>
                        </div>
                    ))}
                    <div className="absolute top-5 left-0 w-full h-[2px] bg-gray-200 -z-0" style={{ transform: 'translateY(-50%)' }}>
                        <div className="h-full bg-primary transition-all duration-500" style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}></div>
                    </div>
                </div>

                <div className="card">
                    <form
                        name="tramite-licencia"
                    >
                        <AnimatePresence mode="wait">
                            {/* ... Content of step 1 and 2 remains same, only buttons change below ... */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h3 className="mb-6 flex items-center gap-2">
                                        <User className="text-primary" /> Información Personal
                                    </h3>
                                    <div className="form-group">
                                        <label>Nombre Completo (como aparece en su licencia)</label>
                                        <input type="text" name="nombreCompleto" value={formData.nombreCompleto} onChange={handleChange} placeholder="Ej. Juan Pérez" required />
                                    </div>
                                    <div className="grid grid-cols-1 md-grid grid-cols-2 gap-4">
                                        <div className="form-group">
                                            <label>País de Nacimiento</label>
                                            <input type="text" name="paisNacimiento" value={formData.paisNacimiento} onChange={handleChange} placeholder="Ej. Colombia" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Fecha de Nacimiento</label>
                                            <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>País de Residencia</label>
                                        <input type="text" name="paisResidencia" value={formData.paisResidencia} onChange={handleChange} placeholder="Ej. España" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Vigencia Deseada</label>
                                        <select name="vigencia" value={formData.vigencia} onChange={handleChange}>
                                            <option value="1 year">1 Año - $70 USD</option>
                                            <option value="2 years">2 Años - $100 USD</option>
                                            <option value="5 years">5 Años - $150 USD</option>
                                        </select>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h3 className="mb-6 flex items-center gap-2">
                                        <FileText className="text-primary" /> Detalles Físicos
                                    </h3>
                                    <div className="grid grid-cols-2 md-grid grid-cols-3 gap-4">
                                        <div className="form-group">
                                            <label>Estatura (cm)</label>
                                            <input type="text" name="estatura" value={formData.estatura} onChange={handleChange} placeholder="Ej. 175" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Tipo de Sangre</label>
                                            <select name="tipoSangre" value={formData.tipoSangre} onChange={handleChange} required>
                                                <option value="">Seleccione</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Color de Ojos</label>
                                            <input type="text" name="colorOjos" value={formData.colorOjos} onChange={handleChange} placeholder="Ej. Café" required />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h3 className="mb-6 flex items-center gap-2">
                                        <Camera className="text-primary" /> Documentación (Fotos)
                                    </h3>
                                    <p className="text-xs text-muted mb-4">Obligatorio: Suba las 4 fotos requeridas para poder continuar.</p>

                                    <div className="grid grid-cols-1 md-grid grid-cols-2 gap-4">
                                        <div className="form-group">
                                            <label>Foto Tipo Carnet</label>
                                            <input type="file" name="fotoCarnet" accept="image/*" onChange={handleFileChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Foto de la Firma</label>
                                            <input type="file" name="fotoFirma" accept="image/*" onChange={handleFileChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Pasaporte / Cédula</label>
                                            <input type="file" name="fotoID" accept="image/*" onChange={handleFileChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Licencia de Conducir Local</label>
                                            <input type="file" name="fotoLicencia" accept="image/*" onChange={handleFileChange} required />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h3 className="mb-6 flex items-center gap-2">
                                        <Send className="text-primary" /> Contacto Final
                                    </h3>
                                    <div className="form-group">
                                        <label>Correo Electrónico</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="correo@ejemplo.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Número de Teléfono (con código de área)</label>
                                        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="+51 999 999 999" required />
                                    </div>

                                    <div className="bg-bg-subtle p-4 rounded-lg mt-6">
                                        <p className="text-xs text-muted">
                                            Al hacer clic en "Enviar Solicitud", usted acepta nuestros términos y condiciones y el procesamiento de sus datos personales para la emisión de la licencia internacional.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                            {step > 1 ? (
                                <button type="button" onClick={prevStep} className="btn btn-outline flex items-center gap-2">
                                    <ChevronLeft size={20} /> Anterior
                                </button>
                            ) : (
                                <div></div>
                            )}

                            {step < totalSteps ? (
                                <button type="button" onClick={handleNext} className="btn btn-primary flex items-center gap-2">
                                    Siguiente <ChevronRight size={20} />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    id="submit-btn"
                                    onClick={handleSubmit}
                                    className="btn btn-primary flex items-center gap-2"
                                    style={{ background: 'var(--secondary)' }}
                                >
                                    Enviar Solicitud <Send size={20} />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ApplicationForm;
