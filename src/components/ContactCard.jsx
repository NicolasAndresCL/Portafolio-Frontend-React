import React, { useState } from 'react';

const ContactCard = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // lógica de envío
  };

  const inputClasses =
    "mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white shadow-sm px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-400 focus:ring-opacity-50";

  return (
    <section className="bg-gray-900 p-8 rounded-xl shadow-lg max-w-xl mx-auto">
      <div className="space-y-6">
        <p className="text-sm text-gray-300 text-center">
          ¿Tienes preguntas o quieres colaborar? ¡Escríbeme!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Nombre</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className={inputClasses}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className={inputClasses}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Escribe tu mensaje..."
              className={inputClasses}
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-teal-600 transition focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactCard;
