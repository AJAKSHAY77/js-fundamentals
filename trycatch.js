 // try and catch 
try{
    let x = undefined
    console.log(x[0]);
}catch(akshay){
    console.log("error is handled",akshay);
}finally{
    console.log("finally is always executed");
}
console.log("end");


try{
    console.log("hello");
    console.log(hello);
    console.log("bye!");
}catch(err){
    console.log("handled",err);
}finally{
    console.log("finally");
}
console.log("end");