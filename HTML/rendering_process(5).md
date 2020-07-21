## 브라우저의 렌더링 과정

- 브라우저 주소창에 www.naver.com치면 > 네이버 서버를 찾아간다 >DNS(실제 서버가 어디에 있는지 알고 있는 서버)가 연결해줄 곳을 찾음
  > > 사람들은 숫자로된 IP주소는 기억하지 못하고 문자로된 도메인 네임을 기억한다
  > > 도메인 네임과 IP주소 데이터를 가지고 있는 곳이 DNS 서버이다.
  > > <br/>

1. HTML 파싱 후, DOM(Document Object Model) 트리 구축
2. CSS 파싱 후, CSSOM(CSS Object Model) 트리 구축
3. Javascript 실행

- 주의! HTML 중간에 스크립트가 있다면 HTML 파싱이 중단된다.

4. DOM과 CSSOM을 조합하여 렌더트리(Render Tree) 구축

- 주의! display: none 속성과 같이 화면에서 보이지도 않고 공간을 차지하지 않는 것은 렌더트리로 구축되지 않는다.

5. 뷰포트 기반으로 렌더트리의 각 노드가 가지는 정확한 위치와 크기 계산 (Layout/Reflow 단계)
6. 계산한 위치/크기를 기반으로 화면에 그림 (Paint 단계)
