# FEMMUP — solución definitiva para 404 en Vercel

Te explico qué está pasando en simple:

Si Vercel muestra **404 NOT FOUND** aunque el proyecto existe, casi siempre es por una de estas 3 causas:

1. Está desplegando **otra rama** (no la que tiene tu código).
2. Está tomando **otra carpeta root**.
3. No está aplicando bien build/output de Vite.

Para evitar eso, este repo ahora fuerza la config desde `vercel.json`:

- install: `npm install`
- build: `npm run build`
- output: `dist`
- rutas SPA: todo a `index.html`

---

## Haz esto exacto (2 minutos)

## 1) Subir estos cambios

```bash
git add .
git commit -m "force vercel build config"
git push
```

## 2) En Vercel revisar 3 cosas

En tu proyecto de Vercel:

1. **Settings → Git → Production Branch**
   - Debe ser la rama donde hiciste push.
   - Si no sabes cuál es, usa la misma que aparece en GitHub con este último commit.

2. **Settings → General → Root Directory**
   - Debe ser `/` (la raíz del repo), no una subcarpeta.

3. **Deployments → Redeploy**
   - Redeploy del último commit.
   - Si aparece opción, usa **Redeploy without cache**.

## 3) Probar URL

- `https://fem-mup.vercel.app/`

---

## Si todavía sale 404

Entonces Vercel está desplegando otro proyecto o otro repo.

Comprueba esto:

- En Vercel, el proyecto está conectado al repo correcto: `FEMMup`.
- El último deployment corresponde al commit nuevo (mismo hash/mensaje de commit que ves en GitHub).
- En **Deployments → Build Logs** no aparece error de build.

Si quieres, te guío clic por clic con capturas de qué pantalla abrir y qué valor poner en cada campo.
