import Router from 'koa-router';
import posts from './posts';
import auth from './auth'
// import data from './data'

const api = new Router();


api.use('/posts', posts.routes()); //연결완료
api.use('/auth', auth.routes());
// api.use('/datas', data.routes())

export default api;