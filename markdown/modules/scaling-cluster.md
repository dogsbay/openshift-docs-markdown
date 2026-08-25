{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling your cluster {id="scaling-cluster_{{ context }}"}

You can scale the number of load balancers, the persistent storage capacity, and the node count for your {{ product_title }} cluster from {{ cluster_manager }}. {._abstract}

**Prerequisites**

*   You logged in to {{ cluster_manager_url }}.
*   You created an {{ product_title }} cluster.

**Procedure**

*   To scale the number of load balancers or the persistent storage capacity:
    1.  Navigate to {{ cluster_manager_url }} and select your cluster.
    1.  Select **Edit load balancers and persistent storage** from the **Actions** drop-down menu.
    1.  Select how many **Load balancers** that you want to scale to.
    1.  Select the **Persistent storage** capacity that you want to scale to.
    1.  Click **Apply**. Scaling occurs automatically.
*   To scale the node count:
    1.  Navigate to {{ cluster_manager_url }} and select your cluster.
    1.  Select **Edit node count** from the **Actions** drop-down menu.
    1.  Select a **Machine pool**.
    1.  Select a **Node count** per zone.
    1.  Click **Apply**. Scaling occurs automatically.

**Verification**

*   In the **Overview** tab under the **Details** heading, you can review the load balancer configuration, persistent storage details, and actual and required node counts.