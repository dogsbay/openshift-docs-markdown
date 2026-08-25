{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling {{ run_once_operator }} resources {id="rodoo-uninstall-resources_{{ context }}"}

Optionally, after uninstalling the {{ run_once_operator }}, you can clean up remaining resources by deleting custom resource definitions, the operator namespace, and namespace labels. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   You have uninstalled the {{ run_once_operator }}.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Remove CRDs that were created when the {{ run_once_operator }} was installed:
    1.  Navigate to **Administration** -> **CustomResourceDefinitions**.
    1.  Enter `RunOnceDurationOverride` in the **Name** field to filter the CRDs.
    1.  Click the Options menu {{ kebab }} next to the **RunOnceDurationOverride** CRD and select **Delete CustomResourceDefinition**.
    1.  In the confirmation dialog, click **Delete**.
1.  Delete the `openshift-run-once-duration-override-operator` namespace.
    1.  Navigate to **Administration** -> **Namespaces**.
    1.  Enter `openshift-run-once-duration-override-operator` into the filter box.
    1.  Click the Options menu {{ kebab }} next to the **openshift-run-once-duration-override-operator** entry and select **Delete Namespace**.
    1.  In the confirmation dialog, enter `openshift-run-once-duration-override-operator` and click **Delete**.
1.  Remove the run-once duration override label from the namespaces that it was enabled on.
    1.  Navigate to **Administration** -> **Namespaces**.
    1.  Select your namespace.
    1.  Click **Edit** next to the **Labels** field.
    1.  Remove the **runoncedurationoverrides.admission.runoncedurationoverride.openshift.io/enabled=true** label and click **Save**.