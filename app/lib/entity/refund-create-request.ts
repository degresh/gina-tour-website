export type RefundCreateRequest = {
    registrationId: number,
    reason: string,
    status: string,
    rejectReason: string,
    url: string
}