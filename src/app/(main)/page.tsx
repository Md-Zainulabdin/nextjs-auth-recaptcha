import AuthButton from "@/components/auth-button";
import Session from "@/lib/session";

export default async function Home() {
  const session = await Session();
  const user = session?.user;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
        Hello {user ? user?.name : "World"}
      </h2>

      <div className="auth-button">
        <AuthButton session={session} />
      </div>
    </main>
  );
}
