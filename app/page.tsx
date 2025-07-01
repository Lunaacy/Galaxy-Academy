import Header from "../src/components/header/header"; // adjust path if needed

export default function Home() {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/svg/mainil.svg")' }}
    >
      <Header />
      <main>
        {/* Your page content here */}
      </main>
    </div>
  );
}
