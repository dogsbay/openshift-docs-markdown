{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling {{ lws_operator }} resources {id="lws-remove-resources_{{ context }}"}

Optionally, remove custom resources (CRs) and the associated namespace after the {{ lws_operator }} is uninstalled. This cleans up all remaining Leader Worker Set artifacts. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   You have uninstalled the {{ lws_operator }}.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Remove CRDs that were created when the {{ lws_operator }} was installed:
    1.  Navigate to **Administration** -> **CustomResourceDefinitions**.
    1.  Enter `LeaderWorkerSetOperator` in the **Name** field to filter the CRDs.
    1.  Click the Options menu {{ kebab }} next to the **LeaderWorkerSetOperator** CRD and select **Delete CustomResourceDefinition**.
    1.  In the confirmation dialog, click **Delete**.
1.  Delete the `openshift-lws-operator` namespace.
    1.  Navigate to **Administration** -> **Namespaces**.
    1.  Enter `openshift-lws-operator` into the filter box.
    1.  Click the Options menu {{ kebab }} next to the **openshift-lws-operator** entry and select **Delete Namespace**.
    1.  In the confirmation dialog, enter `openshift-lws-operator` and click **Delete**.