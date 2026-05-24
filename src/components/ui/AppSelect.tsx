import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

interface AppSelectOption {
  label: string;

  value: string;
}

interface AppSelectProps {
  value: string;

  onValueChange: (value: string) => void;

  placeholder?: string;

  options: AppSelectOption[];

  className?: string;
}

export function AppSelect({
  value,
  onValueChange,
  placeholder,
  options,
  className,
}: AppSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={className}>
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
  );
}
