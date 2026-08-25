{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Monitoring Argo CD custom resource workloads {id="monitoring-argo-cd-custom-resource-workloads"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "monitoring-argo-cd-custom-resource-workloads" %}

With {{ gitops_title }}, you can monitor the availability of Argo CD custom resource workloads for specific Argo CD instances. By monitoring Argo CD custom resource workloads, you have the latest information about the state of your Argo CD instances by enabling alerts for them. When the component workload pods such as application-controller, repo-server, or server of the corresponding Argo CD instance are unable to come up for certain reasons and there is a drift between the number of ready replicas and the number of desired replicas for a certain period of time, the Operator then triggers the alerts. {._abstract}

You can enable and disable the setting for monitoring Argo CD custom resource workloads.

## Prerequisites {id="_prerequisites"}

*   You have access to the cluster as a user with the `cluster-admin` role.
*   {{ gitops_title }} is installed in your cluster.
*   The monitoring stack is configured in your cluster in the `openshift-monitoring` project. In addition, the Argo CD instance is in a namespace that you can monitor through Prometheus.
*   The `kube-state-metrics` service is running in your cluster.
*   Optional: If you are enabling monitoring for an Argo CD instance already present in a user-defined project, ensure that the monitoring is [enabled for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm) in your cluster.

    :::note

    If you want to enable monitoring for an Argo CD instance in a namespace that is not watched by the default `openshift-monitoring` stack, for example, any namespace that does not start with `openshift-*`, then you must enable user workload monitoring in your cluster. This action enables the monitoring stack to pick up the created PrometheusRule.
    
    :::


{% leveloffset +1 %}{% include "./modules/gitops-enabling-monitoring-for-argo-cd-custom-resource-workloads.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-disabling-monitoring-for-argo-cd-custom-resource-workloads.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_monitoring-argo-cd-custom-resource-workloads" ._additional-resources}
*   [Enabling monitoring for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)