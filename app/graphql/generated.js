export const LocalesDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "Locales" },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "_site" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "locales" } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
}


export let SiteLocale

    ; (function (SiteLocale) {
        SiteLocale["De"] = "de"
        SiteLocale["En"] = "en"
        SiteLocale["Es"] = "es"
        SiteLocale["Fr"] = "fr"
        SiteLocale["It"] = "it"
        SiteLocale["Pt"] = "pt"
        SiteLocale["Ru"] = "ru"
        SiteLocale["Sv"] = "sv"
    })(SiteLocale || (SiteLocale = {}))