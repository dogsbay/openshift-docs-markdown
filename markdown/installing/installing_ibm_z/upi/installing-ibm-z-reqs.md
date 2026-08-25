---
title: "Installation requirements for {{ ibm_z_title }} and {{ ibm_linuxone_title }} infrastructure"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installation requirements for {{ ibm_z_title }} and {{ ibm_linuxone_title }} infrastructure {id="installing-ibm-z-reqs"}
{%- set context = "installing-ibm-z-reqs" %}

Before you begin an installation on {{ ibm_z_name }} infrastructure, be sure that your {{ ibm_z_name }} environment meets the following installation requirements. {._abstract}

For a cluster that contains user-provisioned infrastructure, you must deploy all of the required machines.

{% leveloffset +1 %}{% include "./modules/installation-machine-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_resource-requirements_{{ context }}" ._additional-resources}

*   [Bridging a HiperSockets LAN with a z/VM Virtual Switch ({{ ibm_name }} Documentation)](https://www.ibm.com/docs/en/zvm/latest?topic=networks-bridging-hipersockets-lan-zvm-virtual-switch)
*   [Scaling HyperPAV alias devices on Linux guests on z/VM](https://public.dhe.ibm.com/software/dw/linux390/perf/zvm_hpav00.pdf)
*   [Processors Resource/Systems Manager Planning Guide ({{ ibm_name }} Documentation)](https://www.ibm.com/docs/en/systems-hardware/zsystems/3932-A02?topic=library-prsm-planning-guide)
*   [IBM Dynamic Partition Manager (DPM) Guide ({{ ibm_name }} Documentation)](https://www.ibm.com/docs/en/systems-hardware/zsystems/3932-A02?topic=library-dynamic-partition-manager-dpm-guide)
*   [Topics in LPAR performance](https://www.vm.ibm.com/library/presentations/lparperf.pdf)
*   [Recommended host practices for {{ ibm_z_name }} & {{ ibm_linuxone_name }} environments](/scalability_and_performance/ibm-z-recommended-host-practices#ibm-z-recommended-host-practices)

{% leveloffset +2 %}{% include "./modules/installation-requirements-ibm-z.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/preferred-installation-requirements-ibm-z.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_storage_{{ context }}" ._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/csr-management.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-network-user-infra.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_network_{{ context }}" ._additional-resources}

*   [Configuring chrony time service](/installing/install_config/installing-customizing#installation-special-config-chrony_installing-customizing)

{% leveloffset +2 %}{% include "./modules/installation-dns-user-infra.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-dns-user-infra-example.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-load-balancing-user-infra.md" %}{% endleveloffset %}