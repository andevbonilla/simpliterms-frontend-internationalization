// this is for all request that need authentication
// -----JSON-----
// token, method, path, objData
export const NotAuthRequest = async (method: "GET" | "POST" | "PUT" | "DELETE", path:string, objData: any) => {

    try {

        const backendLink = `${process.env.NEXT_PUBLIC_BACKEND_LINK}${path}`;

        let response;

        if (method === "GET") {

            response = await fetch(backendLink, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                cache: 'no-cache'
            });

        }else{

            response = await fetch(backendLink, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objData)
            });

        };

        const data = await response.json();
        if (!data) {
            return {
                isError: "Sorry, there was an error in the server",
            };
        };

        if (data.res === false) {
            return {
                isError: data.message,
            };
        };

        return {
            isError: "",
            data 
        };

    } catch (_error) {
        console.log(_error, "Error doing the request Not Auth");
        return {
            isError: "sorry there was an error in the server",
        };
    }
};