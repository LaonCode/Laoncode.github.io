---
layout: post
title: "구글은 미국 법을 이유로 '내 정보 제공 내역' 공개를 거부할 수 있을까 — 대법원 2017다219232 [Knights Frontier]"
date: 2026-11-26 02:47:32 +09:00
categories: ["블로그/기술문서/리서치"]
tags: ["Knights Frontier", "판례 분석", "개인정보", "열람권", "개인정보 보호법"]
permalink: "/entry/판례-분석-구글은-미국-법을-이유로-내-정보-제공-내역-공개를-거부할-수-있을까-대법원-2017다219232/"
legacy_url: "https://spactcodes.tistory.com/entry/%ED%8C%90%EB%A1%80-%EB%B6%84%EC%84%9D-%EA%B5%AC%EA%B8%80%EC%9D%80-%EB%AF%B8%EA%B5%AD-%EB%B2%95%EC%9D%84-%EC%9D%B4%EC%9C%A0%EB%A1%9C-%EB%82%B4-%EC%A0%95%EB%B3%B4-%EC%A0%9C%EA%B3%B5-%EB%82%B4%EC%97%AD-%EA%B3%B5%EA%B0%9C%EB%A5%BC-%EA%B1%B0%EB%B6%80%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C-%E2%80%94-%EB%8C%80%EB%B2%95%EC%9B%90-2017%EB%8B%A4219232"
image: "/assets/images/posts/google-access-right-cover.png"
---

{% raw %}
<div style="line-height:1.85; word-break:keep-all;">

<div style="border:1px solid rgba(0,113,227,.25); border-left:4px solid #0071E3; border-radius:10px; padding:18px 22px; margin:0 0 28px; background:rgba(0,113,227,.05);">
<p style="font-family:'JetBrains Mono',monospace; font-size:13px; color:#0071E3; margin:0 0 10px; font-weight:500;">$ cat summary.txt</p>
<ul style="margin:0; padding-left:20px;">
<li>국내 이용자들이 구글에 "내 정보를 누구에게 넘겼는지" 알려 달라고 했다가 거절당하자 소송을 냈다.</li>
<li>대법원은 2023년 4월 13일, 미국 법에 비공개의무가 있다는 사정만으로는 열람을 거절할 수 없다고 판단했다.</li>
<li>외국 법령을 이유로 거절하려면 세 가지 기준을 통과해야 하고, 거절할 때도 항목을 특정해 이유를 알려야 한다.</li>
</ul>
<p style="font-size:14px; margin:12px 0 0; color:#5B6577;">대법원 2023. 4. 13. 선고 2017다219232 판결 · <a href="https://www.scourt.go.kr/sjudge/1682031287628_075447.pdf" target="_blank" rel="noopener" style="color:#0047AB; text-decoration:none; font-weight:600;">판결문 원문 ↗</a></p>
</div>

<div style="border:1px solid rgba(0,113,227,.18); border-radius:10px; padding:16px 22px; margin:0 0 36px; background:#fff;">
<p style="font-weight:bold; margin:0 0 6px;">Index</p>
<ol style="margin:0; padding-left:0; list-style:none; font-size:15px;">
<li style="margin:0;"><a href="#spact-s1" style="color:inherit; text-decoration:none; display:block; padding:3px 0;"><span style="font-family:'JetBrains Mono',monospace; color:#0071E3; font-size:13px; margin-right:12px;">01</span>열람권, 왜 중요한가</a></li>
<li style="margin:0;"><a href="#spact-s2" style="color:inherit; text-decoration:none; display:block; padding:3px 0;"><span style="font-family:'JetBrains Mono',monospace; color:#0071E3; font-size:13px; margin-right:12px;">02</span>사건은 어떻게 시작됐나</a></li>
<li style="margin:0;"><a href="#spact-s3" style="color:inherit; text-decoration:none; display:block; padding:3px 0;"><span style="font-family:'JetBrains Mono',monospace; color:#0071E3; font-size:13px; margin-right:12px;">03</span>쟁점별 양측 주장과 법원의 판단</a></li>
<li style="margin:0;"><a href="#spact-s4" style="color:inherit; text-decoration:none; display:block; padding:3px 0;"><span style="font-family:'JetBrains Mono',monospace; color:#0071E3; font-size:13px; margin-right:12px;">04</span>1심부터 대법원까지 무엇이 바뀌었나</a></li>
<li style="margin:0;"><a href="#spact-s5" style="color:inherit; text-decoration:none; display:block; padding:3px 0;"><span style="font-family:'JetBrains Mono',monospace; color:#0071E3; font-size:13px; margin-right:12px;">05</span>지금 법으로 따져도 같을까</a></li>
<li style="margin:0;"><a href="#spact-s6" style="color:inherit; text-decoration:none; display:block; padding:3px 0;"><span style="font-family:'JetBrains Mono',monospace; color:#0071E3; font-size:13px; margin-right:12px;">06</span>전문가들은 어떻게 봤나</a></li>
<li style="margin:0;"><a href="#spact-s7" style="color:inherit; text-decoration:none; display:block; padding:3px 0;"><span style="font-family:'JetBrains Mono',monospace; color:#0071E3; font-size:13px; margin-right:12px;">07</span>보안·컴플라이언스 관점에서 남는 것</a></li>
<li style="margin:0;"><a href="#spact-s8" style="color:inherit; text-decoration:none; display:block; padding:3px 0;"><span style="font-family:'JetBrains Mono',monospace; color:#0071E3; font-size:13px; margin-right:12px;">08</span>판결에 대한 내 생각</a></li>
<li style="margin:0;"><a href="#spact-ref" style="color:inherit; text-decoration:none; display:block; padding:3px 0;"><span style="font-family:'JetBrains Mono',monospace; color:#0071E3; font-size:13px; margin-right:12px;">09</span>참고 자료</a></li>
</ol>
</div>

