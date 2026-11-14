(() => {
  const search = document.getElementById('issue-search');
  const date = document.getElementById('issue-date');
  const days = Array.from(document.querySelectorAll('.issue-day'));
  const empty = document.getElementById('issue-empty');
  const total = document.querySelectorAll('.issue-note').length;
  document.querySelectorAll('.issue-published time').forEach(time => {
    const published = new Date(time.dateTime);
    if (!Number.isNaN(published.getTime())) {
      time.textContent = new Intl.DateTimeFormat('ko-KR', {timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false}).format(published) + ' (KST)';
    }
  });
  document.querySelectorAll('.issue-media img').forEach(img => {
    const fallback = () => { img.hidden = true; img.previousElementSibling.hidden = false; };
    img.addEventListener('error', fallback);
    if (img.complete && !img.naturalWidth) fallback();
  });

  function filterIssues() {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    days.forEach(day => {
      let dayCount = 0;
      day.querySelectorAll('.issue-note').forEach(note => {
        const matches = (!date.value || day.dataset.date === date.value)
          && (note.textContent + ' ' + note.dataset.url).toLocaleLowerCase().includes(query);
        note.hidden = !matches;
        if (matches) dayCount += 1;
      });
      day.hidden = dayCount === 0;
      day.querySelector('h2 span').textContent = `${dayCount}건`;
      visible += dayCount;
    });
    document.getElementById('issue-status').textContent = total ? `${visible}개의 보안 이슈` : '';
    empty.hidden = visible > 0;
    empty.textContent = total ? '조건에 맞는 보안 이슈가 없습니다.' : '아직 기록된 보안 이슈가 없습니다.';
  }

  search.addEventListener('input', filterIssues);
  date.addEventListener('change', filterIssues);
  document.getElementById('issue-reset').addEventListener('click', () => {
    search.value = '';
    date.value = '';
    filterIssues();
  });
  filterIssues();
})();
