import { cookies } from "next/headers";
import { AdminLoginForm } from "./login-form";
import { logoutAdmin } from "../actions/admin";
import { createClient } from "@supabase/supabase-js";
import { formatDistanceToNow } from "date-fns";
import { SiteNav } from "../_components/site-nav";

// We can bypass RLS since we are server side with the service role key,
// but for security it's best to always just use the service role for admin tasks.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export const metadata = {
  title: "Admin Dashboard | Maninder",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin_session")?.value === "true";

  if (!isAdmin) {
    return <AdminLoginForm />;
  }

  // Fetch recent messages
  const { data: messages } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  // Fetch recent subscribers
  const { data: subscribers } = await supabase
    .from("subscribers")
    .select("*")
    .order("subscribed_at", { ascending: false })
    .limit(50);

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-black dark:text-zinc-100">
      <SiteNav variant="product" />
      
      <main className="mx-auto max-w-6xl px-6 py-32">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-bold tracking-tighter">Admin Dashboard</h1>
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            >
              Logout
            </button>
          </form>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Messages Section */}
          <section>
            <h2 className="mb-6 text-xl font-bold flex items-center gap-2">
              Recent Messages
              <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs font-medium dark:bg-zinc-800">
                {messages?.length || 0}
              </span>
            </h2>
            <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden">
              {messages && messages.length > 0 ? (
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800 max-h-[600px] overflow-y-auto">
                  {messages.map((msg) => (
                    <div key={msg.id} className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold">{msg.name}</p>
                          <a href={`mailto:${msg.email}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                            {msg.email}
                          </a>
                        </div>
                        <span className="text-xs text-zinc-500 whitespace-nowrap">
                          {formatDistanceToNow(new Date(msg.created_at), { addSuffix: true })}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-pre-wrap mt-4 bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-zinc-500">No messages yet.</div>
              )}
            </div>
          </section>

          {/* Subscribers Section */}
          <section>
            <h2 className="mb-6 text-xl font-bold flex items-center gap-2">
              Newsletter Subscribers
              <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs font-medium dark:bg-zinc-800">
                {subscribers?.length || 0}
              </span>
            </h2>
            <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden">
              {subscribers && subscribers.length > 0 ? (
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800 max-h-[600px] overflow-y-auto">
                  {subscribers.map((sub) => (
                    <div key={sub.id} className="flex justify-between items-center p-4">
                      <a href={`mailto:${sub.email}`} className="font-medium hover:text-blue-600 dark:hover:text-blue-400">
                        {sub.email}
                      </a>
                      <span className="text-xs text-zinc-500">
                        {formatDistanceToNow(new Date(sub.subscribed_at), { addSuffix: true })}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-zinc-500">No subscribers yet.</div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
