import { auth, signOut } from "@/auth";
import { RoleGate } from "@/components/auth/role-gate";
import { Button } from "@/components/ui/button";
import { UserRole } from "@prisma/client";

export default async function Page() {
  const session = await auth();

  return (
    <div>
      <RoleGate allowedRole={UserRole.ADMIN}>
        This is the admin page
        {JSON.stringify(session)}
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button type="submit">Sign Out</Button>
        </form>
      </RoleGate>
    </div>
  );
}
