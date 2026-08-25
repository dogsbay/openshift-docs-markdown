{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the FileIntegrity custom resource {id="understanding-file-integrity-custom-resource_{{ context }}"}

An instance of a `FileIntegrity` custom resource (CR) represents a set of continuous file integrity scans for one or more nodes. {._abstract}

Each `FileIntegrity` CR is backed by a daemon set running AIDE on the nodes matching the `FileIntegrity` CR specification.


:::note

For all-in-one control plane and worker nodes, separate `FileIntegrity` CRs that use `node-role.kubernetes.io/master` and `node-role.kubernetes.io/worker` selectors can schedule many daemon sets that run Advanced Intrusion Detection Environment (AIDE) on the same nodes, because schedulable control plane nodes often have both labels. Redundant scans waste resources and can complicate file integrity monitoring. You can avoid this by using a single `FileIntegrity` CR whose `nodeSelector` targets each node only once for your cluster layout.

:::


**Procedure**

1.  Create the following example `FileIntegrity` CR named `worker-fileintegrity.yaml` to enable scans on worker nodes:
    ```yaml
    apiVersion: fileintegrity.openshift.io/v1alpha1
    kind: FileIntegrity
    metadata:
      name: worker-fileintegrity
      namespace: openshift-file-integrity
    spec:
      nodeSelector:
        node-role.kubernetes.io/worker: ""
      tolerations:
        key: "myNode"
        operator: "Exists"
        effect: "NoSchedule"
      config:
        name: "myconfig"
        namespace: "openshift-file-integrity"
        key: "config"
        gracePeriod: 20
        maxBackups: 5
        initialDelay: 60
      debug: false
    status:
      phase: Active
    ```

    `spec.nodeSelector`
    :   Specifies the selector for scheduling node scans.

    `spec.tolerations`
    :   Specify `tolerations` to schedule on nodes with custom taints. When not specified, a default toleration allowing running on main and infra nodes is applied.

    `spec.config`
    :   Specify a `ConfigMap` containing an AIDE configuration to use.

    `spec.config.gracePeriod`
    :   The number of seconds to pause in between AIDE integrity checks. Frequent AIDE checks on a node might be resource intensive, so it can be useful to specify a longer interval. Default is 900 seconds (15 minutes).

    `spec.config.maxBackups`
    :   The maximum number of AIDE database and log backups (leftover from the re-init process) to keep on a node. Older backups beyond this number are automatically pruned by the daemon. Default is set to 5.

    `spec.config.initialDelay`
    :   The number of seconds to wait before starting the first AIDE integrity check. Default is set to 0.

    `status.phase`
    :   The running status of the `FileIntegrity` instance. Statuses are `Initializing`, `Pending`, or `Active`.

    `Initializing`
    :   The `FileIntegrity` object is currently initializing or re-initializing the AIDE database.

    `Pending`
    :   The `FileIntegrity` deployment is still being created.

    `Active`
    :   The scans are active and ongoing.

1.  Apply the YAML file to the `openshift-file-integrity` namespace:
    ```terminal
    $ oc apply -f worker-fileintegrity.yaml -n openshift-file-integrity
    ```

**Verification**

*   Confirm the `FileIntegrity` object was created successfully by running the following command:
    ```terminal
    $ oc get fileintegrities -n openshift-file-integrity
    ```
    ```terminal title="Example output"
    NAME                   AGE
    worker-fileintegrity   14s
    ```