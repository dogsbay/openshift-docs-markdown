{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting resource requests for a Restic pod {id="oadp-pod-crash-resource-request-retics_{{ context }}"}

Use the `configuration.restic.podConfig.resourceAllocations` specification field to set specific resource requests for a `Restic` pod. {._abstract}

{% leveloffset +1 %}{% include "./snippets/about-restic-deprecation.md" %}{% endleveloffset %}

**Procedure**

*   Set the `cpu` and `memory` resource requests as shown in the following example:
    ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    ...
    configuration:
      restic:
        podConfig:
          resourceAllocations:
            requests:
              cpu: 1000m
              memory: 16Gi
    ```

    The `resourceAllocations` listed are for average usage.