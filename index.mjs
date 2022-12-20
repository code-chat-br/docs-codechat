import express, { json, Router, urlencoded } from 'express';
import cors from 'cors';
import YAML from 'js-yaml';
import { join } from 'path';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';

function bootstrap() {
  const app = express();

  const document = YAML.load(
    readFileSync(join(process.cwd(), 'docs', 'docs.yml'), { encoding: 'utf-8' }),
  );

  const router = Router();

  router.use('/', swaggerUi.serve);
  router.get('/', swaggerUi.setup(document));
  router.get('/postman', (req, res) => {
    const wapiDocs = JSON.parse(
      readFileSync(join(process.cwd(), 'docs', 'wapi-codechat.json'), { encoding: 'utf-8' }),
    )
    res.status(200).json(wapiDocs);
  })
  router.get('cover.png', (req, res) => {
    const img = readFileSync(join(process.cwd(), 'assets', 'cover.png'));
    return res.status(200).sendFile(img)
  })

  app.use(
    cors(),
    urlencoded({ extended: true }),
    json(),
    express.static(join(process.cwd(), 'assets')),
  );
  app.use('/', router);

  app.use((req, res, next) => {
    const { method, url } = req;

    const apikey = req.get('apikey') || req.get('apiKey');

    if(!apikey) {
      return res.status(401).json({
        statusCode: 401,
        message: 'Invalid credentials',
        error: 'Unauthorized'
      })
    }

    return res.status(200).json({
      statusCode: 200,
      request: {
        headers: {
          apikey,
          'x-real-ip': req.get('x-real-ip'),
          host: req.get('host'),
          origin: req.get('origin'),
          referer: req.get('referer'),
          'content-type': req.get('content-type'),
          'content-length': req.get('content-length'),
          'accept-encoding': req.get('accept-encoding'),
          'accept-language': req.get('accept-language'),
        },
        body: req.body,
        query: req.query,
        param: req.params,
        url, 
        method,
      },      
      message: [
        'This route is for documentation only.'
      ]
    });
  })

  app.listen(3333, () => console.log('SERVER ON: ', 3333))
}

bootstrap()