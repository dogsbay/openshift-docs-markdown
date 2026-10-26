{%- set _mod_docs_content_type = "PROCEDURE" %}
# Exclude specific fields from reconciliation in a managed resource {id="virt-field-masking-resource_{{ context }}"}

Exclude specific fields from being managed by the `virt-platform-autopilot` controller so that it ignores them during reconciliation. {._abstract}

<!-- unresolved include: ./snippets/virt-unmanaged-resource-note.md (target not found in corpus) -->

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to the cluster as a user with `cluster-admin` privileges.
*   The `virt-platform-autopilot` controller is enabled on the cluster.
*   The `platform.kubevirt.io/mode=unmanaged` and `platform.kubevirt.io/patch` annotations must not be present on the resource.

**Procedure**

1.  Add the `platform.kubevirt.io/ignore-fields` annotation with a comma-separated list of RFC 6901 JSON Pointer paths.

    For example, to prevent the `virt-platform-autopilot` controller from overriding a systemd unit in a managed `MachineConfig` resource, run the following command:
    ```terminal
    $ oc annotate machineconfig 90-worker-swap-online \
      platform.kubevirt.io/ignore-fields='/spec/config/systemd/units/0/contents'
    ```
1.  Optional: To restore `virt-platform-autopilot` controller management for all fields, remove the `platform.kubevirt.io/ignore-fields` annotation.

    For example, to restore `virt-platform-autopilot` controller management for all fields of the descheduler configuration, run the following command:
    ```terminal
    $ oc annotate kubedescheduler cluster \
      platform.kubevirt.io/ignore-fields- \
      -n openshift-kube-descheduler-operator
    ```