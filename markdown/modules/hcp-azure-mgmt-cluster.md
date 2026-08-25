{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an {{ azure_short }} management cluster for {{ hcp }} {id="hcp-azure-mgmt-cluster_{{ context }}"}

To configure the management cluster for {{ hcp }} on {{ azure_short }}, you need to ensure that external DNS and the HyperShift Operator are set up on the cluster. {._abstract}

The configuration steps include configuring the DNS zone, delegating the DNS records for your cluster, and creating a dedicated service principal for external DNS.

**Prerequisites**

*   You installed the {{ mce_short }} 2.5 or later on an {{ product_title }} cluster. You can install {{ mce_short }} as an Operator from the {{ product_title }} software catalog. Or, if you already use {{ rh_rhacm_title }}, the Operator is automatically installed. The HyperShift Operator is enabled by default in the operator package for {{ mce_short }}.
*   The {{ azure_short }} command-line interface (CLI) is installed and configured.
*   The {{ oc_first }} is installed.
*   You have an {{ product_title }} management cluster on {{ azure_short }}.
*   If you are using external DNS, the `jq` command-line JSON processor is installed.

**Procedure**

1.  Set the DNS configuration variables as shown in the following example:
    ```bash
    PARENT_DNS_RG="<my_parent_dns_resource_group>"
    PARENT_DNS_ZONE="<my_parent.dns.zone.com>"
    DNS_RECORD_NAME="<my_subdomain>"
    RESOURCE_GROUP_NAME="<my_resource_group>"
    DNS_ZONE_NAME="<my_subdomain.my_parent.dns.zone.com>"
    LOCATION="<my_region>"
    ```
1.  Create the {{ azure_short }} group by entering the following command:
    ```terminal
    $ az group create \
      --name $RESOURCE_GROUP_NAME \
      --location $LOCATION 
    ```
1.  Create the {{ azure_short }} DNS zone by entering the following command:
    ```terminal
    $ az network dns zone create \
      --resource-group $RESOURCE_GROUP_NAME \
      --name $DNS_ZONE_NAME  
    ```
1.  If an existing name server record exists, delete it by entering the following command:
    ```terminal
    $ az network dns record-set ns delete \
      --resource-group $PARENT_DNS_RG \
      --zone-name $PARENT_DNS_ZONE \
      --name $DNS_RECORD_NAME -y
    ```
1.  Get the name servers from your DNS zone by entering the following command:
    ```bash
    name_servers=$(az network dns zone show \
      --resource-group $RESOURCE_GROUP_NAME \
      --name $DNS_ZONE_NAME \
      --query nameServers \
      --output tsv)
    ```
1.  Create an array of name servers as shown in the following example:
    ```bash
    ns_array=()
    while IFS= read -r ns; do
        ns_array+=("$ns")
    done <<< "$name_servers"
    ```
1.  Add name server records to the parent zone as shown in the following example:
    ```bash
    for ns in "${ns_array[@]}"; do
        az network dns record-set ns add-record \
            --resource-group $PARENT_DNS_RG \
            --zone-name $PARENT_DNS_ZONE \
            --record-set-name $DNS_RECORD_NAME \
            --nsdname "$ns"
    done
    ```
1.  Set the external DNS configuration variables as shown in the following example:
    ```bash
    EXTERNAL_DNS_NEW_SP_NAME="<external_dns_service_principal>"
    SERVICE_PRINCIPAL_FILEPATH="<path_to_azure_mgmt_json_file>"
    RESOURCE_GROUP_NAME="<my_resource_group>"
    ```
1.  Create the service principal for external DNS by entering the following command:
    ```bash
    DNS_SP=$(az ad sp create-for-rbac --name ${EXTERNAL_DNS_NEW_SP_NAME})
    EXTERNAL_DNS_SP_APP_ID=$(echo "$DNS_SP" | jq -r '.appId')
    EXTERNAL_DNS_SP_PASSWORD=$(echo "$DNS_SP" | jq -r '.password')
    ```
1.  Get the DNS zone ID by entering the following command:
    ```bash
    DNS_ID=$(az network dns zone show \
      --name ${DNS_ZONE_NAME} \
      --resource-group ${RESOURCE_GROUP_NAME} \
      --query "id" \
      --output tsv)
    ```
1.  Assign the `Reader` role to the service principal by entering the following command:
    ```terminal
    $ az role assignment create \
      --role "Reader" \
      --assignee "${EXTERNAL_DNS_SP_APP_ID}" \
      --scope "${DNS_ID}"
    ```
1.  Assign the `Contributor` role to the service principal by entering the following command:
    ```terminal
    $ az role assignment create \
      --role "Contributor" \
      --assignee "${EXTERNAL_DNS_SP_APP_ID}" \
      --scope "${DNS_ID}"
    ```
1.  Save the {{ azure_short }} credentials to a local file by entering the following command:
    ```terminal
    $ cat > ${SERVICE_PRINCIPAL_FILEPATH} <<EOF
    {
      "tenantId": "$(az account show --query tenantId -o tsv)",
      "subscriptionId": "$(az account show --query id -o tsv)",
      "resourceGroup": "$RESOURCE_GROUP_NAME",
      "aadClientId": "$EXTERNAL_DNS_SP_APP_ID",
      "aadClientSecret": "$EXTERNAL_DNS_SP_PASSWORD"
    }
    EOF
    ```
1.  If an existing Kubernetes secret for the {{ azure_short }} credentials exists, delete it by entering the following command:
    ```terminal
    $ oc delete secret/azure-config-file --namespace "hypershift" || true
    ```
1.  Create the Kubernetes secret for the {{ azure_short }} credentials by entering the following command:
    ```terminal
    $ oc create secret generic azure-config-file \
      --namespace "hypershift" \
      --from-file=credentials=${SERVICE_PRINCIPAL_FILEPATH}
    ```

    The secret must be created in the `hypershift` namespace where the external DNS deployment runs. The `credentials` key name is required because the external DNS pod mounts the secret at `/etc/provider/credentials`.
1.  Configure the HyperShift Operator to use external DNS by creating the following `ConfigMap` object:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: hypershift-operator-install-flags
      namespace: local-cluster
    data:
      installFlagsToAdd: "--external-dns-provider=azure --external-dns-secret=azure-config-file --external-dns-domain-filter=<dns_zone>"
      installFlagsToRemove: ""
    ```

    The `--external-dns-secret` flag specifies the name of the Kubernetes secret that contains the {{ azure_short }} credentials. The `data.installFlagsToAdd` parameter specifies the flags to pass to the Operator so it detects the DNS.
1.  Apply the config map by entering the following command:
    ```terminal
    $ oc apply -f hypershift-operator-install-flags.yaml
    ```

**Verification**

*   Verify that both the HyperShift Operator and the external DNS are running by entering the following command:
    ```terminal
    $ oc get pods -n hypershift
    ```
    ```terminal title="Example output"
    NAME                           READY   STATUS    RESTARTS   AGE
    external-dns-xxxxx-xxxxx       1/1     Running   0          1m
    operator-xxxxx-xxxxx           1/1     Running   0          1m
    ```