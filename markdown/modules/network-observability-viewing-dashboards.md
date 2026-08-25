{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing network observability metrics dashboards {id="network-observability-viewing-dashboards_{{ context }}"}

View network observability metrics dashboards using the **Overview** tab in the {{ product_title }} console to monitor overall traffic flow and system health, with options to filter metrics by node, namespace, owner, pod, and service. {._abstract}

**Procedure**

1.  In the web console **Observe** → **Dashboards**, select the **Netobserv** dashboard.
1.  View network traffic metrics in the following categories, with each having the subset per node, namespace, source, and destination:
    *   **Byte rates**
    *   **Packet drops**
    *   **DNS**
    *   **RTT**
1.  Select the **Netobserv/Health** dashboard.
1.  View metrics about the health of the Operator in the following categories, with each having the subset per node, namespace, source, and destination:
    *   **Flows**
    *   **Flows Overhead**
    *   **Flow rates**
    *   **Agents**
    *   **Processor**
    *   **Operator**

        **Infrastructure** and **Application** metrics are shown in a split-view for namespace and workloads.