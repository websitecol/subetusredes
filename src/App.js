import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

const pricingData = {
  tiktok: {
    name: "TikTok",
    icon: "",
    color: "linear-gradient(135deg, #ff0050, #8b0040)",
    services: {
      seguidores: [
        { cantidad: "500", precio: "$20.000" },
        { cantidad: "1000", precio: "$40.000" },
        { cantidad: "2000", precio: "$70.000" },
        { cantidad: "3000", precio: "$100.000" }
      ],
      megusta: [
        { cantidad: "1000", precio: "$10.000" },
        { cantidad: "2000", precio: "$15.000" },
        { cantidad: "3000", precio: "$20.000" },
        { cantidad: "5000", precio: "$35.000" },
        { cantidad: "10.000", precio: "$60.000" }
      ],
      reproducciones: [
        { cantidad: "100 MIL", precio: "$6.000" },
        { cantidad: "200 MIL", precio: "$12.000" },
        { cantidad: "500 MIL", precio: "$19.000" },
        { cantidad: "1 MILLÓN", precio: "$49.000" },
        { cantidad: "2 MILLONES", precio: "$69.000" }
      ]
    }
  },
  facebook: {
    name: "Facebook",
    icon: "",
    color: "linear-gradient(135deg, #1877f2, #0d47a1)",
    services: {
      seguidores: [
        { cantidad: "1000", precio: "$18.000" },
        { cantidad: "2000", precio: "$30.000" },
        { cantidad: "3000", precio: "$40.000" },
        { cantidad: "5000", precio: "$70.000" },
        { cantidad: "10.000", precio: "$130.000" }
      ],
      megusta: [
        { cantidad: "1000", precio: "$10.000" },
        { cantidad: "2000", precio: "$18.000" },
        { cantidad: "3000", precio: "$25.000" },
        { cantidad: "5000", precio: "$45.000" },
        { cantidad: "10.000", precio: "$75.000" }
      ]
    }
  },
  youtube: {
    name: "YouTube",
    icon: "",
    color: "linear-gradient(135deg, #ff0000, #cc0000)",
    services: {
      vistas: [
        { cantidad: "1000", precio: "$18.000" },
        { cantidad: "2000", precio: "$36.000" },
        { cantidad: "3000", precio: "$54.000" },
        { cantidad: "5000", precio: "$92.000" },
        { cantidad: "10000", precio: "$186.000" }
      ],
      megusta: [
        { cantidad: "1.000", precio: "$10.000" },
        { cantidad: "2.000", precio: "$20.000" },
        { cantidad: "3.000", precio: "$30.000" },
        { cantidad: "4.000", precio: "$40.000" },
        { cantidad: "5.000", precio: "$50.000" },
        { cantidad: "6.000", precio: "$60.000" }
      ]
    }
  },
  instagram: {
    name: "Instagram",
    icon: "",
    color: "linear-gradient(135deg, #e4405f, #f77737, #fcaf45)",
    services: {
      seguidores: [
        { cantidad: "1,000", precio: "$40.000" },
        { cantidad: "2,000", precio: "$70.000" },
        { cantidad: "3,000", precio: "$100.000" },
        { cantidad: "5,000", precio: "$160.000" },
        { cantidad: "10,000", precio: "$300.000" }
      ],
      megusta: [
        { cantidad: "1000", precio: "$5.000" },
        { cantidad: "2000", precio: "$10.000" },
        { cantidad: "3000", precio: "$15.000" },
        { cantidad: "5000", precio: "$25.000" },
        { cantidad: "10.000", precio: "$45.000" }
      ],
      reproducciones: [
        { cantidad: "10.000", precio: "$7.000" },
        { cantidad: "20.000", precio: "$13.000" },
        { cantidad: "50.000", precio: "$30.000" },
        { cantidad: "100.000", precio: "$50.000" },
        { cantidad: "200.000", precio: "$70.000" }
      ]
    }
  }
};

