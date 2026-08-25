---
title: Troubleshooting Windows container workloads
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshooting Windows container workloads {id="windows-containers-troubleshooting"}
{%- set context = "windows-containers-troubleshooting" %}

You can troubleshoot Windows container workload issues to ensure that your Windows nodes are running correctly in your cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/wmco-does-not-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/investigating-why-windows-machine-compute-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/accessing-windows-node.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/accessing-windows-node-using-ssh.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/accessing-windows-node-using-rdp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/collecting-kube-node-logs-windows.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/collecting-windows-application-event-logs.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/collecting-containerd-logs-windows.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Configuring hybrid networking](/networking/ovn_kubernetes_network_provider/configuring-hybrid-networking#configuring-hybrid-ovnkubernetes)
*   [Containers on Windows troubleshooting (Microsoft documentation)](https://docs.microsoft.com/en-us/virtualization/windowscontainers/troubleshooting)
*   [Troubleshoot host and container image mismatches (Microsoft documentation)](https://docs.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/update-containers#troubleshoot-host-and-container-image-mismatches)
*   [Common Kubernetes problems with Windows (Microsoft documentation)](https://docs.microsoft.com/en-us/virtualization/windowscontainers/kubernetes/common-problems)