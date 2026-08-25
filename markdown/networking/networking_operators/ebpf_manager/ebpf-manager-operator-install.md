---
title: Installing the eBPF Manager Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing the eBPF Manager Operator {id="bpfman-operator-install"}
{%- set context = "bpfman-operator-install" %}

To manage eBPF programs across your cluster nodes, you can install the eBPF Manager Operator by using the {{ product_title }} CLI or the web console. This Operator provides a standardized way to deploy, monitor, and secure eBPF-based networking and observability tools. {._abstract}

{%- set FeatureName = "eBPF Manager Operator" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/nw-bpfman-operator-installing-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-bpfman-operator-installing-console.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Deploying a containerized eBPF program](/networking/networking_operators/ebpf_manager/ebpf-manager-operator-deploy#bpfman-operator-deploy)
*   [Configuring Ingress Node Firewall Operator to use the eBPF Manager Operator](/networking/networking_operators/ingress-node-firewall-operator#bpfman-infw-configure_ingress-node-firewall-operator)