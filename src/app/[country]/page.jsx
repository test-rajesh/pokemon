import Link from "next/link";

export default function page({ params }) {
  const { country } = params;

  return (
    <div>
      <h1>Country: {country}</h1>
      <button className="bg-white text-black">
        <Link href="/">Go to Home</Link>
      </button>
    </div>
  );
}
