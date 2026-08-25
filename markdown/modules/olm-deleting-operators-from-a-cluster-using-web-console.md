{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting Operators from a cluster using the web console {id="olm-deleting-operators-from-a-cluster-using-web-console_{{ context }}"}

Cluster administrators can delete installed Operators from a selected namespace by using the web console. {._abstract}

**Prerequisites**

*   You have access to the {{ product_title }} cluster web console using an account with
{%- if openshift_enterprise or openshift_webscale or openshift_origin %}
`cluster-admin` permissions.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
`dedicated-admin` permissions.
{%- endif %}

**Procedure**

1.  Navigate to the **Ecosystem** → **Installed Operators** page.
1.  Scroll or enter a keyword into the **Filter by name** field to find the Operator that you want to remove. Then, click on it.
1.  On the right side of the **Operator Details** page, select **Uninstall Operator** from the **Actions** list.

    An **Uninstall Operator?** dialog box is displayed.
1.  Select **Uninstall** to remove the Operator, Operator deployments, and pods. Following this action, the Operator stops running and no longer receives updates.

    :::note

    This action does not remove resources managed by the Operator, including custom resource definitions (CRDs) and custom resources (CRs). Dashboards and navigation items enabled by the web console and off-cluster resources that continue to run might need manual clean up. To remove these after uninstalling the Operator, you might need to manually delete the Operator CRDs.
    
    :::