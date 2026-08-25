{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the {{ logging }} {id="uninstall-cluster-logging-operator_{{ context }}"}

You can stop aggregating logs by deleting the {{ clo }} and the `ClusterLogging` custom resource (CR).

**Prerequisites**

*   Have access to the {{ product_title }} web console as a user with `cluster-admin` privileges.

**Procedure**

1.  Go to the **Administration** → **Custom Resource Definitions** page, and click **ClusterLogging**.
1.  On the **Custom Resource Definition Details** page, click **Instances**.
1.  Click the Options menu {{ kebab }} next to the instance, and click **Delete ClusterLogging**.
1.  Go to the **Administration** → **Custom Resource Definitions** page.
1.  Click the Options menu {{ kebab }} next to **ClusterLogging**, and select **Delete Custom Resource Definition**.

    :::warning

    Deleting the `ClusterLogging` CR does not remove the persistent volume claims (PVCs). To delete the remaining PVCs, persistent volumes (PVs), and associated data, you must take further action. Releasing or deleting PVCs can delete PVs and cause data loss.
    
    :::

1.  If you have created a `ClusterLogForwarder` CR, click the Options menu {{ kebab }} next to **ClusterLogForwarder**, and then click **Delete Custom Resource Definition**.
1.  Go to the **Ecosystem** → **Installed Operators** page.
1.  Click the Options menu {{ kebab }} next to the {{ clo }}, and then click **Uninstall Operator**.
1.  Optional: Delete the `openshift-logging` project.

    :::warning

    Deleting the `openshift-logging` project deletes everything in that namespace, including any persistent volume claims (PVCs). If you want to preserve logging data, do not delete the `openshift-logging` project.
    
    :::

    1.  Go to the **Home** → **Projects** page.
    1.  Click the Options menu {{ kebab }} next to the **openshift-logging** project, and then click **Delete Project**.
    1.  Confirm the deletion by typing `openshift-logging` in the dialog box, and then click **Delete**.