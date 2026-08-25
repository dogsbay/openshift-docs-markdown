{%- set _mod_docs_content_type = "SNIPPET" %}

Currently, {{ olmv1_first }} supports installing cluster extensions that meet all of the following criteria:

*   The extension must use the `registry+v1` bundle format introduced in {{ olmv0 }}.
*   The extension must support installation via the `AllNamespaces` install mode.
    *   You can use the `SingleNamespace` and `OwnNamespace` install modes as a Technology Preview feature in {{ product_title }} {{ product_version }} .
*   The extension must not declare dependencies by using any of the following file-based catalog properties:
    *   `olm.gvk.required`
    *   `olm.package.required`
    *   `olm.constraint`

{{ olmv1 }} checks that the extension meets these constraints. If the extension does not meet these constraints, {{ olmv1 }} reports an error message in the cluster extension conditions.