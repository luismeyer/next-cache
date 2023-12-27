"use server";

import { revalidatePath } from "next/cache";

export async function revalidateApiPath(timezone?: string) {
  revalidatePath("/api/clock");
}
