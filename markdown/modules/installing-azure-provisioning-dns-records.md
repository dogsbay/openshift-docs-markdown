{%- set _mod_docs_content_type = "PROCEDURE" %}
# Provisioning your own DNS records {id="installation-azure-provisioning-own-dns-records_{{ context }}"}

Use the IP address of the API server to provision your own DNS record with the `api.<cluster_name>.<base_domain>.` hostname by using your cluster name and base cluster domain. Use the IP address of the Ingress service to provision your own DNS record with the `*.apps.<cluster_name>.<base_domain>.` hostname by using your cluster name and base cluster domain. {._abstract}

**Prerequisite**

*   You have installed the {{ azure_short }} CLI client `(az)`.

**Procedure**

1.  Add the `userProvisionedDNS` parameter to the `install-config.yaml` file and enable the parameter. For more information, see "Enabling a user-managed DNS".
1.  Install your cluster.
1.  If you are installing a private cluster, set the `lb_name` variable by running the following command:
    ```terminal
    $ lb_name="${infra_id}-internal"
    ```
    1.  Set the `frontendipconfig_id` variable by running the following command:
        ```terminal
        $ frontendipconfig_id=$(az network lb show -n ${lb_name} -g ${cluster_resource_group_name} -ojson | jq -r ".loadBalancingRules[] | select(.frontendPort == 6443) | .frontendIPConfiguration.id")
        ```
    1.  Set the `frontendipconfig_name` variable by running the following command:
        ```terminal
        $ frontendipconfig_name=${frontendipconfig_id##*/}
        ```
    1.  To retrieve the IP address of the API service, run the following command:
        ```terminal
        $ az network lb frontend-ip show -n ${frontendipconfig_name} --lb-name ${lb_name} -g ${cluster_resource_group_name} --query "privateIPAddress" -otsv
        ```
1.  If you are installing a public cluster, set the `lb_name` variable by running the following command:
    ```terminal
    $ lb_name="${infra_id}"
    ```
    1.  Set the `frontendipconfig_id` variable by running the following command:
        ```terminal
        $ frontendipconfig_id=$(az network lb show -n ${lb_name} -g ${cluster_resource_group_name} -ojson | jq -r ".loadBalancingRules[] | select(.frontendPort == 6443) | .frontendIPConfiguration.id")
        ```
    1.  Set the `frontendipconfig_name` variable by running the following command:
        ```terminal
        $ frontendipconfig_name=${frontendipconfig_id##*/}
        ```
    1.  Set the `frontendpublicip_id` variable by running the following command:
        ```terminal
        $ frontendpublicip_id=$(az network lb frontend-ip show -n ${frontendipconfig_name} --lb-name ${lb_name} -g ${cluster_resource_group_name} --query "publicIPAddress.id" -otsv)
        ```
    1.  To retrieve the IP address of the API service, run the following command:
        ```terminal
        $ az network public-ip show --ids ${frontendpublicip_id} --query 'ipAddress' -otsv
        ```
1.  Use the IP address and your cluster name and base cluster domain to configure your own DNS record with the `api.<cluster_name>.<base_domain>.` hostname.
1.  If you are installing a private cluster, set the `lb_name` variable by running the following command:
    ```terminal
    $ lb_name="${infra_id}-internal"
    ```
    1.  Set the `frontendipconfig_id` variable by running the following command:
        ```terminal
        $ frontendipconfig_id=$(az network lb show -n ${lb_name} -g ${cluster_resource_group_name} -ojson | jq -r ".loadBalancingRules[] | select(.frontendPort == 443) | .frontendIPConfiguration.id")
        ```
    1.  Set the `frontendipconfig_name` variable by running the following command:
        ```terminal
        $ frontendipconfig_name=${frontendipconfig_id##*/}
        ```
    1.  To retrieve the IP address of the Ingress service, run the following command:
        ```terminal
        $ az network lb frontend-ip show -n ${frontendipconfig_name} --lb-name ${lb_name} -g ${cluster_resource_group_name} --query "privateIPAddress" -otsv
        ```
1.  If you are installing a public cluster, set the `lb_name` variable by running the following command:
    ```terminal
    $ lb_name="${infra_id}"
    ```
    1.  Set the `frontendipconfig_id` variable by running the following command:
        ```terminal
        $ frontendipconfig_id=$(az network lb show -n ${lb_name} -g ${cluster_resource_group_name} -ojson | jq -r ".loadBalancingRules[] | select(.frontendPort == 443) | .frontendIPConfiguration.id")
        ```
    1.  Set the `frontendipconfig_name` variable by running the following command:
        ```terminal
        $ frontendipconfig_name=${frontendipconfig_id##*/}
        ```
    1.  Set the `frontendpublicip_id` variable by running the following command:
        ```terminal
        $ frontendpublicip_id=$(az network lb frontend-ip show -n ${frontendipconfig_name} --lb-name ${lb_name} -g ${cluster_resource_group_name} --query "publicIPAddress.id" -otsv)
        ```
    1.  To retrieve the IP address of the Ingress service, run the following command:
        ```terminal
        $ az network public-ip show --ids ${frontendpublicip_id} --query 'ipAddress' -otsv
        ```
1.  Use the IP address and your cluster name and base cluster domain to configure your own DNS record with the `*.apps.<cluster_name>.<base_domain>.` hostname.