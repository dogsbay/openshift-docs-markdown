{%- set _mod_docs_content_type = "PROCEDURE" %}
# Overriding tolerations for catalog source pods {id="olm-tolerations_{{ context }}"}

To allow catalog source pods to schedule onto nodes with matching taints, you can override the default tolerations in the `spec.grpcPodConfig` section of the `CatalogSource` object. {._abstract}

**Prerequisites**

*   A `CatalogSource` object of source type `grpc` with `spec.image` is defined.
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

*   Edit the `CatalogSource` object and add or modify the `spec.grpcPodConfig` section to include the following:
    ```yaml
      grpcPodConfig:
        tolerations:
          - key: "<key_name>"
            operator: "<operator_type>"
            value: "<value>"
            effect: "<effect>"
    ```