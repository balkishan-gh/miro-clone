"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useDebounceValue } from "usehooks-ts";
import { ChangeEvent, useState, useEffect } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounceValue(value, 5000);

  // The useDebounceValue hook from "usehooks-ts" is used to debounce the input value. Debouncing is a technique to delay the execution of a function until after a certain amount of time has elapsed since the last time it was invoked. In this case, it delays updating the debouncedValue state until 500 milliseconds after the user stops typing.

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: { search: debouncedValue },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue, router]);
  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 tranform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
