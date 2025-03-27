import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // Ensure two decimal places
  const formattedValue = value.toFixed(2);
  // Split decimal and integer parts
  const [integerPart, decimalPart] = formattedValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {integerPart}
      <span className="text-xs align-super">.{decimalPart}</span>
    </p>
  );
};

export default ProductPrice;
