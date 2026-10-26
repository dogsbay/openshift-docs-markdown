{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure an SR-IOV additional network {id="shared-virt-nw-sriov-additional-network_{{ context }}"}

You can configure an additional network that uses SR-IOV hardware by creating an `SriovNetwork` object.
When you create an `SriovNetwork` object, the SR-IOV Network Operator automatically creates a `NetworkAttachmentDefinition` object. {._abstract}


:::note

Do not modify or delete an `SriovNetwork` object if it is attached to a virtual machine (VM) in a `running` state.

:::


**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create the following `SriovNetwork` object, and then save the YAML in the `<name>-sriov-network.yaml` file. Replace `<name>` with a name for this additional network.
    ```yaml
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovNetwork
    metadata:
      name: <name>
      namespace: openshift-sriov-network-operator
    spec:
      resourceName: <sriov_resource_name>
      networkNamespace: <target_namespace>
      vlan: <vlan>
      spoofChk: "<spoof_check>"
      linkState: <link_state>
      maxTxRate: <max_tx_rate>
      minTxRate: <min_rx_rate>
      vlanQoS: <vlan_qos>
      trust: "<trust_vf>"
      capabilities: <capabilities>
    ```
    *   `metadata.name` defines a name for the `SriovNetwork` object. The SR-IOV Network Operator creates a `NetworkAttachmentDefinition` object with same name.
    *   `metadata.namespace` defines the namespace where the SR-IOV Network Operator is installed.
    *   `spec.resourceName` defines the value of the `.spec.resourceName` parameter in the `SriovNetworkNodePolicy` object that defines the SR-IOV hardware for this additional network.
    *   `spec.networkNamespace` defines the target namespace for the `SriovNetwork` object. Only VMs in the target namespace can attach to the `SriovNetwork` object.
    *   `spec.vlan` an optional field that defines a Virtual LAN (VLAN) ID for the additional network. The integer value must be from `0` to `4095`. The default value is `0`.
    *   `spec.spoofChk` an optional field that defines the spoof check mode of the VF. The allowed values are the strings `"on"` and `"off"`.

        :::important

        You must enclose the value you specify in quotes or the CR is rejected by the SR-IOV Network Operator.
        
        :::

    *   `spec.linkState` an optional field that defines the link state of virtual function (VF). Allowed values are `enable`, `disable` and `auto`.
    *   `spec.maxTxRate` an optional field that defines the maximum transmission rate, in Mbps, for the VF.
    *   `spec.minTxRate` an optional field that defines the minimum transmission rate, in Mbps, for the VF. This value should always be less than or equal to the maximum transmission rate.

        :::note

        Intel NICs do not support the `minTxRate` parameter. For more information, see [BZ#1772847](https://bugzilla.redhat.com/show_bug.cgi?id=1772847).
        
        :::

    *   `spec.vlanQoS` an optional field that defines the IEEE 802.1p priority level for the VF. The default value is `0`.
    *   `spec.trust` an optional field that defines the trust mode of the VF. The allowed values are the strings `"on"` and `"off"`.

        :::important

        You must enclose the value you specify in quotes or the CR is rejected by the SR-IOV Network Operator.
        
        :::

    *   `spec.capabilities` an optional field that defines the capabilities to configure for this network.
1.  To create the object, enter the following command. Replace `<name>` with a name for this additional network.
    ```terminal
    $ oc create -f <name>-sriov-network.yaml
    ```
1.  Optional: To confirm that the `NetworkAttachmentDefinition` object associated with the `SriovNetwork` object that you created in the previous step exists, enter the following command. Replace `<namespace>` with the namespace you specified in the `SriovNetwork` object.
    ```terminal
    $ oc get net-attach-def -n <namespace>
    ```