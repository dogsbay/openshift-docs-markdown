---
title: Installing the SR-IOV Network Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing the SR-IOV Network Operator {id="installing-sriov-operator"}
{%- set context = "installing-sriov-operator" %}

To manage SR-IOV network devices and network attachments on your cluster, install the Single Root I/O Virtualization (SR-IOV) Network Operator. By using this Operator, you can centralize the configuration and lifecycle management of your SR-IOV resources. {._abstract}

As a cluster administrator, you can install the Single Root I/O Virtualization (SR-IOV) Network Operator by using the {{ product_title }} CLI or the web console.

{% leveloffset +1 %}{% include "./modules/nw-sriov-installing-operator-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-installing-operator-web-console.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources_installing-sriov-operatoradoc}

*   [Configuring the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/configuring-sriov-operator#configuring-sriov-operator)