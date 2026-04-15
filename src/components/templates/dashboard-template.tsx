"use client";

import * as React from "react";
import {
  AlarmClock,
  BarChart3,
  CalendarDays,
  CalendarRange,
  CheckCircle2,
  CreditCard,
  FolderKanban,
  Gauge,
  Megaphone,
  MessageSquareMore,
  PauseCircle,
  ReceiptText,
  ShieldCheck,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { SectionHeader } from "@/components/patterns";
import { StatusBadge } from "@/components/patterns/status-badge";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type MetricItem = {
  label: string;
  value: string;
  delta: string;
  trend: number[];
  icon: LucideIcon;
};

const metrics: MetricItem[] = [
  {
    label: "오늘 신규 가입",
    value: "128",
    delta: "+12%",
    trend: [7, 9, 8, 11, 12, 13, 16],
    icon: UserPlus,
  },
  {
    label: "결제 완료",
    value: "52",
    delta: "+6%",
    trend: [5, 6, 6, 7, 8, 9, 9],
    icon: CreditCard,
  },
  {
    label: "대기 처리",
    value: "17",
    delta: "-3%",
    trend: [5, 5, 4, 4, 3, 3, 2],
    icon: AlarmClock,
  },
  {
    label: "중지 계정",
    value: "4",
    delta: "0%",
    trend: [1, 2, 1, 2, 1, 1, 1],
    icon: PauseCircle,
  },
];

const trendData = [
  { date: "04-09", 주문: 92, 결제: 81, 환불: 2 },
  { date: "04-10", 주문: 110, 결제: 94, 환불: 3 },
  { date: "04-11", 주문: 99, 결제: 87, 환불: 2 },
  { date: "04-12", 주문: 123, 결제: 108, 환불: 4 },
  { date: "04-13", 주문: 118, 결제: 104, 환불: 3 },
  { date: "04-14", 주문: 132, 결제: 116, 환불: 3 },
  { date: "04-15", 주문: 140, 결제: 124, 환불: 4 },
];

const channelData = [
  { channel: "웹", 신규: 84, 재구매: 36 },
  { channel: "앱", 신규: 65, 재구매: 58 },
  { channel: "파트너", 신규: 44, 재구매: 41 },
  { channel: "영업", 신규: 28, 재구매: 24 },
];

const inquiryByHour = [
  { hour: "09시", 문의: 12, 처리: 10 },
  { hour: "11시", 문의: 20, 처리: 17 },
  { hour: "13시", 문의: 24, 처리: 20 },
  { hour: "15시", 문의: 19, 처리: 16 },
  { hour: "17시", 문의: 14, 처리: 13 },
  { hour: "19시", 문의: 9, 처리: 8 },
];

const statusDistribution = [
  { name: "사용중", value: 72, color: "var(--chart-success)" },
  { name: "대기", value: 18, color: "var(--chart-warning)" },
  { name: "중지", value: 10, color: "var(--chart-danger)" },
];

const slaRadarData = [
  { subject: "결제", score: 94 },
  { subject: "예약", score: 90 },
  { subject: "문의", score: 87 },
  { subject: "정산", score: 92 },
  { subject: "공지", score: 95 },
  { subject: "권한", score: 89 },
];

const incidents = [
  {
    title: "결제 지연 모니터링",
    owner: "정산운영팀",
    status: "대기" as const,
    due: "11:30",
  },
  {
    title: "파트너 권한 정책 반영",
    owner: "파트너운영팀",
    status: "사용중" as const,
    due: "14:00",
  },
  {
    title: "구버전 API 종료 공지",
    owner: "서비스기획팀",
    status: "중지" as const,
    due: "16:30",
  },
  {
    title: "예약 취소 CS 매크로 점검",
    owner: "고객지원팀",
    status: "대기" as const,
    due: "18:00",
  },
];

const checkList = [
  "정산 실패 건 재시도 확인",
  "신규 파트너 승인 대기 건 처리",
  "공지 노출 상태 QA 확인",
  "예약 취소 정책 문의 건 회신",
  "API 모니터링 알림 임계값 점검",
];

const latestNotices = [
  { title: "4월 3주차 점검 공지", category: "서비스 공지", updatedAt: "오늘 09:30" },
  {
    title: "신규 파트너 센터 권한 정책",
    category: "정책 안내",
    updatedAt: "어제 17:10",
  },
  {
    title: "구버전 관리자 페이지 종료 안내",
    category: "중요 공지",
    updatedAt: "어제 10:40",
  },
];

const quickRanges = [
  { label: "오늘", active: true, icon: CalendarDays },
  { label: "최근 7일", active: false, icon: CalendarRange },
  { label: "최근 1개월", active: false, icon: CalendarRange },
];

const chartTooltipStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: 8,
  boxShadow: "0 4px 14px rgba(15, 23, 42, 0.08)",
  fontSize: 12,
};

