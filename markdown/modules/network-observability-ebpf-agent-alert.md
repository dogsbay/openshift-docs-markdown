{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the eBPF agent alert {id="network-observability-netobserv-dashboard-ebpf-agent-alerts_{{ context }}"}

Resolve the `NetObservAgentFlowsDropped` alert, which occurs when the eBPF agent hashmap is full, by increasing the `spec.agent.ebpf.cacheMaxFlows` value in the `FlowCollector` custom resource. {._abstract}

An alert, `NetObservAgentFlowsDropped`, is also triggered when the capacity limiter is triggered. If you see this alert, consider increasing the `cacheMaxFlows` in the `FlowCollector`, as shown in the following example.


:::note

Increasing the `cacheMaxFlows` might increase the memory usage of the eBPF agent.

:::


**Procedure**

1.  In the web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  Under the **Provided APIs** heading for the **Network Observability Operator**, select **Flow Collector**.
1.  Select **cluster**, and then select the **YAML** tab.
1.  Increase the `spec.agent.ebpf.cacheMaxFlows` value, as shown in the following YAML sample:
    ```yaml
    apiVersion: flows.netobserv.io/v1beta2
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
      namespace: netobserv
      deploymentModel: Service
      agent:
        type: eBPF
        ebpf:
          cacheMaxFlows: 200000
    ```

    where:

    `spec.agent.ebpf.cacheMaxFlows`
    :   Specifies the maximum number of flows to cache. If a `NetObservAgentFlowsDropped` alert occurs, increase this value from its current level.