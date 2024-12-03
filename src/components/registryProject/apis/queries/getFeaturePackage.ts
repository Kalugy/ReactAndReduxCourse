import type { PackageDetails } from "../types/PackageDetails";

const FEATURE_PACKAGES = [
    'react',
    'vite',
    'typescript',
    'esbuild'
]

export async function getFeaturePackage(){

    const promises = FEATURE_PACKAGES.map(async (name) => {
        const res = await fetch('https://registry.npmjs.org/'+name)
        return res.json()
    })

    const data = await Promise.all(promises)

    return data as PackageDetails[]
}