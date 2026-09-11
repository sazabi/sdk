/**
 * The client-side half of the preview naming contract (ENG-7247; design
 * doc's "Decision: One naming contract"): `(pr, service)` -> public host
 * `<svc>-pr<n>.preview.development.sazabi.dev`.
 *
 * The preview-variant chart and ApplicationSet (design doc PR 5) that
 * actually stand up a variant at this hostname are separate, not-yet-built
 * work — this module only has to agree with that future contract's output
 * format, not construct it end to end.
 */
export interface BuildPreviewVariantHostnameOptions {
    serviceName: string;
    previewId: string;
}
/**
 * Builds the public hostname for `serviceName`'s variant under `previewId`.
 * Returns `undefined` — never throws — when `previewId` doesn't match the
 * `pr-<n>` contract, so a malformed or unexpected ambient value fails open
 * to "no variant hostname" rather than producing a nonsense host.
 *
 * Named options rather than two adjacent same-typed strings — a swapped
 * positional pair would fail closed here (a serviceName like `"auth"`
 * never matches `PREVIEW_ID_PATTERN`, so the swap just returns
 * `undefined`), but there's no reason to rely on that instead of ruling
 * the mistake out structurally.
 */
export declare const buildPreviewVariantHostname: ({ serviceName, previewId, }: BuildPreviewVariantHostnameOptions) => string | undefined;
