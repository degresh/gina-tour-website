export type Payment = {
    id: number;
    registrationId: number;
    amount: number;
    status: string;
    rejectReason: string;
    type: string;
    url: string;
}