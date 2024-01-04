import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'

import pagesRouter from '@routers/pagesRouter'

const app = new Elysia()

app.use(html())
app.use(staticPlugin())
app.use(pagesRouter)

app.listen(3000)
console.log(`Listening at ${app.server?.hostname}:${app.server?.port}`)