<h2 id="spact-s1">1. 열람권, 왜 중요한가</h2>

<p>개인정보 열람권은 정보주체가 개인정보처리자에게 내 개인정보와 그 처리 현황을 보여 달라고 요구할 수 있는 권리다. 지금은 개인정보 보호법 제35조가 이 권리를 정하고 있다.<sup><a href="#spact-fn10" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[10]</a></sup></p>

<p>열람권은 다른 권리의 출발점이다. 내 정보가 누구에게 넘어갔는지 알아야 정정이나 삭제, 손해배상도 요구할 수 있다. 그런데 상대가 해외 기업이고, 그 기업의 본국 법이 수사기관에 정보를 준 사실을 밝히지 말라고 요구한다면 어떻게 될까. 이 글은 그 질문에 답한 대법원 판결을 정리한다.</p>

<h2 id="spact-s2">2. 사건은 어떻게 시작됐나</h2>

<p>원고는 국내 이용자 6명이다. 원고 1, 2, 5, 6은 지메일 등 구글 서비스에 가입한 개인 이용자이고, 원고 3, 4는 구글의 기업 메일 서비스를 쓰던 이용자다.<sup><a href="#spact-fn3" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[3]</a></sup> 피고는 구글 본사(구글 엘엘씨)와 구글코리아다.</p>

<p>원고들은 2014년 2월 17일 두 회사에 자신들의 개인정보와 서비스 이용내역을 제3자에게 제공한 현황을 알려 달라고 요청했다. 구글코리아는 답하지 않았다. 구글 본사는 법률에 따라서만 정부기관에 정보를 제공하며, 특정 이용자가 요청 대상이 됐는지는 밝히지 않는다고 회신했다.<sup><a href="#spact-fn4" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[4]</a></sup> 원고들은 5월 20일 다시 요청했지만 구체적인 내역은 받지 못했다. 결국 제공 현황 공개와 1인당 50만 원의 위자료를 청구하는 소송을 냈다.<sup><a href="#spact-fn3" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[3]</a></sup></p>

<div style="overflow-x:auto;">
<table style="width:100%; border-collapse:collapse; font-size:14px; margin:12px 0 24px;">
<thead><tr>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px; white-space:nowrap;">시기</th>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">경과</th>
</tr></thead>
<tbody>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; white-space:nowrap; font-family:'JetBrains Mono',monospace; font-size:13px; color:#0047AB;">2014. 2. 17.</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">제3자 제공 현황 공개 요청. 구글코리아는 무응답, 구글 본사는 원칙적인 답변만 회신</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; white-space:nowrap; font-family:'JetBrains Mono',monospace; font-size:13px; color:#0047AB;">2014. 5. 20.</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">재요청. 구체적인 내역은 받지 못함</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; white-space:nowrap; font-family:'JetBrains Mono',monospace; font-size:13px; color:#0047AB;">2014.</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">서울중앙지방법원에 소 제기(2014가합38116)</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; white-space:nowrap; font-family:'JetBrains Mono',monospace; font-size:13px; color:#0047AB;">2015. 10. 16.</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">1심 판결</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; white-space:nowrap; font-family:'JetBrains Mono',monospace; font-size:13px; color:#0047AB;">2017. 2. 16.</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">원심(서울고등법원) 판결</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; white-space:nowrap; font-family:'JetBrains Mono',monospace; font-size:13px; color:#0047AB;">2023. 4. 13.</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">대법원 일부 파기환송</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; white-space:nowrap; font-family:'JetBrains Mono',monospace; font-size:13px; color:#0047AB;">2025. 6. 2.</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">환송심에서 임의조정으로 종결</td></tr>
</tbody>
</table>
</div>

