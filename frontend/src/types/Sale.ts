import { FunctionOrConstructorTypeNodeBase, NamedImportBindings } from "typescript"
import { Seller } from "./Seller"

export type SaleSum = {
    sellerName: string;
    sum: number;
}

export type SaleSucess =  {
    sellerName: string;
    visited: number;
    deals: number;
}

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller
}

export type SalePage =  {
    content?: Sale[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size?: number;
    number: number;
    numberOfElements?: number;
    first: boolean;
    empty?: boolean;
}