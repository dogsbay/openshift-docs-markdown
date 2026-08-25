{%- set _mod_docs_content_type = "PROCEDURE" %}
# Working with user-defined networks {id="network-observability-working-with-udn_{{ context }}"}

Configure the `FlowCollector` custom resource to enable user-defined network (UDN) mapping, providing visibility into traffic across custom network interfaces within the web console. {._abstract}

You can enable user-defined networks (UDN) in network observability resources.
The following example shows the configuration for the `FlowCollector` resource.

**Prerequisite**

*   You have configured UDN in {{ openshift_networking }}. For more information, see "Creating a UserDefinedNetwork by using the CLI" or "Creating a UserDefinedNetwork by using the web console."

**Procedure**

1.  Edit the network observability `FlowCollector` resource by running the following command:
    ```terminal
    $ oc edit flowcollector
    ```
1.  Configure the `ebpf` section of the `FlowCollector` resource:
    ```yaml
    apiVersion: flows.netobserv.io/v1beta2
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
      agent:
        ebpf:
          sampling: 1
          privileged: true
          features:
          - UDNMapping
    ```

    where:

    `spec.agent.ebpf.sampling`
    :   Specifies sampling rate for network events. Set to a value of `1` to capture all network events. If sampling `1` is too resource heavy, set sampling to something more appropriate for your needs.

    `spec.agent.ebpf.privileged`
    :   Specifies whether privileged mode is enabled. Must be set to `true` for user-defined network mapping.

**Verification**

*   Refresh the **Network Traffic** page to view updated UDN information in the **Traffic Flow** and **Topology** views:
    *   In **Network Traffic** > **Traffic flows**, you can view UDNs under the `SrcK8S_NetworkName` and `DstK8S_NetworkName` fields.
    *   In the **Topology** view, you can set **Network** as **Scope** or **Group**.