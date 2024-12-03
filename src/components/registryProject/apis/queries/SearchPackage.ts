
interface searchResponse{
    objects: {
        package:{
            name: string;
            description: string;
            version: string;
            keywords: string[];
        }
    }[]
}
export const searchPackages = async (term: string) =>{
    const response = await fetch('https://registry.npmjs.org/-/v1/search?text='+term)
    const data : searchResponse = await response.json()
    return data.objects.map((res)=>{
        return{
            name: res.package.name,
            description: res.package.description,
            version: res.package.version,
            keywords: res.package.keywords
        }
    })
}