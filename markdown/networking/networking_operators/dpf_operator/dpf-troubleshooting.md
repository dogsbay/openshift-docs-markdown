{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshoot DPF {id="dpf-troubleshooting"}
{%- set context = "dpf-troubleshooting" -%}
{%- set dpf_version = "26.4.1" %}

You can diagnose and resolve common NVIDIA DPF Operator issues with DPU provisioning, hosted cluster readiness, networking, and collect diagnostic logs for support.
These procedures complement the official NVIDIA debugging tools and guides. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-dpf-ts-dpu-provisioning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-ts-dpu-object-state.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-ts-node-readiness.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-ts-bmc-certificates.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-ts-worker-csr-approval.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-ts-dpu-node-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-troubleshooting-framework.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-troubleshooting-dpu-provisioning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-troubleshooting-hosted-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-troubleshooting-networking.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-troubleshooting-diagnostics.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [DOCA Platform Framework troubleshooting documentation](https://networking-docs.nvidia.com/dpf/26.4.1/troubleshooting)