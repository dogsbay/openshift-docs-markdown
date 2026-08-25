{%- set _mod_docs_content_type = "PROCEDURE" %}
# Working with DNS tracking {id="network-observability-dns-tracking_{{ context }}"}

Configure the `FlowCollector` custom resource to enable DNS tracking for monitoring network performance, security analysis, and DNS troubleshooting in the web console. {._abstract}

You can track DNS by editing the `FlowCollector` to the specifications in the following YAML example.


:::important

CPU and memory usage increases are observed in the eBPF agent when this feature is enabled.

:::


**Procedure**

1.  In the web console, navigate to **Ecosystem** → **Installed Operators**.
1.  Under the **Provided APIs** heading for **Network Observability**, select **Flow Collector**.
1.  Select **cluster** then select the **YAML** tab.
1.  Configure the `FlowCollector` custom resource. A sample configuration is as follows:
    <a name="network-observability-flowcollector-configuring-dns_{{ context }}"></a>
    ```yaml title="Configure FlowCollector for DNS tracking"
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
           - DNSTracking
          sampling: 1
    ```
    *   You can set the `spec.agent.ebpf.features` parameter list to enable DNS tracking of each network flow in the web console.
    *   You can set `sampling` to a value of `1` for more accurate metrics and to capture **DNS latency**. For a `sampling` value greater than 1, you can observe flows with **DNS Response Code** and **DNS Id**, and it is unlikely that **DNS Latency** can be observed.
1.  When you refresh the **Network Traffic** page, there are new DNS representations you can choose to view in the **Overview** and **Traffic Flow** views and new filters you can apply.
    1.  Select new DNS choices in **Manage panels** to display graphical visualizations and DNS metrics in the **Overview**.
    1.  Select new choices in **Manage columns** to add DNS columns to the **Traffic Flows** view.
    1.  Filter on specific DNS metrics, such as **DNS Id**, **DNS Error** **DNS Latency** and **DNS Response Code**, and see more information from the side panel. The **DNS Latency** and **DNS Response Code** columns are shown by default.

        :::note

        TCP handshake packets do not have DNS headers. TCP protocol flows without DNS headers are shown in the traffic flow data with **DNS Latency**, **ID**, and **Response code** values of "n/a". You can filter out flow data to view only flows that have DNS headers using the **Common** filter "DNSError" equal to "0".
        
        :::