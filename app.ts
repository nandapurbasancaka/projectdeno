//1. import modul application dari 'https://deno.land/x/oak/mod.ts'
import { Application, send } from 'https://deno.land/x/oak/mod.ts';
import router from './rute.ts'

//2. new instance application ke variable kita
const app = new Application();

//3. definisikan middleware app kita
app.use(router.routes());
app.use(router.allowedMethods())

app.use(async (context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}`
    });
});

//4. jalankan server
console.log("Service berjalan di port 8000");
await app.listen({port : 8000});