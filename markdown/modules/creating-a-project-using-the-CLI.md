{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a project by using the CLI {id="creating-a-project-using-the-CLI_{{ context }}"}

If your cluster administrator has provided you with the required permissions, you can create a new project. {._abstract}


:::note

Projects starting with `openshift-` and `kube-` are considered critical by {{ product_title }}. 
{{ product_title }} does not allow you to create projects that start with `openshift-` or `kube-` by using the `oc new-project` command.
{%- if not openshift_dedicated %}
Cluster administrators can create these projects by using the `oc adm new-project` command.
{% endif %}
{% if openshift_dedicated %}
For {{ product_title }} clusters that use the Customer Cloud Subscription (CCS) model, users with `cluster-admin` privileges can create these projects by using the `oc adm new-project` command.
{%- endif %}

:::


**Procedure**

*   To create a project, enter the following command:
    ```terminal
    $ oc new-project <project_name> \
        --description="<description>" --display-name="<display_name>"
    ```

    The following example uses actual values:
    ```terminal
    $ oc new-project hello-openshift \
        --description="This is an example project" \
        --display-name="Hello OpenShift"
    ```

    :::note

    The number of projects that you can create
{%- if openshift_enterprise or openshift_webscale or openshift_origin or openshift_dedicated or openshift_rosa %}
    might be limited by the system administrator.
{% endif %}
{% if openshift_online %}
    is limited.
{%- endif %}
    After your limit is reached, you might have to delete an existing project to create a new one.
    
    :::