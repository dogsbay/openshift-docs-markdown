---
title: About OpenShift Service Mesh
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# About OpenShift Service Mesh {id="ossm-about"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ossm-about" %}


:::note

Because {{ SMProductName }} releases on a different cadence from {{ product_title }} and because the {{ SMProductName }} Operator supports deploying multiple versions of the `ServiceMeshControlPlane`, the {{ SMProductShortName }} documentation does not maintain separate documentation sets for minor versions of the product.  The current documentation set applies to the most recent version of {{ SMProductShortName }} unless version-specific limitations are called out in a particular topic or for a particular feature.

For additional information about the {{ SMProductName }} life cycle and supported platforms, refer to the [Platform Life Cycle Policy](https://access.redhat.com/support/policy/updates/openshift#ossm).

:::


{% leveloffset +1 %}{% include "./modules/ossm-servicemesh-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-core-features.md" %}{% endleveloffset %}