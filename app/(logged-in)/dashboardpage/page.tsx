import { createClient } from "@/lib/server";

export default async function DashboardPage() {
  const client = await createClient(); // <-- Add `await` here

  const {
    data: { user },
    error,
  } = await client.auth.getUser();

  if (error) {
    console.error("Error fetching user:", error);
    return <div>Error fetching user</div>;
  }

  return <div>Hello {user?.email}</div>;
}
