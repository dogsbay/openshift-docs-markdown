{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customize specific values in a managed resource {id="virt-json-patch-resources_{{ context }}"}

Customize specific values in a managed resource by applying a JSON patch on top of the reconciled configuration to retain your custom settings. {._abstract}

<!-- unresolved include: ./snippets/virt-unmanaged-resource-note.md (target not found in corpus) -->

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to the cluster as a user with `cluster-admin` privileges.
*   The `virt-platform-autopilot` controller is enabled on the cluster.
*   The `platform.kubevirt.io/mode=unmanaged` and `platform.kubevirt.io/ignore-fields` annotations must not be present on the resource.

**Procedure**

1.  Add the `platform.kubevirt.io/patch` annotation to a resource with a valid RFC 6902 JSON Patch operations array.

    For example, to prevent the `virt-platform-autopilot` controller from overriding a custom descheduler profile configuration, run the following command:
    ```terminal
    $ oc annotate kubedescheduler cluster \
      'platform.kubevirt.io/patch=[{"op":"replace","path":"/spec/profileCustomizations","value":{"devKnobs":{}}}]' \
      -n openshift-kube-descheduler-operator
    ```

    The `virt-platform-autopilot` controller continues to manage all other fields on the resource but skips the specified paths.

    :::important

    JSON patches are blocked on sensitive resources, including `MachineConfig` and `KubeletConfig` resources.
    
    :::

1.  Optional: To restore `virt-platform-autopilot` controller management for all fields, remove the `platform.kubevirt.io/patch` annotation.

    For example, to restore `virt-platform-autopilot` controller management for all fields of the descheduler configuration, run the following command:
    ```terminal
    $ oc annotate kubedescheduler cluster \
      platform.kubevirt.io/patch- \
      -n openshift-kube-descheduler-operator
    ```