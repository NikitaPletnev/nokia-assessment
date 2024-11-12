// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dataGridSortComparator = (type: string, a: any, b: any) => {
    switch (type){
    
    case "status": if(b.toLowerCase() === a.toLowerCase()){
        return 0;
    }
        return a.toLowerCase() > b.toLowerCase() ? -1 : 1;
        
    case "operation": if(b.toLowerCase() === a.toLowerCase()){
        return 0;
    }
        return a.toLowerCase() > b.toLowerCase() ? -1 : 1;
    
    case "timestamp": return new Date(a).getTime() - new Date(b).getTime();
    
    default :return parseInt(a)-parseInt(b);
    }
};