type ChartSlotProps = {
  mounted: boolean;
  heightClassName: string;
  children: React.ReactNode;
};

function ChartSlot({ mounted, heightClassName, children }: ChartSlotProps) {
  return (
    <div className={`${heightClassName} w-full`}>
      {mounted ? (
        children
      ) : (
        <div className="flex h-full items-center justify-center rounded-md border border-dashed border-[var(--border)] bg-[var(--surface-muted)] text-[12px] text-[var(--foreground-muted)]">
          <BarChart3 size={14} className="mr-2 soft-pulse" />
          차트 데이터 로딩 중...
        </div>
      )}
    </div>
  );
}

export function DashboardTemplate() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-4">
      <section className="card motion-card animate-fade-up p-4">
        <SectionHeader
          icon={<Gauge size={14} />}
          title="운영 현황"
          description="한국형 백오피스에 맞춘 핵심 지표와 추이를 빠르게 확인합니다."
          action={
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                다운로드
              </Button>
              <Button size="sm">리포트 생성</Button>
            </div>
          }
        />

        <div className="mb-3 flex flex-wrap items-center gap-2">
          {quickRanges.map((range) => {
            const Icon = range.icon;

            return (
              <span
                key={range.label}
                className={
                  range.active
                    ? "inline-flex items-center gap-1 rounded-md border border-[var(--border)] bg-[var(--surface-muted)] px-2 py-1 text-[11px] font-semibold text-[var(--foreground-muted)]"
                    : "inline-flex items-center gap-1 rounded-md border border-[var(--border)] bg-white px-2 py-1 text-[11px] text-[var(--foreground-muted)]"
                }
              >
                <Icon size={12} />
                {range.label}
              </span>
            );
          })}
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="kpi-card motion-card animate-fade-up p-3"
                style={{ animationDelay: `${80 + index * 70}ms` }}
              >
                <p className="inline-flex items-center gap-1.5 text-[12px] text-[var(--foreground-muted)]">
                  <Icon size={13} className="text-[var(--primary)]" />
                  {item.label}
                </p>
                <p className="mt-1 text-[26px] font-semibold leading-none text-[var(--foreground-strong)]">
                  {item.value}
                </p>
                <p className="mt-2 text-[12px] text-[var(--foreground-muted)]">전주 대비 {item.delta}</p>
                <div className="mt-2 grid grid-cols-7 gap-1">
                  {item.trend.map((point, pointIndex) => (
                    <div
                      key={`${item.label}-${pointIndex}`}
                      className="rounded-sm"
                      style={{
                        height: `${Math.max(point * 2.1, 8)}px`,
                        background: pointIndex % 2 ? "var(--chart-primary-2)" : "var(--chart-primary-3)",
                        opacity: 0.34 + pointIndex * 0.08,
                      }}
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-[1.8fr_1fr]">
        <section className="card motion-card animate-fade-up p-4" style={{ animationDelay: "120ms" }}>
          <SectionHeader
            icon={<ReceiptText size={14} />}
            title="주간 주문/결제 추이"
            description="일자별 주문, 결제, 환불 흐름"
          />
          <ChartSlot mounted={mounted} heightClassName="h-[290px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ left: -20, right: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 12, fill: "#64748b" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={chartTooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="주문" stroke="var(--chart-primary-2)" strokeWidth={2.2} dot={false} />
                <Line type="monotone" dataKey="결제" stroke="var(--chart-accent)" strokeWidth={2.2} dot={false} />
                <Line type="monotone" dataKey="환불" stroke="var(--chart-danger)" strokeWidth={1.8} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </ChartSlot>
        </section>

        <section className="card motion-card animate-fade-up p-4" style={{ animationDelay: "170ms" }}>
          <SectionHeader
            icon={<ShieldCheck size={14} />}
            title="계정 상태 분포"
            description="운영 계정 상태 비중"
          />
          <ChartSlot mounted={mounted} heightClassName="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip contentStyle={chartTooltipStyle} />
                <Pie
                  data={statusDistribution}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={58}
                  outerRadius={90}
                  paddingAngle={2}
                >
                  {statusDistribution.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartSlot>

          <ul className="space-y-2">
            {statusDistribution.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between rounded-md border border-[var(--border)] px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />
                  <span className="text-[13px] text-[var(--foreground)]">{item.name}</span>
                </div>
                <span className="text-[13px] font-semibold text-[var(--foreground-strong)]">{item.value}%</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <section className="card motion-card animate-fade-up p-4" style={{ animationDelay: "220ms" }}>
          <SectionHeader
            icon={<BarChart3 size={14} />}
            title="채널별 주문 구성"
            description="신규/재구매 스택 바 차트"
          />
          <ChartSlot mounted={mounted} heightClassName="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelData} margin={{ left: -20, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="channel"
                  tick={{ fontSize: 12, fill: "#64748b" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={chartTooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="신규" stackId="a" fill="var(--chart-primary-2)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="재구매" stackId="a" fill="var(--chart-primary-4)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartSlot>
        </section>

        <section className="card motion-card animate-fade-up p-4" style={{ animationDelay: "270ms" }}>
          <SectionHeader
            icon={<MessageSquareMore size={14} />}
            title="시간대 문의/처리량"
            description="운영 문의 처리 능력 추이"
          />
          <ChartSlot mounted={mounted} heightClassName="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={inquiryByHour} margin={{ left: -20, right: 10 }}>
                <defs>
                  <linearGradient id="inquiryColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--chart-primary-3)" stopOpacity={0.26} />
                    <stop offset="95%" stopColor="var(--chart-primary-3)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="resolvedColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--chart-accent)" stopOpacity={0.24} />
                    <stop offset="95%" stopColor="var(--chart-accent)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="hour"
                  tick={{ fontSize: 12, fill: "#64748b" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={chartTooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Area
                  type="monotone"
                  dataKey="문의"
                  stroke="var(--chart-primary-2)"
                  fill="url(#inquiryColor)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="처리"
                  stroke="var(--chart-accent)"
                  fill="url(#resolvedColor)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartSlot>
        </section>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.05fr_1.2fr_1fr]">
        <section className="card motion-card animate-fade-up p-4" style={{ animationDelay: "320ms" }}>
          <SectionHeader
            icon={<Gauge size={14} />}
            title="팀별 SLA 달성률"
            description="운영 영역별 품질 점수"
          />
          <ChartSlot mounted={mounted} heightClassName="h-[255px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={slaRadarData} outerRadius="72%">
                <PolarGrid stroke="#dbe3ef" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#64748b" }} />
                <Tooltip contentStyle={chartTooltipStyle} />
                <Radar
                  dataKey="score"
                  stroke="var(--chart-primary-2)"
                  fill="var(--chart-primary-3)"
                  fillOpacity={0.25}
                />
              </RadarChart>
            </ResponsiveContainer>
          </ChartSlot>
        </section>

        <section className="card motion-card animate-fade-up p-4" style={{ animationDelay: "370ms" }}>
          <SectionHeader
            icon={<FolderKanban size={14} />}
            title="운영 이슈"
            description="오늘 처리해야 할 운영 이슈 목록"
          />
          <ul className="space-y-2">
            {incidents.map((incident) => (
              <li
                key={incident.title}
                className="rounded-md border border-[var(--border)] bg-white px-3 py-2 transition-colors hover:bg-[var(--surface-muted)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--foreground-strong)]">
                      <ReceiptText size={13} className="text-[var(--foreground-muted)]" />
                      {incident.title}
                    </p>
                    <p className="mt-1 text-[12px] text-[var(--foreground-muted)]">담당: {incident.owner}</p>
                  </div>
                  <StatusBadge status={incident.status} />
                </div>
                <p className="mt-2 inline-flex items-center gap-1 text-[11px] text-[var(--foreground-muted)]">
                  <AlarmClock size={12} />
                  마감 목표: {incident.due}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="card motion-card animate-fade-up p-4" style={{ animationDelay: "420ms" }}>
          <SectionHeader
            icon={<Megaphone size={14} />}
            title="운영 노트"
            description="체크리스트와 최근 공지"
          />
          <Tabs defaultValue="todo">
            <TabsList>
              <TabsTrigger value="todo">체크리스트</TabsTrigger>
              <TabsTrigger value="notice">최근 공지</TabsTrigger>
            </TabsList>

            <TabsContent value="todo" className="space-y-2 pt-2">
              {checkList.map((item) => (
                <div
                  key={item}
                  className="panel-inset inline-flex w-full items-start gap-2 px-3 py-2 text-[13px] text-[var(--foreground)]"
                >
                  <CheckCircle2 size={14} className="mt-0.5 text-[var(--chart-accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="notice" className="space-y-2 pt-2">
              {latestNotices.map((notice) => (
                <div key={notice.title} className="rounded-md border border-[var(--border)] px-3 py-2">
                  <p className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--foreground-strong)]">
                    <Megaphone size={13} className="text-[var(--primary)]" />
                    {notice.title}
                  </p>
                  <p className="mt-1 text-[12px] text-[var(--foreground-muted)]">
                    {notice.category} · {notice.updatedAt}
                  </p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
