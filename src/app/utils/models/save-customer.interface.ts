

export interface NewCustomer {
    Complete_Name: string | number | null | undefined;
    Contract_Date: string | number | null | undefined;
    Address_Customer: string | number | null | undefined;
    Id_Celphone_Plan: string | number | null | undefined;
    Documents: {
        DUI: string | number | null | undefined;
        NIT: string | number | null | undefined;
        AFP: string | number | null | undefined;
        ISSS: string | number | null | undefined;
    };
};