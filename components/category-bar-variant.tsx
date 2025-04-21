import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { CategoryBarTooltip } from "@/components/category-bar-tooltip";

type Props = {
  data: {
    name: string;
    value: number;
  }[];
};

export const CategoryBarVariant = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="name"
          tickFormatter={(value) => value}
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <Tooltip content={<CategoryBarTooltip />} />
        <Bar dataKey="value" fill="#3b82f6" className="drop-shadow-sm" />
      </BarChart>
    </ResponsiveContainer>
  );
};
