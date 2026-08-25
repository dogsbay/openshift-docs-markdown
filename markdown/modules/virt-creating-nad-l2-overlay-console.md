{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a NAD for layer 2 topology by using the web console {id="virt-creating-nad-l2-overlay-console_{{ context }}"}

You can create a network attachment definition (NAD) that describes how to attach a pod to the layer 2 overlay network. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with `cluster-admin` privileges.

**Procedure**

1.  Go to **Networking** → **NetworkAttachmentDefinitions** in the web console.
1.  Click **Create Network Attachment Definition**. The network attachment definition must be in the same namespace as the pod or virtual machine using it.
1.  Enter a unique **Name** and optional **Description**.
1.  Select **OVN Kubernetes L2 overlay network** from the **Network Type** list.
1.  Click **Create**.