<h3>문제가 된 '개인정보'는 무엇인가</h3>

<p>이 사건에서 다툰 것은 개인정보 자체가 아니라 그 처리 현황, 즉 "누구에게 넘겼는가"다. 원고들이 근거로 삼은 조항은 구 정보통신망법 제30조다. 제2항은 이용자가 자기 개인정보를 제3자에게 제공한 현황의 열람이나 제공을 요구할 수 있게 하고, 제4항은 요구를 받은 사업자가 지체 없이 필요한 조치를 하도록 한다.<sup><a href="#spact-fn10" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[10]</a></sup></p>

<p>대법원은 이 법의 개인정보에 다른 정보와 쉽게 결합해 개인을 알아볼 수 있는 정보도 포함된다고 봤다(판결문 12쪽).<sup><a href="#spact-fn1" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[1]</a></sup> 그러니 이 사건은 유출 사고가 아니라, 열람권 행사를 거부당한 사건이다.</p>

<h2 id="spact-s3">3. 쟁점별 양측 주장과 법원의 판단</h2>

<p>대법원이 결론을 바꾼 쟁점은 열람 거절의 '정당한 사유' 하나다. 나머지 쟁점에서는 원심 판단을 유지하면서 법리를 정리했다.</p>

<div style="overflow-x:auto;">
<table style="width:100%; border-collapse:collapse; font-size:14px; margin:12px 0 24px; min-width:560px;">
<thead><tr>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">쟁점</th>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">원고</th>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">구글</th>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">대법원</th>
</tr></thead>
<tbody>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">관할</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">한국 법원에 제소</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">약관상 미국 캘리포니아주 법원 전속관할</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">개인 이용자는 한국 법원에 제소 가능, 기업 메일 이용자는 부적법</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">준거법</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">정보통신망법 적용</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">약관상 캘리포니아주법 적용</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">소비자 거주국의 강행규정은 배제되지 않음</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;"><strong>정당한 사유</strong></td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">제3자 제공 현황 공개</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">미국 법상 비공개의무</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;"><strong>외국 법의 존재만으로는 부족, 세 가지 기준으로 판단(원심 파기)</strong></td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">구글코리아</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">구글 본사와 함께 공개</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">공개 의무 없음</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">위치정보 서비스 제공자로서 보유 범위에서 공개 의무 있음</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">위자료</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">1인당 50만 원</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">배상 책임 없음</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">구글코리아 부분 불인정, 구글 본사 부분은 함께 파기</td></tr>
</tbody>
</table>
</div>

<h3>관할: 한국 법원에서 다툴 수 있나</h3>

<p>구글은 약관상 모든 소송은 미국 캘리포니아주 샌타클래라 카운티 법원이 전속 관할을 가진다고 주장했다.<sup><a href="#spact-fn4" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[4]</a></sup> 대법원은 개인 이용자인 원고 1·2의 이용계약을 소비자계약으로 봤다. 구글이 한국을 겨냥해 광고 등 영업활동을 했고, 원고들이 국내에서 가입했기 때문이다.</p>

<p>무료 서비스라는 점도 문제가 되지 않았다. 판결은 소비자가 "계약상 상대방에게 직접 지급하는 사용료 등 대가가 없다고 하더라도" 사업자가 소비자 정보로 수익을 얻는다면 소비자계약에서 쉽게 빠지지 않는다고 했다(판결문 5쪽). 분쟁 전에 맺은 전속 관할합의는 소비자계약에서 효력이 없으므로, 원고 1·2는 한국 법원에 소송을 낼 수 있다. 반면 기업 메일을 쓴 원고 3·4는 관할합의가 그대로 적용돼 소가 부적법하다고 봤다.</p>

<h3>준거법: 캘리포니아주법이 적용되나</h3>

<p>구글은 약관상 준거법이 캘리포니아주법이라 정보통신망법이 적용되지 않고, 적용되더라도 미국 법상 비공개 대상은 공개하지 않아도 된다고 주장했다.<sup><a href="#spact-fn7" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[7]</a></sup> 대법원은 외국법을 준거법으로 정해도 소비자가 사는 나라의 강행규정이 주는 보호는 빼앗을 수 없다고 봤다. 구 정보통신망법 제30조 제2항·제4항에 대해서는 "위 규정들은 강행규정에 해당한다고 봄이 타당하다."라고 판단했다(판결문 7쪽).</p>

<h3>핵심 쟁점: 미국 법은 '정당한 사유'인가</h3>

<p>원심은 18 U.S.C. § 2709(c)(1)과 50 U.S.C. § 1861(d)에 따라 비공개의무가 있는 사항은 공개할 의무가 없다고 봤다. 대법원은 이 판단을 네 단계로 다시 짰다.</p>

