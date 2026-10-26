{%- set _mod_docs_content_type = "PROCEDURE" %}
# Exclude a resource from being managed by the `virt-platform-autopilot` controller {id="virt-resource-level-exclusions_{{ context }}"}

Disabled resources are not created or reconciled automatically by the `virt-platform-autopilot` controller. Prevent the controller from creating or reconciling a resource by disabling it in the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to the cluster as a user with `cluster-admin` privileges.
*   The `virt-platform-autopilot` controller is enabled on the cluster.

**Procedure**

1.  Edit the `HyperConverged` CR and add resources to the `platform.kubevirt.io/disabled-resources` annotation:

    Example `HyperConverged` CR:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      annotations:
        platform.kubevirt.io/disabled-resources: |
          - kind: KubeDescheduler
            name: cluster
          - kind: MachineConfig
            name: 90-worker-swap-online
    ```
1.  Apply your changes to the `HyperConverged` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```