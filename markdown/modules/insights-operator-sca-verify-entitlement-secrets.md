{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verify and manage entitlement secrets {id="insights-operator-verify-manage-entitlement-secrets_{{ context }}"}

To verify the imported entitlement secrets, list architecture-specific secrets and change the import behavior with the {{ insights_Operator }} configuration. {._abstract}

**Prerequisites**

*   You have cluster-admin permissions for the {{ product_title }} cluster.
*   You have set Simple Content Access (SCA) to **Enabled** in the {{ hybrid_console }} or your Red&#160;Hat Satellite instance.
*   You have registered the cluster with {{ cluster_manager_first }} and have an active connection to the internet or a proxy to reach Red&#160;Hat services.
*   You have confirmed that the `insights-config` `ConfigMap` exists in the `openshift-insights` namespace.

**Procedure**

*   To list the secrets in the `openshift-config-managed` namespace, run the following command in a terminal:
    ```terminal
    $ oc get secrets -n openshift-config-managed | grep etc-pki-entitlement
    ```

**Verification**

*   Verify that the secrets match the cluster architecture (for example, `-amd64` or `-arm64`) by checking the output of the list command to ensure the relevant secrets are present. The output shows secrets that include the name of the cluster’s architecture, and look similar to the following:
    ```terminal
    etc-pki-entitlement                 Opaque                    2      28h
    etc-pki-entitlement-amd64           Opaque                    2      88s
    etc-pki-entitlement-arm64           Opaque                    2      88s
    ```