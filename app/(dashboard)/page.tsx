"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { onOpen } = useNewAccount();

  return (
    <div>
      <div className="flex flex-col gap-y-4 mx-auto">
        <p>
          This is an authenticated route. You can only see this if you are
          logged in.
        </p>
        <div>
          <Button onClick={onOpen}>Create New Account</Button>
        </div>
      </div>
    </div>
  );
}
