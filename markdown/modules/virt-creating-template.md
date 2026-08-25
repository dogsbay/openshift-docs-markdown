{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a custom VM template in the web console {id="virt-creating-template_{{ context }}"}

You can create a virtual machine template by editing a YAML file example in the {{ product_title }} web console. {._abstract}

**Procedure**

1.  In the web console, click **Virtualization** → **Templates** in the side menu.
1.  Optional: Use the **Project** drop-down menu to change the project associated with the new template. All templates are saved to the `openshift` project by default.
1.  Click **Create Template**.
1.  Specify the template parameters by editing the YAML file.
1.  Click **Create**.

    The template is displayed on the **Templates** page.
1.  Optional: Click **Download** to download and save the YAML file.