function App() {
  const [activeTab, setActiveTab] = useState('tiktok');
  const [isCapturing, setIsCapturing] = useState(false);
  const pricingCardRef = useRef(null);

  const copyImageToClipboard = async () => {
    if (!pricingCardRef.current) return;

    try {
      setIsCapturing(true);
      
      // Capturar la tarjeta de precios como imagen
      const canvas = await html2canvas(pricingCardRef.current, {
        backgroundColor: null,
        scale: 2, // Mayor calidad
        useCORS: true,
        allowTaint: true,
        logging: false,
        width: pricingCardRef.current.scrollWidth,
        height: pricingCardRef.current.scrollHeight,
      });

      // Convertir canvas a blob
      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            // Copiar al portapapeles
            await navigator.clipboard.write([
              new ClipboardItem({
                'image/png': blob
              })
            ]);
            
            // Mostrar notificación de éxito
            alert('¡Imagen copiada al portapapeles! 📋✨');
          } catch (error) {
            console.error('Error al copiar al portapapeles:', error);
            
            // Fallback: descargar la imagen
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `precios-${pricingData[activeTab].name.toLowerCase()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            alert('Imagen descargada (tu navegador no soporta copia al portapapeles) 📥');
          }
        }
        setIsCapturing(false);
      }, 'image/png');

    } catch (error) {
      console.error('Error al capturar imagen:', error);
      alert('Error al capturar la imagen 😞');
      setIsCapturing(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-section">
          <h1 className="main-title">SubeTusRedes</h1>
          <p className="subtitle">Impulsa tu presencia en redes sociales</p>
          
          <div className="pricing-section">
            <h2 className="pricing-title">Nuestros Precios</h2>
            
            <div className="social-tabs">
              {Object.keys(pricingData).map(platform => (
                <button
                  key={platform}
                  className={`tab-button ${activeTab === platform ? 'active' : ''}`}
                  onClick={() => setActiveTab(platform)}
                  style={{ background: activeTab === platform ? pricingData[platform].color : 'transparent' }}
                >
                  <span className="tab-icon">{pricingData[platform].icon}</span>
                  {pricingData[platform].name}
                </button>
              ))}
            </div>

            <div className="pricing-content">
              <div className="pricing-card-container">
                <div 
                  ref={pricingCardRef}
                  className="pricing-platform"
                  style={{ background: pricingData[activeTab].color }}
                >
                <h3 className="platform-title">
                  {pricingData[activeTab].name}
                </h3>
                
                <div className="services-container" data-columns={Object.keys(pricingData[activeTab].services).length}>
                  {Object.keys(pricingData[activeTab].services).map(serviceType => (
                    <div key={serviceType} className="service-section">
                      <h4 className="service-title">
                        {serviceType === 'seguidores' && 'Seguidores'}
                        {serviceType === 'megusta' && 'Me Gusta'}
                        {serviceType === 'reproducciones' && 'Reproducciones'}
                        {serviceType === 'vistas' && 'Vistas'}
                      </h4>
                      <div className="price-list">
                        {pricingData[activeTab].services[serviceType].map((item, index) => (
                          <div key={index} className="price-item">
                                                      <span className="quantity">
                            {item.cantidad} {
                              serviceType === 'seguidores' ? 'Seguidores' :
                              serviceType === 'megusta' ? 'Me Gusta' :
                              serviceType === 'reproducciones' ? 'Reproducciones' :
                              serviceType === 'vistas' ? 'Vistas' : ''
                            }
                          </span>
                            <span className="price">{item.precio}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                </div>
                
                <button 
                  className="copy-image-btn"
                  onClick={copyImageToClipboard}
                  disabled={isCapturing}
                  title="Copiar imagen al portapapeles"
                >
                  {isCapturing ? (
                    <span className="loading-spinner">⏳</span>
                  ) : (
                    <svg className="copy-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 15.2l3.2-2.2H8.8L12 15.2zM16 6l2 2h3a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1h3l2-2h8zm0 2H8L6 10H4v8h16v-8h-2l-2-2z"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="footer">
            <p className="copyright">SubeTusRedes 2021 - 2025</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
