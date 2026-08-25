---
title: Creating the ServiceMeshControlPlane
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating the ServiceMeshControlPlane {id="ossm-create-smcp"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ossm-create-smcp" %}

{% leveloffset +1 %}{% include "./modules/ossm-about-smcp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-control-plane-web.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-control-plane-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-validate-smcp-cli.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

{% leveloffset +1 %}{% include "./modules/ossm-about-control-plane-components-and-infrastructure-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-config-control-plane-infrastructure-node-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-config-individual-control-plane-infrastructure-node-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-config-control-plane-infrastructure-node-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-config-individual-control-plane-infrastructure-node-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-confirm-smcp-infrastructure-node.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/ossm-about-control-plane-and-cluster-wide-deployment.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-deploy-cluster-wide-control-plane-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-deploy-cluster-wide-control-plane-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-customize-smmr-cluster-wide.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-validate-smcp-kiali.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

{{ SMProductName }} supports multiple independent control planes within the cluster. You can create reusable configurations with `ServiceMeshControlPlane` profiles. For more information, see [Creating control plane profiles](/service_mesh/v2x/ossm-profiles-users#ossm-control-plane-profiles_ossm-profiles-users).

## Next steps {id="_next_steps"}

*   Add a project to the {{ SMProductShortName }} so that applications can be made available. For more information, see [Adding services to a service mesh](/service_mesh/v2x/ossm-create-mesh#ossm-create-mesh).