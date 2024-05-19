import { LocalesDocument } from "../graphql/generated"
import queryDatoCMS from "../lib/queryDatoCMS"


export default async function getAvailableLocales() {
    const { _site } = await queryDatoCMS(LocalesDocument)

    return _site.locales
}

export async function getFallbackLocale() {
    const { _site } = await queryDatoCMS(LocalesDocument)

    return _site.locales[0] //using the first ordered locale as fallback
}

export const primaryColor = "rgb(var(--color-primary))"
