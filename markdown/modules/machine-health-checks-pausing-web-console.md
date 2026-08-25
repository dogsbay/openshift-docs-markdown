{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pausing a MachineHealthCheck resource by using the web console {id="machine-health-checks-pausing-web-console_{{ context }}"}

During the update process, nodes in the cluster might become temporarily unavailable. For worker nodes, the machine health check might identify such nodes as unhealthy and reboot them. To avoid rebooting such nodes, pause all the `MachineHealthCheck` resources before updating the cluster. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  On the web console, navigate to **Compute** → **MachineHealthChecks**.
1.  For each `MachineHealthCheck` resource, pause the machine health checks by adding the `cluster.x-k8s.io/paused=""` annotation to the resource. For example, to add the annotation to the `machine-api-termination-handler` resource, complete the following steps:
    1.  Click the Options menu {{ kebab }} next to the `machine-api-termination-handler` and click **Edit annotations**.
    1.  In the **Edit annotations** dialog, click **Add more**.
    1.  In the **Key** and **Value** fields, add `cluster.x-k8s.io/paused` and `""` values, respectively, and click **Save**.