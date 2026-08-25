{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a NodeFeatureDiscovery CR by using the web console {id="creating-nfd-cr-web-console_{{ context }}"}

Create a `NodeFeatureDiscovery` CR by using the {{ product_title }} web console to deploy the NFD operand and enable hardware feature detection on your cluster nodes. {._abstract}

**Prerequisites**

*   You have access to an {{ product_title }} cluster.
*   You logged in as a user with `cluster-admin` privileges.
*   You installed the NFD Operator.

**Procedure**

1.  Navigate to the **Ecosystem** -> **Installed Operators** page.
1.  In the **Node Feature Discovery** section, under **Provided APIs**, click **Create instance**.
1.  Edit the values of the `NodeFeatureDiscovery` CR.
1.  Click **Create**.

    :::note

    Starting with version 4.12, the `operand.image` field in the `NodeFeatureDiscovery` CR is mandatory. If the NFD Operator is deployed by using {{ olm_first }}, OLM automatically sets the `operand.image` field. If you create the `NodeFeatureDiscovery` CR by using the {{ product_title }} CLI or the {{ product_title }} web console, you must set the `operand.image` field explicitly.
    
    :::