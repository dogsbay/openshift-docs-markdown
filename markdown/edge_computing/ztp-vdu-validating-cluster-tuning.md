---
title: "Validating {{ sno }} cluster tuning for vDU application workloads"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Validating {{ sno }} cluster tuning for vDU application workloads {id="ztp-vdu-configuration-reference"}
{%- set context = "vdu-config-ref" %}

Before you can deploy virtual distributed unit (vDU) applications, you need to tune and configure the cluster host firmware and various other cluster configuration settings. Use the following information to validate the cluster configuration to support vDU workloads. {._abstract}

**Additional resources**
{._additional-resources}

*   [Workload partitioning in {{ sno }} with {{ ztp }}](/edge_computing/ztp-reference-cluster-configuration-for-vdu#ztp-workload-partitioning-sno_sno-configure-for-vdu)
*   [Reference configuration for deploying vDUs on {{ sno }}](/edge_computing/ztp-reference-cluster-configuration-for-vdu#sno-configure-for-vdu)

{% leveloffset +1 %}{% include "./modules/ztp-du-firmware-config-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/con-ztp-du-cluster-config-reference.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-recommended-cluster-mc-crs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Workload partitioning in {{ sno }} with {{ ztp }}](/edge_computing/ztp-reference-cluster-configuration-for-vdu#ztp-workload-partitioning-sno_sno-configure-for-vdu)
*   [Extracting source CRs from the ztp-site-generate container](/edge_computing/ztp-preparing-the-hub-cluster#ztp-preparing-the-ztp-git-repository_ztp-preparing-the-hub-cluster)

{% leveloffset +2 %}{% include "./modules/ztp-recommended-cluster-operators.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-recommended-cluster-kernel-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-checking-kernel-rt-in-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-checking-du-cluster-config.md" %}{% endleveloffset %}