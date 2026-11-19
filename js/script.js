const cards = [...document.querySelectorAll('.job-card')];
const keyword = document.getElementById('keyword');
const jobList = document.getElementById('jobList');
const emptyState = document.getElementById('emptyState');
const resultCount = document.getElementById('resultCount');
const toast = document.getElementById('toast');
const topSearchWrap = document.getElementById('topSearchWrap');
const topSearchBtn = document.getElementById('topSearchBtn');
const topSearchInput = document.getElementById('topSearchInput');
let toastTimer;

function notify(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
}

function selectCard(card) {
  cards.forEach(item => item.classList.toggle('selected', item === card));
  const title = card.dataset.title;
  const company = card.dataset.company;
  document.getElementById('detailTitle').innerHTML = `${title} <span style="color:#9a72e8">✦</span>`;
  document.getElementById('detailLogo').textContent = card.dataset.logo;
  document.getElementById('detailLogo').style.background = getComputedStyle(card.querySelector('.company-logo')).backgroundColor;
  document.getElementById('detailCompany').textContent = `${company} · Berlin · Internship · Tech`;
  document.getElementById('selectedDescription').textContent = card.dataset.desc;
  document.getElementById('aboutCompanyName').textContent = company;
  document.getElementById('saveBtn').classList.remove('saved');
  document.getElementById('saveBtn').textContent = 'Save';
}

cards.forEach(card => {
  card.addEventListener('click', event => {
    if (event.target.closest('.save-mini')) {
      event.stopPropagation();
      event.target.closest('.save-mini').textContent = '♥';
      notify('Job saved to your favorites');
      return;
    }
    selectCard(card);
  });
});

function filterJobs() {
  const term = keyword.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matches = `${card.dataset.title} ${card.dataset.desc} ${card.dataset.company}`.toLowerCase().includes(term);
    card.style.display = matches ? '' : 'none';
    if (matches) visible++;
  });
  resultCount.textContent = `${visible} Job${visible === 1 ? '' : 's'} Available`;
  emptyState.style.display = visible ? 'none' : 'block';
  jobList.style.display = visible ? 'grid' : 'none';
  const selected = cards.find(card => card.style.display !== 'none');
  if (selected && !selected.classList.contains('selected')) selectCard(selected);
}

// Top search button toggle & search behavior
if (topSearchBtn && topSearchInput && topSearchWrap) {
  topSearchBtn.addEventListener('click', event => {
    event.stopPropagation();
    const isActive = topSearchWrap.classList.contains('active');

    if (!isActive) {
      topSearchWrap.classList.add('active');
      topSearchInput.focus();
    } else {
      const term = topSearchInput.value.trim();
      if (term) {
        keyword.value = term;
        filterJobs();
        document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
        notify(`Searching for "${term}"`);
      } else {
        topSearchWrap.classList.remove('active');
      }
    }
  });

  topSearchInput.addEventListener('input', () => {
    keyword.value = topSearchInput.value;
    filterJobs();
  });

  topSearchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const term = topSearchInput.value.trim();
      keyword.value = term;
      filterJobs();
      document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
      notify(term ? `Searching for "${term}"` : 'Showing all available jobs');
    } else if (event.key === 'Escape') {
      if (!topSearchInput.value.trim()) {
        topSearchWrap.classList.remove('active');
      }
    }
  });

  document.addEventListener('click', event => {
    if (!topSearchWrap.contains(event.target) && !topSearchInput.value.trim()) {
      topSearchWrap.classList.remove('active');
    }
  });
}

document.getElementById('filterForm').addEventListener('submit', event => {
  event.preventDefault();
  filterJobs();
  const term = keyword.value.trim();
  notify(term ? `Job search filtered for "${term}"` : 'Job search filters applied');
});

keyword.addEventListener('input', () => {
  if (topSearchInput) {
    topSearchInput.value = keyword.value;
  }
  filterJobs();
});

document.getElementById('sort').addEventListener('change', event => {
  if (event.target.value === 'az') {
    [...cards].sort((a, b) => a.dataset.company.localeCompare(b.dataset.company)).forEach(card => jobList.appendChild(card));
  } else {
    cards.forEach(card => jobList.appendChild(card));
  }
});

document.getElementById('saveBtn').addEventListener('click', event => {
  const saved = event.currentTarget.classList.toggle('saved');
  event.currentTarget.textContent = saved ? '♥ Saved' : 'Save';
  notify(saved ? 'Job added to your saved list' : 'Job removed from saved list');
});

document.getElementById('applyBtn').addEventListener('click', () => notify('Application form would open here.'));

document.getElementById('followBtn').addEventListener('click', event => {
  const following = event.currentTarget.dataset.following !== 'true';
  event.currentTarget.dataset.following = String(following);
  event.currentTarget.textContent = following ? 'Following' : 'Follow';
  notify(following ? 'You are now following this company' : 'You unfollowed this company');
});
