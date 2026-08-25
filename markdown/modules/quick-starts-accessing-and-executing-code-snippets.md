{%- set _mod_docs_content_type = "REFERENCE" %}
# Code snippet markdown reference {id="quick-starts-accessing-and-executing-code-snippets_{{ context }}"}

Embed executable and copyable CLI code snippets in a quick start using this markdown syntax. Executing a snippet requires the {{ web_terminal_op }}; copying works with or without it installed. {._abstract}

## Syntax for inline code snippets {id="quick-starts-syntax-for-inline-code-snippets_{{ context }}"}

```
`code block`{{copy}}
`code block`{{execute}}
```


:::note

If the `execute` syntax is used, the **Copy to clipboard** action is present whether you have the {{ web_terminal_op }} installed or not.

:::


## Syntax for multi-line code snippets {id="quick-starts-syntax-for-multi-line-code-snippets_{{ context }}"}

```
```
multi line code block
```{{copy}}

```
multi line code block
```{{execute}}
```