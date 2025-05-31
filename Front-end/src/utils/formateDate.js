export const formateDate = (data, config) => {

    const defaultOptions = { day: "numeric", month: "short", year: "numeric" };
    const options = config ? config : defaultOptions;

    return new Date(data).toLocaleDateString("en-US", options);
}