# Minimal Admin System for Korean Products

한국형 백오피스 제품을 위한 **미니멀 디자인 시스템 + 관리자 대시보드 UI 기반 프로젝트**입니다.

## 1) Project Purpose
- 일회성 화면이 아닌 재사용 가능한 admin-focused design system 제공
- 한국 운영팀이 자주 쓰는 백오피스 패턴(검색/필터/상태/테이블/대량작업/상세 드로어) 표준화
- Next.js + TypeScript + Tailwind + Storybook 기반으로 실서비스 확장 가능한 구조 제공

## 2) Design Principles
- 최소/중립 톤: 과도한 컬러, 그림자, 마케팅형 장식 배제
- 밀도 높은 가독성: 촘촘한 리스트와 폼 밀도를 유지하면서 계층과 대비 확보
- 패턴 우선: primitive 위에 admin pattern 컴포넌트를 명시적으로 구축
- 예측 가능한 API: variant/props 중심의 명확한 컴포넌트 인터페이스

## 3) Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Storybook
- TanStack Table
- class-variance-authority
- Lucide Icons
- React Hook Form + Zod

## 4) Folder Architecture

```txt
src/
  app/
    dashboard/
    users/
    orders/
    notices/
    globals.css
    layout.tsx
    page.tsx

  foundations/
    tokens.ts
    principles.ts
    index.ts

  components/
    ui/
      button.tsx
      input.tsx
      textarea.tsx
      select.tsx
      checkbox.tsx
      radio-group.tsx
      switch.tsx
      badge.tsx
      tabs.tsx
      dialog.tsx
      drawer.tsx
      tooltip.tsx
      empty-state.tsx
      pagination.tsx
      table.tsx
      index.ts
    patterns/
      filter-bar.tsx
      search-form.tsx
      table-toolbar.tsx
      status-badge.tsx
      bulk-action-bar.tsx
      data-table.tsx
      detail-drawer.tsx
      confirm-dialog.tsx
      section-header.tsx
      form-row.tsx
      page-header.tsx
      index.ts
    templates/
      admin-shell.tsx
      dashboard-template.tsx
      users-template.tsx
      orders-template.tsx
      notices-template.tsx
      index.ts

  lib/
    cn.ts
    admin-types.ts
    mock-data.ts

  hooks/
    use-detail-drawer.ts

  stories/
    foundations/
    ui/
    patterns/
    templates/

  types/
    common.ts
```

## 5) Why This Structure Works
- `foundations`와 `ui`를 분리해 토큰/원자 컴포넌트 변경이 패턴 레이어에 예측 가능하게 전파됩니다.
- `patterns`는 한국형 운영 업무 단위를 직접 캡슐화해 화면별 중복을 줄입니다.
- `templates`는 페이지 조합 예시 역할을 하며 실제 제품 팀에서 빠르게 페이지 확장이 가능합니다.
- Storybook이 `foundations -> ui -> patterns -> templates` 계층을 그대로 문서화합니다.

## 6) Korean Admin Optimization Points
- 기본 검색 폼에 상태/기간 프리셋(오늘, 최근 7일, 최근 1개월, 직접 선택) 제공
- 목록 중심 테이블 밀도(낮은 row height, 긴 한글 텍스트 truncation) 최적화
- 상태 배지(사용중/대기/중지), 대량 액션바, 상세 드로어, 확인 다이얼로그 기본 제공
- 예시 데이터와 문구를 한국 운영 맥락으로 구성

## 7) Vue Portability Considerations
- 비즈니스 개념을 `patterns`에서 props 기반으로 분리하여 Vue SFC/slots로 변환이 쉬움
- variant 중심 API(cva)는 Vue의 class-composition 패턴으로 1:1 대응 가능
- table/form 같은 상태 로직을 컴포넌트 외부로 분리 가능한 구조로 유지
- React 고유 기능 의존도를 최소화한 단순 합성 패턴 사용

## 8) Run

```bash
npm install
npm run dev
npm run storybook
```

## 9) Next Step Suggestions
- `src/lib/mock-data.ts`를 실제 API 스키마 타입으로 교체
- `patterns` 컴포넌트를 제품별 도메인 패턴으로 세분화
- Vue 포팅용 토큰 패키지(`tokens.json`, CSS vars) 별도 분리
