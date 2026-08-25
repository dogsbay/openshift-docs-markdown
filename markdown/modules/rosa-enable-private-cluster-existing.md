{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling private cluster on an existing cluster {id="rosa-enabling-private-cluster-existing_{{ context }}"}

After a cluster has been created, you can enable the cluster to be private. {._abstract}


:::important

Private clusters cannot be used with AWS security token service (STS). However, STS supports AWS PrivateLink clusters.

:::


**Prerequisites**

*   You have configured one of the following to allow private access:
    *   AWS VPC Peering
    *   VPN
    *   DirectConnect
    *   [TransitGateway](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-transit-gateway.html)

**Procedure**

*   Enter the following command to enable the `--private` option on an existing cluster.
    ```terminal
    $ rosa edit cluster --cluster=<cluster_name> --private
    ```

    :::note

    Transitioning your cluster between private and public can take several minutes to complete.
    
    :::