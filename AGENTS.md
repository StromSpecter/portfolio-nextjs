<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Portfolio Agent Rules (Always On)

Gunakan aturan ini untuk semua task coding di repo ini.

## Scope

- Framework: Next.js App Router (project-specific behavior may differ from common defaults)
- Language: TypeScript
- Styling: Tailwind CSS v4 + custom CSS di `app/globals.css`
- Halaman utama: `app/page.tsx`

## Mandatory Before Coding

1. Baca konteks file yang akan diubah terlebih dahulu.
2. Untuk perubahan Next.js/App Router, cek panduan relevan di `node_modules/next/dist/docs/`.
3. Lakukan perubahan sekecil mungkin dan tetap dalam scope request user.

## Project Structure Conventions

- `app/`: route App Router, layout, page, global styles
- `app/assets/images/`: image raster untuk konten
- `app/assets/svgs/`: SVG logos/icons
- `components/base/`: komponen dasar reusable
- `components/ui/`: komponen UI level fitur/halaman
- `public/`: static public assets

## UI and Design Conventions

- Pertahankan bahasa visual existing: dark theme, orange accent, glass panel, rounded cards.
- Gunakan motion yang sudah ada: `reveal-on-scroll`, `parallax-panel`, hover transitions.
- Setiap animasi baru harus aman untuk `prefers-reduced-motion`.
- Hindari pola UI yang tidak selaras dengan section existing.

## Coding Conventions

- Gunakan typed data model untuk list yang di-render.
- Hindari `any` kecuali benar-benar diperlukan.
- Jangan ubah behavior section lain bila tidak diminta.
- Pertahankan responsive behavior mobile dan desktop.

## Quality Gate

Sebelum selesai:

1. Pastikan tidak ada error TypeScript/lint dari perubahan yang dibuat.
2. Verifikasi class/style baru tidak merusak style section lain.
3. Berikan ringkasan perubahan dan file yang diubah.

## Documentation Map

- `AGENTS.md`: aturan always-on untuk agent di repo ini.
- `CLAUDE.md`: prompt context dan template task yang bisa dipakai ulang.
