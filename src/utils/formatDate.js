const formatDate=(date)=>{
    const d= new Date(date);
    let month =`${ d.getMonth()+ 1}`;
    const day =`${d.getDate()}`;
    const year=d.getFullYear();
    if(month.length<2){
        month =`0`
    }
}
export dafault formatDate;