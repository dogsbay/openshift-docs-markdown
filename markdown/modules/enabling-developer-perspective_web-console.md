{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the *Developer* perspective in the web console {id="enabling-developer-perspective_web-console_{{ context }}"}

Enable the **Developer** perspective in the web console to give your developers tools to manage applications, visualize topology, and monitor projects as they develop and build them. {._abstract}

{% if not openshift_rosa_hcp %}
Starting with {{ product_title }} 4.19, the perspectives in the web console have unified. There is no longer a **Developer** perspective by default; however, cluster administrators can enable the **Developer** perspective for developers to use.
{% endif %}
{% if openshift_rosa_hcp %}
Cluster administrators can enable the **Developer** perspective for developers to use.
{% endif %}

You can enable the **Developer** perspective with the following steps:

**Prerequisites**

*   You have access to the web console as a user with `cluster-admin` privileges.

**Procedure**

1.  Navigate to the **Cluster Settings** page by clicking **Administration → Cluster Settings**.
1.  Select the **Configuration** tab.
1.  Type `console` in the search field to locate the Console Operator resource and select `operator.openshift.io`.
1.  On the **Cluster Details** page, click the **Actions** menu and select **Customize**.
1.  In the **General** tab, locate the **Perspectives** section. You can enable or disable the **Developer** perspective as needed. Changes are automatically applied.
1.  Optional: You can enable the **Developer** perspective by using the CLI with the following command:
    ```terminal
    $ oc patch console.operator.openshift.io/cluster --type='merge' -p '{"spec":{"customization":{"perspectives":[{"id":"dev","visibility":{"state":"Enabled"}}]}}}'
    ```

    :::note

    The change reflects in the web console after the console pod restarts successfully.
    
    :::


**Verification**

1.  Locate the perspective switcher in the web console.
1.  Verify that **Developer** is displayed as an available perspective option.