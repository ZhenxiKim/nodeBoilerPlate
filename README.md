# nodeBoilerPlate
nodeBoilerPlate
- express 설치
```shell
npm install express --save
```

client측에서 전송하는 request 데이터를 받기 위한 bodyparser down
```shell
npm install body-parser --save
```
- 리액트 특징
virtualDOM에서 이미 그려진 DOM들을 snapshot을 찍어둔다.
그리고 virtualDOM에서 감시하다가 현재 update된 dom과 snapshot을 비교하여 변경된 부분의 real DOM부분을 변경
이전에는 변경이 감지되면 전체 realDOM을 다시 그렸음

- 리액트 앱 실행을 위해 필요한 webpack, babel 설정 소요시간이 너무 오래걸림 -> create react app command로 소요 시간 단축
- Babel
최신 js문법을 지원하지않는 브라우저들을 위해 최신js문법이 구형 브라우저에서도 돌수있게 es5 문법을 변경을 도와주는

- webpack
복잡한 리소스 파일을 간단하게 번들화
- create react app
```shell
npx create-react-app .
```

- npm vs npx
npm은 필요한 디펜던시들을 다 로컬 OR 글로벌로 받아서 사용했다면 npx는 npm registry에 등록된 모듈만 필요할때 가져다가 사용
-> 디스크 공간 절약, 항상 최신버전 사용 가능

- src 폴더에 webpack이 번들화하는 범주의 폴더이므로 서비스에 이미지등 리소스를 넣고싶을때 src폴더에 넣어야함 

- 폴더구조
1. _actions,_reducer 
    - Redux를 위한 폴더
2. components/views
    - pages들 위치
3. components/views/Sections
    - 해당 페이지에 관련된 css, component추가
4. App.js
    - Routing관련 일 처리
5. Config.js
    - 환경변수 설정 파일
6. hoc
    - Higher Order Component
    예) admin관리자만 들어갈수있는 컴포넌트에 들어갈 수 있는지 검사하는 상위 컴포넌트
7. utils

- nodemon
  수정된 부분을 서버 내리지 않고 반영하도록 도와주는 모듈
  로컬에서만 개발시 사용하겠다는 설정으로 dev를 붙임 
  dev를 붙여서 package.json의 "devDependencies"에 추가된것을 확인할 수 있음 