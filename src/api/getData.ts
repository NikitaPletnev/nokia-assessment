
export const getData = ():Promise<Response> => {
    return fetch("http://localhost:5001/api/data");
};
