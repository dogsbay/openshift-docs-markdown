{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing the {{ web_terminal_op }} {id="removing-web-terminal-operator_{{ context }}"}

You can uninstall the web terminal by removing the {{ web_terminal_op }} and custom resources used by the Operator. {._abstract}

**Prerequisites**

*   You have access to the {{ product_title }} web console as a user with the `cluster-admin` role.
*   You have installed the `oc` CLI.

**Procedure**

1.  In the web console, navigate to **Ecosystem** → **Installed Operators**.
1.  Scroll the filter list or type a keyword into the **Filter by name** box to find the {{ web_terminal_op }}.
1.  Click the Options menu {{ kebab }} for the {{ web_terminal_op }}, and then select **Uninstall Operator**.
1.  In the **Uninstall Operator** confirmation dialog box, click **Uninstall** to remove the Operator, Operator deployments, and pods from the cluster. The Operator stops running and no longer receives updates.