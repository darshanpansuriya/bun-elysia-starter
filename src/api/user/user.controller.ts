import { Elysia, t }from 'elysia';
import { UserService } from './user.service';



// export function usersEndpoint(app: Elysia) {
//     app.decorate("db", new UserService())
//     app.get('user', init);
//     app.post('user/login', login);
//     return app;
// }
// const userService = new UserService();
export const userControllers = new Elysia({
    prefix: "/user",
})
.decorate('db', UserService)
.post(
    "/signup",
    async ({ body: { email, password }, db, set }) => {
        try {  
            const user = await db.find({name: 'name'});
            console.log({user});  
            return new Response('User Route is Working');
        } catch (error) {
            console.log(error)
            set.status = 500;
            return 'There was an error when fetching your file';
        }
    },
    {
      body: t.Object({
        email: t.String({
          minLength: 5,
          maxLength: 30,
        }),
        password: t.String({
          minLength: 6,
          maxLength: 255,
        }),
      })
    }
  )
  .post(
    "/signin",
    async ({ body: { email, password }, set }) => {
        return new Response('User Login Successfully');
    },
    {
      body: t.Object({
        email: t.String({
          minLength: 5,
          maxLength: 30,
        }),
        password: t.String({
          minLength: 6,
          maxLength: 255,
        }),
      })
    }
  );

