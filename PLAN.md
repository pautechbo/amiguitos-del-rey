# Plan del sistema — Unidad Educativa "Amiguitos del Rey"

Documento de trabajo. La landing page ya está construida; esto ordena lo que viene después.

---

## 1. Dónde estamos

| Entregable | Estado |
| --- | --- |
| Landing page (Angular 22) | ✅ Listo |
| Contenido centralizado y editable | ✅ `src/app/core/site-content.ts` |
| Diseño responsive + accesibilidad básica | ✅ |
| Formulario de contacto (solo cliente) | ✅ Demo, falta conectar API |
| Datos reales del colegio | ⚠️ Pendiente (hoy son de ejemplo) |
| Páginas internas | ⏳ Fase 1 |
| Backend / base de datos | ⏳ Fase 1 |

---

## 2. Visión del sistema

Un solo sistema con tres puertas de entrada:

1. **Sitio público** — captar familias, mostrar el proyecto, recibir solicitudes de visita.
2. **Portal de familias** — ver asistencia, circulares, boletines, pagos y fotos del aula.
3. **Panel administrativo** — gestionar matrículas, alumnos, personal, cobros y comunicación.

---

## 3. Fases

### Fase 0 — Landing (hecho)
Hero, propuesta, programas por edad, metodología, un día en el colegio, galería,
testimonios, equipo, admisiones, FAQ y contacto.

### Fase 1 — Sitio completo + captación (2–3 semanas)
- Páginas internas: `/nosotros`, `/programas/:nivel`, `/admisiones`, `/contacto`.
- Formulario de admisión multi-paso (datos del niño, familia, documentos).
- Backend mínimo: API de leads + notificación por correo/WhatsApp.
- CMS simple o archivos de contenido para que el colegio edite textos.
- SEO: metadatos por página, sitemap, `robots.txt`, Google Analytics / Plausible.
- Blog o sección "Noticias" para calendario y circulares públicas.

### Fase 2 — Gestión académica (4–6 semanas)
- Alumnos y familias (ficha única, tutores, contactos de emergencia).
- Matrículas y cupos por nivel/gestión.
- Asistencia diaria (tablet o móvil del docente).
- Evaluaciones cualitativas por dimensiones (no notas numéricas en inicial).
- Boletines en PDF para familias.
- Horarios, aulas y asignación de docentes.

### Fase 3 — Administración y dinero (3–4 semanas)
- Pensiones y matrículas: planes de pago, vencimientos, mora.
- Registro de pagos, recibos y conciliación.
- Egresos y presupuesto básico.
- Reportes para dirección (cobranza, morosidad, ocupación).

### Fase 4 — Comunicación y portal (3–4 semanas)
- Circulares y notificaciones push / correo / WhatsApp.
- Galería privada por aula (con consentimiento de imagen).
- Autorizaciones digitales (salidas, retiros por terceros).
- App móvil o PWA para familias y docentes.

### Fase 5 — Inteligencia y crecimiento (continuo)
- Alertas de ausentismo, seguimiento pedagógico.
- Encuestas de satisfacción y NPS.
- Facturación electrónica (si aplica normativa local).

---

## 4. Arquitectura técnica propuesta

```
┌──────────────────────┐      HTTPS      ┌───────────────────────┐
│  Angular 22 (SPA)    │ ──────────────▶ │  NestJS (API REST)    │
│  sitio + portales    │                 │  auth, roles, negocio │
└──────────────────────┘                 └───────────┬───────────┘
                                                     │
                         ┌───────────────────────────┼──────────────────┐
                         ▼                           ▼                  ▼
                  PostgreSQL (Prisma)          Redis (cache)      S3/MinIO (archivos)
```

- **Frontend:** Angular 22, standalone components, signals, SCSS, lazy routes.
- **Backend:** NestJS + Prisma + PostgreSQL. Módulos: `auth`, `students`, `families`,
  `enrollments`, `attendance`, `assessments`, `billing`, `communications`, `media`.
