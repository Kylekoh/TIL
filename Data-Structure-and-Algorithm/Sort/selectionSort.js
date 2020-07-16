/* 
    첫번째 값을 기준으로 잡고 나머지 값 중에서 가장 작은 값을 
    기준값과 바꿔주는 알고리즘
    O(n^2)
*/

// [5,1,4,7,2,6,8,3] // 기준값: 5 , 나머지중에 가장 작은 값: 1
// [1,5,4,7,2,6,8,3] // 기준값: 5 , 나머지중에 가장 작은 값: 2
// [1,2,4,7,5,6,8,3] // 기준값: 4 , 나머지중에 가장 작은 값: 3
// [1,2,3,7,5,6,8,4] // 기준값: 7 , 나머지중에 가장 작은 값: 4
// [1,2,3,4,5,6,8,7] // 기준값: 5 , 나머지중에 가장 작은 값: 6
// [1,2,3,4,5,6,8,7] // 기준값: 6, 나머지중에 가장 작은 값: 7
// [1,2,3,4,5,6,8,7] // 기준값: 8, 나머지중에 가장 작은 값: 7
// [1,2,3,4,5,6,7,8] // 정렬 완료

function selectionSort(arr) {
    let i, j, temp, minIndex;
    for(i = 0; i < arr.length- 1; i++) {
        minIndex = i;
        for(j= i+1; j < arr.length; j++) { // 나머지 배열중에 최솟값의 위치를 찾는다
            if(arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        temp = arr[minIndex]; // 찾은 최솟값을 임시 배열에 담는다
        arr[minIndex] = arr[i] // 기존 최솟값 위치에 기준값을 담는다
        arr[i] = temp; // 기준값은 최솟값으로 바꾼다
    }
    return arr
}


console.log(selectionSort([5,1,4,7,2,6,8,3]))