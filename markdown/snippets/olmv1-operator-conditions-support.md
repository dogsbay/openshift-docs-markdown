{%- set _mod_docs_content_type = "SNIPPET" %}

{{ olmv1_first }} does not support the `OperatorConditions` API introduced in {{ olmv0 }}.

If an extension relies on only the `OperatorConditions` API to manage updates, the extension might not install correctly. Most extensions that rely on this API fail at start time, but some might fail during reconciliation.

As a workaround, you can pin your extension to a specific version. When you want to update your extension, consult the extension’s documentation to find out when it is safe to pin the extension to a new version.