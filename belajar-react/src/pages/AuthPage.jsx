import React, { useState } from 'react';

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700&family=DM+Sans:wght@400;500;700&display=swap');

.auth-root {
  --ink: #1f1830;
  --plum: #2b1b3d;
  --plum-soft: #3b2753;
  --paper: #fbfafc;
  --line: #ddd6e8;
  --muted: #6b6380;
  --saffron: #f2b134;
  --mint: #7ed9b5;
  --rose: #f08fa8;
  --danger-bg: #fde8ec;
  --danger: #b4233f;

  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  width: 100%;
  min-height: 100vh;
  font-family: 'DM Sans', system-ui, sans-serif;
  color: var(--ink);
  background: var(--paper);
  box-sizing: border-box;
}
.auth-root *, .auth-root *::before, .auth-root *::after { box-sizing: border-box; }

/* ---------- Panel kiri ---------- */
.auth-side {
  background: var(--plum);
  color: #f4eefb;
  padding: 48px 56px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
}
.auth-brand { display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 16px; }
.auth-logo { display: grid; grid-template-columns: repeat(3, 8px); gap: 3px; align-items: end; height: 28px; }
.auth-logo span { display: block; border-radius: 2px; }
.auth-logo span:nth-child(1) { height: 12px; background: var(--saffron); }
.auth-logo span:nth-child(2) { height: 20px; background: var(--rose); }
.auth-logo span:nth-child(3) { height: 28px; background: var(--mint); }

