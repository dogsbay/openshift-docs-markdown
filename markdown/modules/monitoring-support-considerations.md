{%- set _mod_docs_content_type = "CONCEPT" %}
# Support considerations for monitoring {id="support-considerations_{{ context }}"}

You can avoid automated configuration resets by understanding and adhering to the supported configuration options for the {{ product_title }} monitoring stack. Unsupported modifications are automatically reverted. {._abstract}


:::note

Backward compatibility for metrics, recording rules, or alerting rules is not guaranteed.

:::


The following modifications are explicitly not supported:

{% if not (openshift_dedicated or openshift_rosa) %}
*   **Creating additional `ServiceMonitor`, `PodMonitor`, and `PrometheusRule` objects in the `openshift-&#42;` and `kube-&#42;` projects.**
*   **Modifying any resources or objects deployed in the `openshift-monitoring` or `openshift-user-workload-monitoring` projects.** The resources created by the {{ product_title }} monitoring stack are not meant to be used by any other resources, as there are no guarantees about their backward compatibility.

    :::note

    The Alertmanager configuration is deployed as the `alertmanager-main` secret resource in the `openshift-monitoring` namespace. If you have enabled a separate Alertmanager instance for user-defined alert routing, an Alertmanager configuration is also deployed as the `alertmanager-user-workload` secret resource in the `openshift-user-workload-monitoring` namespace. To configure additional routes for any instance of Alertmanager, you need to decode, modify, and then encode that secret. This procedure is a supported exception to the preceding statement.
    
    :::

*   **Modifying resources of the stack.** The {{ product_title }} monitoring stack ensures its resources are always in the state it expects them to be. If they are modified, the stack will reset them.
*   **Deploying user-defined workloads to `openshift-&#42;`, and `kube-&#42;` projects.** These projects are reserved for Red&#160;Hat provided components and they should not be used for user-defined workloads.
*   **Enabling symptom based monitoring by using the `Probe` custom resource definition (CRD) in Prometheus Operator.**
*   **Manually deploying monitoring resources into namespaces that have the `openshift.io/cluster-monitoring: "true"` label.**
*   **Adding the `openshift.io/cluster-monitoring: "true"` label to namespaces.** This label is reserved only for the namespaces with core {{ product_title }} components and Red&#160;Hat certified components.
{% endif %}
*   **Installing custom Prometheus instances on {{ product_title }}.** A custom instance is a Prometheus custom resource (CR) managed by the Prometheus Operator.
{%- if openshift_dedicated or openshift_rosa %}
*   **Modifying the default platform monitoring components.** You should not modify any of the components defined in the `cluster-monitoring-config` config map. Red&#160;Hat SRE uses these components to monitor the core cluster components and Kubernetes services.
{%- endif %}