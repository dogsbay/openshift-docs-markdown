{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the Perspectives {id="accessing-perspectives_{{ context }}"}

You can access the **Administrator** and **Developer** perspective from the web console as follows:

**Prerequisites**

To access a perspective, ensure that you have logged in to the web console. Your default perspective is automatically determined by the permission of the users. The **Administrator** perspective is selected for users with access to all projects, while the **Developer** perspective is selected for users with limited access to their own projects

**Additional resources**

See [Adding User Preferences](https://docs.openshift.com/container-platform/latest/web_console/adding-user-preferences.html) for more information on changing perspectives.

**Procedure**

1.  Use the perspective switcher to switch to the **Administrator** or **Developer** perspective.
1.  Select an existing project from the **Project** drop-down list. You can also create a new project from this dropdown.


:::note

You can use the perspective switcher only as `cluster-admin`.

:::