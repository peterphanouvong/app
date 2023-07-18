import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import jwtDecode from "jwt-decode";
import { cookies } from "next/dist/client/components/headers";

export default function Home() {
  const { isAuthenticated, getUser, getFlag } = getKindeServerSession();
  const user = getUser();
  const flag = getFlag("create:event", false);

  return (
    <div>
      {isAuthenticated() ? (
        <>
          Well, well, well.. If it isn't
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <pre>
            {JSON.stringify(
              jwtDecode(
                JSON.parse(cookies().get("kinde_token")?.value || "{}")
                  .access_token
              ),
              null,
              2
            )}
          </pre>
          <pre>{JSON.stringify(flag, null, 2)}</pre>
          <button className="p-4 bg-blue-500 text-white rounded-md"></button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