.auth-headline {
  font-family: 'Bricolage Grotesque', 'DM Sans', sans-serif;
  font-size: clamp(30px, 3.4vw, 46px);
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  max-width: 14em;
}
.auth-sub { margin: 0; color: #c9bddc; font-size: 16px; line-height: 1.6; max-width: 34em; }

.auth-board { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
.auth-lane { background: var(--plum-soft); border-radius: 14px; padding: 14px; min-height: 170px; }
.auth-lane h4 { margin: 0 0 12px; font-size: 13px; font-weight: 700; color: #e9ddf7; display: flex; align-items: center; gap: 8px; }
.auth-lane h4 i { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
.auth-item {
  background: #f7f2fc;
  color: var(--ink);
  border-radius: 9px;
  padding: 10px 11px;
  font-size: 13px;
  line-height: 1.35;
  margin-bottom: 8px;
  border-left: 4px solid var(--c, var(--saffron));
  animation: auth-drop 0.6s cubic-bezier(.2,.8,.2,1) both;
  animation-delay: var(--d, 0s);
}
@keyframes auth-drop {
  from { opacity: 0; transform: translateY(-14px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ---------- Panel kanan ---------- */
.auth-main { display: flex; align-items: center; justify-content: center; padding: 40px 24px; }
.auth-card { width: 100%; max-width: 380px; }
.auth-mobile-brand { display: none; margin-bottom: 28px; color: var(--ink); }
.auth-card h2 {
  font-family: 'Bricolage Grotesque', 'DM Sans', sans-serif;
  font-size: 32px;
  letter-spacing: -0.02em;
  margin: 0 0 6px;
}
.auth-card .auth-lead { margin: 0 0 28px; color: var(--muted); font-size: 15px; }

.auth-error {
  background: var(--danger-bg);
  color: var(--danger);
  border-radius: 10px;
  padding: 11px 14px;
  font-size: 14px;
  margin-bottom: 18px;
  border: 1px solid #f6c3cd;
}

.auth-field { margin-bottom: 18px; }
.auth-field label { display: block; font-size: 14px; font-weight: 500; margin-bottom: 7px; }
.auth-input-wrap { position: relative; }
.auth-input {
  width: 100%;
  padding: 13px 14px;
  font: inherit;
  font-size: 15px;
  color: var(--ink);
  background: #fff;
  border: 1.5px solid var(--line);
  border-radius: 10px;
  transition: border-color .15s, box-shadow .15s;
}
.auth-input::placeholder { color: #a59db8; }
.auth-input:hover { border-color: #c4b9d6; }
.auth-input:focus { outline: none; border-color: var(--plum); box-shadow: 0 0 0 4px rgba(242, 177, 52, 0.35); }
.auth-input.has-toggle { padding-right: 76px; }
.auth-toggle {
  position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
  background: none; border: none; cursor: pointer;
  font: inherit; font-size: 13px; font-weight: 700; color: var(--plum);
  padding: 6px 8px; border-radius: 6px;
}
.auth-toggle:hover { background: #efe9f7; }
.auth-toggle:focus-visible { outline: 3px solid var(--saffron); }

.auth-submit {
  width: 100%;
  margin-top: 6px;
  padding: 14px;
  font: inherit; font-size: 15px; font-weight: 700;
  color: #fff;
  background: var(--plum);
  border: none; border-radius: 10px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 10px;
  transition: background .15s, transform .1s;
}
.auth-submit:hover:not(:disabled) { background: var(--plum-soft); }
.auth-submit:active:not(:disabled) { transform: scale(0.985); }
.auth-submit:focus-visible { outline: 3px solid var(--saffron); outline-offset: 3px; }
.auth-submit:disabled { opacity: .75; cursor: wait; }
.auth-spinner {
  width: 16px; height: 16px; border-radius: 50%;
  border: 2.5px solid rgba(255,255,255,.35); border-top-color: #fff;
  animation: auth-spin .7s linear infinite;
}
@keyframes auth-spin { to { transform: rotate(360deg); } }

.auth-switch { margin: 26px 0 0; text-align: center; font-size: 14px; color: var(--muted); }
.auth-switch button {
  background: none; border: none; cursor: pointer;
  font: inherit; font-weight: 700; color: var(--plum);
  margin-left: 6px; padding: 2px 4px; border-radius: 4px;
  text-decoration: underline; text-decoration-color: var(--saffron);
  text-decoration-thickness: 3px; text-underline-offset: 4px;
}
.auth-switch button:focus-visible { outline: 3px solid var(--saffron); }

/* ---------- Responsif ---------- */
@media (max-width: 880px) {
  .auth-root { grid-template-columns: 1fr; }
  .auth-side { display: none; }
  .auth-mobile-brand { display: flex; }
  .auth-main { align-items: flex-start; padding-top: 48px; }
}
@media (prefers-reduced-motion: reduce) {
  .auth-item, .auth-spinner { animation: none; }
  .auth-input, .auth-submit { transition: none; }
}
`;

export default function AuthPage({ handleLoginBerhasil }) {
  const [isHalamanLogin, setIsHalamanLogin] = useState(true);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [namaInput, setNamaInput] = useState('');
  const [pesanError, setPesanError] = useState('');
  const [sedangLoading, setSedangLoading] = useState(false);
  const [tampilkanPassword, setTampilkanPassword] = useState(false);

  const prosesSubmit = (e) => {
    e.preventDefault();
    setPesanError('');
    setSedangLoading(true);

    setTimeout(() => {
      setSedangLoading(false);

      if (isHalamanLogin) {
        if (!emailInput || !passwordInput) {
          setPesanError('Email dan password tidak boleh kosong!');
          return;
        }
        localStorage.setItem('token', 'token-palsu-123');
        if (handleLoginBerhasil) handleLoginBerhasil();
      } else {
        if (!namaInput || !emailInput || !passwordInput) {
          setPesanError('Semua kolom wajib diisi!');
          return;
        }
        alert('Pendaftaran berhasil! Silakan masuk menggunakan akun baru Anda.');
        setIsHalamanLogin(true);
        setPasswordInput('');
      }
    }, 1000);
  };

  return (
    <div className="auth-root">
      <style>{css}</style>

      {/* Panel kiri: papan alur konten (dekoratif) */}
      <aside className="auth-side" aria-hidden="true">
        <div className="auth-brand">
          <div className="auth-logo"><span /><span /><span /></div>
          Pelacak Konten
        </div>

        <div>
          <h1 className="auth-headline">Pantau setiap konten dari ide sampai tayang.</h1>
          <p className="auth-sub">
            Catat ide, atur tahap produksi, dan lihat apa yang sudah terbit dalam satu papan.
          </p>
        </div>

        <div className="auth-board">
          <div className="auth-lane">
            <h4><i style={{ background: 'var(--saffron)' }} />Ide</h4>
            <div className="auth-item" style={{ '--c': 'var(--saffron)', '--d': '0.1s' }}>Review kamera mirrorless</div>
            <div className="auth-item" style={{ '--c': 'var(--saffron)', '--d': '0.25s' }}>Tips edit Reels</div>
          </div>
          <div className="auth-lane">
            <h4><i style={{ background: 'var(--rose)' }} />Produksi</h4>
            <div className="auth-item" style={{ '--c': 'var(--rose)', '--d': '0.4s' }}>Vlog akhir pekan di Bandung</div>
          </div>
          <div className="auth-lane">
            <h4><i style={{ background: 'var(--mint)' }} />Terbit</h4>
            <div className="auth-item" style={{ '--c': 'var(--mint)', '--d': '0.55s' }}>Unboxing mikrofon baru</div>
          </div>
        </div>
      </aside>

      {/* Panel kanan: form */}
      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-brand auth-mobile-brand">
            <div className="auth-logo"><span /><span /><span /></div>
            Pelacak Konten
          </div>

          <h2>{isHalamanLogin ? 'Masuk ke akun Anda' : 'Buat akun baru'}</h2>
          <p className="auth-lead">
            {isHalamanLogin
              ? 'Lanjutkan melacak konten Anda.'
              : 'Daftar untuk mulai melacak konten.'}
          </p>

          {pesanError && (
            <div className="auth-error" role="alert">{pesanError}</div>
          )}

          <form onSubmit={prosesSubmit} noValidate>
            {!isHalamanLogin && (
              <div className="auth-field">
                <label htmlFor="auth-nama">Nama lengkap</label>
                <input
                  id="auth-nama"
                  className="auth-input"
                  type="text"
                  autoComplete="name"
                  placeholder="Contoh: Budi Santoso"
                  value={namaInput}
                  onChange={(e) => setNamaInput(e.target.value)}
                />
              </div>
            )}

            <div className="auth-field">
              <label htmlFor="auth-email">Alamat email</label>
              <input
                id="auth-email"
                className="auth-input"
                type="email"
                autoComplete="email"
                placeholder="nama@email.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>

            <div className="auth-field">
              <label htmlFor="auth-password">Kata sandi</label>
              <div className="auth-input-wrap">
                <input
                  id="auth-password"
                  className="auth-input has-toggle"
                  type={tampilkanPassword ? 'text' : 'password'}
                  autoComplete={isHalamanLogin ? 'current-password' : 'new-password'}
                  placeholder="Masukkan kata sandi"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
                <button
                  type="button"
                  className="auth-toggle"
                  onClick={() => setTampilkanPassword(!tampilkanPassword)}
                  aria-label={tampilkanPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                >
                  {tampilkanPassword ? 'Sembunyikan' : 'Tampilkan'}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit" disabled={sedangLoading}>
              {sedangLoading && <span className="auth-spinner" aria-hidden="true" />}
              {sedangLoading ? 'Memproses...' : isHalamanLogin ? 'Masuk' : 'Buat akun'}
            </button>
          </form>

          <p className="auth-switch">
            {isHalamanLogin ? 'Belum punya akun?' : 'Sudah punya akun?'}
            <button
              type="button"
              onClick={() => {
                setIsHalamanLogin(!isHalamanLogin);
                setPesanError('');
              }}
            >
              {isHalamanLogin ? 'Daftar di sini' : 'Masuk di sini'}
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}