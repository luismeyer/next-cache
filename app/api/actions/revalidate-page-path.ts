"use server";

import { revalidatePath } from "next/cache";

export async function revalidatePagePath() {
  revalidatePath("/clock");
}
