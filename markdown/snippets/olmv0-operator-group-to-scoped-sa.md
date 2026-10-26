{%- set _mod_docs_content_type = "SNIPPET" %}


:::warning

To prevent privilege escalation, assign a service account with minimum required permissions to the Operator group.

If no service account is specified, {{ olmv0_first }} installs the Operator using the default cluster-scoped permissions.

For more information, see [Audit and secure delegated Operator installations (Red Hat Knowledgebase)](https://access.redhat.com/articles/7149230).

:::