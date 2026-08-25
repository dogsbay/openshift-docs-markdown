{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding node tuning to a machine pool {id="rosa-adding-tuning_{{ context }}"}

You can add tunings for compute, also called worker, nodes in a machine pool to control their configuration on {{ product_title }} clusters.

**Prerequisites**

*   You installed and configured the latest {{ rosa_cli_first }} on your workstation.
*   You logged in to your Red&#160;Hat account by using 'rosa'.
*   You created a {{ product_title }} cluster.
*   You have an existing machine pool.
*   You have an existing tuning configuration.

**Procedure**

1.  List all of the machine pools in the cluster:
    ```terminal
    $ rosa list machinepools --cluster=<cluster_name>
    ```
    ```terminal title="Example output"
    ID           AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS    TAINTS    AVAILABILITY ZONE  SUBNET                    VERSION  AUTOREPAIR
    db-nodes-mp  No           0/2       m7i.xlarge                          us-east-2a         subnet-08d4d81def67847b6  4.14.34  Yes
    workers      No           2/2       m7i.xlarge                          us-east-2a         subnet-08d4d81def67847b6  4.14.34  Yes
    ```
1.  You can add tuning configurations to an existing or new machine pool.
    1.  Add tunings when creating a machine pool:
        ```terminal
        $ rosa create machinepool -c <cluster-name> --name <machinepoolname> --tuning-configs <tuning_config_name>
        ```
        ```terminal title="Example output"
        ? Tuning configs: sample-tuning
        I: Machine pool 'db-nodes-mp' created successfully on hosted cluster 'sample-cluster'
        I: To view all machine pools, run 'rosa list machinepools -c sample-cluster'
        ```
    1.  Add or update the tunings for a machine pool:
        ```terminal
        $ rosa edit machinepool -c <cluster-name> --machinepool <machinepoolname> --tuning-configs <tuning_config_name>
        ```
        ```terminal title="Example output"
        I: Updated machine pool 'db-nodes-mp' on cluster 'mycluster'
        ```

**Verification**

1.  Describe the machine pool for which you added a tuning config:
    ```terminal
    $ rosa describe machinepool --cluster=<cluster_name> --machinepool=<machine_pool_name>
    ```
    ```terminal title="Example output"
    ID:                                    db-nodes-mp
    Cluster ID:                            <cluster_ID>
    Autoscaling:                           No
    Desired replicas:                      2
    Current replicas:                      2
    Instance type:                         m7i.xlarge
    Labels:
    Tags:
    Taints:
    Availability zone:                     us-east-2a
    Subnet:                                subnet-08d4d81def67847b6
    Version:                               4.14.34
    EC2 Metadata Http Tokens:              optional
    Autorepair:                            Yes
    Tuning configs:                        sample-tuning
    ...
    ```
1.  Verify that the tuning config is included for your machine pool in the output.