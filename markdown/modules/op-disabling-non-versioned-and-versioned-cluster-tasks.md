{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling non-versioned and versioned cluster tasks {id="disabling-non-versioned-and-versioned-cluster-tasks_{{ context }}"}

As a cluster administrator, you can disable cluster tasks that the {{ pipelines_shortname }} Operator installed.

**Procedure**

1.  To delete all non-versioned cluster tasks and latest versioned cluster tasks, edit the `TektonConfig` custom resource definition (CRD) and set the `clusterTasks` parameter in `spec.addon.params` to `false`.
    ```yaml title="Example TektonConfig CR"
    apiVersion: operator.tekton.dev/v1alpha1
    kind: TektonConfig
    metadata:
      name: config
    spec:
      params:
      - name: createRbacResource
        value: "false"
      profile: all
      targetNamespace: openshift-pipelines
      addon:
        params:
        - name: clusterTasks
          value: "false"
    ...
    ```

    When you disable cluster tasks, the Operator removes all the non-versioned cluster tasks and only the latest version of the versioned cluster tasks from the cluster.

    :::note

    Re-enabling cluster tasks installs the non-versioned cluster tasks.
    
    :::

1.  Optional: To delete earlier versions of the versioned cluster tasks, use any one of the following methods:
    1.  To delete individual earlier versioned cluster tasks, use the `oc delete clustertask` command followed by the versioned cluster task name. For example:
        ```terminal
        $ oc delete clustertask buildah-1-6-0
        ```
    1.  To delete all versioned cluster tasks created by an old version of the Operator, you can delete the corresponding installer set. For example:
        ```terminal
        $ oc delete tektoninstallerset versioned-clustertask-1-6-k98as
        ```

        :::caution

        If you delete an old versioned cluster task, you cannot restore it. You can only restore versioned and non-versioned cluster tasks that the current version of the Operator has created.
        
        :::