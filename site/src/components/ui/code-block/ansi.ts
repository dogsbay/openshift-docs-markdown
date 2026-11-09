/**
 * A terminal's escape sequences in an `ansi` code block (dogsbay-ssg, 2026-11-04). Shared with
 * @dogsbay/render-html (copied by its sync-sources as `code-ansi.ts`), so both pipelines show and
 * copy the same text.
 *
 * One pattern, linear (each alternative is a run of one character class with a fixed end):
 *  - CSI: `ESC [` or the 8-bit `\x9b`, parameters, intermediates, a final byte — or cut off at the
 *    end of the text;
 *  - OSC (titles, `ESC ] 8` hyperlinks): to BEL or `ESC \`, or the end of the text;
 *  - `ESC` + intermediates + a final byte (`ESC ( B`, which `tput sgr0` writes), and any other
 *    two-byte escape.
 */
const SEQUENCE = /(?:\x1b\[|\x9b)[0-?]*[ -/]*(?:[@-~]|$)|\x1b\][^\x07\x1b]*(?:\x07|\x1b\\|$)|\x1b[ -/]*[0-~]?/g;

/** Is this sequence a colour or style (SGR, `ESC [ … m`), the only kind a highlighter draws? */
const SGR = /^(?:\x1b\[|\x9b)[0-9;:]*m$/;

/** The text as a terminal shows it, every escape sequence left out (plain rendering, copy). */
export function stripAnsi(s: string): string {
  return s.replace(SEQUENCE, "");
}

/**
 * Only the colour and style sequences kept, for Shiki's `ansi`: it reads `ESC [` as running to the
 * next `m`, so `ESC [2K` (erase line) ate the next letters (`Compiling` → `piling`), and it shows
 * an OSC hyperlink's bytes as text. What is left is what it draws correctly. 8-bit CSI is written
 * in its 7-bit form.
 */
export function ansiColoursOnly(s: string): string {
  return s.replace(SEQUENCE, (m) => (SGR.test(m) ? m.replace(/^\x9b/, "\x1b[") : ""));
}
