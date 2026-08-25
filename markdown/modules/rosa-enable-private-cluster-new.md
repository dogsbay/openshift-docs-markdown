{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling private cluster on a new cluster {id="rosa-enabling-private-cluster-new_{{ context }}"}

You can enable the private cluster setting when creating a new {{ product_title }} cluster. {._abstract}


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

*   Enter the following command to create a new private cluster.
    ```terminal
    $ rosa create cluster --cluster-name=<cluster_name> --private
    ```

    :::note

    Alternatively, use `--interactive` to be prompted for each cluster option.
    
    :::