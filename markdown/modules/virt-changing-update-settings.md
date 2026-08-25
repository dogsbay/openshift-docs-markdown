{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing update settings {id="virt-changing-update-settings_{{ context }}"}

You can control how and when updates are installed by changing the update channel and approval strategy for the {{ CNVOperatorDisplayName }} subscription. {._abstract}

**Prerequisites**

*   You have installed the {{ CNVOperatorDisplayName }}.
*   You have logged in to the {{ product_title }} web console as a cluster administrator.

**Procedure**

1.  Click **Ecosystem** → **Installed Operators**.
1.  Select **{{ VirtProductName }}** from the list.
1.  Click the **Subscription** tab.
1.  In the **Subscription details** section, click the setting that you want to change. For example, to change the approval strategy from **Manual** to **Automatic**, click **Manual**.
1.  In the window that opens, select the new update channel or approval strategy.
1.  Click **Save**.