{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling quick starts in the web console {id="disable-quickstarts-admin-console_{{ context }}"}

You can use the **Administrator** perspective of the web console to disable one or more quick starts. {._abstract}

**Prerequisites**

*   You have cluster administrator permissions and are logged in to the web console.

**Procedure**

1.  In the **Administrator** perspective, navigate to **Administration** -> **Cluster Settings**.
1.  On the **Cluster Settings** page, click the **Configuration** tab.
1.  On the **Configuration** page, click the **Console** configuration resource with the description **operator.openshift.io**.
    ![Image of the Configuration page showing the correct Console configuration resource to select](/_assets/images/cluster-settings-console.png)
1.  From the **Action** drop-down list, select **Customize**, which opens the **Cluster configuration** page.
1.  On the **General** tab, in the **Quick starts** section, you can select items in either the **Enabled** or **Disabled** list, and move them from one list to the other by using the arrow buttons.
    *   To enable or disable a single quick start, click the quick start, then use the single arrow buttons to move the quick start to the appropriate list.
    *   To enable or disable multiple quick starts at once, press Ctrl and click the quick starts you want to move. Then, use the single arrow buttons to move the quick starts to the appropriate list.
    *   To enable or disable all quick starts at once, click the double arrow buttons to move all of the quick starts to the appropriate list.