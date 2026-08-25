{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running pipeline run and task run by using a custom SCC and a custom service account {id="op-running-pipeline-run-and-task-run-with-custom-scc-and-service-account_{{ context }}"}

When using the `pipelines-scc` security context constraint (SCC) associated with the default `pipelines` service account, the pipeline run and task run pods may face timeouts. This happens because in the default `pipelines-scc` SCC, the `fsGroup.type` parameter is set to `MustRunAs`.


:::note

For more information about pod timeouts, see [BZ#1995779](https://bugzilla.redhat.com/show_bug.cgi?id=1995779).

:::


To avoid pod timeouts, you can create a custom SCC with the `fsGroup.type` parameter set to `RunAsAny`, and associate it with a custom service account.


:::note

As a best practice, use a custom SCC and a custom service account for pipeline runs and task runs. This approach allows greater flexibility and does not break the runs when the defaults are modified during an upgrade.

:::


**Procedure**

1.  Define a custom SCC with the `fsGroup.type` parameter set to `RunAsAny`:
    ```yaml title="Example: Custom SCC"
    apiVersion: security.openshift.io/v1
    kind: SecurityContextConstraints
    metadata:
      annotations:
        kubernetes.io/description: my-scc is a close replica of anyuid scc. pipelines-scc has fsGroup - RunAsAny.
      name: my-scc
    allowHostDirVolumePlugin: false
    allowHostIPC: false
    allowHostNetwork: false
    allowHostPID: false
    allowHostPorts: false
    allowPrivilegeEscalation: true
    allowPrivilegedContainer: false
    allowedCapabilities: null
    defaultAddCapabilities: null
    fsGroup:
      type: RunAsAny
    groups:
    - system:cluster-admins
    priority: 10
    readOnlyRootFilesystem: false
    requiredDropCapabilities:
    - MKNOD
    runAsUser:
      type: RunAsAny
    seLinuxContext:
      type: MustRunAs
    supplementalGroups:
      type: RunAsAny
    volumes:
    - configMap
    - downwardAPI
    - emptyDir
    - persistentVolumeClaim
    - projected
    - secret
    ```
1.  Create the custom SCC:
    ```terminal title="Example: Create the my-scc SCC"
    $ oc create -f my-scc.yaml
    ```
1.  Create a custom service account:
    ```terminal title="Example: Create a fsgroup-runasany service account"
    $ oc create serviceaccount fsgroup-runasany
    ```
1.  Associate the custom SCC with the custom service account:
    ```terminal title="Example: Associate the my-scc SCC with the fsgroup-runasany service account"
    $ oc adm policy add-scc-to-user my-scc -z fsgroup-runasany
    ```

    If you want to use the custom service account for privileged tasks, you can associate the `privileged` SCC with the custom service account by running the following command:
    ```terminal title="Example: Associate the privileged SCC with the fsgroup-runasany service account"
    $ oc adm policy add-scc-to-user privileged -z fsgroup-runasany
    ```
1.  Use the custom service account in the pipeline run and task run:
    ```yaml title="Example: Pipeline run YAML with fsgroup-runasany custom service account"
    apiVersion: tekton.dev/v1beta1
    kind: PipelineRun
    metadata:
      name: <pipeline-run-name>
    spec:
      pipelineRef:
        name: <pipeline-cluster-task-name>
      serviceAccountName: 'fsgroup-runasany'
    ```
    ```yaml title="Example: Task run YAML with fsgroup-runasany custom service account"
    apiVersion: tekton.dev/v1beta1
    kind: TaskRun
    metadata:
      name: <task-run-name>
    spec:
      taskRef:
        name: <cluster-task-name>
      serviceAccountName: 'fsgroup-runasany'
    ```