{%- set _mod_docs_content_type = "CONCEPT" %}
# Update hardware on vSphere nodes {id="update-hardware-on-vsphere-nodes-con_{{ context }}"}

You must ensure that your nodes running in vSphere are running on the hardware version supported by {{ product_title }}. Currently, hardware version 15 or later is supported for vSphere virtual machines in a cluster. You can update your virtual hardware immediately or schedule an update in vCenter. {._abstract}


:::important

*   Version {{ product_version }} of {{ product_title }} requires VMware virtual hardware version 15 or later.

:::



:::warning

Updating custom API certificates triggers the Machine Config Operator (MCO) to initiate a rolling reboot of the control plane nodes. These nodes must be updated serially. Ensure each node returns to a `Ready` state and the `etcd` static pods are healthy before the next node in the sequence begins its update. Failure to do so might result in a loss of etcd quorum and cluster-wide downtime.

:::