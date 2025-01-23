import { revalidateTag } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const tags = request.nextUrl.searchParams.getAll("tag")

  if (tags.length >= 1) {
    for (const tag of tags) {
      revalidateTag(tag)
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  }

  return new Response("Use a valid tag", { status: 400 })
}

