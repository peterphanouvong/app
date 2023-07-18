import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const AuthRoute = ({ children }: Props) => {
  const { isAuthenticated } = getKindeServerSession();

  if (!isAuthenticated())
    return <div>You must be authenticated to see this page. Go back.</div>;

  return <>{children}</>;
};
