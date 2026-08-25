{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling Elasticsearch {id="uninstall-es-operator_{{ context }}"}

**Prerequisites**

*   You have administrator permissions.
*   Have access to the {{ product_title }} web console as a user with `cluster-admin` privileges.
*   If you have not already removed the {{ clo }} and related resources, you must remove references to Elasticsearch from the `ClusterLogging` custom resource.

**Procedure**

1.  Go to the **Administration** -> **Custom Resource Definitions** page, and click **Elasticsearch**.
1.  On the **Custom Resource Definition Details** page, click **Instances**.
1.  Click the Options menu {{ kebab }} next to the instance, and then click **Delete Elasticsearch**.
1.  Go to the **Administration** -> **Custom Resource Definitions** page.
1.  Click the Options menu {{ kebab }} next to **Elasticsearch**, and select **Delete Custom Resource Definition**.
1.  Delete the object storage secret.
1.  Go to the **Ecosystem** -> **Installed Operators** page.
1.  Click the Options menu {{ kebab }} next to the {{ es_op }}, and then click **Uninstall Operator**.
1.  Optional: Delete the `openshift-operators-redhat` project.

    :::important

    Do not delete the `openshift-operators-redhat` project if other global Operators are installed in this namespace.
    
    :::

    1.  Go to the **Home** -> **Projects** page.
    1.  Click the Options menu {{ kebab }} next to the **openshift-operators-redhat** project, and then click **Delete Project**.
    1.  Confirm the deletion by typing `openshift-operators-redhat` in the dialog box, and then click **Delete**.