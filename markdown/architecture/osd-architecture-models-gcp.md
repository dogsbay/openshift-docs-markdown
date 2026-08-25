{%- set _mod_docs_content_type = "ASSEMBLY" %}
# {{ product_title }} on {{ GCP }} architecture models {id="osd-architecture-models-gcp"}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "osd-architecture-models-gcp" %}

Understand the different cluster architecture models available for {{ product_title }} on {{ GCP }} to choose the deployment option that best fits your organization’s networking and security requirements. {._abstract}

{% leveloffset +1 %}{% include "./modules/osd-gcp-architecture.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/osd-understanding-private-service-connect.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/private-service-connect-psc-architecture.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/osd-private-psc-architecture-model-gcp.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/osd-private-architecture-model-gcp.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/osd-public-architecture-model-gcp.md" %}{% endleveloffset %}

## Additional resources {id="osd-architecture-models-additional-resources" ._additional-resources}

*   [Private Service Connect overview](/osd_gcp_clusters/creating-a-gcp-psc-enabled-private-cluster#creating-a-gcp-psc-enabled-private-cluster)
*   [Creating a cluster on {{ gcp_short }} with Workload Identity Federation authentication](/osd_gcp_clusters/creating-a-gcp-cluster-with-workload-identity-federation#osd-creating-a-cluster-on-gcp-with-workload-identity-federation)
*   [Creating a cluster on {{ gcp_short }} with Service Account authentication](/osd_gcp_clusters/creating-a-gcp-cluster-sa#osd-creating-a-cluster-on-gcp-sa)