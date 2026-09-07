{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Provision the DPU hosted cluster {id="dpf-hosted-cluster-provisioning"}
{%- set context = "dpf-hosted-cluster-provisioning" -%}
{%- set dpf_version = "26.4.1" %}

The DPF HCP Provisioner Operator automates the creation and lifecycle management of a hosted control plane cluster for DPU nodes. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-dpf-hosted-cluster-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-installing-hcp-provisioner.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-hcp-environment-variables.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-hcp-secrets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-dpucluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-dpfhcpprovisioner.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-verifying-hosted-cluster.md" %}{% endleveloffset %}