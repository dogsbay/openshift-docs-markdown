{%- set _mod_docs_content_type = "PROCEDURE" %}
# OCM roles and access {id="ocm-accesscontrol-tab-ocm-roles-access_{{ context }}"}

Use the following procedure to grant roles on the cluster. {._abstract}

**Prerequisites**

*   You must be the cluster owner or have the correct permissions to grant roles.

**Procedure**

1.  Click the ***Grant role*** button.
1.  Enter the Red Hat account login for the user that you want to grant a role on the cluster.
1.  Select the role from following options:
    *   ***Cluster editor*** allows users or groups to manage or configure the cluster. 
    *   ***Cluster viewer*** allows users or groups to view cluster details only.
        {%- if openshift_rosa %}
    *   ***Cluster autoscaler editor*** allows users or groups to manage and configure the cluster autoscaler settings.
        {%- endif %}
    *   ***Identity provider editor*** allows users or groups to manage and configure the identity providers.
    *   ***Machine pool editor*** allows users or groups to manage and configure the machine pools. 
1.  Click the ***Grant role*** button on the dialog box.