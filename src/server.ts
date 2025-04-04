import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse
} from '@angular/ssr/node'
import express, { json } from 'express'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { deleteNoticeImages } from './app/core/controller/notice.controller'

const serverDistFolder = dirname(fileURLToPath(import.meta.url))
const browserDistFolder = resolve(serverDistFolder, '../browser')

const app = express()
const angularApp = new AngularNodeAppEngine()

app.use('/api/**', (req, res, next) => {
  next()
  console.log('API request:', req.method, req.url)
})

app.post('/api/notices/delete', json(), deleteNoticeImages)

app.get('/api/notices', (req, res) => {
  res.json({
    message: 'Hello from the API!'
  })
})

// app.post('/api/notices', fileUpload({
//   createParentPath: true
// }),
// saveNoticeImages
// )
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

app.use(express.static('public'))

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env.PORT ?? 8080
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`)
  })
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app)
