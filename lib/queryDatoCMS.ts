import { print } from "graphql"

export default async function queryDatoCMS(
    document: any, 
    variables: Record<string, any> = {}, 
    isDraft: boolean = false
) {
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Exclude-Invalid": "true",
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
    }

    if (isDraft) headers["X-Include-Drafts"] = "true"

    const { data } = await (
        await fetch("https://graphql.datocms.com/", {
            cache: "force-cache",
            next: { tags: ["datocms"] },
            method: "POST",
            headers,
            body: JSON.stringify({ query: print(document), variables })
        })
    ).json()
    return data
}
