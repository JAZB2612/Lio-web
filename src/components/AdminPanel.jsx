import React, { useState } from 'react';
import { Lock, LayoutDashboard, UserPlus, FileUp, LogOut } from 'lucide-react';

const AdminPanel = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple hardcoded password for demonstration
        // In production, this should use Firebase/Supabase/Netlify Identity
        if (password === 'LIO-ADMIN-2024') {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Contraseña incorrecta');
        }
    };

    if (!isLoggedIn) {
        return (
            <section id="admin" style={{ background: 'var(--bg-subtle)', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
                <div className="container" style={{ maxWidth: '400px' }}>
                    <div className="card text-center">
                        <div className="w-16 h-16 bg-bg-subtle rounded-full flex items-center justify-center mx-auto mb-6">
                            <Lock className="text-secondary" />
                        </div>
                        <h2 className="text-xl mb-6">Acceso Administrativo</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Contraseña de Admin"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="text-center"
                                />
                            </div>
                            {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
                            <button type="submit" className="btn btn-secondary w-full">Entrar</button>
                        </form>
                        <p className="text-[10px] text-muted mt-8 uppercase tracking-widest">Solo Personal Autorizado</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section style={{ background: 'var(--bg-subtle)', minHeight: '100vh' }}>
            <div className="container">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3">
                        <LayoutDashboard size={32} className="text-primary" />
                        <div>
                            <h1 className="text-2xl serif">Panel de Control</h1>
                            <p className="text-xs text-muted">Gestión de trámites y licencias LIO</p>
                        </div>
                    </div>
                    <button onClick={() => setIsLoggedIn(false)} className="btn btn-outline flex items-center gap-2" style={{ padding: '8px 16px' }}>
                        <LogOut size={18} /> Salir
                    </button>
                </div>

                <div className="grid grid-cols-1 md-grid grid-cols-3 gap-6 mb-8">
                    <div className="card flex items-center gap-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                            <UserPlus />
                        </div>
                        <div>
                            <span className="text-xl font-bold">42</span>
                            <p className="text-xs text-muted">Trámites Pendientes</p>
                        </div>
                    </div>
                    <div className="card flex items-center gap-4">
                        <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                            <FileUp />
                        </div>
                        <div>
                            <span className="text-xl font-bold">128</span>
                            <p className="text-xs text-muted">Licencias Emitidas</p>
                        </div>
                    </div>
                    <div className="card flex items-center gap-4">
                        <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
                            <Lock />
                        </div>
                        <div>
                            <span className="text-xl font-bold">99.9%</span>
                            <p className="text-xs text-muted">Uptime del Sistema</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h3 className="mb-6">Cargar Nuevo Trámite Realizado</h3>
                    <p className="text-sm text-muted mb-6">Al subir un trámite aquí, el usuario podrá consultarlo inmediatamente en la barra de búsqueda.</p>

                    <form className="grid grid-cols-1 md-grid grid-cols-2 gap-4">
                        <div className="form-group">
                            <label>Número de Documento / ID</label>
                            <input type="text" placeholder="Ej. 12345678" />
                        </div>
                        <div className="form-group">
                            <label>Nombre del Titular</label>
                            <input type="text" placeholder="Ej. Juan Pérez" />
                        </div>
                        <div className="form-group">
                            <label>Fecha de Vencimiento</label>
                            <input type="date" />
                        </div>
                        <div className="form-group">
                            <label>Categoría</label>
                            <select>
                                <option>Internacional A</option>
                                <option>Internacional B</option>
                                <option>Internacional C</option>
                            </select>
                        </div>
                        <div className="form-group md-grid col-span-2">
                            <label>Archivo de Licencia (PDF/JSON)</label>
                            <input type="file" />
                        </div>
                        <button type="button" className="btn btn-primary md-grid col-span-2 mt-4" onClick={() => alert('Trámite guardado exitosamente (Simulación)')}>
                            Publicar Trámite
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AdminPanel;
