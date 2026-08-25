{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configuring the web terminal timeout for all users {id="configure-web-terminal-timeout-admin_{{ context }}"}

You can use the **Administrator** perspective of the web console to set the default web terminal timeout period for all users. {._abstract}

**Prerequisites**

*   You have cluster administrator permissions and are logged in to the web console.
*   You have installed the {{ web_terminal_op }}.

**Procedure**

1.  In the **Administrator** perspective, navigate to **Administration** → **Cluster Settings**.
1.  On the **Cluster Settings** page, click the **Configuration** tab.
1.  On the **Configuration** page, click the **Console** configuration resource with the description **operator.openshift.io**.
    ![Image of the Configuration page showing the correct Console configuration resource to select](/_assets/images/cluster-settings-console.png)
1.  From the **Action** drop-down list, select **Customize**, which opens the **Cluster configuration** page.
1.  Click the **Web Terminal** tab, which opens the **Web Terminal Configuration** page.
1.  Set a value for the timeout. From the drop-down list, select a time interval of **Seconds**, **Minutes**, **Hours**, or **Milliseconds**.
1.  Click **Save**.