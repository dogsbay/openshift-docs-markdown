{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a broker by using the web console {id="serverless-creating-a-broker-odc_{{ context }}"}

After Knative Eventing is installed on your cluster, you can create a broker by using the web console. Using the {{ product_title }} web console provides a streamlined and intuitive user interface to create a broker.

**Prerequisites**

*   You have logged in to the {{ product_title }} web console.
*   The {{ ServerlessOperatorName }}, Knative Serving and Knative Eventing are installed on the cluster.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  In the **Developer** perspective, navigate to **+Add** → **Broker**. The **Broker** page is displayed.
1.  Optional. Update the **Name** of the broker. If you do not update the name, the generated broker is named `default`.
1.  Click **Create**.

**Verification**

You can verify that the broker was created by viewing broker components in the **Topology** page.

1.  In the **Developer** perspective, navigate to **Topology**.
1.  View the `mt-broker-ingress`, `mt-broker-filter`, and `mt-broker-controller` components.
    ![View the broker components in the Topology view](/images/serverless-verify-broker-odc.png)