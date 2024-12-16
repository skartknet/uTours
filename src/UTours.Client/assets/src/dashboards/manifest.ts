import type { ManifestDashboard } from "@umbraco-cms/backoffice/extension-registry";

const dashboards: Array<ManifestDashboard> = [
    {
        type: 'dashboard',
        name: 'UTours',
        alias: 'UTours.dashboard',
        elementName: 'UTours-dashboard',
        js: ()=> import('./dashboard.element.js'),
        weight: -10,
        meta: {
            label: 'UTours',
            pathname: 'UTours'
        },
        conditions: [
            {
                alias: 'Umb.Condition.SectionAlias',
                match: 'Umb.Section.Content'
            }
        ]
    }
]

export const manifests = [...dashboards];