# Cupertino UI

Koleksi komponen [shadcn/ui](https://ui.shadcn.com) custom yang mengikuti bahasa desain **Apple Human Interface Guidelines (HIG)** ('https://developer.apple.com/design/human-interface-guidelines') — typography San Francisco, ikon SF Symbols, spacing/elevation/motion ala iOS & macOS, lengkap dengan kepatuhan aksesibilitas.

## Tujuan

Menyediakan registry komponen siap pakai yang bisa di-install lewat CLI `shadcn`, sehingga developer dapat membangun antarmuka bergaya Apple di proyek React/Next.js tanpa harus menulis ulang token desain, varian, dan perilaku interaksi dari nol.

## Status Saat Ini

Registry sudah dapat dikonsumsi melalui URL langsung:

```bash
npx shadcn@latest add https://cupertino-ui.vercel.app/r/button.json
```

Komponen pertama yang tersedia: **Button**.

## Target Akhir

Setelah seluruh komponen inti selesai dan registry didaftarkan sebagai *namespaced registry* resmi di shadcn, instalasi akan menjadi sesingkat:

```bash
npx shadcn@latest add @cupertino-ui/button
npx shadcn@latest add @cupertino-ui/card
npx shadcn@latest add @cupertino-ui/dialog
# dst.
```

## Roadmap Komponen

Komponen direncanakan mengacu pada katalog HIG (controls, navigation, presentation, dst). Daftar awal (akan diperluas):

- [x] Button
- [x] Switch
- [x] Card
- [x] Badge
- [ ] Dialog / Sheet
- [ ] Input
- [ ] Segmented Control

## Filosofi: Re-skin, bukan Wrap

Cupertino UI **mengikuti shadcn 100%** — struktur file, nama variant, props API, `data-slot`, `asChild` semuanya identik shadcn. Yang berbeda hanya **nilai class di `cva`** dan **nilai token CSS di `globals.css`**.

Komponen Cupertino adalah **drop-in replacement** untuk komponen shadcn dengan nama yang sama. Berarti semua block, template, dan dokumentasi shadcn tetap berfungsi.

## Konvensi Teknis

- **shadcn style**: `radix-nova` (generasi terbaru shadcn, default per 2026). Jangan ganti ke `default` (deprecated) atau `new-york` (legacy).
- **Import Radix**: gunakan single-package style — `import { Slot } from "radix-ui"`, **bukan** `@radix-ui/react-slot`. Ini standar `radix-nova`.
- **Target install**: `components/ui/<nama>.tsx` (menimpa primitif shadcn user — itu memang tujuannya, karena kita = shadcn + skin HIG).
- **Token desain**: re-tune token shadcn standar (`--primary`, `--destructive`, `--radius`, dst) di `globals.css` dengan nilai HIG. Jangan tambah token baru seperti `--brand-primary`.
- **Build registry**: `npm run registry:build` (otomatis dijalankan pada `npm run build`).

## Workflow Menambah Komponen

### Quick Reference (4 langkah)

```bash
# 1. Install primitif shadcn ke repo ini
npx shadcn@latest add <nama> --yes --overwrite

# 2. Scaffold sumber registry (copy components/ui/<nama>.tsx → registry/<nama>/)
npm run component:init <nama>

# 3. Edit registry/<nama>/<nama>.tsx — ganti class HIG saja
#    Lalu daftarkan di registry.json (lihat contoh entry button/switch/card)

# 4. Sync ke preview lokal + build registry
npm run component:sync <nama>
npm run registry:build
```

Cek hasilnya di `npm run dev`. Tambahkan showcase di [app/page.tsx](../app/page.tsx) dan centang roadmap di file ini.

### Aturan saat re-skin (langkah 3)

**Hanya ganti string class** di dalam `cva()` atau `className={cn(...)}`. Jangan ubah:

- nama variant (`default`, `outline`, `secondary`, `ghost`, `destructive`, `link`)
- nama size (`default`, `sm`, `lg`, `icon`, dst)
- props API (`asChild`, `variant`, `size`, `className`)
- `data-slot`, `data-variant`, `data-size`
- daftar export

Itu yang membuat komponen jadi **drop-in replacement** — block & template shadcn tetap berfungsi.

### Token HIG yang sudah tersedia

Sudah ditune di [app/globals.css](../app/globals.css), tinggal dipakai dengan class Tailwind biasa:

- `bg-primary` — Apple system blue (`#007AFF` light / `#0A84FF` dark)
- `bg-destructive` — Apple system red (`#FF3B30` / `#FF453A`)
- `rounded-2xl` — card-like
- `rounded-full` — pill controls (button, switch)
- `active:scale-95` — press feedback
- `h-11` — 44pt minimum touch target

### Script Helper

- `npm run component:init <nama>` — scaffold `registry/<nama>/<nama>.tsx` dari hasil `shadcn add`
- `npm run component:sync <nama>` — copy `registry/<nama>` → `components/ui/<nama>` (preview docs)
- `npm run component:sync` — sync **semua** komponen sekaligus
- `npm run registry:build` — generate `public/r/*.json`

## Sync dengan Shadcn Upstream

Sumber kebenaran untuk Cupertino adalah `registry/`. `components/ui/` selalu *disposable* — boleh ditimpa kapan saja oleh `npx shadcn add --overwrite`, lalu dipulihkan dengan `npm run component:sync`.

### Aturan emas

> Saat shadcn upstream rilis update, **port perubahan struktur ke `registry/<nama>/<nama>.tsx`**, bukan ke `components/ui/`. Yang di `components/ui/` selalu hasil sync.

### Workflow update (3 skenario)

#### A. Update tanpa perubahan struktur (bug fix minor)

```bash
git checkout -b chore/shadcn-update
npx shadcn@latest add <nama> --yes --overwrite     # tarik versi terbaru
git diff components/ui/<nama>.tsx registry/<nama>/<nama>.tsx
# tidak ada perubahan signifikan → langsung sync balik
npm run component:sync <nama>
npm run registry:build
```

#### B. Update menambah variant / size / prop baru

```bash
npx shadcn@latest add <nama> --yes --overwrite
git diff registry/<nama>/<nama>.tsx components/ui/<nama>.tsx
```

Diff akan menunjukkan tambahan upstream. **Port** tambahan itu ke `registry/<nama>/<nama>.tsx`, lalu skin dengan class HIG. Jangan lupa tambahkan ke showcase di `app/page.tsx`.

```bash
npm run component:sync <nama>
npm run registry:build
```

#### C. Breaking change pada API

Misal shadcn rename variant. Pilihan:
- **Ikuti** (rekomendasi — kita memang drop-in replacement). Edit `registry/`, bump versi Cupertino, catat di CHANGELOG.
- **Tahan** kalau update upstream masih kontroversial / belum stabil.

### Update batch (rekomendasi)

Lebih efisien update semua komponen sekaligus:

```bash
git checkout -b chore/sync-shadcn-YYYY-MM
npx shadcn@latest add button switch card badge --yes --overwrite
git diff components/ui/                            # audit perubahan upstream
# port perubahan struktur ke registry/<nama>/, satu per satu
npm run component:sync                             # sync ALL
npm run registry:build
git commit -am "chore: sync with shadcn upstream YYYY-MM"
```

### Tips

- **Commit dulu sebelum overwrite**, supaya `git diff` punya baseline yang bersih.
- **`git diff` setelah `--overwrite` = changelog otomatis** — lebih akurat dari release notes.
- Kalau hasil overwrite buruk, `git checkout components/ui/` untuk membatalkan.

## Prinsip Desain

1. **HIG-first** — token warna, radius, typography, dan motion mengikuti spesifikasi Apple, bukan default shadcn.
2. **Drop-in shadcn** — struktur file, dependency, dan konvensi registry tetap kompatibel dengan workflow shadcn standar.
3. **Aksesibilitas tidak negotiable** — focus ring, kontras, target ukuran sentuh, dan dukungan VoiceOver/Narrator setara dengan komponen native.
4. **Light + Dark mode** — kedua mode adalah first-class, mengikuti palet sistem Apple.
5. **Zero lock-in** — komponen di-copy ke proyek pengguna (model shadcn), bukan di-import dari package, sehingga bebas dimodifikasi.

## Struktur Registry

- `registry.json` — manifest registry shadcn.
- `registry/new-york/` — sumber komponen mengikuti style "new-york".
- `app/` — situs dokumentasi & preview komponen (Next.js).
- `public/r/*.json` — output build registry yang dikonsumsi CLI shadcn.

## Referensi Upstream

Saat membandingkan komponen Cupertino dengan sumber shadcn aslinya (untuk re-sync atau cek perubahan API), lihat langsung:

- shadcn/ui repo: https://github.com/shadcn-ui/ui
- Source komponen `radix-nova`: https://github.com/shadcn-ui/ui/tree/main/apps/v4/registry/radix-nova/ui

Jangan clone snapshot upstream ke dalam repo ini — selalu lihat sumber yang ter-update di GitHub.

## Distribusi

Saat ini di-host di `https://cupertino-ui.vercel.app`. Tujuan jangka panjang: terdaftar sebagai namespace `@cupertino-ui` di registry shadcn resmi.
