{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling {{ js_operator }} resources {id="js-remove-resources_{{ context }}"}

Optionally, after uninstalling the {{ js_operator }}, you can remove its related resources from your cluster. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   You have uninstalled the {{ js_operator }}.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Remove CRDs that were created when the {{ js_operator }} was installed:
    1.  Navigate to **Administration** → **CustomResourceDefinitions**.
    1.  Enter `JobSetOperator` in the **Name** field to filter the CRDs.
    1.  Click the Options menu {{ kebab }} next to the **JobSetOperator** CRD and select **Delete CustomResourceDefinition**.
    1.  In the confirmation dialog, click **Delete**.
1.  Delete the `openshift-jobset-operator` namespace.
    1.  Navigate to **Administration** → **Namespaces**.
    1.  Fine `openshift-jobset-operator` in the list of namespaces.
    1.  Click the Options menu {{ kebab }} next to the **openshift-jobset-operator** entry and select **Delete Namespace**.
    1.  In the confirmation dialog, enter `openshift-jobset-operator` and click **Delete**.