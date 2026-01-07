
import React, { useState } from 'react';
import { ActivityIcon } from './icons';

type FormStatus = 'idle' | 'sending' | 'success';

const Footer: React.FC = () => {
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('sending');

        setTimeout(() => {
            setFormStatus('success');
            (e.target as HTMLFormElement).reset();

            setTimeout(() => {
                setFormStatus('idle');
            }, 3000);
        }, 1500);
    };
    
    const getButtonState = () => {
        switch (formStatus) {
            case 'sending':
                return { text: 'Enviando...', disabled: true, className: 'bg-blue-600 text-white' };
            case 'success':
                return { text: '¡Mensaje Enviado!', disabled: true, className: 'bg-green-600 text-white' };
            case 'idle':
            default:
                return { text: 'Enviar Mensaje', disabled: false, className: 'bg-white text-slate-900 hover:bg-slate-200' };
        }
    };
    
    const buttonState = getButtonState();

  return (
    <footer id="contacto" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">¿Listo para optimizar tu producción?</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              Agenda una demostración personalizada hoy mismo y descubre cómo nuestras herramientas pueden mejorar la rentabilidad de tu negocio.
            </p>
            <div className="flex space-x-4">
              <a href="#contact-form" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition">
                Contactar Ventas
              </a>
            </div>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="nombre"
                  placeholder="Nombre" 
                  className="bg-slate-700 border border-slate-600 rounded p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
                  required
                />
                <input 
                  type="text" 
                  name="empresa"
                  placeholder="Empresa" 
                  className="bg-slate-700 border border-slate-600 rounded p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
                />
              </div>
              <input 
                type="email" 
                name="email"
                placeholder="Correo Electrónico" 
                className="bg-slate-700 border border-slate-600 rounded p-3 text-white w-full placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required
              />
              <select 
                name="interes"
                className="bg-slate-700 border border-slate-600 rounded p-3 text-white w-full text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>Estoy interesado en...</option>
                <option value="Egg Monitor">Egg Monitor</option>
                <option value="Sync Lab">Sync Lab</option>
                <option value="Feed Balance">Feed Balance</option>
                <option value="Todas las soluciones">Todas las soluciones</option>
              </select>
              <button 
                type="submit" 
                disabled={buttonState.disabled}
                className={`w-full font-bold py-3 rounded transition flex items-center justify-center ${buttonState.className}`}
              >
                {buttonState.text}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <ActivityIcon className="h-5 w-5 text-blue-600" />
            <span className="font-semibold text-slate-300">AppControl</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} AppControl. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
