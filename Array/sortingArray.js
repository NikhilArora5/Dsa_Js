const arr = [2, 4, 8,0, 6, 1,20, 3, 10];

const sortArr = (arr) => {
  let idx = 0;
  let count=0
  for (let idx = 0; idx < arr.length; ) {
    let found = false;
    let idxFound = idx;
    count+1
    for (let i = idx + 1; i < arr.length; i++) {
      // console.log('---------arr',arr ,"idx-------",idx,"-----arr[i]--------",arr[i],"arr[idx]",arr[idx])
    count+=1
      if(arr[i]<arr[idx]){

          let greater=arr[idx]
          arr[idx]=arr[i]
          arr[i]=greater
          found=true
          idxFound=idx

      }

    //   if (arr[i] > arr[idx]) {
    //     let smaller = arr[idx];
    //     arr[idx] = arr[i];
    //     arr[i] = smaller;
    //     found = true;
    //     idxFound = idx;
    //   }
    }

    if (found) {
      idx = idxFound;
    } else {
      idx += 1;
    }
  }
console.log('---------count',count)
  return arr
};


let sortedArr=sortArr(arr)

console.log("--------sortedArr--------",sortedArr)