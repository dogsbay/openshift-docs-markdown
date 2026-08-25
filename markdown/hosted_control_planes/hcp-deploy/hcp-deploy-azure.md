---
title: "Deploying {{ hcp }} on {{ azure_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying {{ hcp }} on {{ azure_short }} {id="hcp-deploy-azure"}
{%- set context = "hcp-deploy-azure" %}

With {{ hcp }} on {{ azure_first }}, you can reduce the cost associated with dedicated control-plane node VMs for each cluster. You can provision compute nodes as {{ azure_short }} Virtual Machine Scale sets for dynamic scaling, and ensure credential isolation with per-cluster {{ azure_short }} service principals.

{%- set FeatureName = "{{ hcp_capital }} on {{ azure_short }}" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/hcp-azure-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ azure_short }} Workload Identity documentation](https://azure.github.io/azure-workload-identity/docs/)

{% leveloffset +2 %}{% include "./modules/hcp-azure-infra-creds.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-azure-setup-resources.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-azure-oidc.md" %}{% endleveloffset %}

**Additional resources**

*   [How to obtain the ccoctl tool for OpenShift 4 (Red&#160;Hat Knowledgebase article)](https://access.redhat.com/solutions/7001811)

{% leveloffset +2 %}{% include "./modules/hcp-azure-workload-id.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-azure-infra.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating {{ azure_short }} Workload Identities](/hosted_control_planes/hcp-deploy/hcp-deploy-azure#hcp-azure-workload-id_hcp-deploy-azure)

{% leveloffset +1 %}{% include "./modules/hcp-azure-mgmt-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-azure-hosted.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-cluster-capabilities.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-ref.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-proc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-azure-private.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-azure-private-subnet.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring an {{ azure_short }} management cluster for {{ hcp }}](/hosted_control_planes/hcp-deploy/hcp-deploy-azure#hcp-azure-mgmt-cluster_hcp-deploy-azure)
*   [Setting up an OIDC issuer](/hosted_control_planes/hcp-deploy/hcp-deploy-azure#hcp-azure-oidc_hcp-deploy-azure)

{% leveloffset +2 %}{% include "./modules/hcp-azure-private-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Setting up an OIDC issuer](/hosted_control_planes/hcp-deploy/hcp-deploy-azure#hcp-azure-oidc_hcp-deploy-azure)

{% leveloffset +2 %}{% include "./modules/hcp-azure-private-iam.md" %}{% endleveloffset %}

**Additional resources**

*   [Setting up an OIDC issuer](/hosted_control_planes/hcp-deploy/hcp-deploy-azure#hcp-azure-oidc_hcp-deploy-azure)
*   [Creating {{ azure_short }} Workload Identities](/hosted_control_planes/hcp-deploy/hcp-deploy-azure#hcp-azure-workload-id_hcp-deploy-azure)

{% leveloffset +2 %}{% include "./modules/hcp-azure-private-infra.md" %}{% endleveloffset %}

**Additional resources**

*   [Setting up an OIDC issuer](/hosted_control_planes/hcp-deploy/hcp-deploy-azure#hcp-azure-oidc_hcp-deploy-azure)

{% leveloffset +2 %}{% include "./modules/hcp-azure-private-hosted.md" %}{% endleveloffset %}

**Additional resources**

*   [Preparing a subnet for a private hosted cluster on {{ azure_short }}](/hosted_control_planes/hcp-deploy/hcp-deploy-azure#hcp-azure-private-subnet_hcp-deploy-azure)
*   [Installing the HyperShift Operator with private platform support](/hosted_control_planes/hcp-deploy/hcp-deploy-azure#hcp-azure-private-operator_hcp-deploy-azure)
*   [Configuring IAM resources for a private hosted cluster](/hosted_control_planes/hcp-deploy/hcp-deploy-azure#hcp-azure-private-iam_hcp-deploy-azure)
*   [Creating infrastructure for a private hosted cluster](/hosted_control_planes/hcp-deploy/hcp-deploy-azure#hcp-azure-private-infra_hcp-deploy-azure)

{% leveloffset +2 %}{% include "./modules/hcp-azure-private-access.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating a private {{ azure_short }} hosted cluster](/hosted_control_planes/hcp-deploy/hcp-deploy-azure#hcp-azure-private-hosted_hcp-deploy-azure)

{% leveloffset +2 %}{% include "./modules/hcp-azure-private-ts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-azure-autoscaling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-azure-delete.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-azure-cluster-delete.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-azure-infra-delete.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-azure-workload-id-delete.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-azure-delete-private.md" %}{% endleveloffset %}