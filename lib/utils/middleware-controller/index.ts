import { BaseRequest } from "@/requests/base-request"
import { MiddlewareParams } from "@/types"

interface IMiddlewaresController {
    setMiddleware: (middlewareParams:MiddlewareParams) => void;
    // deleteResponseTrackCallback: (callbackName:string) => void;
}

export class MiddlewaresController implements IMiddlewaresController{
    // adds middleware for each response
    setMiddleware(middlewareParams: MiddlewareParams){
        try {
            BaseRequest.middlewares.push(middlewareParams);  
        } catch (error) {
            console.error('setResponseTrackCallback gets an error', error);
        }
    }

    // remove one of middlewares
    deleteMiddleware(middlewareName:string){
        BaseRequest.middlewares = BaseRequest.middlewares.filter((middleware)=>middleware.name !== middlewareName);
    }
}