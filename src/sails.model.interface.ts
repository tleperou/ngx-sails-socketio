export interface SailsModelInterface {
    id: string|null;
    createdAt: Date;
    updatedAt: Date;

    getEndPoint: () => string;
}
