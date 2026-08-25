{%- set _mod_docs_content_type = "CONCEPT" %}
# Command-line host access {id="security-command-line-host-access_{{ context }}"}

Configure an external authenticator to restrict direct access and prevent unauthorized modifications. The Machine Config Operator (MCO) manages these logins and maintains consistency across your cluster. {._abstract}

Examples of external authenticators include lightweight directory access protocol (LDAP) and System Security Services Daemon (SSSD). If a node reboot leads to timeout issues, create a node disruption policy. With this policy, you can configure an external authenticator on a host without requiring a node reboot. For more information, see "Using node disruption policies to minimize disruption from machine config changes" in the _Additional resources_ section.


:::important

Do not configure direct access to the root ID on any {{ product_title }} cluster server.

:::


You can connect to a node in the cluster by using the following methods:


Using debug pod
:   Red&#160;Hat recommends this method to access a node. To debug or connect to a node, run the following command:
    ```terminal
    $ oc debug node/<worker_node_name>
    ```

    After connecting to the node, run the following command to get access to the root file system:
    ```terminal
    # chroot /host
    ```

    This gives you root access within a debug pod on the node. For more information, see "Starting debug pods with root access".


Direct SSH
:   Avoid using the root user. Instead, use the core user ID (or your own ID). To connect to the node by using SSH, run the following command:
    ```terminal
    $ ssh core@<worker_node_name>
    ```

    :::important


    The core user ID is initially given `sudo` privileges within the cluster.
    
    :::


    If you cannot connect to a node by using SSH, add your SSH key to the core user. For more information, see "How to connect to {{ product_title }} 4.x Cluster nodes using SSH bastion pod" in the _Additional resources_ section.

    After connecting to the node using SSH, run the following command to get access to the root shell:
    ```terminal
    $ sudo -i
    ```


Console Access
:   Ensure that consoles are secure. Do not allow direct login with the root ID, instead use individual IDs.

    :::note


    Follow the best practices of your organization for securing console access.
    
    :::