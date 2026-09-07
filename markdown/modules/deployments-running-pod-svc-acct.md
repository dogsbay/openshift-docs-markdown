{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running a pod with a different service account {id="deployments-running-pod-svc-acct_{{ context }}"}

To run pods under a non-default identity in {{ product_title }}, you can assign a different service account to a `DeploymentConfig` object. Edit the object and set the `serviceAccount` and `serviceAccountName` fields to the account you want to use. {._abstract}

**Procedure**

1.  Edit the `DeploymentConfig` object:
    ```terminal
    $ oc edit dc/<deployment_config>
    ```
1.  Add the `serviceAccount` and `serviceAccountName` parameters to the `spec` field, and specify the service account you want to use:
    ```yaml
    apiVersion: apps.openshift.io/v1
    kind: DeploymentConfig
    metadata:
      name: example-dc
    # ...
    spec:
    # ...
      securityContext: {}
      serviceAccount: <service_account>
      serviceAccountName: <service_account>
    ```