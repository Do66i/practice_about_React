### 오늘부터 면접대비 겸 개념정리 빡시게 하는걸로

프론트앤드 인터뷰

**호이스팅이 무엇인가요?**

1. 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 효과를 지니는것
2. 자바스크립트 parser가 함수가 실행되기전 한번 쭉 훑고서 함수내에 아래쪽에 존재하는 내용 중 필요한 값들을 끌어 올리는것
3. ((((((컴퓨팅에서 파서(parser)는 인터프리터 나 컴파일러의 구성 요소 가운데 하나로, 입력 토큰에 내재된 자료 구조를 빌드하고 문법을 검사한다)))))))
4. 함수선언문(function func(){})과 var로 선언된 변수만 호이스팅 되는줄 알았지만 사실 let const class모두 호이스팅이된다. 하지만 선언문만 끌어 올려질뿐 초기화가 되지않지만 var는 undefined로 초기화가 된다 (그래서 참조가 가능)

특징

- 선언된 함수는 상단에서 참조, 호출이 **가능**하다.
- 선언된 `var` 는 상단에서 참조, 할당이 **가능**하다.
- 선언된 `let` , `const` 는 상단에서 참조, 할당이 **불가능**하다. (Reference Error가 뜬다)

```jsx
x = "Hello";
console.log(x);
var x;
Hello
undefined

y = "Bye";
console.log(y);
let y;
Uncaught ReferenceError: Cannot access 'y' before initialization
at <anonymous>:1:3
```

백앤드 인터뷰

**HTTP와 HTTPS의 차이점**

- HTTP는 요청응답 패킷을 있는 그대로 전달하기때문에, 중간에 가로채고 수정을 할수 있다. 그래서 보안이 거의 없다.
- HTTPS같은경우는 HTTP를 보안하기위해 중간에 패킷을 제3자 인증, 공개키 암호화, 비밀키 암호화 를 사용하여 패킷을 암호화해서 보낸다.

제3자 인증

- 믿을 수 있는 인증기관에 등록된 인증서만 신뢰하는 것
- SSL 인증, 접속하려는 서버가 신뢰할수있는 서버인지 확인하고 통신에 사용할 공개키를 제공한다.

공개키 암호화 (비대칭 키) (RSA방식)

- 정보를 받는사람이 키쌍을 만든다 (키 A 그리고 키 B)
- 키A를 공개하고 키A를 이용해 암호화해서 내용을 보내면 B키로만 복호화할수있기때문에 본인이 비공개키B를 공개하지 않는이상 절대 복호화 할수없다.

비밀키 암호화

- 통신하는 데이터를 암호화 하기 위해 사용 (개인키)

공개키는 대칭키를 보완하기 위해 나온 방법

대칭키는 하나의 키로 암호화 복호화 하기때문에 암호화된 정보와 함께 키를 같이 보내야해서 키가 탈취당할 위험이 엄청 컸다.

프론트 인터뷰

클로저는 무엇인가? 그리고 왜 쓰는가?

클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수

쉽게 말하면 외부함수의 변수에 접근할수 있는 내부함수 (외부함수의 변수를 참조하지 않으면 클로저가 아니다)

```jsx
function outerFunc(){
	let x = 10; //원래라면 이 x값의 라이프 사이클이 끝나야하지만...
	function innerFunc(){
		console.log(x);
	}
}

const outer = outerFunc();
outer(); //10

function counter(){ //모듈화
  let counter = 0; // 은닉.. 이 값을 다이렉트로 접근할수없음
	return {
		increase : () => {
			counter++;
		},
		decrease : () => {
			counter--;
		},
		getValue : () => {
			return value;
		}
}

let counter1 = counter();
let counter2 = counter();
```

데이터와 기능(메소드)를 한곳에 모아서 모듈화를 할 수 있다는 장점이 있다. 클로저는 각자의 환경을 갖기 때문에 아래 두개(counter1,2)는 각자 독립적인 counter 값을 가지게 된다. (class를 이용해 instance 를 만드는 것과 비슷하다고 볼수있다)

