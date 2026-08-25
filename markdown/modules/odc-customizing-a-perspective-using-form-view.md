{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing a perspective using form view {id="odc-customizing-a-perspective-using-form-view_{{ context }}"}

You can customize the visibility of a perspective in the web console by using the form view. {._abstract}

**Prerequisites**

*   You must have administrator privileges.

**Procedure**

1.  In the **Administrator** perspective, navigate to **Administration** → **Cluster Settings**.
1.  Select the **Configuration** tab and click the **Console (operator.openshift.io)** resource.
1.  Click **Actions** → **Customize** on the right side of the page.
1.  In the **General** settings, customize the perspective by selecting one of the following options from the dropdown list:
    *   **Enabled**: Enables the perspective for all users
    *   **Only visible for privileged users**: Enables the perspective for users who can list all namespaces
    *   **Only visible for unprivileged users**: Enables the perspective for users who cannot list all namespaces
    *   **Disabled**: Disables the perspective for all users

        A notification opens to confirm that your changes are saved.

        :::note

        When you customize the user perspective, your changes are automatically saved and take effect after a browser refresh.
        
        :::