import { searchPackages } from "../../apis/queries/SearchPackage"
import { PackageSummary } from "../../apis/types/PackageSummary"

export interface searchLoaderResults{
    searchResults: PackageSummary[]
}

const SearchLoader = async ({request}): Promise<searchLoaderResults> => {
    const { searchParams } = new URL(request.url)
    const term = searchParams.get('term')

    if(!term){
        throw new Error('Search term must be provided')
    }
    
    const results = await searchPackages(term)
    //const toppackages = ...

    return {
        searchResults: results
        //toppackage: toppackages
    }
}

export default SearchLoader