<p><strong style="color:#0047AB;">① 열람권에도 한계는 있다.</strong> 열람권은 헌법상 개인정보자기결정권을 구체화한 권리지만, 헌법 제37조 제2항에 따라 제한될 수 있다. 판결은 사업자가 "정당한 사유가 있을 때는 이용자에게 그 사유를 알리고 열람․제공을 제한하거나 거절할 수 있다."라고 했다(판결문 9쪽).</p>

<p><strong style="color:#0047AB;">② 외국 법령도 고려할 수는 있다.</strong> 판결이 든 이유는 다음과 같다.</p>

<blockquote style="border:0; border-left:3px solid #0071E3; margin:16px 0 22px; padding:12px 18px; font-size:15px; background:rgba(0,113,227,.05); color:#10182B; border-radius:0 8px 8px 0;"><span style="display:block; font-family:'JetBrains Mono',monospace; font-size:12px; color:#0071E3; margin-bottom:6px;">// 대법원 2017다219232 판결</span>
외국 법령에서 비공개의무를 부여한 경우에까지 해당 정보를 열람․제공하도록 강제하는 것은 정보통신서비스 제공자등에게 모순된 행위를 강요하는 것이어서 가혹한 측면이 있고, 특히 그와 같은 사항이 국가안보, 범죄수사 등을 위한 활동에 관한 것인 경우에는 그 정보의 공개로 해당 국가의 이익을 해칠 우려가 있어 국제예양에 비추어 보더라도 바람직하다고 볼 수 없기 때문이다.<sup><a href="#spact-fn2" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[2]</a></sup>
</blockquote>

<p><strong style="color:#0047AB;">③ 하지만 외국 법이 '있다'는 것만으로는 부족하다.</strong> 판결은 "그와 같은 내용의 외국 법령이 존재한다는 사정만으로 곧바로 정당한 사유가 존재한다고 볼 수는 없지만" 판단에 고려할 수는 있다고 했다(판결문 9쪽). 그리고 다음 세 가지를 함께 따지도록 했다(판결문 10쪽).</p>

<ol style="padding-left:22px;">
<li>그 외국 법령의 비공개의무가 대한민국 헌법·법률의 내용과 취지에 맞는가</li>
<li>"개인정보를 보호할 필요성에 비해 그 외국 법령을 존중해야 할 필요성이 현저히 우월한지"</li>
<li>이용자가 요구한 정보에 비공개 요건이 실제로 충족돼, 사업자가 "실질적으로 비공개의무를 부담하고 있는지"</li>
</ol>

<p><strong style="color:#0047AB;">④ 거절해도 할 일이 남는다.</strong> 사업자는 "그 항목을 구체적으로 특정하여 제한․거절사유를 통지해야" 한다. 수사 목적이 끝나는 등 방해가 사라지면 제공 사실도 열람·제공해야 한다(판결문 10쪽).</p>

<p>원심은 이 가운데 어느 것도 따지지 않았다. 대법원은 "그와 같은 원심의 판단에는 구 정보통신망법 제30조 제2항, 제4항에 관한 법리를 오해하여 필요한 심리를 다하지 않은 잘못이 있다."라며 이 부분을 파기했다(판결문 12쪽).</p>

<h3>구글코리아와 위자료</h3>

<p>1심은 구글코리아를 서비스 운영의 보조적 주체로 보고 청구를 기각했다. 원심은 구글코리아가 위치정보를 수집해 위치기반서비스 사업을 한다는 점을 들어 공개 의무를 인정했고,<sup><a href="#spact-fn5" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[5]</a></sup> 대법원도 이를 유지했다(판결문 12쪽). 위자료는 구글코리아에 대해서는 인정되지 않았고, 구글 본사에 대한 위자료 청구는 열람 청구 부분과 함께 파기됐다.</p>

<h2 id="spact-s4">4. 1심부터 대법원까지 무엇이 바뀌었나</h2>

<div style="overflow-x:auto;">
<table style="width:100%; border-collapse:collapse; font-size:14px; margin:12px 0 24px; min-width:560px;">
<thead><tr>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">쟁점</th>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">1심(2015)</th>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">원심(2017)</th>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">대법원(2023)</th>
</tr></thead>
<tbody>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">기업 메일 이용자(원고 3·4)의 관할</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">구글 본사에 대한 소 각하</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">관할합의 유효, 소 부적법</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">유지</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">개인 이용자의 관할·준거법</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">국내 관할 인정, 정보통신망법 적용</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">같음</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">같음(법리 정립)</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;"><strong>미국 법상 비공개 사항</strong></td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">공개 대상에서 제외</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">공개 대상에서 제외</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;"><strong>존재만으로는 제외 불가, 원심 파기</strong></td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;"><strong>구글코리아의 공개 의무</strong></td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">부정</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;"><strong>인정</strong></td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">유지</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">위자료</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">불인정</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">불인정</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">구글코리아 부분 유지, 구글 본사 부분은 함께 파기</td></tr>
</tbody>
</table>
</div>

