---
title: Kernel Module Management Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Kernel Module Management Operator {id="kernel-module-management-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "kernel-module-management-operator" %}

The Kernel Module Management (KMM) Operator deploys out-of-tree kernel modules and device plugins on {{ product_title }} clusters. You can use KMM to build, load, and manage kernel modules across cluster lifecycle stages.

{%- set FeatureName = "Kernel Module Management Operator" %}

{% leveloffset +1 %}{% include "./modules/kmm-about-kmm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-installation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-installing-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-installing-using-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-installing-older-versions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-configuring-kmmo.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing the Kernel Module Management Operator](/hardware_enablement/kmm-kernel-module-management#kmm-install_kernel-module-management-operator)

{% leveloffset +2 %}{% include "./modules/kmm-unloading-kernel-module.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-setting-kernel-firmware-search-path.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring the Kernel Module Management Operator](/hardware_enablement/kmm-kernel-module-management#kmm-configuring-kmmo_kernel-module-management-operator)

{% leveloffset +1 %}{% include "./modules/kmm-uninstalling-kmm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-uninstalling-kmmo-red-hat-catalog.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-uninstalling-kmmo-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-deploying-modules.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-creating-module-cr.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-setting-soft-dependencies-between-kernel-modules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-security.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding and managing pod security admission](/authentication/understanding-and-managing-pod-security-admission#understanding-and-managing-pod-security-admission)

{% leveloffset +1 %}{% include "./modules/kmm-replacing-in-tree-modules-with-out-of-tree-modules.md" %}{% endleveloffset %}

**Additional resources**

*   [Building a linux kernel module](https://fastbitlab.com/building-a-linux-kernel-module/)

{% leveloffset +2 %}{% include "./modules/kmm-example-module-cr.md" %}{% endleveloffset %}

**Additional resources**

*   [Replacing the CA Bundle certificate](/security/certificates/updating-ca-bundle#ca-bundle-replacing_updating-ca-bundle)

{% leveloffset +1 %}{% include "./modules/kmm-using-intree-modules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-symbolic-links-for-in-tree-dependencies.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-creating-kmod-image.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-running-depmod.md" %}{% endleveloffset %}

**Additional resources**

*   [Driver Toolkit](/hardware_enablement/psap-driver-toolkit#driver-toolkit)

{% leveloffset +2 %}{% include "./modules/kmm-building-in-cluster.md" %}{% endleveloffset %}

**Additional resources**

*   [Build configuration resources](/cicd/builds/build-configuration#build-configuration)
*   [Preflight validation for Kernel Module Management (KMM) Modules](/updating/preparing_for_updates/kmm-preflight-validation)

{% leveloffset +2 %}{% include "./modules/kmm-using-driver-toolkit.md" %}{% endleveloffset %}

**Additional resources**

*   [Driver Toolkit](/hardware_enablement/psap-driver-toolkit#driver-toolkit)

{% leveloffset +1 %}{% include "./modules/kmm-using-signing-with-kmm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-adding-the-keys-for-secureboot.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-checking-the-keys.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-signing-kmods-in-a-prebuilt-image.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-specifying-files-to-sign.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-defining-full-paths.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-using-wildcard-and-glob-patterns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-building-and-signing-a-kmod-image.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating service accounts](/authentication/understanding-and-creating-service-accounts#service-accounts-managing_understanding-service-accounts).

{% leveloffset +1 %}{% include "./modules/kmm-using-tolerations-for-kernel-module-scheduling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-applying-tolerations-to-kernel-module-pods.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding taints and tolerations](https://docs.openshift.com/container-platform/4.17/nodes/scheduling/nodes-scheduler-taints-tolerations.html#nodes-scheduler-taints-tolerations-about_nodes-scheduler-taints-tolerations)

{% leveloffset +1 %}{% include "./modules/kmm-hub-hub-and-spoke.md" %}{% endleveloffset %}

**Additional resources**

*   [Red&#160;Hat Advanced Cluster Management (RHACM)](https://www.redhat.com/en/technologies/management/advanced-cluster-management)

{% leveloffset +2 %}{% include "./modules/kmm-hub-kmm-hub.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing KMM](https://openshift-kmm.netlify.app/documentation/install/)

{% leveloffset +2 %}{% include "./modules/kmm-hub-installing-kmm-hub.md" %}{% endleveloffset %}

**Additional resources**

*   [KMM Operator bundle](https://catalog.redhat.com/software/containers/kmm/kernel-module-management-hub-operator-bundle/63d84cc33862da54bb19b8c6?architecture=amd64&image=654273ac86f7e537ae452f6ehttps://catalog.redhat.com/software/containers/kmm/kernel-module-management-hub-operator-bundle/63d84cc33862da54bb19b8c6?architecture=amd64&image=654273ac86f7e537ae452f6e)

{% leveloffset +3 %}{% include "./modules/kmm-hub-installing-kmm-hub-olm.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/kmm-hub-installing-kmm-hub-creating-resources.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-hub-using-the-managedclustermodule.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-hub-running-kmm-on-the-spoke.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-customizing-upgrades-for-kernel-modules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-day1-kernel-module-loading.md" %}{% endleveloffset %}

**Additional resources**

*   [Machine Config Operator](/machine_configuration/index#machine-config-index)

{% leveloffset +2 %}{% include "./modules/kmm-day1-supported-use-cases.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-day1-oot-kernel-module-loading-flow.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-day1-kernel-module-image.md" %}{% endleveloffset %}

**Additional resources**

*   [Driver Toolkit](/hardware_enablement/psap-driver-toolkit#driver-toolkit)

{% leveloffset +2 %}{% include "./modules/kmm-day1-in-tree-module-replacement.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-day1-mco-yaml-creation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-day1-machineconfigpool.md" %}{% endleveloffset %}

**Additional resources**

*   [About MachineConfigPool](https://www.redhat.com/en/blog/openshift-container-platform-4-how-does-machine-config-pool-work)

{% leveloffset +1 %}{% include "./modules/kmm-managing-day1-kmod-images.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-debugging-and-troubleshooting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-firmware-support.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-configuring-the-lookup-path-on-nodes.md" %}{% endleveloffset %}

**Additional resources**

*   [Machine Config Operator](/machine_configuration/index#machine-config-operator_machine-config-overview)

{% leveloffset +2 %}{% include "./modules/kmm-building-a-kmod-image.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-tuning-the-module-resource.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-day0-day2-installation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-layering-background.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-day0-day2-lifecycle-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-troubleshooting.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-reading-operator-logs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-observing-events.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kmm-must-gather-tool.md" %}{% endleveloffset %}

**Additional resources**

*   [About the must-gather tool](/support/gathering-cluster-data#about-must-gather_gathering-cluster-data)

{% leveloffset +3 %}{% include "./modules/kmm-gathering-data-for-kmm.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/kmm-gathering-data-for-kmm-hub.md" %}{% endleveloffset %}