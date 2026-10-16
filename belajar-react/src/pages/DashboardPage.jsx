import React, { useState } from 'react';

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700&family=DM+Sans:wght@400;500;700&display=swap');

.dash-root {
  --ink: #1f1830;
  --plum: #2b1b3d;
  --plum-soft: #3b2753;
  --paper: #f6f3fa;
  --line: #ddd6e8;
  --muted: #6b6380;
  --saffron: #f2b134;
  --mint: #7ed9b5;
  --rose: #f08fa8;

  min-height: 100vh;
  font-family: 'DM Sans', system-ui, sans-serif;
  color: var(--ink);
  background: var(--paper);
}
.dash-root *, .dash-root *::before, .dash-root *::after { box-sizing: border-box; }

/* ---------- Header ---------- */
.dash-header {
  background: var(--plum);
  color: #f4eefb;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.dash-brand { display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 16px; }
.dash-logo { display: grid; grid-template-columns: repeat(3, 8px); gap: 3px; align-items: end; height: 28px; }
.dash-logo span { display: block; border-radius: 2px; }
.dash-logo span:nth-child(1) { height: 12px; background: var(--saffron); }
.dash-logo span:nth-child(2) { height: 20px; background: var(--rose); }
.dash-logo span:nth-child(3) { height: 28px; background: var(--mint); }

.dash-logout {
  font: inherit; font-size: 14px; font-weight: 700;
  color: #f4eefb;
  background: transparent;
  border: 1.5px solid #5a4478;
  border-radius: 10px;
  padding: 9px 16px;
  cursor: pointer;
  transition: background .15s, border-color .15s;
}
.dash-logout:hover { background: var(--plum-soft); border-color: #7a62a0; }
.dash-logout:focus-visible { outline: 3px solid var(--saffron); outline-offset: 2px; }

/* ---------- Konten utama ---------- */
.dash-main { max-width: 1180px; margin: 0 auto; padding: 36px 32px 56px; }
.dash-title {
  font-family: 'Bricolage Grotesque', 'DM Sans', sans-serif;
  font-size: clamp(26px, 3vw, 36px);
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin: 0 0 6px;
}
.dash-lead { margin: 0 0 28px; color: var(--muted); }

/* ---------- Form tambah ---------- */
.dash-add {
  display: flex; flex-wrap: wrap; gap: 12px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 28px;
}
.dash-field {
  font: inherit; font-size: 15px; color: var(--ink);
  background: #fff;
  border: 1.5px solid var(--line);
  border-radius: 10px;
  padding: 11px 13px;
  transition: border-color .15s, box-shadow .15s;
}
.dash-field:hover { border-color: #c4b9d6; }
.dash-field:focus { outline: none; border-color: var(--plum); box-shadow: 0 0 0 4px rgba(242, 177, 52, .35); }
.dash-field::placeholder { color: #a59db8; }
.dash-add .dash-judul { flex: 1 1 240px; min-width: 0; }
.dash-primary {
  font: inherit; font-size: 15px; font-weight: 700;
  color: #fff; background: var(--plum);
  border: none; border-radius: 10px;
  padding: 11px 22px; cursor: pointer;
  transition: background .15s, transform .1s;
}
.dash-primary:hover { background: var(--plum-soft); }
.dash-primary:active { transform: scale(.985); }
.dash-primary:focus-visible { outline: 3px solid var(--saffron); outline-offset: 2px; }

/* ---------- Papan ---------- */
.dash-board { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; align-items: start; }
.dash-lane {
  background: #ece6f4;
  border-radius: 16px;
  padding: 16px;
  min-height: 260px;
  border-top: 5px solid var(--c);
}
.dash-lane-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.dash-lane-head h2 {
  margin: 0;
  font-family: 'Bricolage Grotesque', 'DM Sans', sans-serif;
  font-size: 19px; letter-spacing: -0.01em;
}
.dash-count {
  min-width: 28px; text-align: center;
  font-size: 13px; font-weight: 700;
  background: #fff; border-radius: 999px; padding: 2px 10px;
}
.dash-empty { margin: 0; padding: 22px 8px; text-align: center; color: var(--muted); font-size: 14px; }

.dash-card {
  background: #fff;
  border: 1px solid var(--line);
  border-left: 5px solid var(--c);
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 12px;
}
.dash-card h3 { margin: 0 0 8px; font-size: 16px; line-height: 1.3; }
.dash-chip {
  display: inline-block;
  font-size: 12px; font-weight: 700;
  background: #f1ecf8; color: var(--plum);
  border-radius: 6px; padding: 3px 9px;
}
.dash-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
.dash-mini {
  font: inherit; font-size: 13px; font-weight: 700;
  color: var(--plum); background: #f1ecf8;
  border: none; border-radius: 8px;
  padding: 7px 12px; cursor: pointer;
  transition: background .15s;
}
.dash-mini:hover { background: #e4daf2; }
.dash-mini:focus-visible { outline: 3px solid var(--saffron); outline-offset: 2px; }
.dash-mini.hapus { margin-left: auto; color: #b4233f; background: #fde8ec; }
.dash-mini.hapus:hover { background: #f9d3da; }

/* ---------- Responsif ---------- */
@media (max-width: 900px) {
  .dash-board { grid-template-columns: 1fr; }
  .dash-header { padding: 14px 20px; }
  .dash-main { padding: 24px 20px 48px; }
}
@media (prefers-reduced-motion: reduce) {
  .dash-field, .dash-primary, .dash-mini, .dash-logout { transition: none; }
}
`;

const TAHAP = [
  { id: 'ide', nama: 'Ide', warna: 'var(--saffron)' },
  { id: 'produksi', nama: 'Produksi', warna: 'var(--rose)' },
  { id: 'terbit', nama: 'Terbit', warna: 'var(--mint)' },
];

const DATA_AWAL = [
  { id: 1, judul: 'Review kamera mirrorless', platform: 'YouTube', tahap: 'ide' },
  { id: 2, judul: 'Vlog akhir pekan di Bandung', platform: 'Instagram', tahap: 'produksi' },
  { id: 3, judul: 'Unboxing mikrofon baru', platform: 'TikTok', tahap: 'terbit' },
];

export default function DashboardPage({ handleLogout }) {
  const [daftarKonten, setDaftarKonten] = useState(DATA_AWAL);
  const [judulInput, setJudulInput] = useState('');
  const [platformInput, setPlatformInput] = useState('YouTube');

  const tambahKonten = (e) => {
    e.preventDefault();
    if (!judulInput.trim()) return;
    setDaftarKonten([
      ...daftarKonten,
      { id: Date.now(), judul: judulInput.trim(), platform: platformInput, tahap: 'ide' },
    ]);
    setJudulInput('');
  };

  const pindahTahap = (id, arah) => {
    setDaftarKonten(
      daftarKonten.map((k) => {
        if (k.id !== id) return k;
        const indeks = TAHAP.findIndex((t) => t.id === k.tahap) + arah;
        if (indeks < 0 || indeks >= TAHAP.length) return k;
        return { ...k, tahap: TAHAP[indeks].id };
      })
    );
  };

  const hapusKonten = (id) => {
    setDaftarKonten(daftarKonten.filter((k) => k.id !== id));
  };

  return (
    <div className="dash-root">
      <style>{css}</style>

      <header className="dash-header">
        <div className="dash-brand">
          <div className="dash-logo" aria-hidden="true"><span /><span /><span /></div>
          Pelacak Konten
        </div>
        <button type="button" className="dash-logout" onClick={handleLogout}>
          Keluar
        </button>
      </header>

      <main className="dash-main">
        <h1 className="dash-title">Papan konten</h1>
        <p className="dash-lead">
          {daftarKonten.length} konten sedang dilacak. Pindahkan tiap konten saat tahapnya berubah.
        </p>

        <form className="dash-add" onSubmit={tambahKonten}>
          <input
            className="dash-field dash-judul"
            type="text"
            placeholder="Judul konten baru"
            aria-label="Judul konten baru"
            value={judulInput}
            onChange={(e) => setJudulInput(e.target.value)}
          />
          <select
            className="dash-field"
            aria-label="Platform"
            value={platformInput}
            onChange={(e) => setPlatformInput(e.target.value)}
          >
            <option>YouTube</option>
            <option>Instagram</option>
            <option>TikTok</option>
          </select>
          <button type="submit" className="dash-primary">Tambah konten</button>
        </form>

        <div className="dash-board">
          {TAHAP.map((tahap, indeks) => {
            const kontenTahap = daftarKonten.filter((k) => k.tahap === tahap.id);
            return (
              <section key={tahap.id} className="dash-lane" style={{ '--c': tahap.warna }}>
                <div className="dash-lane-head">
                  <h2>{tahap.nama}</h2>
                  <span className="dash-count">{kontenTahap.length}</span>
                </div>

                {kontenTahap.length === 0 && (
                  <p className="dash-empty">Belum ada konten di tahap ini.</p>
                )}

                {kontenTahap.map((k) => (
                  <article key={k.id} className="dash-card" style={{ '--c': tahap.warna }}>
                    <h3>{k.judul}</h3>
                    <span className="dash-chip">{k.platform}</span>
                    <div className="dash-actions">
                      {indeks > 0 && (
                        <button type="button" className="dash-mini" onClick={() => pindahTahap(k.id, -1)}>
                          Kembali ke {TAHAP[indeks - 1].nama}
                        </button>
                      )}
                      {indeks < TAHAP.length - 1 && (
                        <button type="button" className="dash-mini" onClick={() => pindahTahap(k.id, 1)}>
                          Lanjut ke {TAHAP[indeks + 1].nama}
                        </button>
                      )}
                      <button type="button" className="dash-mini hapus" onClick={() => hapusKonten(k.id)}>
                        Hapus
                      </button>
                    </div>
                  </article>
                ))}
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}