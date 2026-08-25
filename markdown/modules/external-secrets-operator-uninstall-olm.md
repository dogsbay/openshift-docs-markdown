{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling an Operator Lifecylce Manager installed community {{ external_secrets_operator_short }} {id="external-secrets-operator-uninstall-olm_{{ context }}"}

Remove the community {{ external_secrets_operator_short }} that was installed by an Operator Lifecycle Manager (OLM) subscription. This helps you free up resources and maintain a clean environment for your cluster. {._abstract}

**Prerequisites**

*   You must be logged in as a user with the `cluster-admin` role.
*   You must have deleted the `operatorconfig` CR.

**Procedure**

1.  Find the subscription name by running the following command:
    ```terminal
    $ oc get subscription -n <operator_namespace> | grep external-secrets
    ```
1.  Delete the subscription by running the following command:
    ```terminal
    $ oc delete subscription <subscription_name> -n <operator_namespace>
    ```
1.  Delete the `ClusterServiceVersion` by running the following command:
    ```terminal
    $ oc delete csv <csv_name> -n <operator_namespace>
    ```