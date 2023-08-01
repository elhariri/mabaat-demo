import Link from "next/link";

function ExampleLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="border border-black rounded-full px-4 py-2">
      <span>{text}</span>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="flex absolute inset-0 text-black">
      <div className="flex flex-col m-auto text-xl gap-10">
        {[1, 2, 3, 4, 5].map((item) => (
          <ExampleLink key={item} href={`/${item}`} text={`Example: ${item}`} />
        ))}
      </div>
    </div>
  );
}
