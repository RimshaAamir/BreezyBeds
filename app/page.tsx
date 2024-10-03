// pages/index.js
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-primaryText">
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Welcome to Breezy Beds</h1>
        {/* Additional content */}
      </main>
    </div>
  );
}
