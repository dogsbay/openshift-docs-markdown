{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing aggregated {{ VirtProductName }} logs with Loki {id="virt-viewing-logs-loki_{{ context }}"}

You can use the Loki logging component to view aggregated logs for {{ VirtProductName }} pods and containers in the web console. This is useful for troubleshooting issues and monitoring your {{ VirtProductName }} environment. {._abstract}

**Prerequisites**

*   You have installed the {{ loki_op }} and deployed the `LokiStack` custom resource (CR).

**Procedure**

1.  Navigate to **Observe** → **Logs** in the web console.
1.  Select **application**, for `virt-launcher` pod logs, or **infrastructure**, for {{ VirtProductName }} control plane pods and containers, from the log type list.
1.  Click **Show Query** to display the query field.
1.  Enter the LogQL query in the query field and click **Run Query** to display the filtered logs.