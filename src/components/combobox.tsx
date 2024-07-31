"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Combobox({
  options,
  value,
  setValue,
  searchText = "Search Referring Provider...",
  searchEmptyText = "No Referring Provider found.",
}: {
  options: string[];
  value: any;
  setValue: any;
  searchText?: string;
  searchEmptyText?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? options.find((framework) => framework === value)
            : searchText}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent data-disabled={false} className="w-full p-0">
        <Command data-disabled={false} disablePointerSelection={false}>
          <CommandInput placeholder={searchText} />
          <CommandList aria-disabled="true">
            <CommandEmpty>{searchEmptyText}</CommandEmpty>
            <CommandGroup aria-disabled="false">
              {options.map((framework) => (
                <CommandItem
                  data-disabled={false}
                  style={{
                    pointerEvents: "auto",
                    opacity: 1,
                  }}
                  key={framework}
                  value={framework}
                  onSelect={(currentValue) => {
                    // setValue(currentValue === value ? "" : currentValue);
                    setValue(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
