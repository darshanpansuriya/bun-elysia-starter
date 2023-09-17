import { PORT } from './config'
import {buildApp} from './app';

const app = buildApp().listen(PORT || 8082);

console.log(`File API is running at ${app.server?.hostname}:${app.server?.port}`);
