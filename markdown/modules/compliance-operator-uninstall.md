{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the OpenShift Compliance Operator from {{ product_title }} using the web console {id="compliance-operator-uninstall_{{ context }}"}

To remove the Compliance Operator, you must first delete the objects in the namespace. After the objects are removed, you can remove the Operator and its namespace by deleting the **openshift-compliance** project. {._abstract}

**Prerequisites**

*   Access to an {{ product_title }} cluster by using an account with `cluster-admin` permissions.
*   The OpenShift Compliance Operator is installed.

**Procedure**

1.  Go to the **Ecosystem** → **Installed Operators** → **Compliance Operator** page.
    1.  Click **All instances**.
    1.  In **All namespaces**, click the Options menu {{ kebab }} and delete all ScanSettingBinding, ComplainceSuite, ComplianceScan, and ProfileBundle objects.
1.  Switch to the **Administration** → **Ecosystem** → **Installed Operators** page.
1.  Click the Options menu {{ kebab }} on the **Compliance Operator** entry and select **Uninstall Operator**.
1.  Switch to the **Home** → **Projects** page.
1.  Search for 'compliance'.
1.  Click the Options menu {{ kebab }} next to the **openshift-compliance** project, and select **Delete Project**.
    1.  Confirm the deletion by typing `openshift-compliance` in the dialog box, and click **Delete**.