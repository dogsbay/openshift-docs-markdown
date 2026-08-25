{%- set _mod_docs_content_type = "PROCEDURE" %}
# Working with endpoint translation (xlat) {id="network-observability-packet-translation_{{ context }}"}

Enable endpoint translation (xlat) in the `FlowCollector` resource to enrich network flows with translated packet information. You can use this information to identify the specific pods and objects serving service traffic through dedicated xlat columns. {._abstract}

You can use network observability and eBPF to enrich network flows from a Kubernetes service with translated endpoint information, gaining insight into the endpoints serving traffic.

**Procedure**

1.  In the web console, navigate to **Ecosystem** → **Installed Operators**.
1.  In the **Provided APIs** heading for the **NetObserv Operator**, select **Flow Collector**.
1.  Select **cluster**, and then select the **YAML** tab.
1.  Configure the `FlowCollector` custom resource for `PacketTranslation`, for example:
    <a name="network-observability-flowcollector-configuring-packet-translation_{{ context }}"></a>
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
           - PacketTranslation
    ```
    *   You can start enriching network flows with translated packet information by listing the `PacketTranslation` parameter in the `spec.agent.ebpf.features` specification list.
1.  Refresh the **Network Traffic** page to filter for information about translated packets:
    1.  Filter the network flow data based on **Destination kind: Service**.
    1.  You can see the **xlat** column, which distinguishes where translated information is displayed, and the following default columns:
        *   **Xlat Zone ID**
        *   **Xlat Src Kubernetes Object**
        *   **Xlat Dst Kubernetes Object**
    1.  You can manage the display of additional **xlat** columns in **Manage columns**.