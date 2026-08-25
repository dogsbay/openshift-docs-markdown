---
title: Authenticating pods with short-term credentials
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-short-term-auth" %}
# Authenticating pods with short-term credentials {id="nodes-pods-short-term-auth"}
{% include "./_attributes/common-attributes.md" %}

Some {{ product_title }} clusters use short-term security credentials, created and managed outside the cluster, for individual components.
Applications in customer workloads on these clusters can authenticate by using the short-term authentication method that the cluster uses.

{% leveloffset +1 %}{% include "./modules/pod-short-term-auth-workflow.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pod-short-term-auth-prereqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/pod-short-term-auth-gcp-configuring.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pod-short-term-auth-gcp-cloud-sa.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pod-short-term-auth-gcp-cluster-sa.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pod-short-term-auth-gcp-deploy-pod.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_nodes-pods-short-term-auth"}

*   [Short-term credentials for components](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds)