{%- set _mod_docs_content_type = "PROCEDURE" %}
# Upgrading a Helm release {id="odc-upgrading-helm-release_{{ context }}"}

You can upgrade a Helm release to use a new chart version or update your release configuration. {._abstract}

**Procedure**

1.  In the **Topology** view, select the Helm release to see the side panel.
1.  Click **Actions > Upgrade Helm Release**.
1.  On the **Upgrade Helm Release** page, if you can edit the **Chart Version** field, select the chart version you want to upgrade to, edit the values as needed, then click **Upgrade** to create a revision of the Helm release. The **Helm Releases** page shows both revisions.

    :::note

    If you installed the Helm chart using a direct URL, you can’t change **Chart Version**. Instead, edit the values in **Form view** or **YAML view**.
    
    :::