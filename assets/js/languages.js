(() => {
  const menu = document.querySelector('.language-menu');
  if (!menu) return;
  const status = document.getElementById('language-status');
  let requested = false;
  let loadTimeout;
  // Protect original English text before sending Korean content for translation.
  function preserveEnglish(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      if (node.parentElement?.closest('.notranslate, [translate="no"], script, style, noscript, textarea, option, svg')) continue;
      const matches = [...node.textContent.matchAll(/[\p{Script=Latin}][\p{Script=Latin}\p{M}0-9 \t'’.,:;!?&+/#@_%=(){}\[\]–—-]*/gu)];
      if (!matches.length) continue;
      const fragment = document.createDocumentFragment();
      let position = 0;
      for (const match of matches) {
        const text = match[0].trimEnd();
        fragment.append(document.createTextNode(node.textContent.slice(position, match.index)));
        const original = document.createElement('span');
        original.className = 'notranslate';
        original.setAttribute('translate', 'no');
        original.textContent = text;
        fragment.append(original);
        position = match.index + text.length;
      }
      fragment.append(document.createTextNode(node.textContent.slice(position)));
      node.replaceWith(fragment);
    }
  }
  window.preserveBlogEnglish = preserveEnglish;
  document.querySelectorAll('.box-profile, .hero-neon').forEach(element => {
    element.classList.add('notranslate');
    element.setAttribute('translate', 'no');
  });
  document.querySelectorAll('pre, code, kbd, samp').forEach(element => {
    element.classList.add('notranslate');
    element.setAttribute('translate', 'no');
  });
  preserveEnglish(document.body);
  // Google adds a toolbar above the page. Keep the fixed mobile menu reachable.
  const updateToolbarOffset = () => {
    const offset = Math.max(0, parseFloat(document.body.style.top) || 0);
    document.documentElement.style.setProperty('--translation-offset', `${offset}px`);
  };
  new MutationObserver(updateToolbarOffset).observe(document.body, { attributes: true, attributeFilter: ['style'] });
  updateToolbarOffset();
  window.initializeBlogTranslation = () => {
    clearTimeout(loadTimeout);
    new google.translate.TranslateElement({
      pageLanguage: 'ko',
      includedLanguages: 'ko,en,ja,zh-CN,zh-TW,es,fr,de',
      autoDisplay: false
    }, 'google_translate_element');
    status.textContent = 'Google Translate · 자동 번역';
  };
  function loadTranslation() {
    if (requested) return;
    preserveEnglish(document.body);
    requested = true;
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=initializeBlogTranslation';
    script.onerror = () => {
      clearTimeout(loadTimeout);
      status.textContent = '번역 서비스를 불러오지 못했습니다. 새로고침 후 다시 시도해주세요.';
      requested = false;
    };
    loadTimeout = setTimeout(() => {
      status.textContent = '번역 서비스 연결이 지연되고 있습니다. 새로고침 후 다시 시도해주세요.';
    }, 15000);
    document.head.appendChild(script);
  }
  menu.addEventListener('toggle', () => {
    if (menu.open) loadTranslation();
  });
  if (document.cookie.split(';').some(cookie => cookie.trim().startsWith('googtrans='))) loadTranslation();
})();
