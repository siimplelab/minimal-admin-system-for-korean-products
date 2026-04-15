export const designPrinciples = [
  {
    title: "조용한 시각 톤",
    description:
      "기본은 중립 그레이와 얇은 보더를 사용하고, 강조는 상태/행동처럼 의미가 있을 때만 사용합니다.",
  },
  {
    title: "밀도 높은 가독성",
    description:
      "행 높이와 간격은 실무 백오피스 흐름에 맞춰 촘촘하게 유지하되, 텍스트 대비와 계층은 분명히 유지합니다.",
  },
  {
    title: "패턴 우선 재사용",
    description:
      "단일 위젯보다 FilterBar, TableToolbar, DetailDrawer 같은 운영 패턴을 컴포넌트로 정의합니다.",
  },
  {
    title: "이식 가능한 API",
    description:
      "UI 컴포넌트는 props/variant 중심으로 설계하여 Vue에서도 slot/props로 대응하기 쉽게 만듭니다.",
  },
] as const;
