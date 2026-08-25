{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting private hosted clusters on {{ azure_short }} {id="hcp-azure-private-ts_{{ context }}"}

If your private hosted cluster gets stuck, check the `AzurePrivateLinkService` custom resource conditions. {._abstract}

**Procedure**

1.  Enter the following command to check the Private Link conditions:
    ```terminal
    $ oc get azureprivatelinkservices \
      -n clusters-${CLUSTER_NAME} \
      -o jsonpath='{.items[0].status.conditions}' | jq .
    ```
1.  Review the output and compare it to the following condition table:
    **Private cluster stuck conditions**

    | Condition | Possible cause |
    | --- | --- |
    | `AzureInternalLoadBalancerAvailable` = `False` | The `private-router` service has not received an internal load balancer IP address yet. Check the service status and {{ azure_short }} networking. |
    | `AzurePLSCreated` = `False` | Private Link creation failed. Check the NAT subnet policies, credentials, and the HyperShift Operator logs. |
    | `AzurePrivateEndpointAvailable` = `False` | Private endpoint creation failed or the connection was not approved. Check the Private Link auto-approval list and the Control Plane Operator logs. |
    | `AzurePrivateDNSAvailable` = `False` | The DNS zone or record creation failed. In the {{ azure_short }} subscription that stores the infrastructure resources for the hosted cluster, check the Control Plane Operator identity permissions. |