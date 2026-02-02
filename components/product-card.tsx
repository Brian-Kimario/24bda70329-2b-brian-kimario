// components/product-card.tsx
import { Product } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = Product;

function categoryVariant(category: Product["category"]) {
  if (category === "clothing") return "secondary";
  return "default";
}

export function ProductCard({ name, price, category }: Props) {
  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader>
        <CardTitle className="text-3xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span className="text-xl font-semibold">${price.toFixed(2)}</span>
        <Badge variant={categoryVariant(category)}>{category}</Badge>
      </CardContent>
    </Card>
  );
}
