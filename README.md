# Fresh Paradise Cocles - Sistema POS & KDS

Sistema integral de Punto de Venta (POS), Pantalla de Cocina (KDS), Facturación y Control de Cuentas por Cobrar diseñado para el restaurante **Fresh Paradise** en Cocles, Puerto Viejo, Costa Rica.

---

## 🚀 Características Principales

- **Arquitectura Standalone & Offline-First:** Funciona de manera autónoma en cualquier navegador sin dependencias de compilación ni servidores intermedios.
- **Sincronización en la Nube con Google Sheets:** Respaldo y sincronización en tiempo real de productos, usuarios, comandas, cobros, cierres de caja y cuentas por cobrar.
- **Roles y Permisos:**
  - **Mesero:** Apertura de mesas, envío de comandas a cocina y monitoreo de estados en tiempo real (🔴 Recibida, 🟡 En preparación, 🟢 Preparada para recoger con distintivo visual y botón para marcar servido).
  - **Cocina (KDS):** Visualización de pedidos entrantes, gestión de tiempos y transición de estados entre 3 etapas.
  - **Caja & Facturación:** Cobro de mesas, múltiples métodos de pago (Efectivo CRC/USD, Tarjeta, SINPE Móvil), división de cuentas y arqueos/semicierres de turno.
  - **Ventas a Crédito y C x C (Exclusivo Caja):** Emisión directa de ventas a crédito, control de clientes y registro de liquidaciones o abonos.
  - **Máster / Ajustes:** Gestión de menú, categorías, usuarios y tipo de cambio diario.
- **Anti-Flicker & Debounce Seguro:** Sincronización silenciosa en segundo plano sin parpadeos de pantalla ni colisiones de datos.

---

## 📁 Estructura del Repositorio

| Archivo | Descripción |
|---|---|
| [`index.html`](index.html) | Aplicación SPA completa (HTML5, CSS3, JavaScript ES6+). |
| [`GOOGLE_SHEETS_SCRIPT.txt`](GOOGLE_SHEETS_SCRIPT.txt) | Código de Google Apps Script para desplegar como backend en Google Sheets. |
| [`logo_fresh_paradise.jpg`](logo_fresh_paradise.jpg) | Identidad gráfica y logotipo oficial del restaurante. |
| [`PRODUCT.md`](PRODUCT.md) | Especificación de requerimientos, modelo de datos y flujo funcional. |
| [`DESIGN.md`](DESIGN.md) | Guía de estilos, tokens de diseño y directrices de accesibilidad (WCAG AAA). |

---

## 🛠️ Instalación y Puesta en Marcha

1. **Uso Local:**
   - Basta con clonar el repositorio y hacer doble clic en [`index.html`](index.html) en cualquier navegador moderno (Chrome, Edge, Safari, Firefox).
2. **Despliegue Web:**
   - Puede alojarse directamente en **GitHub Pages**, **Vercel**, **Netlify** o cualquier servidor web estático.

### Configuración de Google Sheets (Backend)
1. Abra su hoja de cálculo en Google Sheets.
2. Vaya a **Extensiones > Apps Script**.
3. Copie y pegue todo el contenido de [`GOOGLE_SHEETS_SCRIPT.txt`](GOOGLE_SHEETS_SCRIPT.txt).
4. Guarde y haga clic en **Implementar > Nueva implementación**.
5. Seleccione tipo **Aplicación web**:
   - *Ejecutar como:* **Yo (tu cuenta de Google)**
   - *Quién tiene acceso:* **Cualquier usuario (Anyone)**
6. Copie la URL generada (terminada en `/exec`) y péguela en el POS (en la pantalla de inicio o en Ajustes > Google Sheets).
