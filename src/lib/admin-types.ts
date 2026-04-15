export type AdminStatus = "사용중" | "대기" | "중지";

export type UserRow = {
  id: string;
  이름: string;
  이메일: string;
  소속: string;
  상태: AdminStatus;
  가입일: string;
  메모: string;
};

export type OrderRow = {
  id: string;
  주문번호: string;
  상품명: string;
  고객명: string;
  결제금액: string;
  상태: AdminStatus;
  주문일시: string;
};

export type NoticeRow = {
  id: string;
  제목: string;
  카테고리: string;
  상태: AdminStatus;
  작성자: string;
  수정일: string;
};
