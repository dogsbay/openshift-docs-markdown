{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling Loki {id="uninstall-loki-operator_{{ context }}"}

**Prerequisites**

*   You have administrator permissions.
*   You have access to the {{ product_title }} web console with `cluster-admin` privleges.
*   If you have not already removed the {{ clo }} and related resources, you have removed references to LokiStack from the `ClusterLogging` custom resource.

**Procedure**

1.  Go to the **Administration** → **Custom Resource Definitions** page, and click **LokiStack**.
1.  On the **Custom Resource Definition Details** page, click **Instances**.
1.  Click the Options menu {{ kebab }} next to the instance, and then click **Delete LokiStack**.
1.  Go to the **Administration** → **Custom Resource Definitions** page.
1.  Click the Options menu {{ kebab }} next to **LokiStack**, and select **Delete Custom Resource Definition**.
1.  Delete the object storage secret.
1.  Go to the **Ecosystem** → **Installed Operators** page.
1.  Click the Options menu {{ kebab }} next to the {{ loki_op }}, and then click **Uninstall Operator**.
1.  Optional: Delete the `openshift-operators-redhat` project.

    :::important

    Do not delete the `openshift-operators-redhat` project if other global Operators are installed in this namespace.
    
    :::

    1.  Go to the **Home** → **Projects** page.
    1.  Click the Options menu {{ kebab }} next to the **openshift-operators-redhat** project, and then click **Delete Project**.
    1.  Confirm the deletion by typing `openshift-operators-redhat` in the dialog box, and then click **Delete**.