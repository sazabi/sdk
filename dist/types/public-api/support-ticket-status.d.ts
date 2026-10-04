/**
 * The support desk's built-in states, plus `open`: every state except
 * `closed`. Kept out of `support-tickets.ts` so the CLI can import the values
 * without loading the operation schemas.
 */
export declare const SUPPORT_TICKET_STATUS_FILTERS: readonly ["open", "new", "waiting_on_you", "waiting_on_customer", "on_hold", "closed"];
export type SupportTicketStatusFilter = (typeof SUPPORT_TICKET_STATUS_FILTERS)[number];
