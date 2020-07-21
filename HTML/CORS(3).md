# CORS(Cross-Origin Resource Sharing)

- 클라이언트와 서버의 오리진이 다를 때 발생하는 이슈입니다.
- 동일 출처 정책(same-origin policy)때문에 CORS 같은 상황이 발생하면 외부서버에 요청한 데이터를 브라우저에서 보안목적으로 차단합니다.

- 이를 허가해주는 방법으로는

1. Access-Control-Allow-Origin response 헤더를 추가

```javascript
app.get('/data', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.send(data);
});
```

2. node.js의 미들웨어 CORS추가

```javascript
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // CORS 미들웨어 추가

...
```
