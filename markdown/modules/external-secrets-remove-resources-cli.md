{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing {{ external_secrets_operator }} resources by using the CLI {id="external-secrets-remove-resources-cli_{{ context }}"}

After you have uninstalled the {{ external_secrets_operator }}, you can optionally eliminate its associated resources from your cluster by using the command-line interface (CLI). {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.

**Procedure**

1.  Delete the deployments of the `external-secrets` application components in the `external-secrets` namespace by running the following command:
    ```terminal
    $ oc delete deployment -n external-secrets -l app=external-secrets
    ```
1.  Delete the custom resource definitions (CRDs) that were installed by the {{ external_secrets_operator_short }} by running the following command:
    ```terminal
    $ oc delete customresourcedefinitions.apiextensions.k8s.io -l external-secrets.io/component=controller
    ```
1.  Delete the `external-secrets-operator` namespace by running the following command:
    ```terminal
    $ oc delete project external-secrets-operator
    ```