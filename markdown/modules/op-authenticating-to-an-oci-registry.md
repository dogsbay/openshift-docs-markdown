{%- set _mod_docs_content_type = "PROCEDURE" %}
# Authenticating to an OCI registry {id="authenticating-to-an-oci-registry_{{ context }}"}

Before pushing signatures to an OCI registry, cluster administrators must configure {{ tekton_chains }} to authenticate with the registry. The {{ tekton_chains }} controller uses the same service account under which the task runs execute. To set up a service account with the necessary credentials for pushing signatures to an OCI registry, perform the following steps:

**Procedure**

1.  Set the namespace and name of the Kubernetes service account.
    ```terminal
    $ export NAMESPACE=<namespace>
    ```

    where:

    `<namespace>`
    :   The namespace associated with the service account.
    ```terminal
    $ export SERVICE_ACCOUNT_NAME=<service_account>
    ```
    where:
    `<service_account>`:: The name of the service account.

1.  Create a Kubernetes secret.
    ```terminal
    $ oc create secret registry-credentials \
      --from-file=.dockerconfigjson \ (1)
      --type=kubernetes.io/dockerconfigjson \
      -n $NAMESPACE
    ```
    1.  Substitute with the path to your Docker config file. Default path is `~/.docker/config.json`.
1.  Give the service account access to the secret.
    ```terminal
    $ oc patch serviceaccount $SERVICE_ACCOUNT_NAME \
      -p "{\"imagePullSecrets\": [{\"name\": \"registry-credentials\"}]}" -n $NAMESPACE
    ```

    If you patch the default `pipeline` service account that {{ pipelines_title }} assigns to all task runs, the {{ pipelines_title }} Operator will override the service account. As a best practice, you can perform the following steps:
    1.  Create a separate service account to assign to user’s task runs.
        ```terminal
        $ oc create serviceaccount <service_account_name>
        ```
    1.  Associate the service account to the task runs by setting the value of the `serviceaccountname` field in the task run template.
        ```yaml
        apiVersion: tekton.dev/v1beta1
        kind: TaskRun
        metadata:
        name: build-push-task-run-2
        spec:
        serviceAccountName: build-bot
        taskRef:
          name: build-push
        ...
        ```

        where:

        `<serviceAccountName>`
        :   Substitute with the name of the newly created service account.