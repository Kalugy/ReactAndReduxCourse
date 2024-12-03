import { Params } from "react-router-dom"
import { getPackage } from "../../apis/queries/getPackage"
import { PackageDetails } from "../../apis/types/PackageDetails"

export interface DetailsLoaderResult{
    details: PackageDetails
}

interface loaderArgs {
    params: Params
}

//props object contain request with url etc, params
const detailsLoader = async ({ params } : loaderArgs): Promise<DetailsLoaderResult> => {
    const { name } = params
    if(!name){
        throw new Error('Name must be provided')
    }
    const details = await getPackage(name)

    return {
        details
    }
}

export default detailsLoader