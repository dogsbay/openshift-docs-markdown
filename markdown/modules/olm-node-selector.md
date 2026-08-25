{%- set _mod_docs_content_type = "PROCEDURE" %}
# Overriding the node selector for catalog source pods {id="olm-node-selector_{{ context }}"}

To control which nodes run catalog source pods, you can override the default node selector in the `spec.grpcPodConfig` section of the `CatalogSource` object. {._abstract}

**Prerequisites**

*   A `CatalogSource` object of source type `grpc` with `spec.image` is defined.
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}

**Procedure**

*   Edit the `CatalogSource` object and add or modify the `spec.grpcPodConfig` section to include the following:
    ```yaml
      grpcPodConfig:
        nodeSelector:
          custom_label: <label>
    ```

    where `<label>` is the label for the node selector that you want catalog source pods to use for scheduling.