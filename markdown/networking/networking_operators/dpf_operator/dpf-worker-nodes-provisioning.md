{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Add worker nodes and provision DPUs {id="dpf-worker-nodes-provisioning"}
{%- set context = "dpf-worker-nodes-provisioning" -%}
{%- set dpf_version = "26.4.1" %}

After the DPF Operator and the hosted cluster are configured, adjust the OVN-Kubernetes CNI settings, add DPU-equipped worker nodes to the management cluster, and provision the DPUs. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-dpf-enabling-ovnk-resource-injector.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-enabling-ovnk-dpu-host-mode.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-adding-workers-assisted-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-adding-workers-baremetal-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-approving-worker-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-verifying-dpu-provisioning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-configuring-hosted-cluster-auth.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-approving-dpu-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-verifying-system-readiness.md" %}{% endleveloffset %}