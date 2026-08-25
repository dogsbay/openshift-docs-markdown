{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a storage cluster with {{ FusionSAN }} {id="creating-storage-cluster-fusion-access-san_{{ context }}"}

Once you have installed the {{ FusionSAN }} Operator, you can create a storage cluster with shared storage nodes. {._abstract}

The wizard for creating the storage cluster in the {{ product_title }} web console provides easy-to-follow steps and lists the relevant worker nodes with shared disks.

**Prerequisites**

*   You have bare-metal worker nodes with visible and attached shared LUNs.

    A shared LUN is a shared disk that is accessed by all workers simultaneously.
*   You installed the {{ FusionSAN }} Operator.
*   You created the `FusionAccess` custom resource (CR) in the `ibm-fusion-access` namespace.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Storage** -> **{{ FusionSAN }}**.
1.  Click **Create storage cluster**.
1.  Select the worker nodes that have shared LUNs.

    :::note

    You can only select worker nodes with a minimum of 20 GB of RAM from the list.
    
    :::

1.  Click **Create storage cluster**.

    The page reloads, opening the {{ FusionSAN }} page for the new storage cluster.