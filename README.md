# SubeTusRedes - Landing Page

Página web oficial de SubeTusRedes desarrollada con React y Chakra UI. Diseño moderno y responsive con degradado inspirado en Instagram.

## 🚀 Características

- ✨ Diseño moderno y minimalista
- 🎨 Fondo degradado inspirado en los colores de Instagram
- 📱 100% responsive (móvil, tablet, desktop)
- 🔗 Botones para todas las redes sociales principales
- ⚡ Optimizado para despliegue en AWS S3
- 🎯 Componentes de Chakra UI para mejor UX

## 📋 Requisitos previos

- Node.js (versión 16 o superior)
- npm o yarn
- AWS CLI (para despliegue)

## 🛠️ Instalación

1. **Clona o descarga el proyecto**

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Agrega tus assets:**
   - Coloca `logo.png` en la carpeta `src/assets/`
   - Coloca `icon.png` en la carpeta `public/`

## 🎨 Personalización

### Cambiar enlaces de redes sociales
Edita el archivo `src/App.js` y modifica la propiedad `url` en el array `socialNetworks`:

```javascript
const socialNetworks = [
  {
    name: 'TikTok',
    icon: FaTiktok,
    url: 'https://tiktok.com/@tuusuario', // Cambia aquí
    color: '#000'
  },
  // ... más redes
];
```

### Personalizar colores
Los colores del degradado se pueden modificar en `src/index.js` en la sección del tema.

## 🚀 Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000).

## 📦 Build para producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Esto creará una carpeta `build/` con todos los archivos optimizados.

## 🌐 Despliegue en AWS S3

### Opción 1: Script automático
```bash
npm run deploy
```

### Opción 2: Manual
Consulta el archivo `deploy-s3.md` para instrucciones detalladas paso a paso.

### Pasos básicos:
1. `npm run build`
2. Configura AWS CLI
3. Crea bucket S3
4. Sube archivos: `aws s3 sync build/ s3://tu-bucket --delete`
5. Configura hosting web estático

## 📁 Estructura del proyecto

```
subetusredes/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── icon.png (agregar manualmente)
├── src/
│   ├── assets/
│   │   └── logo.png (agregar manualmente)
│   ├── App.js
│   └── index.js
├── package.json
├── deploy-s3.md
└── README.md
```

## 🎯 Redes sociales incluidas

- TikTok
- Instagram
- Facebook
- YouTube
- Twitter/X
- LinkedIn

## 📱 Responsividad

La página se adapta automáticamente a diferentes tamaños de pantalla:
- **Móvil:** 2 columnas de botones
- **Tablet:** 3 columnas de botones
- **Desktop:** 6 columnas de botones (una fila)

## 🔧 Tecnologías utilizadas

- React 18
- Chakra UI
- React Icons
- Framer Motion (incluido con Chakra UI)
- React Scripts

## 📄 Licencia

MIT License - Puedes usar, modificar y distribuir este código libremente.

## 🆘 Soporte

Si tienes problemas:
1. Verifica que Node.js esté instalado correctamente
2. Asegúrate de que los archivos `logo.png` e `icon.png` estén en las carpetas correctas
3. Ejecuta `npm install` para instalar todas las dependencias

---

**Desarrollado para SubeTusRedes** 🚀

