export type PaymentCreateRequest = {
    registrationId: number,
    amount: number,
    status: string,
    rejectReason: string,
    type: string,
    url: string
}