---
title: "{{ VirtProductName }} Architecture"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ VirtProductName }} Architecture {id="virt-architecture"}
{%- set context = "virt-architecture" %}

{{ VirtProductName }} architecture consists of several Operators and components that manage the lifecycle, storage, networking, and scheduling of virtual machine workloads within the cluster. {._abstract}

The Operator Lifecycle Manager (OLM) deploys operator pods for each component of {{ VirtProductName }}:

*   Compute: `virt-operator`
*   Storage: `cdi-operator`
*   Network: `cluster-network-addons-operator`
*   Scaling: `ssp-operator`

OLM also deploys the `hyperconverged-cluster-operator` pod, which is responsible for the deployment, configuration, and life cycle of other components, and several helper pods: `hco-webhook`, and `hyperconverged-cluster-cli-download`.

After all operator pods are successfully deployed, you should create the `HyperConverged` custom resource (CR). The configurations set in the `HyperConverged` CR serve as the single source of truth and the entrypoint for {{ VirtProductName }}, and guide the behavior of the CRs.

The `HyperConverged` CR creates corresponding CRs for the operators of all other components within its reconciliation loop. Each operator then creates resources such as daemon sets, config maps, and additional components for the {{ VirtProductName }} control plane. For example, when the HyperConverged Operator (HCO) creates the `KubeVirt` CR, the {{ VirtProductName }} Operator reconciles it and creates additional resources such as `virt-controller`, `virt-handler`, and `virt-api`.

The OLM deploys the Hostpath Provisioner (HPP) Operator, but it is not functional until you create a `hostpath-provisioner` CR.

![Deployments](/images/cnv_components_main.png)

{% leveloffset +1 %}{% include "./modules/virt-about-hco-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-about-cdi-operator.md" %}{% endleveloffset %}

{% if not openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/virt-about-cluster-network-addons-operator.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-about-hpp-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-about-ssp-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-about-virt-operator.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [virtctl client commands](/virt/getting_started/virt-using-the-cli-tools#virt-using-the-cli-tools)