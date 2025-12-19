"use server";

import { createClient } from "@/lib/supabase/ssr";
import { redirect } from "next/navigation";


export async function updatePassword(prevState: any, formData: FormData) {
    const password = formData.get("password") as string;
    const passwordConfirm = formData.get("confirmPassword") as string;

    if (password !== passwordConfirm) {
        return { error: "Passwords do not match" };
    }

    const supabase = await createClient();

    const { error } = await supabase.auth.updateUser({
        password: password,
    });

    if (error) {
        return { error: error.message };
    }

    redirect("/milow?message=Password updated successfully");
}
