# Cupertino Blocks — Rencana Awal

Rancangan kumpulan **blocks** bergaya Apple HIG untuk Cupertino, mengikuti pola `shadcn/ui/blocks` namun dengan identitas visual macOS/iOS.

## Tujuan

- Memberi Cupertino *selling point* yang tidak dimiliki shadcn: komposisi siap-pakai bergaya Apple.
- Menjadi showcase nyata bagi primitif yang sudah ada (`accordion`, `command`, `sidebar`, `switch`, dst).
- Setiap block: satu file, copy-paste friendly, tanpa dependensi eksternal di luar primitif Cupertino.

## Prinsip Desain

1. **Instantly recognizable** — sekali lihat orang tahu ini "Apple-flavored".
2. **HIG-compliant copy** — sentence case, hindari "Please", micro-copy ringkas.
3. **Hairline separators**, rounded-2xl cards, SF Symbols (atau Lucide equivalent), tipografi padat.
4. **Reusable untuk app nyata**, bukan sekadar demo.

---

## Tier 1 — Signature Blocks (prioritas utama)

Blocks yang langsung mengkomunikasikan identitas Cupertino.

### 1. `settings-01` — macOS System Settings
- **Pola**: sidebar kategori kiri + panel detail kanan
- **Detail HIG**: grouped list dengan hairline separator, toggle switch, label/value pairs
- **Inspirasi**: System Settings macOS Ventura+
- **Primitif**: `sidebar`, `switch`, `separator`, `label`, `field`

### 2. `sidebar-01` — Mail / Finder Source List
- **Pola**: section header tipis (uppercase, tracking), ikon kecil, badge unread di kanan
- **Detail HIG**: collapsible groups, hover state subtle
- **Primitif**: `sidebar`, `badge`, `collapsible`

### 3. `command-01` — Spotlight / ⌘K Palette
- **Pola**: modal tengah-atas, blur background, recent + grouped results + preview pane
- **Pembeda**: lebih "Spotlight" daripada command palette flat ala shadcn
- **Primitif**: `command`, `dialog`, `kbd`

### 4. `login-01` — Apple ID Sign-in
- **Pola**: card terpusat, rounded-2xl, field stacked
- **Detail HIG**: "Continue with Apple" prominent, micro-copy ringkas
- **Primitif**: `card`, `field`, `button`, `input`

### 5. `inspector-01` — Right-side Inspector Panel
- **Pola**: Xcode/Pages/Keynote — tabs ikon di atas, sections collapsible
- **Detail HIG**: slider + numeric input berpasangan, color well
- **Primitif**: `tabs`, `slider`, `input`, `collapsible`, `popover`

---

## Tier 2 — High-utility Blocks

Blocks yang sering dipakai di app produksi.

| Slug | Pola | Primitif utama |
|---|---|---|
| `dashboard-01` | Toolbar atas + segmented control + sidebar + bento grid | `sidebar`, `tabs`, `card`, `chart` |
| `list-01` | Finder list view: resize kolom, sort chevron, multi-select | `table`, `checkbox` |
| `profile-01` | Contacts card: avatar besar, label-value pairs, action pill | `avatar`, `card`, `button` |
| `onboarding-01` | iOS welcome: icon besar, 3–4 features dengan SF Symbol | `button`, `item` |
| `empty-01` | HIG empty state: ikon besar, headline + secondary, 1 CTA | `empty`, `button` |

---

## Tier 3 — Niche tapi Memorable

Blocks dengan recall tinggi, dibangun setelah Tier 1–2 stabil.

| Slug | Pola |
|---|---|
| `notification-01` | macOS notification stack, grouped by app |
| `share-sheet-01` | iOS share sheet: bottom drawer + icon grid + action list |
| `preferences-tabs-01` | Xcode preferences: icon tabs di toolbar |
| `media-player-01` | Music.app mini player: album art + scrub bar + controls |

---

## Struktur File

```
app/blocks/
  page.tsx                          # index grid semua blocks
  [slug]/page.tsx                   # halaman preview full-screen
  _registry.ts                      # daftar block + metadata
  _components/
    settings-01/
      index.tsx                     # the block itself
      preview.tsx                   # framed preview untuk index
    command-01/
      index.tsx
      preview.tsx
    ...
```

## Pola URL

- `/blocks` — index grid
- `/blocks/settings-01` — preview full-screen
- Tombol **"View Code"** membuka source (sheet / dialog dengan syntax highlight)

---

## Urutan Eksekusi

1. **`command-01`** — paling ikonik, paling sering di-screenshot, menguji `command` + `dialog` + `kbd`
2. **`settings-01`** — menguji `sidebar` + `switch` + `field` dalam komposisi nyata
3. **`sidebar-01`** — variasi sidebar untuk konteks yang berbeda
4. **`login-01`** — kecil tapi viral di Twitter/Dribbble
5. **`inspector-01`** — pamer kompleksitas tanpa berantakan
6. Lanjut Tier 2 → Tier 3

## Catatan Implementasi

- Sebelum mulai, finalkan dulu primitif yang masih dalam progress (lihat `git status`).
- Setiap block harus bekerja standalone — tidak boleh import dari block lain.
- Gunakan `'use client'` hanya bila perlu.
- Sertakan minimal 1 varian (light/dark) yang sudah teruji.
