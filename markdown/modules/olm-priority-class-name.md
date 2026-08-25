{% if openshift_origin %}
{%- set global_ns = "olm" -%}
{% endif %}
{% if not openshift_origin %}
{%- set global_ns = "openshift-marketplace" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Overriding the priority class name for catalog source pods {id="olm-priority-class-name_{{ context }}"}

To control the scheduling priority of catalog source pods, you can override the default priority class name in the `spec.grpcPodConfig` section of the `CatalogSource` object. {._abstract}

**Prerequisites**

*   A `CatalogSource` object of source type `grpc` with a defined `spec.image`.
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   Access to the cluster as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

*   Edit the `CatalogSource` object and configure the `spec.grpcPodConfig` section, similar to the following example:
    ```yaml
      grpcPodConfig:
        priorityClassName: <priority_class>
    ```

    where:

    `<priority_class>`
    :   Specifies one of the following priority classes:
    *   A default Kubernetes priority class, such as `system-cluster-critical` or `system-node-critical`
    *   An empty string (`""`) to assign the default priority
    *   A custom, pre-existing priority class name

    :::note

    Previously, the only pod scheduling parameter that could be overriden was `priorityClassName`. This was done by adding the `operatorframework.io/priorityclass` annotation to the `CatalogSource` object. For example:

    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
    kind: CatalogSource
    metadata:
      name: example-catalog
      namespace: {{ global_ns }}
      annotations:
        operatorframework.io/priorityclass: system-cluster-critical
    ```

    If a `CatalogSource` object defines both the annotation and `spec.grpcPodConfig.priorityClassName`, the annotation takes precedence over the configuration parameter.
    
    :::