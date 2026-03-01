"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export function LogoutButton() {
  const handleLogout = async () => {
    await authClient
      .signOut()
      .then(() => {
        // Optionally, you can add a toast notification here for successful logout
        toast.success("Logged out successfully");
      })
      .catch(() => {
        // Optionally, you can add a toast notification here for logout failure
      });
  };
  return <Button onClick={handleLogout}>Logout</Button>;
}
