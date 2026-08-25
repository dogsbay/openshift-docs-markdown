---
title: Troubleshooting Windows container workload issues
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Troubleshooting Windows container workload issues {id="troubleshooting-windows-container-workload-issues"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "troubleshooting-windows-container-workload-issues" %}

Use the following sections to troubleshoot Windows container workload issues.

{% leveloffset +1 %}{% include "./modules/wmco-does-not-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/investigating-why-windows-machine-compute-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/accessing-windows-node.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/accessing-windows-node-using-ssh.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/accessing-windows-node-using-rdp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/collecting-kube-node-logs-windows.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/collecting-windows-application-event-logs.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/collecting-containerd-logs-windows.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Configuring hybrid networking](/networking/ovn_kubernetes_network_provider/configuring-hybrid-networking#configuring-hybrid-ovnkubernetes)
*   [Containers on Windows troubleshooting](https://docs.microsoft.com/en-us/virtualization/windowscontainers/troubleshooting)
*   [Troubleshoot host and container image mismatches](https://docs.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/update-containers#troubleshoot-host-and-container-image-mismatches)
*   [Common Kubernetes problems with Windows](https://docs.microsoft.com/en-us/virtualization/windowscontainers/kubernetes/common-problems)