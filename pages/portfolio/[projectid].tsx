import React from "react";
import { useRouter, withRouter } from "next/router";
// 클래스 기반 컴포넌트를 묶어 특수한 라우터 프로퍼티를 컴포넌트에 주입하는 역할
// 하지만 주로 함수형 컴포넌트를 사용하기 때문에 쓰이지 않는다.

export default function PortfolioProjectPage() {
  const router = useRouter();

  router.pathname;
  router.query;

  return <div>[projectid]</div>;
}
