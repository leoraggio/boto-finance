import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { convertAmountFromMiliunits } from "@/lib/utils";

export const useGetTransactions = (params?: {
  from?: string;
  to?: string;
  accountId?: string;
}) => {
  const from = params?.from || "";
  const to = params?.to || "";
  const accountId = params?.accountId || "";

  const query = useQuery({
    queryKey: ["transactions", { from, to, accountId }],
    queryFn: async () => {
      const response = await client.api.transactions.$get({
        query: {
          from,
          to,
          accountId,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch transactions");
      }

      const { data } = await response.json();
      return data.map((transaction) => ({
        ...transaction,
        amount: convertAmountFromMiliunits(transaction.amount),
      }));
    },
  });

  return query;
};