<p>결론이 바뀐 지점은 두 곳이다. 첫째, 원심에서 구글코리아의 지위가 달라졌다. 계약 당사자가 누구인지보다 실제로 정보를 수집하는지를 기준으로 본 것이다. 둘째, 대법원에서 '정당한 사유' 판단이 달라졌다. 1심과 원심은 미국 법상 비공개 사항을 공개 대상에서 그냥 뺐지만,<sup><a href="#spact-fn3" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[3]</a></sup> 대법원은 그 법의 요건이 이 정보에 실제로 충족되는지를 따지라고 했다.</p>

<h3>환송 이후: 판결이 아닌 조정으로 끝났다</h3>

<p>사건은 서울고등법원으로 돌아갔지만 판결은 나오지 않았다. 원고들과 구글은 2025년 6월 2일 임의조정에 동의했다. 구글은 미국 법령상 비공개 대상을 제외하고 원고들의 제3자 제공 내역 열람 의무를 이행하고, 열람 신청 페이지를 한국어로 제공하기로 했다. 원고들은 비공개의무 때문에 정보기관 제공 여부는 제한적으로만 확인할 수 있었다고 밝혔다.<sup><a href="#spact-fn6" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[6]</a></sup> 2014년 소송을 낸 지 약 11년 만이다.</p>

<h2 id="spact-s5">5. 지금 법으로 따져도 같을까</h2>

<div style="overflow-x:auto;">
<table style="width:100%; border-collapse:collapse; font-size:14px; margin:12px 0 24px; min-width:520px;">
<thead><tr>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">쟁점</th>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">판결 당시 근거</th>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">현행 근거</th>
<th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">결론</th>
</tr></thead>
<tbody>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">관할</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">구 국제사법 제27조 제4항</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">국제사법 제42조</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">유지</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">준거법</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">구 국제사법 제27조 제1항</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">국제사법 제47조</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">유지</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">열람 대상</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">구 정보통신망법 제30조 제2항</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">개인정보 보호법 제35조, 시행령 제41조 제1항 제4호</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">유지</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">거절 사유</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">'정당한 사유'(판례 해석)</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">개인정보 보호법 제35조 제4항 각 호(열거)</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">유지 가능성 높음</td></tr>
</tbody>
</table>
</div>

<p>관할과 준거법은 결론이 그대로다. 2022년 전부개정된 국제사법은 옛 제27조를 관할(제42조)과 준거법(제47조)으로 나눴는데, 소비자를 보호하는 내용은 유지됐다.<sup><a href="#spact-fn10" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[10]</a></sup></p>

<p>열람 대상도 같다. 구 정보통신망법 제30조는 2020년 개인정보 보호법의 특례 조항(제39조의7)으로 옮겨졌다. 2023년 3월 개정으로 특례가 없어지면서 일반 열람 제도로 합쳐졌다.<sup><a href="#spact-fn7" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[7]</a></sup> 현행 시행령 제41조 제1항 제4호는 열람 요구 사항으로 '개인정보의 제3자 제공 현황'을 명시한다.<sup><a href="#spact-fn10" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[10]</a></sup></p>

<p>남는 것은 거절 사유다. 현행법 제35조 제4항은 거절할 수 있는 경우를 열거한다. 법률에 따라 열람이 금지·제한되는 경우(제1호), 다른 사람의 생명·신체를 해하거나 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우(제2호) 등이다.<sup><a href="#spact-fn10" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[10]</a></sup> 법무법인 린은 판결이 말한 정당한 사유가 이 조항의 내용과 같다고 보고, 판결의 법리가 현행법에도 그대로 적용될 수 있다고 본다.<sup><a href="#spact-fn7" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[7]</a></sup></p>

<p>하나 더 따져 볼 지점이 있다. 제1호의 '법률'을 대한민국 법률로 읽으면, 미국 법상 비공개의무는 제1호에 바로 들어가지 않는다. 그렇다면 사업자는 제2호를 근거로 삼아야 하므로, 외국 법만으로 거절하기는 오히려 쉽지 않다. 판결의 결론은 지금 기준으로도 유지될 가능성이 높다.</p>

<h2 id="spact-s6">6. 전문가들은 어떻게 봤나</h2>

<p>세 해설은 판결의 결론을 비판하지 않으며, 각자 다른 지점에 주목한다.</p>

