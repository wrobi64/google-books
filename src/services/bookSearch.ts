'use server'

import { BookData } from "@/types/Books";
import { redirect } from "next/navigation";

const DEV_API_URL = 'http://127.0.0.1:8000/search';

const PROD_API_URL = 'https://5vmvwhyxt6eudjhcnjofft3hkm0jervh.lambda-url.us-east-1.on.aws/search';

const API_URL = process.env.NODE_ENV === "production" ? PROD_API_URL : DEV_API_URL;

export async function bookSearch(q: string | undefined, offset?: number, limit?: number): Promise<BookData[]> {
  if (!q) {
    redirect('/');
  }
  try {
    const url = `${API_URL}?q=${q}&offset=${offset ?? 0}&limit=${limit ?? 40}`;
    const response = await fetch(url);
    const data = (await response.json()) as BookData[];
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`Woooooops daisy! An unexpected event just occurred: ${error}`);
  }
};
