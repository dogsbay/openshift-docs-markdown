{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling Instance Metadata Service on machine pools in {{ cluster_manager }} {id="rosa-imds-machine-pools-ui_{{ context }}"}

You can select your Instance Metadata Service (IMDS) type when creating your cluster in {{ cluster_manager }}. You can select to use both IMDSv1 and IMDSv2, or you can specify to only use IMDSv2.

**Prerequisites**

*   You installed and configured the latest AWS (`aws`), ROSA (`rosa`), and OpenShift (`oc`) CLIs on your workstation.
*   You logged in to your Red Hat account by using the `rosa` CLI.
*   You have the permissions to create and manage clusters.
*   You have access to {{ cluster_manager_url }}.

**Procedure**

1.  Log in to the web console.
1.  Create a ROSA cluster using your preferences.
1.  In the **Create a ROSA Cluster** wizard on the **Cluster settings** → **Machine pool** page, under the **Instance Metadata Service (IMDS)** section, select whether your machine pools use either both IMDSv1 and IMDSv2 or if you only want to use IMDSv2.
1.  Select **Next** to save this selection.

**Verification**

1.  After your cluster has been created, on your cluster **Overview** tab, you see the **Instance Metadata Service (IMDS)** field that notes your IMDS version support.