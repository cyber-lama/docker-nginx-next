import {IncomingMessage} from "http";

export type appConfig = Record<string, unknown>

export type dbConfig = string
export type serverConfig =  IncomingMessage