(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const el = (tag, cls, text) => { const n = document.createElement(tag); if(cls)n.className=cls;if(text!=null)n.textContent=text;return n; };
  const link = (text,url,cls) => {const n=el('a',cls,text);n.href=url;return n;};
  const query = (key,value) => '/?'+new URLSearchParams({[key]:value});
  function theme(dark){if(dark)document.documentElement.dataset.theme='dark';else delete document.documentElement.dataset.theme;const img=$('.img-profile');if(img)img.src=dark?img.dataset.darkSrc:img.dataset.lightSrc;$('#theme-button')?.setAttribute('aria-label',dark?'라이트 모드 전환':'다크 모드 전환');try{localStorage.setItem('laoncode-theme',dark?'dark':'light');}catch(e){}}
  theme(document.documentElement.dataset.theme==='dark');
  $('#theme-button')?.addEventListener('click',()=>theme(document.documentElement.dataset.theme!=='dark'));
  const menu=$('.button-menu'),aside=$('.area-aside');
  function closeMenu(){aside?.classList.remove('area-aside-on');document.body.classList.remove('bg-dimmed');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','메뉴 열기');}
  menu?.addEventListener('click',()=>{const open=aside.classList.toggle('area-aside-on');document.body.classList.toggle('bg-dimmed',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');});
  matchMedia('(min-width:1061px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
  document.addEventListener('click',e=>{if(aside&&!e.composedPath().includes(aside)&&!e.composedPath().includes(menu))closeMenu();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  const search=$('#search-dialog');$('#profile-search-btn')?.addEventListener('click',()=>{closeMenu();search.showModal();$('#search-input').focus();});
  [search,$('#image-dialog')].forEach(d=>d?.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
  const onScroll=()=>$('.header')?.classList.toggle('header-scrolled',window.scrollY>40);window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  $('#article-scroll-btn')?.addEventListener('click',()=>$('#article-view').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
  const body=$('#article-view');
  body?.querySelectorAll('table').forEach(t=>{const wrap=el('div','table-overflow');t.before(wrap);wrap.append(t);});
  body?.querySelectorAll('pre code').forEach(code=>{
    if(!window.hljs)return;
    const pre=code.parentElement;
    const classes=[code.className,pre.className,pre.parentElement?.className||''].join(' ');
    const declared=pre.dataset.keLanguage||classes.match(/(?:language-|lang-)([\w+-]+)/)?.[1];
    const aliases={html:'xml',js:'javascript',ts:'typescript',sh:'bash',c:'c',text:'plaintext'};
    const language=aliases[declared]||declared;
    if(language&&hljs.getLanguage(language))code.className='language-'+language;
    else if(declared)code.className='language-plaintext';
    // Re-highlight from text so pasted markup can never become executable HTML.
    code.textContent=code.textContent;
    hljs.highlightElement(code);
  });
  body?.querySelectorAll('pre').forEach(pre=>{const button=el('button','copy-code','복사');button.type='button';const source=pre.querySelector('code')||pre;const text=source.textContent;button.setAttribute('aria-label','코드 복사');button.setAttribute('aria-live','polite');pre.append(button);button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(text);button.textContent='복사됨';setTimeout(()=>button.textContent='복사',1500);}catch(e){button.textContent='복사하려면 코드를 선택해주세요';}});});
  body?.querySelectorAll('img').forEach(img=>{img.addEventListener('click',e=>{e.preventDefault();const d=$('#image-dialog');d.querySelector('img').src=img.currentSrc||img.src;d.querySelector('img').alt=img.alt;d.showModal();});});
  const banner=body?.querySelector('img[alt="배너"]');if(banner){$('.article-header').style.backgroundImage='url("'+banner.src+'")';(banner.closest('figure')||banner).hidden=true;}
  const repoList=$('#github-repo-list');
  fetch('https://api.github.com/users/LaonCode/repos?sort=updated&per_page=100').then(r=>{if(!r.ok)throw Error();return r.json();}).then(repos=>{repoList.replaceChildren();repos.filter(r=>!r.fork).slice(0,3).forEach(r=>{const li=el('li','github-repo-item'),a=link('',r.html_url);a.target='_blank';a.rel='noopener noreferrer';a.append(el('strong','github-repo-name',r.name),el('p','github-repo-desc',r.description||'설명 없음'),el('div','github-repo-meta',(r.language||'')+' ★ '+r.stargazers_count));li.append(a);repoList.append(li);});}).catch(()=>{repoList.replaceChildren(link('GitHub 저장소 보기','https://github.com/LaonCode'));});
  function card(post){const article=el('article','article-type-common article-type-thumbnail');if(post.image){const a=link('',post.url,'link-article thumbnail-link');a.setAttribute('aria-label',post.title);const p=el('p','thumbnail');p.setAttribute('has-thumbnail','1');p.style.backgroundImage='url("'+post.image+'")';const img=el('img','img-thumbnail');img.src=post.image;img.alt='';img.loading='lazy';p.append(img);a.append(p);article.append(a);}const content=el('div','article-content'),a=link('',post.url,'link-article');a.append(el('strong','title',post.title),el('p','summary',post.summary));const meta=el('div','box-meta');meta.append(link(post.category,query('category',post.category),'link-category'),el('span','date',post.date.replaceAll('-','.')));content.append(a,meta);article.append(content);return article;}
  fetch('/search.json').then(r=>{if(!r.ok)throw Error('index');return r.json();}).then(posts=>{
    const params=new URLSearchParams(location.search);let filtered=posts;
    const originalCategory=params.get('category'); const category=originalCategory?.replace(/^Let\'s Hack\/Bandit/,'CTF/Wargame/Bandit').replace(/^Let\'s Coding/,"Let's Doit!").replace(/^(Let's Hack|Let's Doit!|Let's Lead)(?=\/|$)/,"블로그/기술문서/$1"); const tag=params.get('tag'),q=params.get('q'),archive=params.get('archive');
    if(category)filtered=filtered.filter(p=>p.category===category||p.category.startsWith(category+'/'));
    if(tag)filtered=filtered.filter(p=>(p.tags||[]).includes(tag));
    if(q)filtered=filtered.filter(p=>(p.title+' '+p.text+' '+p.category).toLocaleLowerCase().includes(q.toLocaleLowerCase()));
    if(archive)filtered=filtered.filter(p=>p.date.startsWith(archive));
    const list=$('#post-list');if(list&&(category||tag||q||archive)){
      $('#list-title').textContent=category|| (tag?'#'+tag:null) || (q?'검색: '+q:null)||archive;$('#list-count').textContent=filtered.length;
      const pages=Math.max(1,Math.ceil(filtered.length/10)),page=Math.min(pages,Math.max(1,parseInt(params.get('page')||'1',10)||1));list.replaceChildren(...filtered.slice((page-1)*10,page*10).map(card));if(!filtered.length)list.append(el('p','box-no-search',category?'아직 이 분류에 등록된 글이 없습니다.':'검색 결과가 없습니다.'));
      const pagination=$('#pagination');pagination.replaceChildren();for(let i=1;i<=pages;i++){const v=new URLSearchParams(params);v.set('page',i);const a=link(String(i),'/?'+v,i===page?'selected':'');if(i===page)a.setAttribute('aria-current','page');pagination.append(a);}
    }
    const tree=$('#category-tree'),featured=JSON.parse(tree.dataset.featured||'[]'),groups=new Map();
    posts.forEach(p=>{
      const known=[...featured].sort((a,b)=>b.length-a.length).find(name=>p.category===name||p.category.startsWith(name+'/'));
      const parts=known?[known,...p.category.slice(known.length+1).split('/').filter(Boolean)]:p.category.split('/');
      let level=groups;
      for(const name of parts){if(!level.has(name))level.set(name,{count:0,children:new Map()});const node=level.get(name);node.count++;level=node.children;}
    });
    featured.forEach(name=>{if(!groups.has(name))groups.set(name,{count:0,children:new Map()});});
    tree.replaceChildren();let branchId=0;
    function renderCategory(name,node,path,container){
      const li=el('li'),row=el('div','category-row'),a=link('',query('category',path),'link_item');
      a.title=path;a.append(el('span','category-label',name),el('span','c_cnt',' ('+node.count+')'));
      if(category===path)a.classList.add('selected');row.append(a);li.append(row);
      if(node.children.size){
        const ul=el('ul','sub_category_list');ul.id='category-children-'+branchId++;
        let expanded=category===path||Boolean(category?.startsWith(path+'/'));
        try{const saved=localStorage.getItem('category-open:'+path);if(saved!==null&&!expanded)expanded=saved==='true';}catch(e){}
        ul.hidden=!expanded;
        const toggle=el('button','category-toggle',expanded?'▾':'▸');toggle.type='button';toggle.setAttribute('aria-controls',ul.id);toggle.setAttribute('aria-expanded',String(expanded));toggle.setAttribute('aria-label',name+' 하위 분류 '+(expanded?'접기':'펼치기'));
        toggle.addEventListener('click',()=>{const open=ul.hidden;ul.hidden=!open;toggle.textContent=open?'▾':'▸';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',name+' 하위 분류 '+(open?'접기':'펼치기'));try{localStorage.setItem('category-open:'+path,String(open));}catch(e){}});row.prepend(toggle);
        for(const [childName,child] of node.children)renderCategory(childName,child,path+'/'+childName,ul);
        li.append(ul);
      }
      container.append(li);
    }
    for(const name of [...featured,...groups.keys()].filter((x,i,a)=>a.indexOf(x)===i))renderCategory(name,groups.get(name),name,tree);
    const tags=[...new Set(posts.flatMap(p=>p.tags||[]))].sort();$('#search-tags').replaceChildren(...tags.map(t=>link('#'+t,query('tag',t))));
    const input=$('#search-input'),results=$('#search-results');input.addEventListener('input',()=>{const value=input.value.trim().toLocaleLowerCase();results.replaceChildren();if(!value)return;const matches=posts.filter(p=>(p.title+' '+p.text+' '+p.category+' '+(p.tags||[]).join(' ')).toLocaleLowerCase().includes(value));matches.slice(0,12).forEach(p=>{const a=link(p.title,p.url);a.append(el('small','',p.date+' · '+p.category));results.append(a);});if(!matches.length)results.textContent='검색 결과가 없습니다.';else results.append(link('전체 결과 '+matches.length+'개 보기',query('q',input.value)));});input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();if(input.value.trim())location.href=query('q',input.value.trim());}});
    const monthCounts=new Map(), dayCounts=new Map();
    posts.forEach(p=>{const m=p.date.slice(0,7);monthCounts.set(m,(monthCounts.get(m)||0)+1);dayCounts.set(p.date,(dayCounts.get(p.date)||0)+1);});
    const months=[...monthCounts.keys()].sort().reverse();
    $('#archives').replaceChildren(...months.map(m=>{
      const li=el('li'),a=link('',query('archive',m),'archive-link');
      a.append(el('span','archive-month',m.slice(0,4)+'년 '+Number(m.slice(5))+'월'),el('span','archive-count',monthCounts.get(m)+'편'));
      if(archive?.startsWith(m)){a.classList.add('selected');a.setAttribute('aria-current','date');}
      li.append(a);return li;
    }));
    const now=new Date();let year=now.getFullYear(),month=now.getMonth();
    function calendar(){
      const table=el('table'),caption=el('caption'),prev=el('button','calendar-nav','‹'),next=el('button','calendar-nav','›');
      prev.type=next.type='button';prev.setAttribute('aria-label','이전 달');next.setAttribute('aria-label','다음 달');
      prev.onclick=()=>{month--;if(month<0){month=11;year--;}calendar();$('#calendar .calendar-nav')?.focus({preventScroll:true});};
      next.onclick=()=>{month++;if(month>11){month=0;year++;}calendar();$('#calendar .calendar-nav:last-child')?.focus({preventScroll:true});};
      const ym=year+'-'+String(month+1).padStart(2,'0');
      caption.append(prev,link(year+'년 '+(month+1)+'월',query('archive',ym),'calendar-month'),next);table.append(caption);
      const head=el('thead'),row=el('tr');'일월화수목금토'.split('').forEach(d=>{const th=el('th','',d);th.scope='col';row.append(th);});head.append(row);table.append(head);
      const tbody=el('tbody'),start=new Date(year,month,1).getDay(),days=new Date(year,month+1,0).getDate();let tr;
      for(let i=0;i<42;i++){
        if(i%7===0){tr=el('tr');tbody.append(tr);}const td=el('td'),day=i-start+1;
        if(day>0&&day<=days){
          const date=ym+'-'+String(day).padStart(2,'0'),count=dayCounts.get(date)||0;
          const item=count?link(String(day),query('archive',date),'calendar-day has-posts'):el('span','calendar-day',day);
          if(count){item.title=date+' · '+count+'편';item.setAttribute('aria-label',year+'년 '+(month+1)+'월 '+day+'일, 글 '+count+'편');}
          if(day===now.getDate()&&month===now.getMonth()&&year===now.getFullYear()){item.classList.add('today');item.setAttribute('aria-current','date');}
          td.append(item);
        }tr.append(td);
      }
      table.append(tbody);const note=el('p','calendar-note','● 글이 있는 날 · 이번 달 '+(monthCounts.get(ym)||0)+'편');
      $('#calendar').replaceChildren(table,note);
    }calendar();
    // Rewrite only links whose destination exists in the migrated collection.
    const oldToNew=new Map(posts.map(p=>[decodeURI(p.legacy||''),p.url]));body?.querySelectorAll('a[href]').forEach(a=>{const url=new URL(a.href);const target=oldToNew.get(decodeURI(url.origin+url.pathname));if(target)a.href=target+url.hash;});
  }).catch(()=>{const results=$('#search-results');if(results)results.textContent='검색 자료를 불러오지 못했습니다. 새로고침 후 다시 시도해주세요.';});
})();
