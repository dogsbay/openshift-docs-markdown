---
title: Adding worker nodes to an on-premise cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Adding worker nodes to an on-premise cluster {id="adding-node-iso"}
{%- set context = "adding-node-iso" %}

You can add worker nodes to on-premise clusters by using the OpenShift CLI (`oc`) to generate an ISO image, which can then be used to boot one or more nodes in your target cluster.
This process can be used regardless of how you installed your cluster. {._abstract}

You can add one or more nodes at a time while customizing each node with more complex configurations, such as static network configuration, or you can specify only the MAC address of each node.
Any required configurations that are not specified during ISO generation are retrieved from the target cluster and applied to the new nodes.


:::note

`Machine` or `BareMetalHost` resources are not automatically created after a node has been successfully added to the cluster.

:::


Preflight validation checks are also performed when booting the ISO image to inform you of failure-causing issues before you attempt to boot each node.


Supported platforms
:   The following platforms are supported for this method of adding nodes:

    *   `baremetal`
    *   `vsphere`
    *   `nutanix`
    *   `none`

Supported architectures
:   The following architecture combinations have been validated to work when adding worker nodes using this process:

    *   `amd64` worker nodes on `amd64` or `arm64` clusters
    *   `arm64` worker nodes on `amd64` or `arm64` clusters
    *   `s390x` worker nodes on `s390x` clusters
    *   `ppc64le` worker nodes on `ppc64le` clusters

Adding nodes to your cluster
:   You can add nodes with this method in the following two ways:

    *   Adding one or more nodes using a configuration file.

    You can specify configurations for one or more nodes in the `nodes-config.yaml` file before running the `oc adm node-image create` command.
    This is useful if you want to add more than one node at a time, or if you are specifying complex configurations.
    *   Adding a single node using only command flags.

    You can add a node by running the `oc adm node-image create` command with flags to specify your configurations.
    This is useful if you want to add only a single node at a time, and have only simple configurations to specify for that node.

{% leveloffset +1 %}{% include "./modules/adding-node-iso-yaml.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/adding-node-iso-flags.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/adding-node-iso-configs.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Root device hints](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#root-device-hints_ipi-install-installation-workflow)