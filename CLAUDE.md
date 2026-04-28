@AGENTS.md

# CLAUDE Prompt Context for This Portfolio Project

Dokumen ini dipakai sebagai konteks tambahan agar AI assistant menghasilkan kode yang konsisten dengan struktur dan style project ini.

## What This File Is For

- Menjadi prompt baseline untuk task coding di project portfolio ini.
- Menjaga konsistensi style UI, layout section, dan animasi.
- Mengurangi hasil yang terlalu generic saat menambah section baru.

## Project Stack and Runtime

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + custom styles di app/globals.css
- Main page: app/page.tsx

## Folder Structure to Follow

- app/: halaman App Router dan global style
- app/assets/images/: image raster untuk konten section
- app/assets/svgs/: logo/icon SVG
- components/base/: komponen dasar reusable
- components/ui/: komponen UI level aplikasi
- public/: static asset publik

## Existing Visual Language

- Theme gelap dengan aksen orange
- Card style: rounded, border putih transparan, background glass/blur
- Motion style:
  - reveal-on-scroll untuk masuk elemen
  - parallax-panel untuk panel section
  - hover lift + glow + shimmer pada card interaktif
- Typography:
  - font utama dari variable --font-righteous
  - heading uppercase dengan tracking lebar pada title section

## UI Rules for New Sections

- Wajib konsisten dengan section yang sudah ada (About, Tech Stack, Education, Experience, Project, Contact).
- Gunakan class yang sudah ada jika memungkinkan, hindari membuat pattern visual yang bertabrakan.
- Untuk card baru, pertahankan bahasa visual:
  - border putih transparan
  - layer background hitam transparan
  - hover state halus
- Untuk animasi baru:
  - harus tetap aman untuk prefers-reduced-motion
  - jangan berlebihan agar tidak mengganggu readability

## Code Quality Rules

- TypeScript strict-friendly, hindari any jika tidak diperlukan.
- Perubahan sekecil mungkin dan fokus pada requirement user.
- Jangan ubah behavior section lain saat menambah fitur baru.
- Jika menambah data list, pakai typed object dan map rendering.

## Reusable Prompt Template

Gunakan template ini saat meminta AI mengerjakan task baru:

"""
Anda mengerjakan project portfolio Next.js App Router di folder root ini.

Tujuan:
[ISI TUJUAN TASK]

Konteks teknis:

- Edit utama biasanya di app/page.tsx dan app/globals.css.
- Design language harus konsisten: dark theme + orange accent + glass card + smooth reveal animation.
- Jangan ubah section lain di luar scope.

Instruksi implementasi:

1. Gunakan struktur komponen dan class yang sudah ada.
2. Pertahankan responsive behavior mobile dan desktop.
3. Tambahkan style seperlunya, hindari over-engineering.
4. Setelah edit, cek error TypeScript/CSS.

Output yang diharapkan:

- Ringkasan perubahan
- File yang diubah
- Catatan risiko jika ada
  """

## Quick Task Prompts

- "Tambahkan section baru yang visualnya senada dengan Education dan Experience, tetap one-column di mobile."
- "Refactor card style agar reusable tanpa mengubah tampilan existing."
- "Polish animasi section agar lebih premium tapi tetap ringan."
