import Elysia from 'elysia'

import homePageController from '@controllers/pages/homePageController'

const pagesRouter = new Elysia()

pagesRouter.get('/', homePageController)

export default pagesRouter