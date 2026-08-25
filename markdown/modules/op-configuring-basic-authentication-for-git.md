{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring basic authentication for Git {id="op-configuring-basic-authentication-for-git_{{ context }}"}

For a pipeline to retrieve resources from password-protected repositories, you must configure the basic authentication for that pipeline. {._abstract}

To configure basic authentication for a pipeline, update the `secret.yaml`, `serviceaccount.yaml`, and `run.yaml` files with the credentials from the Git secret for the specified repository. When you complete this process, {{ pipelines_shortname }} can use that information to retrieve the specified pipeline resources.


:::note

For GitHub, authentication using plain password is deprecated. Instead, use a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

:::


**Procedure**

1.  In the `secret.yaml` file, specify the username and password or [GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to access the target Git repository.
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: basic-user-pass (1)
      annotations:
        tekton.dev/git-0: https://github.com
    type: kubernetes.io/basic-auth
    stringData:
      username: <username> (2)
      password: <password> (3)
    ```
    1.  Name of the secret. In this example, `basic-user-pass`.
    1.  Username for the Git repository.
    1.  Password for the Git repository.
1.  In the `serviceaccount.yaml` file, associate the secret with the appropriate service account.
    ```yaml
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: build-bot (1)
    secrets:
      - name: basic-user-pass (2)
    ```
    1.  Name of the service account. In this example, `build-bot`.
    1.  Name of the secret. In this example, `basic-user-pass`.
1.  In the `run.yaml` file, associate the service account with a task run or a pipeline run.
    *   Associate the service account with a task run:
        ```yaml
        apiVersion: tekton.dev/v1beta1
        kind: TaskRun
        metadata:
          name: build-push-task-run-2 (1)
        spec:
          serviceAccountName: build-bot (2)
          taskRef:
            name: build-push (3)
        ```
        1.  Name of the task run. In this example, `build-push-task-run-2`.
        1.  Name of the service account. In this example, `build-bot`.
        1.  Name of the task. In this example, `build-push`.
    *   Associate the service account with a `PipelineRun` resource:
        ```yaml
        apiVersion: tekton.dev/v1beta1
        kind: PipelineRun
        metadata:
          name: demo-pipeline (1)
          namespace: default
        spec:
          serviceAccountName: build-bot (2)
          pipelineRef:
            name: demo-pipeline (3)
        ```
        1.  Name of the pipeline run. In this example, `demo-pipeline`.
        1.  Name of the service account. In this example, `build-bot`.
        1.  Name of the pipeline. In this example, `demo-pipeline`.
1.  Apply the changes.
    ```terminal
    $ oc apply --filename secret.yaml,serviceaccount.yaml,run.yaml
    ```