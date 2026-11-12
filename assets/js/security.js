(() => {
  const search = document.getElementById('issue-search');
  const date = document.getElementById('issue-date');
  const days = Array.from(document.querySelectorAll('.issue-day'));
  const empty = document.getElementById('issue-empty');
  const total = document.querySelectorAll('.issue-note').length;

  function filterIssues() {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    days.forEach(day => {
      let dayCount = 0;
      day.querySelectorAll('.issue-note').forEach(note => {
        const matches = (!date.value || day.dataset.date === date.value)
          && note.textContent.toLocaleLowerCase().includes(query);
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
