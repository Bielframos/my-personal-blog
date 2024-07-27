import { REVALIDATE_TAGS } from "@/lib/utils/variables"
import { revalidateTag } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
	const tag = request.nextUrl.searchParams.get("tag")

	if (tag && REVALIDATE_TAGS.includes(tag)) {
		revalidateTag(tag)

		return NextResponse.json({ revalidated: true, now: Date.now() })
	}

	return new Response("Use a valid tag", { status: 400 })
}
