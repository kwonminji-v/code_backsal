// import Data from "../../models/data";
// import mongoose from "mongoose";


// export const read = async ctx => {
//     try{
//         const datas = await Data.find();
//         if(!datas) {
//             ctx.status = 404;
//             return;
//         }
//         ctx.body = datas;
//     }catch(e) {
//         ctx.throw(500, e);
//     }
// }



// export const read = async (ctx, next) => {
//     const { ObjectId } = mongoose.Types;
//     if(!ObjectId.isValid()){
//         ctx.status = 400; //bad request
//         return;
//     }try{
//         const data = await Data.findById(id);
//         //포스트가 존재하지 않을때
//         if(!data){
//             ctx.status = 404;
//             return;
//         }
//         ctx.state.body = contentData;
//         return next()
//     } catch(e){
//         ctx.throw(500, e)
//     }

// }




// export const getPostById = async (ctx, next) => {
//     const {id} = ctx.params;
//     if(!ObjectId.isValid(id)){
//         ctx.status = 400; //bad request
//         return;
//     }
//     try{
//         const post = await Post.findById(id);
//         //포스트가 존재하지 않을때
//         if(!post){
//             ctx.status = 404;
//             return;
//         }
//         ctx.state.post = post;
//         return next()
//     } catch(e){
//         ctx.throw(500, e)
//     }
    
// };
