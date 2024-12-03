import type { PackageDetails } from "../../apis/types/PackageDetails";
import { getFeaturePackage } from "../../apis/queries/getFeaturePackage";

export interface homeLoaderResult{
    featurePackages: PackageDetails[]
}

export async function homeLoader(): Promise<homeLoaderResult>{
    const featurePackages = await getFeaturePackage() 

    
    return {
        featurePackages 
    }

}