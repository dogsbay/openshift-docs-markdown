{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ lws_operator }} with {{ kueue_name }} {id="kueue-installing-lws_{{ context }}"}

You can configure {{ kueue_name }} to work with the {{ lws_operator }}. {._abstract}

**Prerequisites**

*   You have installed {{ kueue_name }} using the {{ kueue_op }} in the software catalog.
*   You have installed {{ lws_operator }} and Operand in the software catalog.
*   You have cluster administrator permissions and the `kueue-batch-admin-role` role.
*   You have access to the {{ product_title }} web console.
*   You have installed the {{ cert_manager_operator }} for your cluster. 

**Procedure**

*   Add `LeaderWorkerSet` to the `config.integrations.framework` section of the {{ kueue_name }} cluster object, as shown in the following example:
    ```yaml
    apiVersion: kueue.openshift.io/v1
    kind: Kueue
    metadata:
      labels:
        app.kubernetes.io/name: kueue-operator
        app.kubernetes.io/managed-by: kustomize
      name: cluster
      namespace: openshift-kueue-operator
    spec:
      managementState: Managed
      config:
        integrations:
          frameworks:
          - BatchJob
          - LeaderWorkerSet
    ```