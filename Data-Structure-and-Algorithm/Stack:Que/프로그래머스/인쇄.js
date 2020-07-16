function solution(priorities, location) {
  let answer = 0;
  let i, temp;

  temp = priorities[i];
  // location의 값이 계속 변화한다
  let tmpArray = [];
  priorities.forEach((x, i) => {
    tmpArray.push([i, x]);
  });

  console.log(tmpArray);

  //   for(i=0; i <= priorities.length-1; i++){
  //       for(j=i+1; j <= priorities.length-1; j++) {
  //           if(temp < priorities[j]) {
  //             priorities.shift();
  //             priorities.push(temp);
  //             break;
  //           } else {
  //             if()
  //             priorities.shift()
  //           }
  //       }
  //   }

  //   return answer
}

console.log(solution([2, 1, 3, 2], 2)); // 0
// console.log(solution([1, 1, 9, 1, 1], 0)); // 5
