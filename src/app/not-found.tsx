import Link from "next/link";

export default function NotFound() {
  return (
    <div className="priz" style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "0 16px" }}>
      <div style={{ maxWidth: 480, textAlign: "center" }}>
        <h1 style={{ fontSize: "7rem", lineHeight: 1, marginBottom: 16 }}>404</h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: 8, fontWeight: 800 }}>Página não encontrada</h2>
        <p style={{ marginBottom: 32 }}>A página que você procura não existe ou foi movida.</p>
        <Link href="/" className="btn-primary">Voltar para o início</Link>
      </div>
    </div>
  );
}
