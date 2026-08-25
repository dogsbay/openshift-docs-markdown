{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting the community {{ external_secrets_operator_short }} {id="external-secrets-operator-delete-upstream-operatorconfig_{{ context }}"}

Delete the configuration resource for the community Operator so that the legacy application is fully removed. This action prevents conflicts before installing the {{ external_secrets_operator }}. {._abstract}

**Prerequisites**

*   You must be logged in as a user with the `cluster-admin` role.
*   You must have the `oc` command-line tool installed and configured.

**Procedure**

1.  Find your community Operator’s `namespace` by running the following command:
    ```terminal
    $ oc get operatorconfigs.operator.external-secrets.io -A
    ```

    The following is an example of finding the `namespace`:
    ```terminal
    NAMESPACE             NAME        AGE
    external-secrets      cluster     9m18s
    ```
1.  Delete the `operatorconfig` custom resrouce (CR) by running the following command:
    ```terminal
    $ oc delete operatorconfig <config_name> -n <operator_namespace>
    ```

**Verification**

1.  To verify that the `operatorconfig` CR is deleted, run the following command:
    ```terminal
    $ oc get operatorconfig -n <operator_namespace>
    ```

    The command must return `no resource found`.
1.  To verify that the old webhooks are deleted, run the following commands:
    ```terminal
    $ oc get validatingwebhookconfigurations | grep external-secrets
    ```
    ```terminal
    $ oc get mutatingwebhookconfigurations | grep external-secrets
    ```

    The commands must return no results.