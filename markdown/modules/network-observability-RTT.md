{%- set _mod_docs_content_type = "PROCEDURE" %}
# Working with RTT tracing {id="network-observability-RTT_{{ context }}"}

Enable Round Trip Time (RTT) tracing by configuring the `FlowCollector` custom resource to monitor and analyze network latency across your cluster by using the web console. {._abstract}

You can track RTT by editing the `FlowCollector` to the specifications in the following YAML example.

**Procedure**

1.  In the web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  In the **Provided APIs** heading for the **NetObserv Operator**, select **Flow Collector**.
1.  Select **cluster**, and then select the **YAML** tab.
1.  Configure the `FlowCollector` custom resource for RTT tracing, for example:
    <a name="network-observability-flowcollector-configuring-RTT_{{ context }}"></a>
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
           - FlowRTT
    ```

    where:

    `spec.agent.ebpf.features`
    :   Specifies the list of eBPF features to enable. Add `FlowRTT` to this list to start tracing Round-trip time (RTT) network flows.

**Verification**

After the **Network Traffic** page is refreshed, the **Overview**, **Traffic flows**, and **Topology** views display RTT information.

1.  In the **Overview** view, click **Manage panels** to select the RTT graphical visualizations to display.
1.  In the **Traffic flows** table, verify that the **Flow RTT** column is visible by default. To manage columns, click **Manage columns**.
1.  In the **Traffic flows** view, expand the side panel to view RTT metadata:
    1.  Filter the flow data for the **TCP** protocol by entering `protocol=TCP` in the filter search bar.
    1.  Verify that all TCP filtered flows have **FlowRTT** values greater than `0`.
    1.  Filter for **FlowRTT** values greater than `10,000,000` nanoseconds (10 ms) by entering `time_flow_rtt>=10000000` in the filter search bar.
    1.  Remove the filters.
1.  In the **Topology** view, click the **Display** option drop-down menu. In the **Edge labels** list, select **RTT**.