- **Auth:** JWT con refresh, roles (`admin`, `direccion`, `docente`, `familia`), y
  permisos por recurso. Las familias solo ven a sus hijos.
- **Archivos:** fotos, documentos y boletines en almacenamiento de objetos con URLs firmadas.
- **Notificaciones:** cola (BullMQ) para correo y WhatsApp Business API.
- **Despliegue:** Docker + VPS o Railway/Render. Backups diarios de la base.

### Modelo de datos inicial (borrador)

```
users(id, email, password_hash, role, active)
families(id, name, phone, address, notes)
students(id, first_name, last_name, birth_date, gender, photo_url,
         family_id, level_id, blood_type, allergies, notes)
levels(id, name, age_min, age_max, capacity)
enrollments(id, student_id, level_id, school_year, status, start_date)
attendance(id, student_id, date, status, note, recorded_by)
assessments(id, student_id, period, dimension, level, comment, teacher_id)
invoices(id, family_id, period, concept, amount, due_date, status)
payments(id, invoice_id, amount, method, paid_at, receipt_url)
announcements(id, title, body, audience, published_at, created_by)
media(id, album_id, url, caption, consent, uploaded_by)
```

---

## 5. Roadmap sugerido (12 semanas)

| Semana | Entregable |
| --- | --- |
| 1–2 | Datos reales, páginas internas, formulario de admisión + API |
| 3 | Auth + panel admin básico (login, usuarios, roles) |
| 4–5 | Alumnos, familias, niveles y matrículas |
| 6–7 | Asistencia y evaluaciones |
| 8 | Boletines PDF + circulares |
| 9–10 | Pensiones, pagos y recibos |
| 11 | Portal de familias |
| 12 | Pruebas, capacitación y despliegue |

---

## 6. Decisiones pendientes (necesito tu input)

1. **Datos reales del colegio:** dirección y teléfono ya cargados (Av. Pairumani y C.
   Venezuela, Vinto; 71920081). Faltan correo, redes sociales, año de fundación, cantidad
   real de alumnos y docentes.
2. **Niveles y edades exactas** que manejan y horarios por nivel.
3. **Precios:** matrícula, pensión, transporte, talleres. ¿Se publican o solo se dan en visita?
4. **Identidad visual:** ¿tienen logo y colores oficiales? Hoy la paleta juega con los siete
   colores pedidos (rojo, morado, celeste, amarillo, azul, verde y verde agua) y el logo sigue
   siendo provisional (corona).
5. **Fotos reales:** la galería hoy es ilustración vectorial. Con fotos autorizadas sube
   mucho la conversión; hay que gestionar consentimiento de imagen.
6. **Normativa:** ¿qué exige el Ministerio de Educación para boletines y registros?
7. **Pagos:** ¿efectivo/QR/transferencia? ¿Facturación electrónica?
8. **Quién administra:** ¿hay personal con tiempo para el panel o debe ser muy simple?
9. **Dominio y hosting:** ¿ya tienen `amiguitosdelrey.edu.bo` o similar?
10. **Idioma:** ¿solo español o también inglés en el sitio?

---

## 7. Cómo editar la landing

- **Textos y programas:** `src/app/core/site-content.ts`
- **Redes sociales:** `SOCIALS` en `src/app/core/site-content.ts` (hoy con `url: null` y
  estado «Próximamente»; al poner la URL se activa el enlace)
- **Colores y tipografías:** `src/styles.scss` (bloque `:root`)
- **Imágenes:** `public/img/` (SVG editables; se pueden reemplazar por fotos `.jpg/.webp`)
- **SEO y metadatos:** `src/index.html`
- **Formulario:** `src/app/features/home/sections/contact/contact.ts` (marcado con `TODO`)

### Nota importante
Todos los datos de contacto, cifras y testimonios son **de ejemplo**. Antes de publicar
hay que reemplazarlos por información verificada del colegio.
