{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting the HyperConverged custom resource {id="virt-deleting-deployment-custom-resource_{{ context }}"}

To uninstall {{ VirtProductName }}, you first delete the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.

**Procedure**

1.  Navigate to the **Ecosystem** → **Installed Operators** page.
1.  Select the {{ VirtProductName }} Operator.
1.  Click the **{{ VirtProductName }} Deployment** tab.
1.  Click the Options menu {{ kebab }} beside `kubevirt-hyperconverged` and select **Delete HyperConverged**.
1.  Click **Delete** in the confirmation window.