
export interface MasterResponse {
    data: MasterData;
    status: MasterStatus;
}

export interface MasterData {
    asof?: any;
    rows: [Stock];
}

export interface MasterStatus {
    rCode: number;
    rCodeMessage?: string;
    developerMessage?: string;
}



export interface Stock {
    symbol: string;
    name: string;
    lastsale: string;
    netchange: string
    pctchange: string;
    volume: string;
    marketCap: string;
    country: string;
    ipoyear: string;
    industry: string;
    sector: string;
    url: string;
}