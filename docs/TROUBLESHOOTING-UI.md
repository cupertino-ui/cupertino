# UI Troubleshooting Playbook

Dokumen ini untuk menangani bug visual berulang di halaman docs/preview seperti:

- ring/focus terlihat dobel
- popup/dropdown kepotong
- konten `ScrollArea` terlihat terpotong kiri/kanan
- native UI (`<select>`) terlihat rusak saat open/focus

## Gejala Umum dan Akar Masalah

1. Popup atau focus ring terpotong:
- Biasanya parent memakai `overflow-hidden` pada container preview.
- Efeknya paling terasa di `Select`, `Combobox`, `DropdownMenu`, `ContextMenu`, `Menubar`, `NavigationMenu`, `Tooltip`.

2. Border terlihat dobel saat focus:
- Wrapper dan inner control sama-sama menggambar border/ring.
- Sering terjadi pada komponen komposit berbasis `InputGroup`.

3. ScrollArea item tampak terpotong:
- Padding diletakkan di root `ScrollArea`, bukan di konten dalam viewport.

4. Native select "hancur":
- Styling wrapper memotong popup native browser (contoh: `overflow-hidden` di wrapper).

## Aturan Fix (Wajib)

1. Jangan pasang `overflow-hidden` di container preview umum.
- Untuk halaman docs, hindari di wrapper sekitar `preview`.

2. Untuk primitive dengan viewport/popup, padding taruh di konten internal.
- Contoh `ScrollArea`: `className="... border"` di root, lalu `<div className="p-4">...</div>` di dalam.

3. Fokus harus punya satu sumber visual utama.
- Jika wrapper sudah memberi ring, matikan ring di inner control.
- Hindari kombinasi `focus-visible:border-*` + `focus-visible:ring-*` ganda dari 2 layer.

4. Khusus native controls (`select`, dsb), jangan clip popup native.
- Hindari `overflow-hidden` pada wrapper elemen native.

## Checklist Debug Cepat

1. Inspect elemen yang bermasalah di DevTools.
2. Cek chain parent untuk `overflow-hidden`, `clip`, `mask`, `contain: paint`.
3. Cek apakah ring/border aktif di lebih dari satu layer saat focus.
4. Cek apakah padding diletakkan di primitive root, padahal harus di inner content.
5. Uji ulang setelah hard refresh (`Ctrl+F5`).

## Pola Implementasi yang Direkomendasikan

### ScrollArea

```tsx
<ScrollArea className="h-48 rounded-2xl border">
  <div className="p-4 space-y-2">{/* items */}</div>
</ScrollArea>
```

### Combobox/InputGroup (single focus surface)

- Wrapper mengatur ring/focus.
- Inner input jangan menggambar ring kedua.

### NativeSelect

- Pertahankan border/ring di elemen `select`.
- Wrapper jangan `overflow-hidden`.

## Konsistensi Registry

Jika fix dilakukan pada komponen UI:

1. Terapkan di `registry/<name>/<name>.tsx` (source of truth).
2. Sync ke `components/ui/<name>.tsx` bila diperlukan workflow lokal.
3. Verifikasi lint/build sebelum merge.

## Verifikasi Minimum

```bash
npx eslint app/_components/showcase.tsx app/docs/_components/*.tsx components/ui/*.tsx registry/**/*.tsx
```

Minimal validasi visual:

- `Select`
- `Combobox`
- `NativeSelect`
- `ScrollArea`
- `DropdownMenu/ContextMenu`

---

## ScrollArea: list item terpotong di sudut rounded

**Gejala**: teks item (atau highlight `::selection`-nya) terlihat terpotong di pojok `ScrollArea` yang `rounded-*`.

**Akar masalah**: container `overflow:hidden` + `rounded-2xl` (≈18px) meng-clip apapun yang masuk ke kurva sudut. Kalau konten full-bleed dengan padding < radius, glyph/selection bg di pojok ke-clip.

**Fix (HIG-pattern)**: jangan taruh teks polos full-bleed. Pakai pola Finder/Settings — tiap item `rounded-lg` self-contained dengan inset dari tepi:

```tsx
<ScrollArea className="h-48 rounded-2xl border">
  <div className="space-y-0.5 p-2">
    {items.map(item => (
      <div key={item} className="rounded-lg px-3 py-1.5 text-[13px] hover:bg-muted/60">
        {item}
      </div>
    ))}
  </div>
</ScrollArea>
```

Item ber-inset 8px (`p-2` parent) → tidak pernah menyentuh kurva sudut. Bonus: pola item-rounded match macOS Finder/Settings, lebih HIG dari list full-bleed.

**Aturan umum**: kalau parent punya `rounded-*` + `overflow-hidden`, inner content harus inset ≥ corner radius. Lebih aman: bikin tiap item rounded sendiri.

