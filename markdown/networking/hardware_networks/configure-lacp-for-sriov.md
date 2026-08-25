---
title: High availability for pod-level bonds on SR-IOV networks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# High availability for pod-level bonds on SR-IOV networks {id="sriov-lacp-sriov"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "sriov-lacp-sriov" %}

For workloads by using pod-level bonding with SR-IOV virtual functions (VFs), despite an upstream switch failure, an underlying physical function (PF) might still report an `up` state. This creates a silent failure, as attached VFs remain up and pods continue to send traffic to a dead endpoint, causing packet loss.

The PF Status Relay Operator solves this issue by using Link Aggregation Control Protocol (LACP) as an active health check. In this configuration, each physical function (PF) is in its own single-member LACP bond with the upstream switch. When the Operator detects an LACP failure on a PF bond, it changes the link state of the attached VFs from `auto` to `disabled`. This action triggers the pod’s `active-backup` bond to fail over to its backup network path, maintaining high availability.

{%- set FeatureName = "Configuring LACP state monitoring for SR-IOV networks" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/installing-pfsr-operator-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-pfsr-operator-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lacp-switch-monitoring.md" %}{% endleveloffset %}