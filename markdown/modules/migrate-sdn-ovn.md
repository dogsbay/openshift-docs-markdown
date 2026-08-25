{%- set _mod_docs_content_type = "PROCEDURE" %}
# Starting migration by using the {{ rosa_cli }} {id="migrate-sdn-ovn-cli_{{ context }}"}

You can start the migration from the OpenShift Software-Defined Networking (SDN) network plugin to the OVN-Kubernetes network plugin by using the {{ rosa_cli_first }}. {._abstract}


:::warning

You can only start migration on clusters that are version 4.16.43 and above.

:::


**Procedure**

*   Start the migration by running the following command. Replace `<cluster_id>` with the ID of the cluster you want to migrate to the OVN-Kubernetes network plugin:
    ```terminal
    $ rosa edit cluster -c <cluster_id>
      --network-type OVNKubernetes
      --ovn-internal-subnets <configuration>
    ```

    Optional: You can create key-value pairs to configure internal subnets by using any or all of the options `join, masquerade, transit` along with a single CIDR per option. For example, `--ovn-internal-subnets="join=0.0.0.0/24,transit=0.0.0.0/24,masquerade=0.0.0.0/24"`.

    :::important

    You cannot include the optional flag `--ovn-internal-subnets` in the command unless you define a value for the flag `--network-type`.
    
    :::


**Verification**

*   To check the status of the migration, run the following command. Replace `<cluster_id>` with the ID of the cluster to check the migration status:
    ```terminal
    $ rosa describe cluster -c <cluster_id>
    ```