<p><strong>김갑유(국제거래법)</strong>는 기업 메일 이용자와 개인 이용자를 나누고 '수동적 소비자'에게만 소비자계약 특칙을 적용한 판단이 적절하다고 본다. 소비자가 준거법을 선택하더라도 거주국 강행규정의 보호를 빼앗을 수 없다는 점을 처음 밝힌 판결로 평가하고, 정당한 사유의 구체적인 판단 기준을 제시한 점에도 의미를 둔다.<sup><a href="#spact-fn8" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[8]</a></sup></p>

<p><strong>이규호(IT법)</strong>는 구 정보통신망법 제30조 제2항·제4항을 헌법상 개인정보자기결정권을 구체화한 강행규정으로 보되, 국제적 강행규정은 아니라고 설명한다. 대법원이 국제사법 영역에 국제예양 원칙을 반영했다는 점도 짚는다.<sup><a href="#spact-fn9" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[9]</a></sup></p>

<p><strong>법무법인 린(실무)</strong>은 해외에 서버를 두고 관할과 준거법을 외국으로 정하더라도 한국 개인정보 보호법을 피하는 효과는 크지 않다고 본다. 사업자는 열람 요구에 응답할 조직적·절차적 체계를 갖추고 이를 약관과 처리방침에 반영해야 하며, 비공개 사유가 사라지면 열람을 계속 거절해서는 안 된다고 정리한다.<sup><a href="#spact-fn7" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[7]</a></sup></p>

<p>두 판례분석은 판결의 한계를 따로 지적하지 않는다. 한계에 대한 생각은 마지막 절에서 정리한다.</p>

<h2 id="spact-s7">7. 보안·컴플라이언스 관점에서 남는 것</h2>

<p>판결과 해설이 사업자에게 요구하는 것을 정리하면 다음과 같다.</p>

<ul style="padding-left:22px;">
<li>관할과 준거법을 해외로 정한 약관만으로는 한국 개인정보 보호법을 피할 수 없다.<sup><a href="#spact-fn7" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[7]</a></sup></li>
<li>열람 요구에 응답할 조직적·절차적 체계를 갖추고, 약관과 처리방침에 반영해야 한다.<sup><a href="#spact-fn7" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[7]</a></sup></li>
<li>외국 법을 이유로 거절할 때는 항목을 특정해 사유를 알려야 한다(판결문 10쪽).</li>
<li>비공개 사유가 사라지면 다시 공개해야 하므로, 그 시점을 관리할 수 있어야 한다(판결문 10쪽).</li>
</ul>

<h3>내가 보안 담당자라면</h3>

<p>내가 이런 회사의 개인정보·보안 담당자라면, 정보를 넘길 때마다 미리 분류해 두는 것부터 하겠다. 분류할 대상은 데이터 자체가 아니라 '제공 이력'이다. 이용자가 요구하는 것은 내 데이터가 아니라, 그 데이터를 누구에게 넘겼느냐이기 때문이다.</p>

<div style="overflow-x:auto;">
<table style="width:100%; border-collapse:collapse; font-size:14px; margin:12px 0 20px; min-width:520px;">
<thead><tr><th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">분류 (제공할 때마다 표시)</th><th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">예</th><th style="border:1px solid rgba(0,113,227,.18); padding:9px 12px; background:rgba(0,113,227,.08); color:#10182B; text-align:left; font-size:14px;">열람 요청이 오면</th></tr></thead>
<tbody>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">A. 일반 제3자 제공</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">광고·협력사 등에 제공</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">열람 제공</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">B. 수사기관 제공, 비공개 명령 없음</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">일반적인 수사 협조</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">열람 제공</td></tr>
<tr><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">C. 수사기관 제공, 비공개 명령 있음</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">비공개 의무가 붙은 요청</td><td style="border:1px solid rgba(0,113,227,.18); padding:9px 12px;">세 기준을 검토해 거절할 때도 항목과 사유를 특정해 알리고, 사유가 사라지면 공개</td></tr>
</tbody>
</table>
</div>

<p>제공할 때마다 제공일, 받은 곳, 넘긴 항목, 근거 법령, 비공개 여부와 그 근거, 비공개 기한을 대장에 남긴다. 그래야 열람 요청이 들어왔을 때 공개할 항목과 거절할 항목을 바로 가를 수 있다. 거절하는 항목도 무엇을 왜 거절하는지 특정해서 알릴 수 있다.</p>

<p>비공개 기한도 관리해야 한다. 명령의 유효기간이 끝나거나, 수사가 종결되거나, 기소가 이뤄지면 비공개 사유가 사라졌는지 다시 확인한다. 회사는 수사가 끝났다는 사실을 통보받지 못할 수도 있다. 그래서 기한이 정해지지 않은 건은 정기적으로 다시 검토하는 절차를 둔다.</p>

