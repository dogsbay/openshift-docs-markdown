{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a custom namespace for boot source images by using the web console {id="virt-boot-source-images-namespace-web_{{ context }}"}

You can configure a custom namespace for boot source images in your cluster by using the {{ product_title }} web console. {._abstract}

**Procedure**

1.  In the web console, select **Virtualization** → **Settings**.
1.  On the **Cluster** tab, select **General settings** → **Templates and images management**.
1.  Click **Bootable volumes project**.
1.  Select a namespace to use for boot source images.
    1.  If you already created a namespace, select it from the **Project** list.
    1.  If you did not create a namespace, scroll to the bottom of the list and click **Create project**.
        1.  Enter a name for your new namespace in the **Name** field of the **Create project** dialog.
        1.  Click **Create**.