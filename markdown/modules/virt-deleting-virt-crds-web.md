{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting {{ VirtProductName }} custom resource definitions {id="virt-deleting-virt-crds-web_{{ context }}"}

You can delete the {{ VirtProductName }} custom resource definitions (CRDs) by using the web console. {._abstract}

**Prerequisites**

*   You have access to the {{ product_title }} cluster using an account with `cluster-admin` permissions.

**Procedure**

1.  Navigate to **Administration** → **CustomResourceDefinitions**.
1.  Select the **Label** filter and enter `operators.coreos.com/kubevirt-hyperconverged.openshift-cnv` in the **Search** field to display the {{ VirtProductName }} CRDs.
1.  Click the Options menu {{ kebab }} beside each CRD and select **Delete CustomResourceDefinition**.