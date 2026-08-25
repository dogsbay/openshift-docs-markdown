---
title: Configuring an egress IP address
---

# Configuring an egress IP address {#configuring-egress-ips-ovn}

As a cluster administrator, you can configure the OVN-Kubernetes Container Network Interface (CNI) network plugin to assign one or more egress IP addresses to a namespace, or to specific pods in a namespace.

**Additional resources**

- [BZ#2039656 (Red Hat Bugzilla)](https://bugzilla.redhat.com/show_bug.cgi?id=2039656)
- [Per instance ({{ gcp_full }} documentation)](https://cloud.google.com/vpc/docs/quota#per_instance)
- [Alias IP ranges overview ({{ gcp_full }} documentation)](https://cloud.google.com/vpc/docs/alias-ip)
- [Networking limits ({{ azure_full }} documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits?toc=/azure/virtual-network/toc.json#networking-limits)
- [IP addresses per network interface per instance type ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI)

**Additional resources**

- [Longest prefix match routing (NetworkLessons documentation)](https://networklessons.com/cisco/ccna-200-301/longest-prefix-match-routing)

## Additional resources {#configuring-egress-ips-additional-resources}

- [LabelSelector meta/v1](/openshift-docs-markdown/rest_api/objects/index#labelselector-meta-v1)
- [LabelSelectorRequirement meta/v1](/openshift-docs-markdown/rest_api/objects/index#labelselectorrequirement-meta-v1)
