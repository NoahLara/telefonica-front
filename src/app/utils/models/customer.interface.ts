

export interface Customer{
    Id_Customer: number;
    Complete_Name: string;
    Address_Customer: string;
    Contract_Date: string;
    Name_Plan: string;
    Price: number;
    Documents: {
        DUI: string;
        NIT: string;
        AFP: string;
        ISSS: string;
    };
};
