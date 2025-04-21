"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import {
  CategoriesChart,
  CategoriesChartLoading,
} from "@/components/categories-chart";
import { Chart, ChartLoading } from "@/components/chart";
import { SpendingPie, SpendingPieLoading } from "@/components/spending-pie";
import { useGetSummary } from "@/features/summary/api/use-get-summary";

const DataChartsContent = () => {
  const params = useSearchParams();
  const from = params.get("from") || undefined;
  const to = params.get("to") || undefined;
  const accountId = params.get("accountId") || undefined;

  const { data, isLoading } = useGetSummary({ from, to, accountId });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="col-span-1 lg:col-span-3 xl:col-span-4">
          <ChartLoading />
        </div>
        <div className="col-span-1 lg:col-span-3 xl:col-span-2">
          <SpendingPieLoading />
        </div>
        <div className="col-span-1 lg:col-span-6 xl:col-span-6">
          <CategoriesChartLoading />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
      <div className="col-span-1 lg:col-span-3 xl:col-span-4">
        <Chart data={data?.days} />
      </div>
      <div className="col-span-1 lg:col-span-3 xl:col-span-2">
        <SpendingPie data={data?.topCategories} />
      </div>
      <div className="col-span-1 lg:col-span-6 xl:col-span-6">
        <CategoriesChart data={data?.categories} />
      </div>
    </div>
  );
};

export const DataCharts = () => {
  return (
    <Suspense
      fallback={
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          <div className="col-span-1 lg:col-span-3 xl:col-span-4">
            <ChartLoading />
          </div>
          <div className="col-span-1 lg:col-span-3 xl:col-span-2">
            <SpendingPieLoading />
          </div>
          <div className="col-span-1 lg:col-span-6 xl:col-span-6">
            <CategoriesChartLoading />
          </div>
        </div>
      }
    >
      <DataChartsContent />
    </Suspense>
  );
};
