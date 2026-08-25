{%- set _mod_docs_content_type = "PROCEDURE" %}
# Assigning node roles {id="assigning-node-roles-oci_{{ context }}"}

Following host discovery, the role of all nodes appears as **Auto-assign** by default. Change each of the node roles to either **Control Plane node** or **Worker**. {._abstract}

**Prerequisites**

*   You created and applied the Terraform stack in {{ oci_distributed_no_rt }}. For details, see "Provisioning {{ oci }} infrastructure for your cluster".

**Procedure**

1.  From the {{ ai_full }} user interface, go to the **Host discovery** page.
1.  Under the **Role** column, select either **Control plane node** or **Worker** for each targeted hostname. Then click **Next**.

    :::note

    1.  Before continuing to the next step, wait for each node to reach `Ready` status.
    1.  Expand the node to verify that the hardware type is bare metal.
    
    :::

1.  Accept the default settings for the **Storage** and **Networking** pages. Then click **Next**.