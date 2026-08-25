{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using a pull secret in a workload {id="using-pull-secret_{{ context }}"}

To allow workloads to pull images from private registries in {{ product_title }}, you can link the pull secret to a service account by entering the `oc secrets link` command or by defining it directly in your workload configuration YAML file. {._abstract}

**Procedure**

1.  Link the pull secret to a service account by entering the following command. Note that the name of the service account should match the name of the service account that pod uses. The default service account is `default`.
    ```terminal
    $ oc secrets link default <pull_secret_name> --for=pull
    ```
1.  Verify the change by entering the following command:
    ```terminal
    $ oc get serviceaccount default -o yaml
    ```
    ```yaml title="Example output"
    apiVersion: v1
    imagePullSecrets:
    - name: default-dockercfg-123456
    - name: <pull_secret_name>
    kind: ServiceAccount
    metadata:
      annotations:
        openshift.io/internal-registry-pull-secret-ref: <internal_registry_pull_secret>
      creationTimestamp: "2025-03-03T20:07:52Z"
      name: default
      namespace: default
      resourceVersion: "13914"
      uid: 9f62dd88-110d-4879-9e27-1ffe269poe3
    secrets:
    - name: <pull_secret_name>
    ```
1.  Optional: Instead of linking the secret to a service account, you can alternatively reference it directly in your pod or workload definition. This is useful for GitOps workflows such as ArgoCD. For example:
    ```yaml title="Example pod specification"
    apiVersion: v1
    kind: Pod
    metadata:
      name: <secure_pod_name>
    spec:
      containers:
      - name: <container_name>
        image: quay.io/my-private-image
      imagePullSecrets:
      - name: <pull_secret_name>
    ```
    ```yaml title="Example ArgoCD workflow"
    apiVersion: argoproj.io/v1alpha1
    kind: Workflow
    metadata:
      generateName: <example_workflow>
    spec:
      entrypoint: <main_task>
      imagePullSecrets:
      - name: <pull_secret_name>
    ```