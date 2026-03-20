# Vue.js 초심자 스터디 미니 프로젝트 (Nuxt)

초심자가 바로 실행하고 학습할 수 있는 **작은 실전 프로젝트**입니다.

## 왜 Nuxt를 사용했나요? (Next.js 같은 역할)

Vue 생태계에서 Nuxt는 React의 Next.js와 유사하게,

- 라우팅
- 폴더 기반 구조
- 개발 서버/빌드

를 빠르게 제공하는 표준 프레임워크입니다.

## 포함 라이브러리와 선택 이유

- **Nuxt 4**: Vue 기반의 가장 보편적인 풀스택/앱 프레임워크
- **Pinia** (`@pinia/nuxt`): Redux와 비슷한 역할의 Vue 공식 상태관리 도구
- **TanStack Vue Query** (`@tanstack/vue-query`): 비동기 API 요청, 캐싱, 로딩/에러 상태 관리를 쉽게 처리
- **Tailwind CSS 4**: 빠르고 일관된 UI 스타일링을 위한 유틸리티 CSS

## 학습 라우트

- `/` : 스터디 개요 페이지
- `/todos` : Pinia 상태관리 실습 (Todo 추가/완료)
- `/posts` : Vue Query 비동기 데이터 조회 실습

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속 후 라우트를 이동하며 실습하세요.
