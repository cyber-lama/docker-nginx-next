import {ParamsDictionary, Request, Response} from "express-serve-static-core";
import {ParsedQs} from "qs";

export type requestsT = {
        _request: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
        _response: Response<any, Record<string, any>, number>
}