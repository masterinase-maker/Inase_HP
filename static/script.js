/* ============================================================
   INASE Charity Fight - script.js
   全ページ共通スクリプト
   ============================================================ */


/* ----------------------------------------------------------
   1. フッターの年号を自動更新
   ---------------------------------------------------------- */
const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* ----------------------------------------------------------
   2. ハンバーガーメニュー（モバイル）
   ---------------------------------------------------------- */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav    = document.getElementById('mobileNav');

if (hamburgerBtn && mobileNav) {
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // メニュー外クリックで閉じる
  document.addEventListener('click', (e) => {
    if (!hamburgerBtn.contains(e.target) && !mobileNav.contains(e.target)) {
      closeMenu();
    }
  });
}

/** モバイルメニューを閉じる（各リンクの onclick から呼び出す） */
function closeMenu() {
  if (!mobileNav || !hamburgerBtn) return;
  mobileNav.classList.remove('open');
  hamburgerBtn.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
}


/* ----------------------------------------------------------
   3. スクロールでフェードインアニメーション
   ---------------------------------------------------------- */
const fadeSections = document.querySelectorAll('.fade-in-section');

if (fadeSections.length > 0) {
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    root:       null,
    rootMargin: '0px 0px -60px 0px',
    threshold:  0.1,
  });

  fadeSections.forEach((el) => fadeObserver.observe(el));
}


/* ----------------------------------------------------------
   4. スポンサーマーキー: Track2 に Track1 の内容をクローン
      → シームレスループを実現
   ---------------------------------------------------------- */
(function initMarquee() {
  const track1 = document.getElementById('sponsorTrack1');
  const track2 = document.getElementById('sponsorTrack2');
  if (!track1 || !track2) return;
  track2.innerHTML = track1.innerHTML;
})();


/* ----------------------------------------------------------
   5. お問い合わせフォームのバリデーション（ダミー）
      ▼ 実際の送信は form の action 属性にエンドポイントを設定
   ---------------------------------------------------------- */
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm && formMessage) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fields   = contactForm.querySelectorAll('[required]');
    let   hasError = false;

    fields.forEach((field) => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = '#DC0A0A';
        hasError = true;
      }
    });

    if (hasError) {
      showFormMessage('⚠️ 必須項目をすべてご入力ください。', 'error');
      return;
    }

    // ダミー成功メッセージ（バックエンド連携後は削除）
    showFormMessage('✅ 送信が完了しました（※デモ表示 / バックエンド未連携）', 'success');
    contactForm.reset();
  });
}

/**
 * フォームのステータスメッセージを表示する
 * @param {string} text
 * @param {'success'|'error'} type
 */
function showFormMessage(text, type) {
  formMessage.textContent = text;
  formMessage.style.display     = 'block';
  formMessage.style.border      = '1px solid';
  formMessage.style.borderColor = type === 'success' ? '#4ade80' : '#DC0A0A';
  formMessage.style.color       = type === 'success' ? '#4ade80' : '#FF6060';
  formMessage.style.background  = type === 'success' ? 'rgba(74,222,128,0.08)' : 'rgba(220,10,10,0.08)';
  setTimeout(() => { formMessage.style.display = 'none'; }, 5000);
}


/* ----------------------------------------------------------
   6. ヘッダー: スクロール時に背景を強化
   ---------------------------------------------------------- */
const header = document.getElementById('header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.background = 'rgba(10, 10, 10, 1)';
      header.style.boxShadow  = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
      header.style.background = 'rgba(10, 10, 10, 0.97)';
      header.style.boxShadow  = 'none';
    }
  }, { passive: true });
}


/* ----------------------------------------------------------
   7. スムーズスクロール: ページ内アンカーのみ対象（index.html用）
      ※ 外部ファイルへのリンク（.html）は通常遷移
   ---------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
