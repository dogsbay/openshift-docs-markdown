{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the *Developer* perspective in the web console {id="enabling-developer-perspective_web-console_{{ context }}"}

{%- if not openshift_rosa_hcp %}
Starting with {{ product_title }} 4.19, the perspectives in the web console have unified. There is no longer a **Developer** perspective by default; however, cluster administrators can enable the **Developer** perspective for developers to use.
{% endif %}
{% if openshift_rosa_hcp %}
Cluster administrators can enable the **Developer** perspective for developers to use.
{% endif %} {._abstract}

You can enable the **Developer** perspective with the following steps:

**Prerequisites**

*   You have access to the web console as a user with `cluster-admin` privileges.

**Procedure**

1.  Navigate to the **Cluster Settings** page by clicking  **Administration** -> **Cluster Settings**.
1.  Select the **Configuration** tab on the **Cluster Settings** page.
1.  Type `console` in the search to locate the Console Operator resource and select `operator.openshift.io`.
1.  On the **Cluster Details** page, click the **Actions** menu and select **Customize**.
1.  In the **General** tab, locate the **Perspectives** section. You can enable or disable the **Developer** perspective as needed. Changes are automatically applied.
1.  Optional: You can enable the **Developer** perspective with the CLI by running the following command:
    ```terminal
    $ oc patch console.operator.openshift.io/cluster --type='merge' -p '{"spec":{"customization":{"perspectives":[{"id":"dev","visibility":{"state":"Enabled"}}]}}}'
    ```

    :::note

    It will take some time for the change to reflect in the web console as the console pod restarts.
    
    :::