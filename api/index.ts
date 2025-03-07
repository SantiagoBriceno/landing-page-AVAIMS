import express from 'express'
import { AngularNodeAppEngine, createNodeRequestHandler, writeResponseToNodeResponse } from '@angular/ssr/node'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import noticesRouter from '../src/app/core/server/notices/routes/notices.routes'
import sponsorRouter from '../src/app/core/server/sponsor/routes/sponsor.routes'
import contactRouter from '../src/app/core/server/contact/routes/contact.routes'

const serverDistFolder = dirname(fileURLToPath(import.meta.url))
const browserDistFolder = resolve(serverDistFolder, '../browser')

const app = express()
const angularApp = new AngularNodeAppEngine()

// Rutas de la API
app.use('/api/notices', noticesRouter)
app.use('/api/sponsor', sponsorRouter)
app.use('/api/contact-us', contactRouter)

// Servir archivos estáticos
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false
  })
)

// Manejar todas las demás solicitudes con Angular Universal
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then(async (response) =>
      response != null ? await writeResponseToNodeResponse(response, res) : next()
    )
    .catch(next)
})

// Exportar el manejador para Vercel
export const reqHandler = createNodeRequestHandler(app)
