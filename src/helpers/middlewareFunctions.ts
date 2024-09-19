import { backendUri } from "./url";

export const validateIfAuthenticated = async(req: any) => {

            const cookieToken = req.cookies.get('x-token');

            if (!cookieToken) {
                return true;
            }

            try {
                
                const response = await fetch(`${backendUri}/api/auth/renew-token`, {
                                                method: 'GET',
                                                headers: {
                                                    'Authorization': `Bearer ${cookieToken.value}`
                                                },
                                            });
                if (!response.ok) {
                    return true
                }

                try {
                    const jsonresponse = await response.json();
                    if (!jsonresponse.token) {
                        return true
                    }else{
                        return false;
                    }
                } catch (error) {
                    return true;
                }    
                
                
            } catch (error) {
                return true;
            }

}