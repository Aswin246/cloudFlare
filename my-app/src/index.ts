import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
	return c.text('Hello Hono!');
});

app.post('/', async (c) => {
	const body = await c.req.json();
	const header = await c.req.header('authoriazation');
	const params = await c.req.query('param');
	console.log(body);
	console.log(header);
	console.log(params);
});
export default app;
