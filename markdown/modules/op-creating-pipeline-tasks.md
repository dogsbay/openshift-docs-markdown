{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating pipeline tasks {id="creating-pipeline-tasks_{{ context }}"}

**Procedure**

1.  Install the `apply-manifests` and `update-deployment` task resources from the `pipelines-tutorial` repository, which contains a list of reusable tasks for pipelines:
    ```terminal
    $ oc create -f https://raw.githubusercontent.com/openshift/pipelines-tutorial/{{ pipelines_ver }}/01_pipeline/01_apply_manifest_task.yaml
    $ oc create -f https://raw.githubusercontent.com/openshift/pipelines-tutorial/{{ pipelines_ver }}/01_pipeline/02_update_deployment_task.yaml
    ```
1.  Use the `tkn task list` command to list the tasks you created:
    ```terminal
    $ tkn task list
    ```

    The output verifies that the `apply-manifests` and `update-deployment` task resources were created:
    ```terminal
    NAME                DESCRIPTION   AGE
    apply-manifests                   1 minute ago
    update-deployment                 48 seconds ago
    ```
1.  Use the `tkn clustertasks list` command to list the Operator-installed additional cluster tasks such as `buildah` and `s2i-python`:

    :::note

    To use the `buildah` cluster task in a restricted environment, you must ensure that the Dockerfile uses an internal image stream as the base image.
    
    :::

    ```terminal
    $ tkn clustertasks list
    ```

    The output lists the Operator-installed `ClusterTask` resources:
    ```terminal
    NAME                       DESCRIPTION   AGE
    buildah                                  1 day ago
    git-clone                                1 day ago
    s2i-python                               1 day ago
    tkn                                      1 day ago
    ```


:::important

In {{ pipelines_title }} 1.10, cluster task functionality is deprecated and is planned to be removed in a future release.

:::