"use server";

import { revalidatePath } from "next/cache";

export async function revalidateApiPath() {
  revalidatePath("/api/clock");
}
