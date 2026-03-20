"use server";

import { searchContent } from "@/lib/content";

export async function searchAction(query: string) {
  return await searchContent(query);
}