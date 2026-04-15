import { SectionHeader } from "@/components/patterns";
import { StatusBadge } from "@/components/patterns/status-badge";

const metrics = [
  { label: "오늘 신규 가입", value: "128", delta: "+12%" },
  { label: "결제 완료", value: "52", delta: "+6%" },
  { label: "대기 처리", value: "17", delta: "-3%" },
  { label: "중지 계정", value: "4", delta: "0%" },
];

const incidents = [
  { title: "결제 지연 모니터링", owner: "정산운영팀", status: "대기" as const },
  { title: "파트너 권한 정책 반영", owner: "파트너운영팀", status: "사용중" as const },
  { title: "구버전 API 종료 공지", owner: "서비스기획팀", status: "중지" as const },
];

export function DashboardTemplate() {
  return (
    <div className="space-y-5">
      <section className="card p-4">
        <SectionHeader
          title="운영 현황"
          description="한국형 백오피스에 맞춘 핵심 지표를 빠르게 확인합니다."
        />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <article key={item.label} className="kpi-card p-3">
              <p className="text-[12px] text-[var(--foreground-muted)]">{item.label}</p>
              <p className="mt-1 text-[26px] font-semibold leading-none text-[var(--foreground-strong)]">
                {item.value}
              </p>
              <p className="mt-2 text-[12px] text-[var(--foreground-muted)]">
                전주 대비 {item.delta}
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="card p-4">
          <SectionHeader title="운영 이슈" description="오늘 처리해야 할 운영 이슈 목록" />
          <ul className="space-y-2">
            {incidents.map((incident) => (
              <li
                key={incident.title}
                className="flex items-center justify-between rounded-md border border-[var(--border)] px-3 py-2"
              >
                <div>
                  <p className="text-[13px] font-medium text-[var(--foreground-strong)]">
                    {incident.title}
                  </p>
                  <p className="text-[12px] text-[var(--foreground-muted)]">
                    담당: {incident.owner}
                  </p>
                </div>
                <StatusBadge status={incident.status} />
              </li>
            ))}
          </ul>
        </section>

        <section className="card p-4">
          <SectionHeader title="오늘의 체크리스트" description="운영 누락을 줄이기 위한 점검 항목" />
          <ul className="space-y-2 text-[13px]">
            <li className="panel-inset px-3 py-2 text-[var(--foreground)]">
              정산 실패 건 재시도 확인
            </li>
            <li className="panel-inset px-3 py-2 text-[var(--foreground)]">
              신규 파트너 승인 대기 건 처리
            </li>
            <li className="panel-inset px-3 py-2 text-[var(--foreground)]">
              공지 노출 상태 QA 확인
            </li>
            <li className="panel-inset px-3 py-2 text-[var(--foreground)]">
              예약 취소 정책 문의 건 회신
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