또한 은닉화를 할수 있다는 장점이 있다. 자바스크립트에는 변수 접근 제한을 막는 private 키워드가 없었기때문에(과거형), 그걸 대체해서 클로저를 사용해 그런 비슷한 효과를 지니게 하는 방법을 사용하였는데.... 이제는 private 키워드처럼 작동하는 # 프리픽스를 사용하여 private 필드로 작동하게 만들수 있다.

캡슐화 - 데이터와 메소드를 한곳에 묶고(모듈화) 데이터를 은닉화 하며 필요한것만 노출시킨다

백앤드 인터뷰

HTTP 메서드와 하는 역할에 대해서 설명

OPTIONS는 해당 uri에 대해 서버가 허용하는 메서드를 확인할 때 사용한다.

- 응답 헤더 Allow에 지원하는 Method들을 확인할수있다

HEAD는 GET요청과 비슷하나 header만 가져온다.

- 웹서버의 존재 여부를 확인용으로 사용한다, 200이면 존재 나머지는 비정상 에러

TRACE는 웹서버로 가는 경로상에 웹프록시나 웹캐시등과 같은 중간 서버의 존재를 확인할수있다 (알고만 있자)

GET요청은 데이터를 요청하는 메서드 (READ)

POST요청은 데이터를 생성하는 것을 요청하는 메서드 (CREATE)

PUT요청은 데이터를 수정하거나 존재하지 않으면 생성하는 메서드 (CREATE UPDATE) [보내지지 않은 값은 null (갈아끼운다 생각)]

DELETE요청은 데이터를 제거를 요청하는 메서드 (DELETE)

PATCH는 서버에 존재하는 데이터를 일부 수정하는 메서드 (UPDATE) [보내지지 않은 값은 유지 (일부 수정)]

리엑트의 불변성

What : 불변성이란 ?
메모리 영역의 값을 변경할 수 없는 것이다.
JS에 원시타입은 불변성을 가지고 있지 않나요 ?  
예를들어 let으로 string이라고 선언한 변수에 'data1'이라는 String값을 할당한 후  
string이란 변수에 'data2'라는 string값을 할당한다고 가정해봅시다  
우리 눈에 보이기엔 변수 string은 data1에서 data2의 값으로 변경되었지만  
**실제 메모리영역에서는 'data1'과 'data2'가 모두 존재합니다**  
기존 메모리 영역 1에 있는 'data1'의 값은 그대로 두고,  
메모리 영역2에 'data2'를 새로 할당했습니다.  
즉, 메모리영역에서 'data2'는 'data1'을 대체하는 것이 아니라 새로운 영역에 할당됩니다.  
이게 불변성입니다.

WHY : 왜 리엑트에서 불변성을 지켜야할까요 ?
리액트에서 불변성을 지켜주는 이유는 리액트가 상태 업데이트를 하는 원리 때문입니다. 리액트는 상태값을 업데이트 할 때 얕은 비교를 수행합니다. 즉 객체의 속성 하나하나를 비교하는게 아니라 참조값만 비교하여 상태 변화를 감지합니다. 배열이나 객체를 새로 생성해서 새로운 참조값을 만들어서 상태를 업데이트 합니다. 이런 행위가 불변성을 지켜주는 것입니다. 리엑트의 불변성을 지켜줌으로써 효율적인 상태업데이트를 할 수 있고 사이드 이펙트를 사전 방지하고 프로그래밍 구조를 단순하게 유지할 수 있습니다.

HOW : 어떻게 불변성을 지켜야할까요 ?
spread operator, map, filter, slice, reduce 등등 새로운 배열을 반환하는 메소드들을 활용하면 됩니다.

_splice는 원본데이터를 변경함_

setState를 이용할 때 원시타입 경우에는 값을 바로 넣어주어도 되지만
참조타입인 경우에는 새로운 객체나 배열을 생성한 후 값을 넣어주어야 합니다.
