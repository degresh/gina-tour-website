export type Refund = {
    id: number,
    registrationId: number,
    reason: string,
    status: string,
    rejectReason: string,
    url: string
}