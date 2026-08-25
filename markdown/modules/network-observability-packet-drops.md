{%- set _mod_docs_content_type = "PROCEDURE" %}
# Working with packet drops {id="network-observability-packet-drops_{{ context }}"}

Enable packet drop tracking in the Network Observability Operator by configuring the `FlowCollector` resource to monitor and visualize network data loss in the web console. {._abstract}

Packet loss occurs when one or more packets of network flow data fail to reach their destination. You can track these drops by editing the `FlowCollector` to the specifications in the following YAML example.


:::important

CPU and memory usage increases when this feature is enabled.

:::


**Procedure**

1.  In the web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  Under the **Provided APIs** heading for the **NetObserv Operator**, select **Flow Collector**.
1.  Select **cluster**, and then select the **YAML** tab.
1.  Configure the `FlowCollector` custom resource for packet drops, for example:
    <a name="network-observability-flowcollector-configuring-pkt-drop_{{ context }}"></a>
    ```yaml title="Example FlowCollector configuration"
    apiVersion: flows.netobserv.io/v1beta2
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
      namespace: netobserv
      agent:
        type: eBPF
        ebpf:
          features:
           - PacketDrop
          privileged: true
    ```

    where:

    `spec.agent.ebpf.features`
    :   Specifies the features to enable. Include `PacketDrop` to start reporting packet drops for each network flow.

    `spec.agent.ebpf.privileged`
    :   Specifies whether privileged mode is enabled. Must be set to `true` for packet drop tracking.

**Verification**

*   When you refresh the **Network Traffic** page, the **Overview**, **Traffic Flow**, and **Topology** views display new information about packet drops:
    1.  Select new choices in **Manage panels** to choose which graphical visualizations of packet drops to display in the **Overview**.
    1.  Select new choices in **Manage columns** to choose which packet drop information to display in the **Traffic flows** table.
        1.  In the **Traffic Flows** view, you can also expand the side panel to view more information about packet drops. Host drops are prefixed with `SKB_DROP` and OVS drops are prefixed with `OVS_DROP`.
    1.  In the **Topology** view, red lines are displayed where drops are present.