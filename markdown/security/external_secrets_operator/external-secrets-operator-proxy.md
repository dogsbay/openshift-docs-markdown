---
title: About the egress proxy for the External Secrets Operator for Red Hat OpenShift
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About the egress proxy for the External Secrets Operator for Red Hat OpenShift {id="external-secrets-operator-proxy"}
{%- set context = "external-secrets-operator-proxy" %}

If a cluster-wide egress proxy is configured in {{ product_title }}, the Operator Lifecycle Manager (OLM) automatically configures Operators that it manages with the cluster-wide proxy. OLM automatically updates all of the Operator deployments with the `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` environment variables. {._abstract}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-configure-proxy.md" %}{% endleveloffset %}

## Additional resources {id="external-resources-operator-proxy_additional-resources" ._additional-resources}

*   [Configuring proxy support in Operator Lifecycle Manager](/operators/admin/olm-configuring-proxy-support#olm-configuring-proxy-support)