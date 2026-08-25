{%- set _mod_docs_content_type = "PROCEDURE" %}
# Working with availability zones {id="network-observability-zones_{{ context }}"}

Configure the `FlowCollector` custom resource to collect availability zone data, enabling the visualization and analysis of network traffic across different cluster zones in the web console. {._abstract}

You can configure the `FlowCollector` to collect information about the cluster availability zones. This allows you to enrich network flow data with the [`topology.kubernetes.io/zone`](https://kubernetes.io/docs/reference/labels-annotations-taints/#topologykubernetesiozone) label value applied to the nodes.

**Procedure**

1.  In the web console, go to **Ecosystem** → **Installed Operators**.
1.  Under the **Provided APIs** heading for the **NetObserv Operator**, select **Flow Collector**.
1.  Select **cluster** then select the **YAML** tab.
1.  Configure the `FlowCollector` custom resource so that the `spec.processor.addZone` parameter is set to `true`. A sample configuration is as follows:
    ```yaml title="Configure FlowCollector for availability zones collection"
    apiVersion: flows.netobserv.io/v1beta2
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
    # ...
     processor:
       addZone: true
    # ...
    ```

**Verification**

When you refresh the **Network Traffic** page, the **Overview**, **Traffic Flow**, and **Topology** views display new information about availability zones:

1.  In the **Overview** tab, you can see **Zones** as an available **Scope**.
1.  In **Network Traffic** → **Traffic flows**, **Zones** are viewable under the SrcK8S_Zone and DstK8S_Zone fields.
1.  In the **Topology** view, you can set **Zones** as **Scope** or **Group**.