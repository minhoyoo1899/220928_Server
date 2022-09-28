const http = require('http');

// contentType

const element = {
  header: "<header> this is header </header>",
  body: "<body> this is body </body>",
  footer: "<footer> this is footer </footer>",
  form: `
  <form id="log-in-form" method="GET">
    <input type="text" name="username" placeholder="username" />
    <input type="text" name="password" placeholder="password" />
  </form>
  <button type="submit" form="log-in-form"> click! </button>
  `
};

const main = `
  ${element.header}
  ${element.form}
  ${element.body}
  ${element.footer}
`;

// 익스 프레스(express)는 연습하기에 긷지 좋은 기능이 아니다.
// 어떻게 서버에게 데이터를 전달 할 것이냐?
/*
 * 컴포넌트 형태로 만들어 진 점
 * 바닐라와 리액트를 연결지어서 생각 할 것
 * 객체에 어떤 문자열 들을 담는다.
 * 서버(Server)=> 우리가 알고리즘에 의해 만드는 기계(머신)은 인간이 만든 문자열들을 어던 방식으로 '활용'한다.
 * html해석해야 할 메서드가 필요하다.
 * 여기에 기반한 네트워트 기반사항이 응답헤더(Response)이다. (200, 404 코드...)
 * 대략적으로 이것이 어떠한 응답코드인지 확인 할 필요가 있다.
 * 상태를 점검하는 과정, 서버가 열렸는지, 닫혔는지 점검하는 '코드형식'을 응답헤더라고 부른다. (on, off 개념과 비슷)
 * Localhost( listner >>> 포트번호를 입력하면 접속이 가능한 )에 접근하는 방법은 내가 내집에 주소를 찾아 방문하는 격이다.
 * Client의 요청이 곧 이벤트 처리로 판단해도 좋다.
 * 
 * 
 * 
 */