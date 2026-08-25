{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting user preferences {id="odc-setting-user-preferences_{{ context }}"}

You can set the default user preferences for your cluster. {._abstract}

**Procedure**

1.  Log in to the {{ product_title }} web console using your login credentials.
1.  Use the masthead to access the user preferences under the user profile.
1.  In the **General** section:
    1.  In the ***Theme*** field, you can set the theme that you want to work in. The console defaults to the selected theme each time you log in.
    1.  In the **Project** field, select a project you want to work in. The console defaults to the project every time you log in.
    1.  In the **Topology** field, you can set the topology view to default to the graph or list view. If not selected, the console defaults to the last view you used.
    1.  In the **Create/Edit resource method** field, you can set a preference for creating or editing a resource. If both the form and YAML options are available, the console defaults to your selection.
1.  In the **Language** section, select **Default browser language** to use the default browser language settings. Otherwise, select the language that you want to use for the console.
1.  In the **Notifications** section, you can toggle display notifications created by users for specific projects on the **Overview** page or notification drawer.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  In the **Applications** section:
    1.  You can view the default **Resource type**. For example, if the {{ ServerlessOperatorName }} is installed, the default resource type is **Serverless Deployment**. Otherwise, the default resource type is **Deployment**.
    1.  You can select another resource type to be the default resource type from the **Resource Type** field.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
1.  In the **Applications** section:
    1.  You can view the default **Resource type**. The default resource type is **Deployment**.
    1.  You can select another resource type to be the default resource type from the **Resource Type** field.
{% endif %}