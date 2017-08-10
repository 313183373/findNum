function main(input){
    let map=new Map();
    for(let i of input){
        map.set(i,map.has(i)?map.get(i)+1:1);
    }
    for(let [key,value] of map){
        if(value===1){
            console.log(key);
            return
        }
    }
}

main([1,1,2,2,3,3,4,4,5,5,6,7,8,6,7]);