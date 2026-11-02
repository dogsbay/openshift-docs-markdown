{%- set _mod_docs_content_type = "CONCEPT" %}

# Configuring inline validation for template fields {id="cluster-compare-configure-inline-diff_{{ context }}"}

You can enable inline regular expressions to validate template fields, especially in scenarios where Golang templating syntax is difficult to maintain or overly complex. Using inline regular expressions simplifies templates, improves readability, and allows for more advanced validation logic. {._abstract}

The `cluster-compare` plugin provides two functions for inline validation:

*   `regex`: Validates content in a field using a regular expression.
*   `capturegroups`: Enhances multi-line text comparisons by processing non-capture group text as exact matches, applying regular expression matching only within named capture groups, and ensuring consistency for repeated capture groups.

When you use either the `regex` or `capturegroups` function for inline validation, the `cluster-compare` plugin enforces that identically named capture groups have the same values across multiple fields within a template. This means that if a named capture group, such as `(?<username>[a-z0-9]+)`, appears in multiple fields, the values for that group must be consistent throughout the template.