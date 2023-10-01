import { environment } from "../environments/environment";

export async function toGetPath(idFrom: number | null, idTo: number | null): Promise<string> {

    const httpOptions = {
        headers : {
            Authorization: `bearer ${environment.apiTocken}`,
            'Content-Type': 'application/json',
        },
    };

    const initCaracter = fetch(`${environment.apiEndPoint}/characters/${idFrom}?populate=*`, httpOptions)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res.data);
            return res.data.attributes.name;
        });
    console.log(`idFrom : ${idFrom} - idTo : ${idTo}`);
    
    // return `idFrom : ${idFrom} - idTo : ${idTo}`;
    return await initCaracter;
}