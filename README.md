# LawAndGood

로앤굿 프론트엔드 과제입니다

## 프로젝트 실행 방법

```bash
# install dependencies
yarn install
# run mock-server and set dummy data
yarn server
# run application
yarn dev
```

## 사용한 스텍

- React
- Next.js
- Typescript
- Emotion.js
- mock-server (json-server)
- 사용한 이유
- 실제 api 서버처럼 RESTFul api 를 지원한다
- 서버 기동시 더미 데이터 파일 위치만 알려주면 별도의 data init(insert) 과정이 필요 없다
- 앱 사용 후 로컬 스토리지는 코드로 지워주어야 하는데 json-server 는 런타임에만 존재하는 데이터를 활용할 수 있다.
- Jest
- Eslint & Prettier
- Gitmoji (의미 있는 && 알아보기 쉬운 커밋 메세지 작성하기)
