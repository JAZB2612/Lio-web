import React, { useState } from 'react';
import { Search, Loader2, CheckCircle2, XCircle, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchLicense = () => {
    const [docId, setDocId] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, found, not_found
    const [result, setResult] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!docId) return;

        setStatus('loading');

        try {
            // URL de tu Google Sheet publicada como CSV
            // Para obtenerla: Archivo > Compartir > Publicar en la web > Comma-separated values (.csv)
            const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTRHetompX1IJpUrBgDxXpMCNyLvWu5pBniix9ThjbAsS7JkeRhEMk58P3HCcc9FetPw48fzwMPsift/pub?output=csv';


            const response = await fetch(CSV_URL);
            const csvText = await response.text();

            // Parsear CSV (Estructura esperada: Col A: Doc, Col B: ID_Tramite, Col C: Nombre, Col D: Vencimiento, Col E: Estado, Col F: Tipo)
            const rows = csvText.split('\n').map(row => row.split(','));

            // Buscamos coincidencia en la columna A (Doc) O en la columna B (ID Trámite)
            const foundRow = rows.find(row =>
                (row[0] && row[0].trim() === docId.trim()) ||
                (row[1] && row[1].trim() === docId.trim())
            );

            if (foundRow) {
                setResult({
                    id: foundRow[0],
                    id_tramite: foundRow[1],
                    nombre: foundRow[2],
                    validoHasta: foundRow[3],
                    estado: foundRow[4],
                    tipo: foundRow[5],
                });
                setStatus('found');
            } else {
                setStatus('not_found');
            }
        } catch (err) {
            console.error('Error al conectar con Google Sheets:', err);
            setStatus('not_found');
        }
    };

    return (
        <section id="verificar" className="bg-white">
            <div className="container" style={{ maxWidth: '700px' }}>
                <div className="text-center mb-8">
                    <h2 className="text-3xl mb-2">Verificar Credencial</h2>
                    <p className="text-muted">Consulta el estado de tu trámite o validez de tu licencia mediante tu número de documento.</p>
                </div>

                <div className="card shadow-lg p-0 overflow-hidden" style={{ borderRadius: '20px' }}>
                    <form onSubmit={handleSearch} className="flex p-2 gap-2 bg-bg-subtle">
                        <input
                            type="text"
                            placeholder="Ingrese su DNI o ID de trámite..."
                            value={docId}
                            onChange={(e) => setDocId(e.target.value)}
                            style={{ border: 'none', background: 'transparent' }}
                        />
                        <button type="submit" className="btn btn-secondary" disabled={status === 'loading'}>
                            {status === 'loading' ? <Loader2 className="animate-spin" /> : <Search />}
                            <span className="sm-hidden">Buscar</span>
                        </button>
                    </form>

                    <AnimatePresence>
                        {status === 'found' && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="p-8 border-t border-gray-100"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-green-100 text-green-600 p-3 rounded-full">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl">Licencia Encontrada</h3>
                                        <span className="text-green-600 font-bold">Documento Válido</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6 bg-bg-subtle p-6 rounded-xl">
                                    <div>
                                        <span className="text-xs text-muted uppercase font-bold tracking-widest">Titular</span>
                                        <p className="font-bold text-secondary">{result.nombre}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-muted uppercase font-bold tracking-widest">Estado</span>
                                        <p className="font-bold text-green-600">{result.estado}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-muted uppercase font-bold tracking-widest">Válido Hasta</span>
                                        <p className="font-bold text-secondary">{result.validoHasta}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-muted uppercase font-bold tracking-widest">Categoría</span>
                                        <p className="font-bold text-secondary">{result.tipo}</p>
                                    </div>
                                </div>

                                <button className="btn btn-outline w-full mt-6 gap-2">
                                    <Download size={20} /> Descargar Certificado Digital
                                </button>
                            </motion.div>
                        )}

                        {status === 'not_found' && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                className="p-8 border-t border-gray-100 text-center"
                            >
                                <div className="inline-block bg-red-100 text-red-600 p-3 rounded-full mb-4">
                                    <XCircle size={32} />
                                </div>
                                <h3>No se encontraron resultados</h3>
                                <p className="text-muted text-sm mt-2">
                                    No pudimos encontrar una licencia asociada al documento <b>{docId}</b>.
                                    Asegúrate de haber ingresado el número correctamente o contacta a soporte.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default SearchLicense;
