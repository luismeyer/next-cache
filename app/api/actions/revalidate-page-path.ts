"use server";

import { revalidatePath } from "next/cache";

export async function revalidatePagePath(timezone?: string) {
  revalidatePath(`/clock${timezone ? `/${timezone}` : ""}`);
}
