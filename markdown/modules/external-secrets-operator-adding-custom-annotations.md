{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding custom annotations to external-secrets resources {id="external-secrets-enable-operator-adding-custom-annotations_{{ context }}"}

To customize your resources, you can define up to 20 custom annotations in the custom resource (CR). The Operator merges the annotations with the defaults, prioritizes them, and safely preserves annotations set by external systems. {._abstract}

When an annotation is removed from the CR, the Operator automatically removes it from all managed resources during the next reconciliation. Annotations set by external sources, such as Kubernetes system annotations or annotations added by other controllers, are preserved and are not affected by the Operator.

Annotation keys containing the following reserved domain prefixes are not allowed and are rejected by validation if applied:

*   `kubernetes.io/` (including subdomains such as `*.kubernetes.io/`)
*   `k8s.io/` (including subdomains such as `*.k8s.io/`)
*   `openshift.io/` (including subdomains such as `*.openshift.io/`)
*   `cert-manager.io/`

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have created the `ExternalSecretsConfig` custom resource.

**Procedure**

1.  Edit the `ExternalSecretsConfig` CR by running the following command:
    ```terminal
    $ oc edit externalsecretsconfigs.operator.openshift.io cluster
    ```
1.  Add the `annotations` field under `spec.controllerConfig` as follows:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: ExternalSecretsConfig
    metadata:
      name: cluster
    spec:
      controllerConfig:
        annotations:
          prometheus.io/scrape: "true"
          example.com/environment: "production"
    ```

**Verification**

1.  Verify that annotations are applied to the external-secrets deployment by running the following command:
    ```terminal
    $ oc get deployment external-secrets -n external-secrets -o jsonpath='{.metadata.annotations}' | jq .
    ```

    The output should include the custom annotations you specified.
1.  Verify that annotations are applied to the pod template by running the following command:
    ```terminal
    $ oc get deployment external-secrets -n external-secrets -o jsonpath='{.spec.template.metadata.annotations}' | jq .
    ```

    The output should include the custom annotations you specified.
1.  Verify that annotations are applied to other managed resources such as Services by running the following command:
    ```terminal
    $ oc get service external-secrets-webhook -n external-secrets -o jsonpath='{.metadata.annotations}' | jq .
    ```

    The output should include the custom annotations you specified.