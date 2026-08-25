{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting the {{ pipelines_title }} components and Custom Resources {id="op-deleting-the-pipelines-component-and-custom-resources_{{ context }}"}

Delete the Custom Resources (CRs) created by default during installation of the {{ pipelines_title }} Operator.

**Procedure**

1.  In the **Administrator** perspective of the web console, navigate to **Administration** → **Custom Resource Definition**.
1.  Type `config.operator.tekton.dev` in the **Filter by name** box to search for the {{ pipelines_title }} Operator CRs.
1.  Click **CRD Config** to see the **Custom Resource Definition Details** page.
1.  Click the **Actions** drop-down menu and select **Delete Custom Resource Definition**.


    :::note

    Deleting the CRs will delete the {{ pipelines_title }} components, and all the tasks and pipelines on the cluster will be lost.
    
    :::

1.  Click **Delete** to confirm the deletion of the CRs.


:::important

Repeat the procedure to find and remove CRs of optional components such as {{ tekton_hub }} before uninstalling the Operator. If you uninstall the Operator without removing the CRs of optional components, you cannot remove them later.

:::