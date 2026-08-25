{%- set _mod_docs_content_type = "CONCEPT" %}
# Hosted clusters on bare metal in a disconnected environment {id="hcp-dc-bm-hosted_{{ context }}"}

In a disconnected environment, creating a hosted cluster involves deploying hosted cluster objects, creating node pools, creating an `InfraEnv` resource, creating bare-metal hosts, and scaling the node pools as needed. {._abstract}

A hosted cluster is an {{ product_title }} cluster with its control plane and API endpoint hosted on a management cluster. The hosted cluster includes the corresponding data plane.