import { backendUri } from "./url";

// return -> true if Auth false is not auth
export const validateIfAuthenticated = async(req: any) => {

            const cookieToken = req.cookies.get('x-token');

            if (!cookieToken) {
                return false;
            }

            try {
                
                const response = await fetch(`${backendUri}/api/auth/renew-token`, {
                                                method: 'GET',
                                                headers: {
                                                    'Authorization': `Bearer ${cookieToken.value}`
                                                },
                                            });
                if (!response.ok) {
                    return false;
                }

                try {
                    const jsonresponse = await response.json();
                    if (!jsonresponse.token) {
                        return false;
                    }else{
                        return true;
                    }
                } catch (error) {
                    return false;
                }    
                
                
            } catch (error) {
                return false;
            }

}