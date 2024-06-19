export function add(a: String) {
    if(a == "" || a.length  == 1){
        return Number(a);
    }
    if(a.includes('\n')){
        a = a.replace("\n",",");
    }
    let num = a.split(",")
    let total : number = 0
    num.forEach((val)=>{
        total = total + Number(val);
    })
    return total
  }