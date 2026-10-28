# LaonCode 글 작성 안내

새 글은 **Markdown 파일 하나**로 작성합니다. `layout: post`가 현재 블로그의 프로필, 사이드바, 배너, 글꼴, 다크 모드, 코드 영역을 자동으로 적용합니다. 글마다 HTML·CSS를 복사할 필요가 없습니다.

## 1. 가장 간단한 방법: 템플릿 복사

1. 이 저장소의 `templates/post.md`를 열고 원본 내용을 복사합니다.
2. `_posts` 폴더에 `YYYY-MM-DD-영문주소.md` 파일을 만듭니다. 예: `2026-10-28-python-study-01.md`.
3. 복사한 내용을 붙여 넣고 맨 위 설정과 본문을 수정합니다.
4. 완성되면 `published: false`를 `published: true`로 바꿉니다.
5. GitHub Desktop에서 변경 내용을 확인하고 요약을 입력한 뒤 **Commit to main → Push origin**을 누릅니다.
6. 저장소의 Actions에서 배포가 성공하면 [블로그](https://laoncode.github.io/)에 반영됩니다. 즉시 보이지 않으면 잠시 뒤 새로고침하세요.

파일을 편집할 프로그램이 없다면 GitHub 웹에서도 가능합니다. `_posts` 폴더에서 **Add file → Create new file**을 선택하고 파일명·내용을 입력한 후 **Commit changes**로 저장합니다. 파일 생성 버튼이 보이지 않으면 GitHub에 로그인했는지 확인하세요.

## 2. 초안을 자동으로 만드는 방법 (Windows)

저장소 폴더에서 PowerShell 터미널을 열고 실행하세요.

```powershell
powershell -File .\tools\new-post.ps1
```

제목, 주소에 쓸 영문 이름, 분류 번호를 차례로 입력하면 오늘 날짜의 글 파일과 이미지 폴더가 만들어집니다. 예를 들어 영문 이름에 `python-study-01`을 입력하면 다음과 같습니다.

- 글: `_posts/오늘날짜-python-study-01.md`
- 이미지 폴더: `assets/images/posts/python-study-01/`
- 게시 후 주소: `https://laoncode.github.io/entry/python-study-01/`

한 줄로 지정할 수도 있습니다.

```powershell
.\tools\new-post.ps1 -Title 'Python 공부 1일차' -Slug 'python-study-01' -Category '개발' -Tags 'Python','공부'
```

생성한 파일을 편집기로 열어 예시 본문을 바꾸세요. 스크립트 실행이 컴퓨터 정책에 의해 차단되면 1번의 템플릿 복사 방법을 사용해도 결과는 같습니다.

## 3. 글 상단 설정

```yaml
---
layout: post
title: "Python 공부 1일차"
date: 2026-10-28 12:00:00 +09:00
categories: ["개발"]
tags: ["Python", "공부"]
permalink: "/entry/python-study-01/"
image: "/assets/images/posts/python-study-01/cover.png"
published: true
---
```

| 항목 | 작성 방법 |
| --- | --- |
| `layout` | `post`를 유지하면 기존 디자인이 적용됩니다. |
| `title` | 화면에 표시할 제목입니다. 큰따옴표를 제목 안에 쓸 때는 `\"`로 적습니다. |
| `date` | 실제 작성 날짜·시간, 한국 시간은 `+09:00`입니다. 파일명 날짜도 맞춰주세요. 미래 날짜의 글은 기본적으로 배포되지 않습니다. 시간이 지나도 새 배포가 필요합니다. |
| `categories` | 아래 분류 중 하나를 정확히 적으세요. 기존 분류 이름을 직접 적어도 됩니다. |
| `tags` | 검색용 키워드입니다. 없으면 `[]`로 둡니다. |
| `permalink` | 글의 고유 주소입니다. 다른 글과 겹치지 않게 정하고, 게시 후에는 가급적 유지하세요. |
| `image` | 대표 이미지 경로입니다. 없으면 `""`로 둡니다. |
| `published` | 초안은 `false`, 게시할 때는 `true`입니다. |

사용할 수 있는 주요 분류:

- 개발
- CTF/Wargame
- Bug Bounty
- 블로그/기술문서
- 논문/컨퍼런스
- 공모전/자격증

분류를 지정하면 해당 분류 목록과 홈의 분류 버튼에 자동으로 연결됩니다. 최근글·검색·태그 목록도 배포할 때 자동 갱신됩니다.

`published: false`는 블로그 화면에서만 숨깁니다. 공개 GitHub 저장소에 올린 초안 원본은 누구나 볼 수 있으므로 비공개 메모는 업로드하지 마세요.

## 4. 본문 작성

설정 아래에서 첫 문단에 글 소개를 적으세요. 목록의 요약문에도 활용됩니다. 글 제목은 자동 표시되므로 본문 소제목은 `##`부터 시작하면 됩니다.

````markdown
오늘 공부한 내용을 정리합니다.

## 핵심 내용

**굵게**, *기울임*, [참고 링크](https://github.com/LaonCode)

- 첫 번째 항목
- 두 번째 항목

### 코드 예제

```python
print("Hello, Laon!")
```

> 기억해 둘 내용

| 항목 | 설명 |
| --- | --- |
| 예시 | 내용 |
````

코드 울타리 뒤에 `python`, `javascript`, `bash`, `html`처럼 언어를 적으면 코드 표시를 꾸밀 수 있습니다. 코드에 Liquid 문법인 `{{` 또는 `{%`가 들어 있다면 해당 코드 블록 전체를 `{% raw %}`와 `{% endraw %}`로 감싸서 사이트 템플릿으로 해석되는 것을 막으세요.

## 5. 이미지 넣기

1. 이미지 파일을 `assets/images/posts/글의영문이름/`에 넣습니다. 파일명은 `cover.png`, `result-01.png`처럼 단순하게 권장합니다.
2. 본문에서 아래처럼 사용합니다.

```markdown
![이미지 설명](/assets/images/posts/python-study-01/result-01.png)
```

3. 대표 이미지는 상단 `image`에 같은 방식의 경로를 적습니다.
4. 글 파일과 이미지 파일을 함께 Commit/Push하세요. GitHub 웹에서는 이미지 폴더에서 Add file → Upload files로 먼저 올린 뒤 글을 작성하면 됩니다.

템플릿의 이미지 예시는 `<!-- ... -->` 주석 안에 있으므로 사용하려면 양쪽 주석 표시를 지워야 합니다. 이미지 경로는 대소문자와 확장자까지 실제 파일과 같아야 합니다.

## 6. 게시 후 수정과 문제 확인

- 수정: 기존 글 파일만 편집하고 다시 Commit/Push합니다. `permalink`를 유지하면 기존 링크가 계속 동작합니다.
- 글이 안 보임: `published: true`, 날짜가 미래인지, 파일 위치가 `_posts`인지, 파일명이 `YYYY-MM-DD-이름.md`인지 확인하세요.
- 배포 실패: GitHub 저장소의 Actions에서 실패한 실행을 열어 오류를 확인합니다. 상단 `---` 두 줄, 따옴표, 설정 들여쓰기가 흔한 원인입니다.
- 이미지 안 보임: 이미지도 업로드됐는지, 경로·대소문자·확장자가 일치하는지 확인하세요.
- 현재 디자인 변경은 `_layouts`, `_includes`, `assets/css`에 모여 있습니다. 일반 글 작성 때는 해당 파일을 수정하지 않아도 됩니다.
