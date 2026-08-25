{% if context == "virt-connecting-vm-to-sriov" %}
{%- set rs = "SriovNetwork" -%}
{%- set virt_sriov_net = true -%}
{%- set object = "pods or virtual machines" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring SR-IOV additional network {id="nw-sriov-additional-network_{{ context }}"}

You can configure an additional network that uses SR-IOV hardware by creating an `{{ rs }}`{minja} object.
When you create an `{{ rs }}`{minja} object, the SR-IOV Network Operator automatically creates a `NetworkAttachmentDefinition` object. {._abstract}


:::note

Do not modify or delete an `{{ rs }}`{minja} object if it is attached to {{ object }} in a `running` state.

:::


**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create the following `SriovNetwork` object, and then save the YAML in the `<name>-sriov-network.yaml` file. Replace `<name>` with a name for this additional network.
    ```yaml {minja}
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
    {%- if ocp_sriov_net %}
      ipam: {}
      linkState: <link_state>
      maxTxRate: <max_tx_rate>
      minTxRate: <min_tx_rate>
      vlanQoS: <vlan_qos>
      trust: "<trust_vf>"
      capabilities: <capabilities>
    {%- endif %}
    ```
    *   `metadata.name` defines a name for the `SriovNetwork` object. The SR-IOV Network Operator creates a `NetworkAttachmentDefinition` object with same name.
    *   `metadata.namespace` defines the namespace where the SR-IOV Network Operator is installed.
    *   `spec.resourceName` defines the value of the `.spec.resourceName` parameter in the `SriovNetworkNodePolicy` object that defines the SR-IOV hardware for this additional network.
    *   `spec.networkNamespace` defines the target namespace for the `SriovNetwork` object. Only {{ object }} in the target namespace can attach to the `SriovNetwork` object.
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
{%- if ocp_sriov_net %}
    You can specify `"{ "ips": true }"` to enable IP address support or `"{ "mac": true }"` to enable MAC address support.
    *   `spec.capabilities` defines a configuration object for the IPAM CNI plugin as a YAML block scalar. The plugin manages IP address assignment for the attachment definition.
{%- endif %}
1.  To create the object, enter the following command. Replace `<name>` with a name for this additional network.
    ```terminal
    $ oc create -f <name>-sriov-network.yaml
    ```
1.  Optional: To confirm that the `NetworkAttachmentDefinition` object associated with the `SriovNetwork` object that you created in the previous step exists, enter the following command. Replace `<namespace>` with the namespace you specified in the `SriovNetwork` object.
    ```terminal
    $ oc get net-attach-def -n <namespace>
    ```