import { SailsModelInterface } from "./sails.model.interface";
export declare abstract class SailsModel implements SailsModelInterface {
    id: string | null;
    createdAt: Date;
    updatedAt: Date;
    getEndPoint(): string;
    static serialize<U extends SailsModelInterface>(model: U): U;
    static unserialize<U extends SailsModelInterface>(modelClazz: any, data: U | U[]): U | U[];
}
