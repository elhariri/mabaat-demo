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
      <div className="flex gap-10 m-auto">
        <div className="flex flex-col">
          <div className="text-xl font-bold text-center mb-4">white</div>
          <div className="flex flex-col text-xl gap-10">
            {[1, 5, 7].map((item, index) => (
              <ExampleLink key={item} href={`/${item}`} text={`Example: ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-bold text-center mb-4">Green</div>
          <div className="flex flex-col text-xl gap-10">
            {[2, 6, 3, 4].map((item, index) => (
              <ExampleLink key={item} href={`/${item}`} text={`Example: ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
