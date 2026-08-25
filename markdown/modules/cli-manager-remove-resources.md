{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing {{ cli_manager }} resources {id="cli-manager-remove-resources_{{ context }}"}

Optionally, after you uninstall the {{ cli_manager }}, you can remove its related resources from your cluster.

**Prerequisites**

*   You are logged in to {{ product_title }} as a user with the `cluster-admin` role.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Remove the `openshift-cli-manager-operator` namespace:
    1.  Navigate to **Administration** → **Namespaces**.
    1.  Click the Options menu {{ kebab }} next to the **openshift-cli-manager-operator** entry and select **Delete Namespace**.
    1.  In the confirmation dialog, enter `openshift-cli-manager-operator` in the field and click **Delete**.