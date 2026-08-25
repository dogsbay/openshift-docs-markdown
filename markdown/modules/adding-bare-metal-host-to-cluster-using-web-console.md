{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a bare metal host to the cluster using the web console {id="adding-bare-metal-host-to-cluster-using-web-console_{{ context }}"}

You can add bare-metal hosts to the cluster by using the web console. {._abstract}

**Prerequisites**

*   Install an {{ op_system }} cluster on bare metal.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  In the web console, navigate to **Compute** -> **Bare Metal Hosts**.
1.  Select **Add Host** -> **New with Dialog**.
1.  Specify a unique name for the new bare-metal host.
1.  Set the **Boot MAC address**.
1.  Set the **Baseboard Management Console (BMC) Address**.
1.  Enter the user credentials for the baseboard management controller (BMC) of the host.
1.  Select to power on the host after creation, and select **Create**.
1.  Scale up the number of replicas to match the number of available bare metal hosts. Navigate to **Compute** -> **MachineSets**, and increase the number of machine replicas in the cluster by selecting **Edit Machine count** from the **Actions** drop-down menu.

    :::note

    You can also manage the number of bare-metal nodes by using the `oc scale` command and the appropriate bare-metal compute machine set.
    
    :::