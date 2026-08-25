{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Linux bridge NAD by using the web console {id="virt-creating-linux-bridge-nad-web_{{ context }}"}

Use the {{ product_title }} web console to create a network attachment definition (NAD) that connects pods and virtual machines to a layer-2 network. {._abstract}


:::warning

Configuring IP address management (IPAM) in a network attachment definition for virtual machines is not supported.

:::


**Procedure**

1.  In the web console, click **Networking** → **NetworkAttachmentDefinitions**.
1.  Click **Create Network Attachment Definition**.

    :::note

    The network attachment definition must be in the same namespace as the pod or virtual machine.
    
    :::

1.  Enter a unique **Name** and optional **Description**.
1.  Select **CNV Linux bridge** from the **Network Type** list.
1.  Enter the name of the bridge in the **Bridge Name** field.
1.  Optional: If the resource has VLAN IDs configured, enter the ID numbers in the **VLAN Tag Number** field.
{%- if not openshift_dedicated %}

    :::note

    Open Systems Adapter (OSA) interfaces on {{ ibm_z_name }} do not support VLAN filtering and drop VLAN-tagged traffic. Avoid using VLAN-tagged NADs with OSA interfaces.
    
    :::

{%- endif %}
1.  Optional: Select **MAC Spoof Check** to enable MAC spoof filtering. This feature provides security against a MAC spoofing attack by allowing only a single MAC address to exit the pod.
1.  Optional: In the **YAML** tab, add the `spec.config.disableContainerInterface` field. When set to `true`, the Bridge CNI plug-in skips creating a standard container virtual ethernet (`veth`) interface inside the pod’s network namespace. This enables the virtualization networking backend to attach the layer-2 interface directly to the guest VM instead of a standard container.

    Example YAML:
    ```yaml
    apiVersion: "k8s.cni.cncf.io/v1"
    kind: NetworkAttachmentDefinition
    metadata:
      name: bridge-network
      annotations:
        k8s.v1.cni.cncf.io/resourceName: bridge.network.kubevirt.io/br1
    spec:
      config: |
        {
    # ...
          "disableContainerInterface": true,
    # ...
        }
    ```
1.  Click **Create**.