if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
(function () {
    var el = document.getElementById('hero-typer');
    if (!el) return;

    // 카테고리 이름 순서/단어는 자유롭게 수정 가능
    var words = ["Hack", "Coding", "Lead", "Pay1oad"];
    var wordIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    var TYPE_SPEED = 120;   // 한 글자 입력 속도
    var DELETE_SPEED = 70;  // 한 글자 삭제 속도
    var PAUSE_FULL = 1400;  // 단어 다 쓰고 멈추는 시간
    var PAUSE_EMPTY = 300;  // 다 지우고 다음 단어 전 멈추는 시간

    function loop() {
      var word = words[wordIndex];

      if (!isDeleting) {
        charIndex++;
        el.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          isDeleting = true;
          setTimeout(loop, PAUSE_FULL);
          return;
        }
        setTimeout(loop, TYPE_SPEED);
      } else {
        charIndex--;
        el.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(loop, PAUSE_EMPTY);
          return;
        }
        setTimeout(loop, DELETE_SPEED);
      }
    }

    loop();
  })();
(function () {
        var linesEl = document.getElementById('hero-terminal-lines');
        if (!linesEl) return;

        var LINE_HEIGHT = 30;       // CSS의 line-height*font-size와 맞춰야 함
        var MAX_VISIBLE_LINES = 13;  // 뷰포트에 보이는 줄 수

        var script = [
  { user: 'root', host: 'SpactCode', path: '~/recon', cmd: [
      { t: 'nmap ', c: 'tk-cmd' },
      { t: '-sV -sC -p- ', c: 'tk-flag' },
      { t: '10.10.14.22', c: 'tk-string' }
    ], out: [
      { line: [{ t: 'PORT   STATE SERVICE VERSION', c: 'tk-comment' }] },
      { line: [{ t: '22/tcp open  ssh     OpenSSH 8.2p1', c: 'tk-success' }] },
      { line: [{ t: '80/tcp open  http    Apache 2.4.41', c: 'tk-success' }] },
      { line: [{ t: 'Nmap done: 1 IP address scanned', c: 'tk-comment' }] }
    ] },
  { user: 'root', host: 'SpactCode', path: '~/recon', cmd: [
      { t: 'gobuster ', c: 'tk-cmd' },
      { t: 'dir -u ', c: 'tk-flag' },
      { t: 'http://10.10.14.22 ', c: 'tk-string' },
      { t: '-w ', c: 'tk-flag' },
      { t: 'common.txt', c: 'tk-string' }
    ], out: [
      { line: [{ t: '/admin      (Status: 301)', c: 'tk-success' }] },
      { line: [{ t: '/uploads    (Status: 200)', c: 'tk-success' }] }
    ] },
  { user: 'root', host: 'SpactCode', path: '~', cmd: [
      { t: 'msfconsole ', c: 'tk-cmd' },
      { t: '-q', c: 'tk-flag' }
    ] },
  { user: 'msf6', host: 'SpactCode', path: 'exploit(...)', cmd: [
      { t: 'use ', c: 'tk-cmd' },
      { t: 'exploit/multi/http/apache_normalize_path_rce', c: 'tk-string' }
    ] },
  { user: 'msf6', host: 'SpactCode', path: 'exploit(...)', cmd: [
      { t: 'set ', c: 'tk-cmd' },
      { t: 'RHOSTS ', c: 'tk-flag' },
      { t: '10.10.14.22', c: 'tk-num' }
    ], out: [
      { line: [{ t: 'RHOSTS => 10.10.14.22', c: 'tk-comment' }] }
    ] },
  { user: 'msf6', host: 'SpactCode', path: 'exploit(...)', cmd: [
      { t: 'set ', c: 'tk-cmd' },
      { t: 'LHOST ', c: 'tk-flag' },
      { t: '10.10.14.5', c: 'tk-num' }
    ], out: [
      { line: [{ t: 'LHOST => 10.10.14.5', c: 'tk-comment' }] }
    ] },
  { user: 'msf6', host: 'SpactCode', path: 'exploit(...)', cmd: [
      { t: 'run', c: 'tk-cmd' }
    ], out: [
      { line: [{ t: '[*] Started reverse TCP handler', c: 'tk-comment' }] },
      { line: [{ t: '[+] Meterpreter session 1 opened', c: 'tk-error' }] }
    ] },
  { user: 'meterpreter', host: '', path: '', cmd: [
      { t: 'sysinfo', c: 'tk-cmd' }
    ], out: [
      { line: [{ t: 'OS: Ubuntu 20.04 (Linux 5.4.0-x86_64)', c: 'tk-comment' }] }
    ] },
  { user: 'root', host: 'SpactCode', path: '~/myTool', cmd: [
      { t: 'git ', c: 'tk-cmd' },
      { t: 'commit ', c: 'tk-arg' },
      { t: '-m ', c: 'tk-flag' },
      { t: '"지금 이 순간이 선물이다."', c: 'tk-string' }
    ] }
];

        var idx = 0;

        function makeSpan(cls, text) {
          var span = document.createElement('span');
          if (cls) span.className = cls;
          span.textContent = text || '';
          return span;
        }

        function buildPromptLine(entry) {
          var line = document.createElement('div');
          line.className = 'hero-terminal-line';

          if (!entry.host) {
            // meterpreter처럼 단순 프롬프트인 경우
            line.appendChild(makeSpan('tk-user', entry.user));
            line.appendChild(makeSpan('tk-prompt-frame', ' > '));
            return line;
          }

          line.appendChild(makeSpan('tk-prompt-frame', '┌─('));
          line.appendChild(makeSpan('tk-user', entry.user));
          line.appendChild(makeSpan('tk-symbol', '@'));
          line.appendChild(makeSpan('tk-host', entry.host));
          line.appendChild(makeSpan('tk-prompt-frame', ')-['));
          line.appendChild(makeSpan('tk-path', entry.path));
          line.appendChild(makeSpan('tk-prompt-frame', ']'));
          return line;
        }

        function scrollIfNeeded() {
          if (linesEl.children.length <= MAX_VISIBLE_LINES) return;
          var toRemove = linesEl.firstElementChild;
          linesEl.style.transition = 'transform .35s ease';
          linesEl.style.transform = 'translateY(-' + LINE_HEIGHT + 'px)';
          setTimeout(function () {
            linesEl.style.transition = 'none';
            linesEl.style.transform = 'translateY(0)';
            if (toRemove && toRemove.parentNode) toRemove.parentNode.removeChild(toRemove);
          }, 360);
        }

        function typeCmdLine(entry, cb) {
          var line = document.createElement('div');
          line.className = 'hero-terminal-line';
          line.appendChild(makeSpan('tk-symbol', '# '));
          var textSpan = document.createElement('span');
          line.appendChild(textSpan);
          var cursor = makeSpan('hero-terminal-cursor', '');
          line.appendChild(cursor);
          linesEl.appendChild(line);
          scrollIfNeeded();

          var chars = [];
          entry.cmd.forEach(function (tok) {
            for (var i = 0; i < tok.t.length; i++) chars.push({ ch: tok.t[i], c: tok.c });
          });

          var i = 0, currentSpan = null, currentClass = null;

          function step() {
            if (i >= chars.length) {
              cursor.remove();
              if (entry.out) {
                entry.out.forEach(function (outEntry) {
                  var outLine = document.createElement('div');
                  outLine.className = 'hero-terminal-line';
                  outEntry.line.forEach(function (tok) { outLine.appendChild(makeSpan(tok.c, tok.t)); });
                  linesEl.appendChild(outLine);
                  scrollIfNeeded();
                });
              }
              setTimeout(cb, 900);
              return;
            }
            var item = chars[i];
            if (item.c !== currentClass) {
              currentClass = item.c;
              currentSpan = makeSpan(currentClass, '');
              textSpan.appendChild(currentSpan);
            }
            currentSpan.textContent += item.ch;
            i++;
            setTimeout(step, 28 + Math.random() * 55); // 사람이 치는 듯한 속도 편차
          }
          step();
        }

        function nextEntry() {
          var entry = script[idx % script.length];
          idx++;
          linesEl.appendChild(buildPromptLine(entry));
          scrollIfNeeded();
          setTimeout(function () { typeCmdLine(entry, nextEntry); }, 300);
        }

        nextEntry();
      })();
