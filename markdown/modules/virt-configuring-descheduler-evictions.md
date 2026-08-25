{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring descheduler evictions for virtual machines {id="virt-configuring-descheduler-evictions_{{ context }}"}

After the descheduler is installed and configured, all migratable virtual machines (VMs) are eligible for eviction by default. You can configure the descheduler to manage VM evictions across the cluster and optionally exclude specific VMs from eviction. {._abstract}

**Prerequisites**

*   Install the descheduler in the {{ product_title }} web console or OpenShift CLI (`oc`).

**Procedure**

1.  Stop the VM.
1.  Configure the `KubeDescheduler` object with the `KubeVirtRelieveAndMigrate` profile and enable background evictions for improved VM eviction stability during live migration:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: KubeDescheduler
    metadata:
      name: cluster
      namespace: openshift-kube-descheduler-operator
    spec:
      deschedulingIntervalSeconds: 60
      profiles:
      - KubeVirtRelieveAndMigrate
      mode: Automatic
    ```
1.  Optional: To evict pods, set the `mode` field value to `Automatic`. By default, the descheduler does not evict pods.
1.  Optional: Configure limits for the number of parallel evictions to improve stability in large clusters.

    The descheduler can limit the number of concurrent evictions per node and across the cluster by using the `evictionLimits` field. Set these limits to match the migration limits configured in the `HyperConverged` custom resource (CR).
    ```yaml
    spec:
      evictionLimits:
        node: 2
        total: 5
    ```

    Set values that correspond to the migration limits in the `HyperConverged` CR:
    ```yaml
    spec:
      liveMigrationConfig:
        parallelMigrationsPerCluster: 5
        parallelOutboundMigrationsPerNode: 2
    ```
1.  Optional: To exclude the VM from eviction, add the `descheduler.alpha.kubernetes.io/prefer-no-eviction` annotation to the `spec.template.metadata.annotations` field. The change is applied dynamically and is propagated to the `VirtualMachineInstance` (VMI) object and the `virt-launcher` pod.

    Only the presence of the annotation is checked. The value is not evaluated, so `"true"` and `"false"` have the same effect.
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    spec:
      template:
        metadata:
          annotations:
            descheduler.alpha.kubernetes.io/prefer-no-eviction: "true"
    ```
1.  Start the VM.

**Result**

The VM is now configured according to the descheduler settings.