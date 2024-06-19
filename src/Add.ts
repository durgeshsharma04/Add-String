export function add(a: String) {
    if(a == "" || a.length  == 1){
        return Number(a);
    }
    a = a.replace(/\n|;|\//g,",");
    let num = a.split(",");
    let total : number = 0
    let negativeNum : string = ""
    num.forEach((val)=>{
        if(val.includes('-')){
            if(!negativeNum){
                negativeNum = val
            }else{
                negativeNum = `${negativeNum},${val}`
            }
            
        }
        if(val == "" || Number.isNaN(Number(val))){
            total = total
        }else{
            total = total + Number(val);
        }
        
    })
    if(negativeNum){
        return `Negative numbers not allowed ${negativeNum}`
    }
    return total
  }