---
title: Service Mesh control plane configuration reference
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Service Mesh control plane configuration reference {id="ossm-reference"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ossm-reference" %}

You can customize your {{ SMProductName }} by modifying the default `ServiceMeshControlPlane` (SMCP) resource or by creating a completely custom SMCP resource. This reference section documents the configuration options available for the SMCP resource.

{% leveloffset +1 %}{% include "./modules/ossm-cr-example.md" %}{% endleveloffset %}

## spec parameters {id="_spec_parameters"}

{% leveloffset +2 %}{% include "./modules/ossm-cr-general.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-cr-profiles.md" %}{% endleveloffset %}

For information about creating profiles, see the [Creating control plane profiles](/service_mesh/v2x/ossm-profiles-users#ossm-control-plane-profiles_ossm-profiles-users).

For more detailed examples of security configuration, see [Mutual Transport Layer Security (mTLS)](/service_mesh/v2x/ossm-security#ossm-security-mtls_ossm-security).

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +2 %}{% include "./modules/ossm-cr-techPreview.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +2 %}{% include "./modules/ossm-cr-tracing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-cr-version.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-cr-threescale.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-cr-status.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_ossm-reference"}

*   For more information about how to configure the features in the `ServiceMeshControlPlane` resource, see the following links:
    *   [Security](/service_mesh/v2x/ossm-security#ossm-security-mtls_ossm-security)
    *   [Traffic management](/service_mesh/v2x/ossm-traffic-manage#ossm-routing-bookinfo_traffic-management)
    *   [Metrics and traces](/service_mesh/v2x/ossm-observability#ossm-observability)