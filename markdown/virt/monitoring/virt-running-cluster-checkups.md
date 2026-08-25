---
title: "{{ VirtProductName }} cluster checkup framework"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ VirtProductName }} cluster checkup framework {id="virt-running-cluster-checkups"}
{%- set context = "virt-running-cluster-checkups" %}

A _checkup_ is an automated test workload that you can use to verify if a specific cluster functionality works as expected. The cluster checkup framework uses native Kubernetes resources to configure and run the checkup. {._abstract}

{%- set FeatureName = "The {{ VirtProductName }} cluster checkup framework" %}
{% include "./snippets/technology-preview.md" %}

{%- set FeatureName = "" %}

As a developer or cluster administrator, you can use predefined checkups to improve cluster maintainability, troubleshoot unexpected behavior, minimize errors, and save time. You can review the results of the checkup and share them with experts for further analysis. Vendors can write and publish checkups for features or services that they offer and verify that their customer environments are configured correctly.

{% include "./snippets/virt-about-running-checkups.md" %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_running-cluster-checkups" ._additional-resources}
{% endif %}
{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Connecting a virtual machine to a Linux bridge network](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-connecting-vm-to-linux-bridge)
{% endif %}