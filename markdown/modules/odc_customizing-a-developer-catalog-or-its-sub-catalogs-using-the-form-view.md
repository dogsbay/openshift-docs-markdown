{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing a developer catalog or its sub-catalogs using the form view {id="odc_customizing-a-developer-catalog-or-its-sub-catalogs-using-the-form-view_{{ context }}"}

You can customize a developer catalog by using the form view in the Web Console. {._abstract}

**Prerequisites**

*   An OpenShift web console session with cluster administrator privileges.
*   The Developer perspective is enabled.

**Procedure**

1.  In the **Administrator** perspective, navigate to **Administration** -> **Cluster Settings**.
1.  Select the **Configuration** tab and click the **Console (operator.openshift.io)** resource.
1.  Click **Actions** -> **Customize**.
1.  Enable or disable items in the **Pre-pinned navigation items**, **Add page**, and **Developer Catalog** sections.

    **Verification**

    After you have customized the developer catalog, your changes are automatically saved in the system and take effect in the browser after a refresh.
    ![Developer catalog customization options in the form view](/_assets/images/odc_customizing_developer_catalog.png)


:::note

As an administrator, you can define the navigation items that appear by default for all users. You can also reorder the navigation items.

:::



:::tip

You can use a similar procedure to customize Web UI items such as Quick starts, Cluster roles, and Actions.

:::