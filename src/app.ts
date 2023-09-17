import Elysia from 'elysia';
import {addGetListEndpoint} from './endpoints/list/getList';
import {addApiKeyGuard} from './endpoints/guards';
import {addErrorHandling} from './endpoints/errors';
import {addGetFileEndpoint} from './endpoints/file/getFile';
import {addUploadFileEndpoint} from './endpoints/file/uploadFile';
import { userControllers } from './api/user/user.controller'
import connectMongoDB from './utils/db';
import { UserService } from './api/user/user.service';

export function buildApp() {
  connectMongoDB()
  let app = new Elysia()  
    .use(userControllers)
    .onError(({error, set}) => {
      if (error.message === 'unauthorized') {
        set.status = 401;
        return 'Unauthorized';
      }
    })
    // .onRequest(({request}) => {
    //   let apiKey = request.headers.get('apikey');
    //   if (apiKey == null) {
    //     apiKey = new URL(request.url).searchParams.get('apikey');
    //   }
    //   if (apiKey !== getConfig().apiKey) {
    //     throw new Error('unauthorized');
    //   }
    // });
  return app;
}
