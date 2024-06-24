"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label className="border-2 rounded">
      <p className="sr-only">Change Language</p>
      <select className="bg-slate-950 py-2" onChange={onSelectChange}>
        <option value="en">English</option>
        <option value="id">Indonesian</option>
      </select>
    </label>
  );
};

export default LocalSwitcher;
