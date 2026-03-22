import { RouterProvider } from "@tanstack/react-router";
import type { FC } from "react";
import { ReUiIconProvider } from "@/components/providers/reui-icon-provider";
import { SnackBar, SnackProvider } from "@/components/ui/snackbar";
import { router } from "@/routes/router";

export const App: FC = () => {
  return (
    <SnackProvider>
      <SnackBar position="bottom-center" />
      <ReUiIconProvider>
        <RouterProvider router={router} />
      </ReUiIconProvider>
    </SnackProvider>
  );
};
