/**
 * The share links an anonymous caller may read through (Ed 2026-10-20,
 * "add it"): a thread's snapshot link is an unguessable id bound to one
 * snapshot row, and whoever holds it reads that one snapshot. A front-door
 * route that answers a link holder forwards an `anonymous` principal to its
 * owner, and the owner resolves the input id to one live record and hands the
 * handler only what that record names, so the handler cannot name another
 * record. Each kind is the record the link names, the input key that holds
 * its id, and the surface that forwards it. The list is closed; a new share
 * link is a new kind here, recorded with its ruling.
 */
export declare const SHARE_LINK_KINDS: {
    /**
     * A thread's snapshot, as services/api's `snapshots.get` and
     * `snapshots.streamingStatus` answer it today: the `snapshots` row is the
     * link, and a deleted row is a revoked link.
     */
    readonly snapshot: {
        readonly surface: "dashboard";
        readonly idKey: "id";
    };
    /**
     * A published status page (docs/design/app/public-status-pages), as
     * public-api's anonymous `statusPages.public.*` reads answer it: the slug of
     * a published, unsuspended, live `status_pages` row is the link, and hiding,
     * suspending, deleting or renaming the page revokes it. The handler reads
     * only that page's published content.
     */
    readonly status_page: {
        readonly surface: "public_api";
        readonly idKey: "slug";
    };
};
export type ShareLinkKind = keyof typeof SHARE_LINK_KINDS;
export declare const isShareLinkKind: (value: string) => value is ShareLinkKind;
