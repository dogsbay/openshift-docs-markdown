{%- set _mod_docs_content_type = "SNIPPET" %}

In {{ product_title }} {{ product_version }}.{{ olm_np_z_stream }}, {{ olmv0_first }} supports the inclusion of network policy manifests in the resource bundles of Operators. These tailored network policies protect against data leaks and harden against many attack vectors on {{ product_title }} clusters.


:::tip

    If your current version of OLM does not support tailored network policies, a
    notification is displayed in the following locations:

*   The {{ hybrid_console }}
*   The web console of the affected cluster

        Update to {product-title} {product-version}.{olm-np-z-stream} or later to
        enable OLM support for tailored network policies.

:::


For more information, including the planned timeline for releasing Red Hat-provided Operators with tailored network policies, see [Operators shipping with network policies may require OCP cluster upgrade before they can be upgraded (Red Hat Knowledgebase)](https://access.redhat.com/articles/7133113).