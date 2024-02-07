import { PropsWithChildren } from "react";

interface PageProps {
  title?: string;
}

function Page({ title, children }: PropsWithChildren<PageProps>) {
  return (
    <main className="max-w-screen-lg mx-auto flex flex-col">
      {title && <h1 className="text-3xl font-bold  mb-8">{title}</h1>}
      {children}
    </main>
  );
}

export default Page;
