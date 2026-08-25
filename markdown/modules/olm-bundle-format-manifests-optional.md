{%- set _mod_docs_content_type = "REFERENCE" %}
# Additional supported Kubernetes objects {id="olm-bundle-format-manifests-optional_{{ context }}"}

Operator bundles can optionally include additional Kubernetes object types in the `/manifests` directory for deployment with a cluster service version (CSV). When included, Operator Lifecycle Manager (OLM) creates and manages the lifecycle of these objects alongside the CSV. {._abstract}

The following optional object types are supported:

*   `ClusterRole`
*   `ClusterRoleBinding`
*   `ConfigMap`
*   `ConsoleCLIDownload`
*   `ConsoleLink`
*   `ConsoleQuickStart`
*   `ConsoleYamlSample`
*   `PodDisruptionBudget`
*   `PriorityClass`
*   `PrometheusRule`
*   `Role`
*   `RoleBinding`
*   `Secret`
*   `Service`
*   `ServiceAccount`
*   `ServiceMonitor`
*   `VerticalPodAutoscaler`

OLM manages the lifecycle of these optional objects as follows: {.small}

*   When the CSV is deleted, OLM deletes the optional object.
*   When the CSV is upgraded:
    *   If the name of the optional object is the same, OLM updates it in place.
    *   If the name of the optional object has changed between versions, OLM deletes and recreates it.