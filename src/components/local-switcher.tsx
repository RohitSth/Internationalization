"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label className="border-2 rounded">
      <p className="sr-only">Change Language</p>
      <select
        defaultValue={localActive}
        className="bg-slate-950 py-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="id">Indonesian</option>
      </select>
    </label>
  );
};

export default LocalSwitcher;
