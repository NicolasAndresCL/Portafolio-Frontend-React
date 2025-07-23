import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contacto/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage('¡Tu mensaje fue enviado con éxito!');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setSuccessMessage('');
        }, 4000);
      } else {
        setErrorMessage('Ocurrió un problema al enviar tu mensaje.');
      }
    } catch (error) {
      console.error('Error de red:', error);
      setErrorMessage('Error de red. Intenta nuevamente más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-12 px-4 sm:px-8 bg-gray-700 text-white relative">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Contáctame</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-gray-300">
            ¿Tienes preguntas o quieres colaborar? ¡Escríbeme!
          </p>

          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white border border-gray-600"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white border border-gray-600"
          />

          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white border border-gray-600"
            rows="5"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center gap-2 bg-teal-400 ${
              loading ? 'bg-teal-900 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'
            } text-white font-semibold py-2 px-4 rounded transition`}
          >
            {loading ? 'Enviando...' : (
              <>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Enviar mensaje
              </>
            )}
          </button>
        </form>

        {/* ✅ Notificaciones flotantes */}
        {successMessage && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-50 transition-opacity duration-500">
            ✅ {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg z-50 transition-opacity duration-500">
            ❌ {errorMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contacto;
