export function add(a: String) {
    if(a == "" || a.length  == 1){
        return Number(a);
    }
    a = a.replace(/\n|;|\//g,",");
    let num = a.split(",");
    let total : number = 0
    num.forEach((val)=>{
        if(val == "" || Number.isNaN(Number(val))){
            total = total
        }else{
            total = total + Number(val);
        }
        
    })
    return total
  }