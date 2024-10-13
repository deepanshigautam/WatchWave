const asyncHandler=(requesthandler)=>{
  (req,res,next)=>{
    Promise.resolve(requesthandler(req,res,next)).catch((err)=>next(err))
  }
}

export {asyncHandler}

// const asyncHandler =(fn)=>aync(req,res,next) => {
//   try{
//         await fn(req,res,next)
//   }
//   catch(error){
//     res.status(err.code || 500).json({
//       message:err.message ,
//       success:false
//     })
//   }
// };