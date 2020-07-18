# 이벤트 버블링 - Event Bubbling

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6aeaf534-97c1-4d23-9a29-4fea7c920274/event-bubble.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6aeaf534-97c1-4d23-9a29-4fea7c920274/event-bubble.png)

```html
<body>
	<div class="one">
		<div class="two">
			<div class="three"></div>
		</div>
	</div>
</body>
```

```
var divs = document.querySelectorAll('div');
divs.forEach(fuction(div){
	div.addEventListener('click', logEvent)
})

function.logEvent(event) {
	console.log(event.currentTarget.className)
}
```

이렇게 이벤트를 등록하고 최하위 div 태그인 <div class="three"></div>를 클릭하면 아래와 같은 결과가 실행됩니다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c163b2dd-440c-47e5-96e2-7bac176ee63a/event-bubble-log.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c163b2dd-440c-47e5-96e2-7bac176ee63a/event-bubble-log.png)

div 태그 한 개만 클릭했을 뿐인데 왜 3개의 이벤트가 발생되는 걸가요? 그 이유는 브라우저가 이벤트를 감지하는 방식 때문입니다.

브라우저는 특정 화면 요소에서 이벤트가 발생했을 때 그 이벤트를 최상위에 있는 화면 요소까지 이벤트를 전파시킵니다. 따라서, 클래스 명 three → two → one 순서로 div 태그에 등록된 이벤트들이 실행됩니다. 마찬가지로 two 클래스를 갖는 두 번째 태그를 클릭했다면 two → one 순으로 클릭 이벤트가 동작합니다.

여기서 주의해야 할 점은 각 태그마다 이벤트가 등록되어 있기 때문에 상위 요소로 이벤트가 전달되는 것을 확인할 수 있습니다. 만약 이벤트가 특정 div 태그에만 달려있다면 위와 같은 동작 결과는 확인할 수 없습니다.

# 이벤트 캡쳐링 - Event Capturing

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2732c07f-4ca5-4544-9263-8a3175aaf1f7/event-capture.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2732c07f-4ca5-4544-9263-8a3175aaf1f7/event-capture.png)

이벤트 버블링과 반대로 상위에서 하위로 이벤트를 감지하기 위해서 탐색하는 것

```html
<body>
	<div class="one">
		<div class="two">
			<div class="three"></div>
		</div>
	</div>
</body>
```

```jsx
var divs = document.querySelectorAll('div');
divs.forEach(fuction(div){
	div.addEventListener('click', logEvent, {
		capture: true // default 값은 false
	});
});

function.logEvent(event) {
	console.log(event.currentTarget.className)
}
```

```jsx
function logEvent(event) {
	event.stopPropation();
}
```

# 이벤트 위임 - Event Delegation

앞에서 살펴본 이벤트 버블링과 캡쳐링은 사실 이벤트 위임을 위한 선수 지식입니다. 이벤트 위임은 실제 바닐라 JS로 웹 앱을 구현할 때 자주 사용하게 되는 코딩 패턴입니다.

이벤트 위임을 한 문장으로 요약해보면 **'하위 요소에 각각 이벤트를 붙이지 않고 상위 요소에서 하위 요소의 이벤트들을 제어하는 방식'**입니다.

```html
<h1>오늘의 할 일</h1>
<ul class="itemList">
	<li>
		<input type="checkbox" id="item1" />
		<label for="item1">이벤트 버블링 학습</label>
	</li>
	<li>
		<input type="checkbox" id="item2" />
		<label for="item2">이벤트 캡쳐 학습</label>
	</li>
</ul>
```

```jsx
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
	input.addEventListener('click', function (event) {
		alert('clicked');
	});
});
```

위의 방식은 이벤트 하나하나에 클릭 이벤트를 달아주도록 되어있습니다. 이러한 방법은 리스트 아이템이 많아지면 많이질수록 이벤트 리스너를 다는 작업은 매우 번거로워 집니다. 이 번거로운 작업을 해결할 수 있는 방법이 바로 이벤트 위임입니다.

```jsx
var itemList = document.querySelector('.itemList');
itemList.addEventListener('click', function (event) {
	alert('clicked');
});
```

화면의 모든 인풋 박스에 일일이 이벤트 리스너를 추가하는 대신 이제는 인풋 박스의 상위 요소인 ul 태그, .itemList에 이밴트 리스너를 달아놓고 하위에서 발생한 클릭 이벤트를 감지합니다. 이 부분이 앞에서 배웠던 이벤트 버블링입니다.

### 참조

1. [https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/)