<p>마지막으로, 이 대장 자체가 가장 민감한 정보라는 점을 잊으면 안 된다. 접근 권한을 꼭 필요한 사람에게만 주고, 누가 언제 열어 보고 고쳤는지 감사 로그로 남긴다. 열람권을 지키려고 만든 기록이 또 다른 유출 경로가 되어서는 안 되기 때문이다.</p>

<h2 id="spact-s8">8. 판결에 대한 내 생각</h2>

<h3>나는 이 판결에 동의한다</h3>

<p>나는 이 판결에 동의한다. 한국 법원에는 한국에 살며 한국에서 서비스를 쓰는 이용자의 권리를 지킬 의무가 있고, 대법원은 외국 법령 앞에서도 그 의무를 지켰다고 보기 때문이다. 그렇다고 대법원이 미국 법을 무시한 것은 아니다. 미국 법을 고려하되, 판단의 잣대를 한국 헌법에 두었다는 점이 이 판결의 핵심이다.</p>

<h3>왜 그렇게 생각하는가</h3>

<p>먼저 법원에는 이 권리를 지킬 의무가 있다. 헌법 제10조는 "국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다"고 정한다. 대법원도 열람권을 헌법상 개인정보자기결정권을 구체화한 권리로 봤다(판결문 8쪽). 그렇다면 법원은 이 권리가 외국 법령 한 줄로 사라지지 않게 지켜야 한다. 이 보호는 약관으로도 뺄 수 없다. 대법원은 약관에 캘리포니아주법을 적용한다고 써 있어도 소비자가 사는 나라의 강행규정이 주는 보호는 빼앗을 수 없다고 했고, 김갑유는 이 점을 처음 밝힌 판결로 평가했다.<sup><a href="#spact-fn8" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[8]</a></sup></p>

<p>대법원은 이 의무를 실제로 지킬 장치도 만들었다. 외국 법령의 비공개의무가 한국 헌법과 법률의 취지에 맞는지, 이용자가 요구한 정보에 그 의무가 실제로 적용되는지를 따지게 했다. 거절하더라도 어떤 항목을 왜 거절하는지 특정해 알리고, 사유가 사라지면 공개하게 했다(판결문 10쪽). 구글이 "미국 법상 비밀"이라고 말하더라도, 이제는 법원이 그 주장이 맞는지 확인할 수 있게 된 것이다.</p>

<p>1심과 2심은 달랐다. 미국 법령상 비공개 대상이면 공개 대상에서 그냥 뺐다. 판단을 사실상 미국 법에 넘긴 셈이다.</p>

<p>물론 반론도 있다. 한국 법을 따르면 미국 법을, 미국 법을 따르면 한국 법을 어기게 되니 사업자에게 가혹하다는 것이다. 판결문도 이 점을 인정했다. 그래도 나는 세 가지 이유로 이 부담이 받아들일 만하다고 본다.</p>

<ol style="padding-left:22px;">
<li><strong>대법원은 미국 법을 무시하지 않았다.</strong> 기준을 충족하면 거절도 허용했다.</li>
<li><strong>부담은 좁고 일시적이다.</strong> 미국 법의 비공개 조항이 막으려는 것은 수사 대상자가 조사 사실을 알게 되는 상황이다. 그러니 실제로 그 의무가 붙은 항목만, 사유가 사라질 때까지만 거절하면 된다.</li>
<li><strong>남는 부담은 사업자가 지는 것이 맞다.</strong> 한국을 겨냥해 영업하고 수익을 내기로 한 것은 회사의 선택이다. 이용자는 무료로 서비스를 쓰는 대신 자기 정보를 내주었고, 그 정보로 수익을 얻는 쪽은 사업자다. 대법원도 이용자가 "직접 지급하는 사용료 등 대가가 없다고 하더라도" 소비자계약이라고 봤다(판결문 5쪽).</li>
</ol>

<h3>앞으로 어떻게 바뀌어야 하는가</h3>

<p>대법원의 법리는 이용자 편이었다. 하지만 결과까지 이용자 편이었다고 말하기는 어렵다. 조정에서 원고들은 정보기관 제공 여부를 제한적으로만 확인할 수 있었다고 밝혔다.<sup><a href="#spact-fn6" style="color:#0071E3; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.8em; font-weight:600;">[6]</a></sup> 법리와 결과 사이의 이 거리를 줄여야 한다.</p>

<p><strong>첫째, 기준을 법에 명시해야 한다.</strong> 이 사건은 2014년 소를 낸 뒤 2025년 조정으로 끝나기까지 약 11년이 걸렸다. 판례에 기대는 동안 시간과 비용을 버티기 어려운 쪽은 개인 이용자다. 지금 개인정보 보호법 제35조 제4항은 거절 사유를 열거하지만, 외국 법령에 관한 사유는 따로 없다. 판결이 세운 세 기준과 거절할 때의 통지, 사유가 사라진 뒤의 공개를 조문으로 옮기면 분쟁 자체가 줄고, 재판까지 가지 않아도 해결될 여지가 커진다.</p>

