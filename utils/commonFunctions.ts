export const convertToSlug = (value:string) => {
    return value?.toLowerCase().replace(/ /g, "-");
}