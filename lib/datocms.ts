import { cache } from 'react';

type Headers = {
    Authorization: string;
    'X-Include-Drafts'?: string;
    'X-Exclude-Invalid'?: string;
    'X-Visual-Editing'?: string;
    'X-Base-Editing-Url'?: string;
    'X-Environment'?: string;
};

const dedupedFetch = cache(
    async (
        body: string,
        includeDrafts: boolean = false,
        excludeInvalid: boolean = false,
        visualEditingBaseUrl: string | null = null,
        revalidate: number | null = null,
    ) => {
        const headers: Headers = {
            Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
            ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
            ...(excludeInvalid ? { 'X-Exclude-Invalid': 'true' } : {}),
            ...(visualEditingBaseUrl
                ? {
                    'X-Visual-Editing': 'vercel-v1',
                    'X-Base-Editing-Url': visualEditingBaseUrl,
                }
                : {}),
            ...(process.env.NEXT_DATOCMS_ENVIRONMENT
                ? { 'X-Environment': process.env.NEXT_DATOCMS_ENVIRONMENT }
                : {}),
        };

        const response = await fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: headers as HeadersInit,
            body,
            next: { revalidate: revalidate ? revalidate : 60 },
        })
        // console.log(response)
        const responseBody = await response.json();

        if (!response.ok) {
            throw new Error(
                `${response.status} ${response.statusText}: ${JSON.stringify(
                    responseBody,
                )}`,
            );
        }

        return responseBody;
    },
);

interface RequestParams {
    query: string;
    variables?: Record<string, any>;
    includeDrafts?: boolean;
    excludeInvalid?: boolean;
    visualEditingBaseUrl?: string | null;
    revalidate?: number;
}

export async function performRequest({
    query,
    variables = {},
    includeDrafts = false,
    excludeInvalid = false,
    visualEditingBaseUrl = null,
    revalidate = 60,
}: RequestParams) {
    const { data } = await dedupedFetch(
        JSON.stringify({ query, variables, revalidate }),
        includeDrafts,
        excludeInvalid,
        visualEditingBaseUrl,
        revalidate,
    );

    return data;
}
