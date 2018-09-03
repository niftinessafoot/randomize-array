export default function randomizeArray(arr){
  let newArr;
  if(Object.prototype.toString.call(arr) === '[object Array]'){
    const len = arr.length;
    newArr=[];

    arr.forEach((ele)=>{
      const rand = Math.floor(Math.random() * len);
      newArr.splice(rand,0,ele);
    });
  }

  return newArr;
}