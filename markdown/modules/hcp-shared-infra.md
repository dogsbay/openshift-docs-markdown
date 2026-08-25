{%- set _mod_docs_content_type = "CONCEPT" %}
# Shared infrastructure between hosted and standalone control planes {id="hcp-shared-infra_{{ context }}"}

As a service provider, you can more effectively use your resources by sharing infrastructure between a standalone {{ product_title }} control plane and {{ hcp }}. A 3-node {{ product_title }} cluster can be a management cluster for a hosted cluster.  {._abstract}

Sharing infrastructure can be beneficial in constrained environments, such as in small-scale deployments where you need resource efficiency.

Before you share infrastructure, ensure that your infrastructure has enough resources to support {{ hcp }}. On the {{ product_title }} management cluster, nothing else can be deployed except {{ hcp }}. Ensure that the management cluster has enough CPU, memory, storage, and network resources to handle the combined load of the hosted clusters. Workload must not be demanding, and it must fall within a low queries-per-second (QPS) profile. For more information about resources and workload, see "Sizing guidance for {{ hcp }}".