(function () {
        var linesEl = document.getElementById('hero-pycode-lines');
        if (!linesEl) return;

        var LINE_HEIGHT = 30;
        var MAX_VISIBLE_LINES = 13;

        // Python 코드 토큰: py-kw(키워드), py-cls(클래스/함수명), py-str(문자열),
        // py-num(숫자), py-com(주석), py-punc(기본 텍스트/기호)
        var script = [
          [
            { t: 'class ', c: 'py-kw' },
            { t: 'ApacheNormalizePathRCE', c: 'py-cls' },
            { t: '(Exploit):', c: 'py-punc' }
          ],
          [
            { t: '    def ', c: 'py-kw' },
            { t: '__init__', c: 'py-cls' },
            { t: '(self):', c: 'py-punc' }
          ],
          [
            { t: '        self.name = ', c: 'py-punc' },
            { t: '"Apache Path Normalize RCE"', c: 'py-str' }
          ],
          [
            { t: '        self.rport = ', c: 'py-punc' },
            { t: '443', c: 'py-num' }
          ],
          [
            { t: '', c: 'py-punc' }
          ],
          [
            { t: '    def ', c: 'py-kw' },
            { t: 'check', c: 'py-cls' },
            { t: '(self):', c: 'py-punc' }
          ],
          [
            { t: '        res = self.send_request(', c: 'py-punc' },
            { t: "'/uploads'", c: 'py-str' },
            { t: ')', c: 'py-punc' }
          ],
          [
            { t: '        # 응답 상태코드 확인', c: 'py-com' }
          ],
          [
            { t: '        return ', c: 'py-kw' },
            { t: 'res.status_code == ', c: 'py-punc' },
            { t: '200', c: 'py-num' }
          ],
          [
            { t: '', c: 'py-punc' }
          ],
          [
            { t: '    def ', c: 'py-kw' },
            { t: 'exploit', c: 'py-cls' },
            { t: '(self):', c: 'py-punc' }
          ],
          [
            { t: '        payload = self.generate_payload()', c: 'py-punc' }
          ],
          [
            { t: '        self.send_exploit(payload)', c: 'py-punc' }
          ],
          [
            { t: '        # shell 획득 대기', c: 'py-com' }
          ]
        ];

        var lineIdx = 0;

        function makeSpan(cls, text) {
          var span = document.createElement('span');
          if (cls) span.className = cls;
          span.textContent = text || '';
          return span;
        }

        function scrollIfNeeded() {
          if (linesEl.children.length <= MAX_VISIBLE_LINES) return;
          var toRemove = linesEl.firstElementChild;
          linesEl.style.transition = 'transform .35s ease';
          linesEl.style.transform = 'translateY(-' + LINE_HEIGHT + 'px)';
          setTimeout(function () {
            linesEl.style.transition = 'none';
            linesEl.style.transform = 'translateY(0)';
            if (toRemove && toRemove.parentNode) toRemove.parentNode.removeChild(toRemove);
          }, 360);
        }

        function typeLine(tokens, cb) {
          var line = document.createElement('div');
          line.className = 'hero-pycode-line';
          var textSpan = document.createElement('span');
          line.appendChild(textSpan);
          var cursor = makeSpan('hero-pycode-cursor', '');
          line.appendChild(cursor);
          linesEl.appendChild(line);
          scrollIfNeeded();

          var chars = [];
          tokens.forEach(function (tok) {
            for (var i = 0; i < tok.t.length; i++) chars.push({ ch: tok.t[i], c: tok.c });
          });

          if (chars.length === 0) {
            cursor.remove();
            setTimeout(cb, 200);
            return;
          }

          var i = 0, currentSpan = null, currentClass = null;

          function step() {
            if (i >= chars.length) {
              cursor.remove();
              setTimeout(cb, 260);
              return;
            }
            var item = chars[i];
            if (item.c !== currentClass) {
              currentClass = item.c;
              currentSpan = makeSpan(currentClass, '');
              textSpan.appendChild(currentSpan);
            }
            currentSpan.textContent += item.ch;
            i++;
            setTimeout(step, 22 + Math.random() * 40);
          }
          step();
        }

        function nextLine() {
          var tokens = script[lineIdx % script.length];
          lineIdx++;
          typeLine(tokens, nextLine);
        }

        nextLine();
      })();
}
