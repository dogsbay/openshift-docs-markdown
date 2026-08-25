{%- set _mod_docs_content_type = "CONCEPT" %}
# Key features of Content Security Policy (CSP) {id="content-security-policy-overview_{{ context }}"}

A Content Security Policy (CSP) is delivered to the browser in the `Content-Security-Policy-Report-Only` response header. The policy is specified as a series of directives and values. Each directive type serves a different purpose, and each directive can have a list of values representing allowed sources. {._abstract}

## Directive Types {id="content-security-policy-directive-types_{{ context }}"}
The supported directive types include `DefaultSrc`, `ScriptSrc`, `StyleSrc`, `ImgSrc`, and `FontSrc`. These directives allow you to specify valid sources for loading different types of content for your plugin. Each directive type serves a different purpose. For example, `ScriptSrc` defines valid JavaScript sources, while `ImgSrc` controls where images can be loaded from.

## Values {id="content-security-policy-values_{{ context }}"}
Each directive can have a list of values representing allowed sources. For example, `ScriptSrc` can specify multiple external scripts. These values are restricted to 1024 characters and cannot include whitespace, commas, or semicolons. Additionally, single-quoted strings and wildcard characters (`*`) are disallowed.

## Unified Policy {id="content-security-policy-unified-policy_{{ context }}"}
The {{ product_title }} web console aggregates the CSP directives across all enabled `ConsolePlugin` custom resources (CRs) and merges them with its own default policy. The combined policy is then applied with the `Content-Security-Policy-Report-Only` HTTP response header.

## Validation Rules {id="content-security-policy-validation-rules_{{ context }}"}
*   Each directive can have up to 16 unique values.
*   The total size of all values across directives must not exceed 8192 bytes (8KB).
*   Each value must be unique, and additional validation rules are in place to ensure no quotes, spaces, commas, or wildcard symbols are used.