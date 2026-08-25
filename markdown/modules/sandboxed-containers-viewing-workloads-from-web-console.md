{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing {{ sandboxed_containers_first }} workloads from the web console {id="sandboxed-containers-viewing-workloads-from-web-console_{{ context }}"}

{{ sandboxed_containers_first }} based workloads look and feel the same as normal workloads when viewed in the web console. The only difference between the two is the `runtimeClassName`. `runtimeClassName` is what decides the runtime used for workloads. In this context, the runtime enabled by {{ sandboxed_containers_first }}-based is `kata`. You can view the `runtimeClass` that the pods for your workloads use.

**Prerequisites**

*   You have {{ product_title }} {{ product_version }} installed on your cluster.
*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Navigate to **Administration** -> **Workloads**.
1.  Identify the type of workload you want to view details for. For example, `Pod`, `Deployment`, `DeploymentConfigs` objects and so on.
1.  Choose the corresponding workload from the list.
1.  On the **Details** page, navigate to `runtimeClass`.
1.  Hover over `runtimeClass` to view more information. If `kata` was used as the runtime, the value of the `runtimeClass` is `kata`.