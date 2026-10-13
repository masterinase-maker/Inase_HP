# INASE HP 開発状況メモ（次回再開用）

## 現在の状況

Next.js版とは別に、デザイン確認用としてHTML/CSS/JSの静的サイトを作成済み。

作成場所：`static/`

構成：
- index.html
- about.html
- charity.html
- charity-achievements.html
- charity-reports.html
- charity-activities.html
- events.html
- events-next.html
- events-matchups.html
- events-past.html
- recruitment.html
- sponsorship.html
- sponsors.html
- contact.html
- style.css
- script.js

全ページ作成済み。

---

## 現時点でやらないこと

Next.js版への反映はまだ行わない。

理由：まずHTML版を実際にブラウザで確認し、
- デザイン
- 配色
- 余白
- フォント
- セクション構成
- CTA導線
- スポンサー表示
- スマホ表示

を修正したい。HTML版をデザインの正解として固める。

---

## 次回やること

### STEP1 — HTML版を全ページ確認

優先確認ページ：
1. index.html
2. sponsorship.html
3. charity.html
4. events-next.html
5. recruitment.html
6. contact.html

### STEP2 — デザイン修正

修正対象候補：
- Hero
- Header
- SponsorMarquee
- CTA
- フォント
- 色
- ボタン
- 余白
- 写真配置
- カードデザイン

必要に応じてHTML/CSSを修正。

### STEP3 — HTML版完成判定

「これで公開しても良い」と思える状態まで調整。

### STEP4 — HTML版をNext.js版へ反映

対象：
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/charity/*`
- `src/app/events/*`
- `src/app/recruitment/page.tsx`
- `src/app/sponsorship/page.tsx`
- `src/app/sponsors/page.tsx`
- `src/app/contact/page.tsx`

方針：
- HTML版のデザインを基準にする
- App Router構成は維持
- Reactコンポーネント化
- Tailwind化
- TypeScriptエラーゼロ
- `npm run build` 通過

---

## 最終目標

INASE Charity Fight の公式HPとして
- 格闘技の迫力
- チャリティの信頼感
- 協賛募集
- 選手募集
- 大会情報

を伝えられるサイトにする。

まずはHTML版を完成させてからNext.js版へ移植する。
