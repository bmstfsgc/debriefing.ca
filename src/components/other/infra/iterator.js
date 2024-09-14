  
export default function getIterator(myarray) {
    const items =myarray;
    let index = -1;
  
    return {
      [Symbol.iterator]() {
        return this;
      },
  
      next(value) {
        if(typeof value!=="undefined")
        {
          index=items.indexOf(value) 
        }
        
        ++index
        if(index>items.length-1) index=0;
        var item = items[index];
        if (item) {
          return {
            value: item,
            done: false
          };
        }
        return { done: true };
      },
  
      prev(value) {
        
         if(typeof value!=="undefined")
        {
          index=items.indexOf(value) 
        }
        
         --index
        
        
        if(index<0) index=items.length-1
        var item = items[index];
        if (item) {
          return {
            value: item,
            done: false
          };
        }
        return { done: true };
      }
    };
  }
  