//global object its like window browser object

//console.log(global);

//run it once
setTimeout(() => {
    console.log('timeouttttt guyssss');
    clearInterval(int);
}, 2000);

//run it every x secs
const int = setInterval(()=>{
    console.log('intervalllllll guyssss');
}, 2000)

//absolute path
console.log(__dirname);
//absolute path + filename 
console.log(__filename);