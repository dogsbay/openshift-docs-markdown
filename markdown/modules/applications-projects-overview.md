{%- set _mod_docs_content_type = "CONCEPT" %}
# Working on a project {id="applications-projects-overview_{{ context }}"}

Manage the complete lifecycle of isolated projects, from initial provisioning to user access control, to securely organize applications across your cluster. {._abstract}

After you create the project, you can grant or revoke access to a project and manage cluster roles for the users. You can also edit the project configuration resource while creating a project template that is used for automatic provisioning of new projects.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
Using the CLI, you can create a project as a different user by impersonating a request to the {{ product_title }} API. When you make a request to create a new project, the {{ product_title }} uses an endpoint to provision the project according to a customizable template. As a cluster administrator, you can choose to prevent an authenticated user group from self-provisioning new projects.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
As a user with dedicated administrator permissions, you can choose to prevent an authenticated user group from self-provisioning new projects.
{% endif %}