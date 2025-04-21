import { Suspense } from "react";

import { AccountFilter } from "@/components/account-filter";
import { DateFilter } from "./date-filter";

const FiltersContent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2">
      <AccountFilter />
      <DateFilter />
    </div>
  );
};

export const Filters = () => {
  return (
    <Suspense>
      <FiltersContent />
    </Suspense>
  );
};
