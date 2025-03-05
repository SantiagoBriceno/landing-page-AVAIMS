import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse
} from '@angular/ssr/node'
import express from 'express'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import noticesRouter from './app/core/server/notices/routes/notices.routes'
import sponsorRouter from './app/core/server/sponsor/routes/sponsor.routes'
import contactRouter from './app/core/server/contact/routes/contact.routes'

const serverDistFolder = dirname(fileURLToPath(import.meta.url))
const browserDistFolder = resolve(serverDistFolder, '../browser')

const app = express()
const angularApp = new AngularNodeAppEngine()

app.get('/api/**', (req, res, next) => {
  next()
  // Validaciones
})

app.use('/api/notices', noticesRouter)

app.use('/api/sponsor', sponsorRouter)

app.use('/api/contact-us', contactRouter)

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false
  })
)

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then(async (response) =>
      (response != null) ? await writeResponseToNodeResponse(response, res) : next()
    )
    .catch(next)
})

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] ?? 4000
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`)
  })
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app)
