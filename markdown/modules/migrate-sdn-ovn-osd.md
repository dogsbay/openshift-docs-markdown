{%- set _mod_docs_content_type = "PROCEDURE" %}
# Starting migration by using the {{ cluster_manager }} CLI {id="migrate-sdn-ovn-ocm-cli_{{ context }}"}

You can start the migration from the OpenShift Software-Defined Networking (SDN) network plugin to the OVN-Kubernetes network plugin by using the {{ cluster_manager_first }} CLI (`ocm`). {._abstract}


:::warning

You can only start migration on clusters that are version 4.16.43 and above.

:::


**Prerequisites**

*   You installed the [{{ cluster_manager }} CLI (`ocm`)](https://console.redhat.com/openshift/downloads).


:::important

The {{ cluster_manager }} CLI (`ocm`) is a Developer Preview feature only.
For more information about the support scope of Red Hat Developer Preview features, see [Developer Preview Support Scope](https://access.redhat.com/support/offerings/devpreview/).

:::


**Procedure**

1.  Create a JSON file with the following content:

    ```json
    {
      "type": "sdnToOvn"
    }
    ```
    *   Optional: Within the JSON file, you can configure internal subnets using any or all of the options `join`, `masquerade`, and `transit`, along with a single CIDR per option, as shown in the following example:
        ```json
        {
          "type": "sdnToOvn",
          "sdn_to_ovn": {
            "transit_ipv4": "192.168.255.0/24",
            "join_ipv4": "192.168.255.0/24",
            "masquerade_ipv4": "192.168.255.0/24"
          }
        }
        ```

        :::note

        OVN-Kubernetes reserves the following IP address ranges:

        `100.64.0.0/16`. OVN-Kubernetes uses this IP address range for the `internalJoinSubnet` parameter by default.

        `100.88.0.0/16`. OVN-Kubernetes uses this IP address range for the `internalTransSwitchSubnet` parameter by default.

        If OpenShift SDN or any external networks that might communicate with this cluster use these IP addresses, you must patch them to use a different IP address range before starting the limited live migration. For more information, see _Patching OVN-Kubernetes address ranges_ in the _Additional resources_ section.
        
        :::

1.  To start the migration, run the following post request in a terminal window.
    ```terminal
    $ ocm post /api/clusters_mgmt/v1/clusters/{cluster_id}/migrations
      --body=myjsonfile.json
    ```

    **Example output**
    ```json
    {
      "kind": "ClusterMigration",
      "href": "/api/clusters_mgmt/v1/clusters/2gnts65ra30sclb114p8qdc26g5c8o3e/migrations/2gois8j244rs0qrfu9ti2o790jssgh9i",
      "id": "7sois8j244rs0qrhu9ti2o790jssgh9i",
      "cluster_id": "2gnts65ra30sclb114p8qdc26g5c8o3e",
      "type": "sdnToOvn",
      "state": {
        "value": "scheduled",
        "description": ""
      },
      "sdn_to_ovn": {
        "transit_ipv4": "100.65.0.0/16",
        "join_ipv4": "100.66.0.0/16"
      },
      "creation_timestamp": "2025-02-05T14:56:34.878467542Z",
      "updated_timestamp": "2025-02-05T14:56:34.878467542Z"
    }
    ```
    where:


    `{{ cluster_id }}`
    :   Specifies the ID of the cluster you want to migrate to the OVN-Kubernetes network plugin.

    `myjsonfile.json`
    :   Specifies the name of the JSON file you created in the previous step.

**Verification**

*   To check the status of the migration, run the following command. Replace `<cluster_id>` with the ID of the cluster to which you applied the migration:
    ```terminal
    $ ocm get cluster <cluster_id>/migrations
    ```