# Closure

클로저란 어떤 함수에서 선언한 변수를 참조하는 내부함수를 외부로 전달할 경우, 함수의 실행 컨텐스트가 종료된 후에도 해당 변수가 사라지지 않는 현상을 말한다.

내부함수를 외부로 전달하는 방법에는 함수를 return 하는 경우 뿐 아니라 콜백으로 전달하는 경우도 포함된다.

### 클로저의 사용

- 콜백함수 내부에서 외부 데이터를 사용하고자 할 때
- 접근권한제어(정보 은닉)

# 클로저(Closure)

클로저란 함수가 속한 렉시컬 스코프를 기억하여 함수가 렉시컬 스코프 밖에서 실행될 때도 그 스코프에 접근할 수 있게 하는 기능을 말한다.

```javascript
function outer() {
	var a = 2;
	function inner() {
		console.log(a);
	}
	return inner;
}

var func = outer();
func();
```
여기서 GC(Garbage Collector)가 outer()의 참조를 없앨 것 같지만 내부함수인 inner()가 해당 스코프의 변수인 a를 참조하고 있기 때문에 없애지 않는다. 따라서 스코프 외부에서 inner() 가 실행되도 해당 스코프를 기억하기 때문에 2를 출력하게 된다. 즉, 여기서 클로저는  inner()가 되며 func에 담겨 밖에서도 실행되고 렉시컬 스코프를 기억한다. 

function func() {
  for (var i=1; i<5; i++) {
    setTimeout(function() { console.log(i); }, i*500);
  }
}
func(); // 5 5 5 5

function func() {
  for (let i=1; i<5; i++) {
    setTimeout(function() { console.log(i); }, i*500);
  }
}
func(); // 1 2 3 4