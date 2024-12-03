
import type { PackageDetails } from "../types/PackageDetails";



export const getPackage = async (name: string): Promise<PackageDetails> =>{
    const response = await fetch('https://registry.npmjs.org/'+name)
    const data = await response.json()
    return data as PackageDetails
}