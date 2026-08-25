{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the {{ log_plug }} after you have installed the {{ clo }} {id="enabling-log-console-plugin_{{ context }}"}

You can enable the {{ log_plug }} as part of the {{ clo }} installation, but you can also enable the plugin if you have already installed the {{ clo }} with the plugin disabled.

**Prerequisites**

*   You have administrator permissions.
*   You have installed the {{ clo }} and selected **Disabled** for the **Console plugin**.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  In the {{ product_title }} web console **Administrator** perspective, navigate to **Ecosystem** -> **Installed Operators**.
1.  Click **Red Hat OpenShift Logging**. This takes you to the Operator **Details** page.
1.  In the **Details** page, click **Disabled** for the **Console plugin** option.
1.  In the **Console plugin enablement** dialog, select **Enable**.
1.  Click **Save**.
1.  Verify that the **Console plugin** option now shows **Enabled**.
1.  The web console displays a pop-up window when changes have been applied. The window prompts you to reload the web console. Refresh the browser when you see the pop-up window to apply the changes.