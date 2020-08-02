# REST API

## REST란 무엇인가?

REpresentational State Transfer의 약자로 전반적인 웹 어플리케이션에서 상호작용하는데 사용되는 웹 아키텍쳐 모델이다. 즉, 자원을 주고받는 웹 상에서의 통신 체계에 있어서 범용적인 스타일을 규정한 아키텍쳐 라고 할 수 있다.

## API란 무엇인가?

Application Programming Interface의 약자로 구글 맵 API, 카카오 비전 API등 기존에 있는 응용 프로그램을 통해서 데이터를 제공받거나 기능을 사용하고자 할 때 사용하는 인터페이스 및 규격을 말한다. API는 프로그래밍 언어, 운영체제 등에서도 사용되는 범용적인 용어이다. 따라서, REST API라는 것은 REST 원칙을 적용하여 서비스 API를 설계한 것을 말하며 대부분의 서비스가 REST API를 제공한다.

## REST의 특징들

### 균등한 인터페이스(Uniform Interface)

REST가 HTTP의 표준만 따른다면 어떤한 기술이던지 접목하여 사용할 수 있기 때문에 플랫폼이나 언어의 제약에 구애받지 않는다. 요즘은 REST API를 정의할 때 JSON(Javascript Object Notation) 방식을 가장 많이 사용하지만 XML도 적용할 수 있다.

### 무상태성(Statless)

서버는 클라이언트의 상황을 고려하지 않고 API 요청에 대해서만 처리하기 때문에 이를 "상태가 없다"라고 표현한다. 이렇게 되면 클라이언트를 고려하지 않아도 되기 때문에 구현이 간결해진다.

### 캐싱 가능(Cacheable)

REST는 HTTP 표준을 기반으로 만들어졌기 때문에 HTTP의 특징인 캐싱을 사용할 수 있다. REST API를 활용하여 GET메소드를 Last-Modified 값과 함께 보낼 경우, 컨텐츠의 변화가 없을 때 캐시된 값을 사용하게 된다. 이렇게 되면 네트워크 응답시간 뿐만 아니라 API 서버에 요청을 발생시키지 않기 때문에 부담이 덜 하다는 장점 또한 가지게 된다.

### 자체 표현성

### 클라이언트-서버 구조

### 계층형 구조

## REST API의 핵심

### URI는 리소스를 표현해야 한다.

- 리스소 명은 동사가 아닌 명사를 사용해야 한다.

```URI
/students/1
```

- 리소스는 Collection과 Document로 표현할 수 있다.
  이 때 Collection은 복수를 사용함을 주의하자.

```URI
/locations/seoul/schools/3
```

여기서 locations는 Colletion을, seoul은 Document를 표현한다.

### 그 리소스에 대한 행위는 HTTP의 Method로 표현해야 한다.

- GET은 리소스를 조회한다.(학생 목록 조회)

```URI
GET /students
```

- POST는 리소스를 생성한다.(학생 생성)

```URI
POST /students
```

- PUT은 리소스를 업데이트한다.(1번 학생 정보 업데이트)

```URI
PUT /students/1
```

- DELETE는 리소스를 삭제한다.(1번 학생 삭제)

```URI
DELETE /students/1
```

## HTTP 상태코드

요청에 대한 응답의 상태코드 또한 명확하게 돌려주는 것이 잘 설계된 REST API이다.

- 2xx : 성공 관련 (200 Ok, 201 Created)
- 3xx : 리다이렉션 관련 (304 Not Modified)
- 4xx : 클라이언트 에러 관련 (400 Bad Request, 401 Unauthorized)
- 5xx : 서버 에러 관련 (500 Internal Server Error)

## 잘못된 REST 사용

- GET/POST의 부적합한 사용: 기존의 조회/생성의 기능이 아닌 다른 방식으로 사용하는 경우이다.
- 자체 표현적이지 않음: REST의 특징 중 하나인 자체표현성에서 떨어지는 경우로 이해하기 어렵다.
- HTTP 응답 코드 미사용: 위에서 정리한 응답에 관한 상태코드를 명확하게 정의하지 않은 경우이다.
- 그 외에 리소스 표현 가이드 및 REST의 특징을 위반한 경우를 주의하자.
