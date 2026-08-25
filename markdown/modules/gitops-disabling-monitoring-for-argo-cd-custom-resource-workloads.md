{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling Monitoring for Argo CD custom resource workloads {id="gitops-disabling-monitoring-for-argo-cd-custom-resource-workloads_{{ context }}"}

You can disable workload monitoring for specific Argo CD instances. Disabling workload monitoring deletes the created PrometheusRule.

**Procedure**

*   Set the `.spec.monitoring.enabled` field value to `false` on a given Argo CD instance:

    ```yaml title="Example Argo CD custom resource"
    apiVersion: argoproj.io/v1alpha1
    kind: ArgoCD
    metadata:
      name: example-argocd
      labels:
        example: repo
    spec:
      ...
      monitoring:
        enabled: false
      ...
    ```