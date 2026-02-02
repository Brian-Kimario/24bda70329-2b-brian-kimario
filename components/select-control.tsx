// components/select-control.tsx
"use client";

import { SelectOption } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  selectLabel: string;
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
};

export function SelectControl({
  selectLabel,
  value,
  onValueChange,
  options,
  placeholder,
}: Props) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-medium">{selectLabel}</span>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-56 h-10 bg-white text-lg">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
