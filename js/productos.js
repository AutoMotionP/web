// Datos de los productos
const productosData = {
    arnes: {
        titulo: "ARNÉS AUTOMOTRIZ",
        descripcion: "Fabricamos arneses para la distribución de energía y señales en el vehículo, para autos ligeros, SUVs y vehículos comerciales",
        imagen: "img/arnes.jpg",
        especificaciones: [
            { titulo: "Material del conductor", descripcion: "Cobre automotriz" },
            { titulo: "Aislamiento", descripcion: "PVC automotriz, resistente hasta 105°C" },
            { titulo: "Longitud estándar", descripcion: "1.5 m - 2.0 m" },
            { titulo: "Temperatura de operación", descripcion: "-40 °C a 120 °C" },
            { titulo: "Protección", descripcion: "Enfundado corrugado + cinta textil" },
            { titulo: "Conectores", descripcion: "Termoplásticos OEM" },
            { titulo: "Resistencia dieléctrica", descripcion: "> 1,500 V" },
            { titulo: "Vida útil estimada", descripcion: "> 10 años" }
        ],
        aplicaciones: [
            { titulo: "Autos Ligeros", descripcion: "Sistemas completos de cableado" },
            { titulo: "SUVs", descripcion: "Soluciones robustas para terrenos variados" },
            { titulo: "Vehículos Comerciales", descripcion: "Arneses de alta durabilidad" }
        ]
    },
    sensor: {
        titulo: "SENSOR ABS",
        descripcion: "Fabricamos sensores inductivos o activos diseñados para medir la velocidad de rotación de las ruedas, compatible con sistemas ABS en vehículos automotrices.",
        imagen: "img/sensorabs.jpeg",
        especificaciones: [
            { titulo: "Tipo de sensor", descripcion: "Inductivo o activo" },
            { titulo: "Carcasa", descripcion: "Plástico, grado de protección IP67" },
            { titulo: "Longitud del cable", descripcion: "45 - 70 cm" },
            { titulo: "Voltaje de Operacion", descripcion: "4.5 - 12 V" },
            { titulo: "Temperatura de Operacion", descripcion: "-40 °C a 150 °C" },
            { titulo: "Señal de salida", descripcion: "AC (para inductivo) o digital (para activo)" },
            { titulo: "Conector", descripcion: " 2 o 3 pines tipo OEM" },
            { titulo: "Frecuencia / Señal", descripcion: " Variable según RPM" }
        ],
        aplicaciones: [
            { titulo: "Sistemas ABS", descripcion: "Detección de velocidad de rueda" },
            { titulo: "Control de tracción", descripcion: "Monitoreo continuo" },
            { titulo: "Frenado de emergencia", descripcion: "Respuesta inmediata" }
        ]
    },
    motor: {
        titulo: "MOTOR ELÉCTRICO",
        descripcion: "Fabricamos módulos electrónicos con microprocesador automotriz para gestionar funciones de motor, transmisión y otros sistemas auxiliares en vehículos.",
        imagen: "img/modulo.jpg",
        especificaciones: [
            { titulo: "Procesador", descripcion: "Microcontrolador 32-bit automotriz" },
            { titulo: "Memoria", descripcion: "EEPROM + Flash interna" },
            { titulo: "Voltaje de Operacion", descripcion: "12 V DC" },
            { titulo: "Carcasa", descripcion: "Aluminio resistente a vibraciones y corrosión" },
            { titulo: "Temperatura de operacion", descripcion: "-40 °C a 125 °C" },
            { titulo: "Conectores", descripcion: "24 a 64 pines según modelo" },
            { titulo: "Proteccion", descripcion: "Alta resistencia a vibraciones y humedad" },
            { titulo: "Vida util estimada", descripcion: "Soporta > 150,000 km de operación" }
        ],
        aplicaciones: [
            { titulo: "Vehículos Eléctricos", descripcion: "Propulsión principal" },
            { titulo: "Híbridos", descripcion: "Sistemas de asistencia" },
            { titulo: "Autobuses", descripcion: "Transporte público eléctrico" }
        ]
    }
};

// Función para cargar el contenido del producto
function cargarProducto(productoId) {
    const producto = productosData[productoId];
    const contenido = document.getElementById('contenido-producto');
    
    contenido.innerHTML = `
        <!-- Qué Ofrecemos -->
        <section class="que-ofrecemos">
            <div class="container">
                <h2>QUE OFRECEMOS</h2>
                <p>${producto.descripcion}</p>
            </div>
        </section>

        <!-- Imagen Producto -->
        <section class="producto-imagen">
            <div class="container">
                <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-img">
            </div>
        </section>

        <!-- Producto - Especificaciones -->
        <section class="producto-especificaciones">
            <div class="container">
                <h2>PRODUCTO</h2>
                <div class="espec-grid">
                    ${producto.especificaciones.map(espec => `
                        <div class="espec-item">
                            <h3>${espec.titulo}</h3>
                            <p>${espec.descripcion}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Aplicaciones -->
        <section class="aplicaciones">
            <div class="container">
                <h2>APLICACIONES</h2>
                <div class="apli-grid">
                    ${producto.aplicaciones.map(apli => `
                        <div class="apli-card">
                            <h3>${apli.titulo}</h3>
                            <p>${apli.descripcion}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="producto-cta">
            <div class="container">
                <h2>¿Interesado en nuestros ${producto.titulo.toLowerCase()}?</h2>
                <p>Contáctanos para una cotización personalizada</p>
                <button class="cta-button">Solicitar Cotización</button>
            </div>
        </section>
    `;

    // Actualizar estado activo de las cards
    document.querySelectorAll('.producto-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelector(`[data-producto="${productoId}"]`).classList.add('active');

    // Aplicar animaciones al nuevo contenido
    aplicarAnimaciones();
}

// Función para aplicar animaciones
function aplicarAnimaciones() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animación a las especificaciones
    document.querySelectorAll('.espec-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Aplicar animación a las cards de aplicaciones
    document.querySelectorAll('.apli-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Cargar el primer producto por defecto
    cargarProducto('arnes');

    // Event listeners para las cards de productos
    document.querySelectorAll('.producto-card').forEach(card => {
        card.addEventListener('click', function() {
            const productoId = this.getAttribute('data-producto');
            cargarProducto(productoId);
            
            // Scroll suave al contenido
            document.getElementById('contenido-producto').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Smooth scroll para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efecto de scroll en el header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(26, 54, 93, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.background = '#1a365d';
            header.style.boxShadow = 'none';
        }
    });

    // Función para el botón de cotización
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('cta-button')) {
            alert('Serás redirigido a nuestro formulario de contacto para solicitar una cotización.');
        }
    });
});