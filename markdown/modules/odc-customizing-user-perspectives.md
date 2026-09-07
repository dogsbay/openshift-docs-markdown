{%- set _mod_docs_content_type = "CONCEPT" %}
# Customizing user perspectives {id="odc-customizing-user-perspectives_{{ context }}"}

As a cluster administrator, you can show or hide web console perspectives for all users or for a specific user role, ensuring users see only the perspectives relevant to their role and tasks. For example, you can hide the **Administrator** perspective from users without administrative access. {._abstract}

You can also customize the perspective visibility for users based on role-based access control (RBAC). For example, if you customize a perspective for monitoring purposes, which requires specific permissions, you can define that the perspective is visible only to users with required permissions.

Each perspective includes the following mandatory parameters, which you can edit in the YAML view:

*   `id`: Defines the ID of the perspective to show or hide
*   `visibility`: Defines the state of the perspective along with access review checks, if needed
*   `state`: Defines whether the perspective is enabled, disabled, or needs an access review check


:::note

By default, all perspectives are enabled. When you customize the user perspective, your changes are applicable to the entire cluster.

:::