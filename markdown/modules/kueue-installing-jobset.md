{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ js_operator }} with {{ kueue_name }} {id="kueue-installing-jobset_{{ context }}"}

You can configure {{ kueue_name }} to work with the {{ js_operator }}. {._abstract}

**Prerequisites**

*   You have installed {{ kueue_name }} using the {{ kueue_op }} in the software catalog.
*   You have installed {{ js_operator }} in the software catalog.
*   You have cluster administrator permissions and the `kueue-batch-admin-role` role.
*   You have access to the {{ product_title }} web console.
*   You have installed the {{ cert_manager_operator }} for your cluster. 

**Procedure**

*   Add `JobSet` to the `config.integrations.frameworks` section of the {{ kueue_name }} 
cluster object, as shown in the following example:
    ```yaml
    apiVersion: kueue.openshift.io/v1
    kind: Kueue
    metadata:
      name: cluster
      namespace: openshift-kueue-operator
    spec:
      managementState: Managed
      config:
        integrations:
          frameworks:
          - JobSet
    ```