<p><strong>둘째, 기업이 먼저 준비해야 한다.</strong> 이 판결은 해외 기업뿐 아니라 국내 기업에게도 데이터 공개 기준을 세밀하게 세워 두라는 교훈을 남겼다. 앞에서 말한 제공 이력 분류와 통지·재검토 절차가 있다면, 이용자는 적어도 어떤 부분이 거절됐고 언제 다시 확인할 수 있는지는 알 수 있다.</p>

<p>마지막으로 이 판결은 이용자에게도 한 가지를 알려 준다. 내 정보가 넘어갔다는 사실조차, 수사 같은 정당한 사유가 있으면 일정 기간 알 수 없을 수 있다는 것이다. 다만 그 제한은 좁고 일시적이어야 하고, 그 범위를 정하는 잣대는 한국 헌법이어야 한다. 이것이 이 판결이 남긴 가장 중요한 원칙이라고 생각한다.</p>

<div style="border-top:1px dashed rgba(0,113,227,.25); margin:40px 0 8px;"></div>
<h2 id="spact-ref">참고 자료</h2>

<ol style="padding-left:22px; font-size:14px; color:#5B6577;">
<li id="spact-fn1">대법원 2023. 4. 13. 선고 2017다219232 판결. <a href="https://www.scourt.go.kr/sjudge/1682031287628_075447.pdf" target="_blank" rel="noopener" style="color:#0047AB; text-decoration:none; font-weight:600;">원문 PDF ↗</a></li>
<li id="spact-fn2">법원도서관, 「대법원 2023. 4. 13. 선고 중요판결 요지」. <a href="https://scourt.go.kr/supreme/news/NewsViewAction2.work?gubun=4&amp;searchOption=&amp;searchWord=&amp;seqnum=9141" target="_blank" rel="noopener" style="color:#0047AB; text-decoration:none; font-weight:600;">바로가기 ↗</a></li>
<li id="spact-fn3">서울중앙지방법원 2015. 10. 16. 선고 2014가합38116 판결.</li>
<li id="spact-fn4">이준호, 「대법 "구글, 이용자 정보 제공 내역 공개해야"…시민단체 "환영"(종합)」, 『뉴시스』, 2023. 4. 13. <a href="https://www.newsis.com/view/NISX20230413_0002265599" target="_blank" rel="noopener" style="color:#0047AB; text-decoration:none; font-weight:600;">바로가기 ↗</a></li>
<li id="spact-fn5">김신영, 「[종합] 대법 "구글, 국내 이용자 정보 제공 내역 공개해야"」, 『뉴스핌』, 2023. 4. 13. <a href="https://newspim.com/news/view/20230413000562" target="_blank" rel="noopener" style="color:#0047AB; text-decoration:none; font-weight:600;">바로가기 ↗</a></li>
<li id="spact-fn6">경제정의실천시민연합, 「[취재협조요청] 구글 개인정보 열람권 소송 종결 기자간담회 개최」, 2025. 6. <a href="https://ccej.or.kr/posts/o7tnbPJ" target="_blank" rel="noopener" style="color:#0047AB; text-decoration:none; font-weight:600;">바로가기 ↗</a></li>
<li id="spact-fn7">법무법인 린, 「약관상 준거법에 의한 개인정보에 관한 권리 제한의 정당성」, 2023. 6. 2. <a href="https://www.law-lin.com/news/news_sub01_view.html?s_grp=&amp;idx=346" target="_blank" rel="noopener" style="color:#0047AB; text-decoration:none; font-weight:600;">바로가기 ↗</a></li>
<li id="spact-fn8">김갑유, 「[2023년 분야별 중요판례분석] (21) 국제거래법」, 『법률신문』, 2024. 8. 14. <a href="http://www.lawtimes.co.kr/news/articleView.html?idxno=200525" target="_blank" rel="noopener" style="color:#0047AB; text-decoration:none; font-weight:600;">바로가기 ↗</a></li>
<li id="spact-fn9">이규호, 「[2023년 분야별 중요판례분석] (24) IT법」, 『법률신문』, 2024. 8. 31. <a href="http://www.lawtimes.co.kr/news/articleView.html?idxno=200987" target="_blank" rel="noopener" style="color:#0047AB; text-decoration:none; font-weight:600;">바로가기 ↗</a></li>
<li id="spact-fn10">국가법령정보센터: 「개인정보 보호법」·같은 법 시행령, 「국제사법」, 구 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」. <a href="https://www.law.go.kr" target="_blank" rel="noopener" style="color:#0047AB; text-decoration:none; font-weight:600;">바로가기 ↗</a></li>
</ol>

</div>
{% endraw %}
