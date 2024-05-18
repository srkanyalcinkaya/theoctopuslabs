import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export async function POST(req) {
  const token = req.nextUrl.searchParams.get("token")

  if (token !== process.env.CACHE_INVALIDATION_SECRET_TOKEN) {
    console.log("token gelmedi")
    return NextResponse.json({ status: 401, body: { error: "Invalid Token" } })
  }

  try {
    revalidateTag("datocms")
    console.log("oldu")
  } catch (error) {
    console.log("olmadı")
    return NextResponse.json({
      status: 500,
      body: { message: "Failed to clear the cache", error }
    })
  }

  return NextResponse.json({ status: 200, body: { status: "Cache Cleared" } })
}
