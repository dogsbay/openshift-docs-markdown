{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a hosted cluster on {{ azure_short }} {id="hcp-azure-hosted_{{ context }}"}

Hosted clusters are where your applications run. Each hosted cluster has its own control plane that runs on the management cluster and a set of compute node virtual machines (VMs) in {{ azure_short }}.  {._abstract}

The hosted cluster uses Workload Identities to securely access {{ azure_short }} services without storing credentials.

**Prerequisites**

*   You installed the {{ azure_short }} command-line interface (CLI).
*   You installed the {{ hcp }} CLI, `hcp`.
*   You installed the {{ oc_first }}.
*   You installed the `jq` command-line JSON processor.
*   You have a management cluster where the HyperShift Operator is installed and external DNS is configured.
*   You set up {{ azure_short }} resources, including Workload Identities, an OIDC issuer, and infrastructure.
*   You have the appropriate {{ azure_short }} permissions.
    *   At the subscription level, you must have the `Contributor` role and the `User Access Administrator` role.
    *   For Microsoft Graph API, you must have the `Application.ReadWrite.OwnedBy` permission.

**Procedure**

*   Create the `HostedCluster` custom resource by entering the following command:
    ```terminal
    $ hcp create cluster azure \
      --name "$CLUSTER_NAME" \
      --infra-id "$INFRA_ID" \
      --azure-creds $AZURE_CREDS \
      --location ${LOCATION} \
      --node-pool-replicas 2 \
      --base-domain $BASE_DOMAIN \
      --pull-secret $PULL_SECRET \
      --generate-ssh \
      --release-image ${RELEASE_IMAGE} \
      --sa-token-issuer-private-key-path "${SA_TOKEN_ISSUER_PRIVATE_KEY_PATH}" \
      --oidc-issuer-url "${OIDC_ISSUER_URL}" \
      --dns-zone-rg-name ${PERSISTENT_RG_NAME} \
      --assign-service-principal-roles \
      --infra-json <output_infra_file> \
      --diagnostics-storage-account-type Managed \
      --disable-cluster-capabilities=<capability> \
      --enable-cluster-capabilities=<capability> \
      --external-dns-domain "${DNS_ZONE_NAME}"
    ```
    *   For non-production environments, you can create a hosted cluster without external DNS by omitting the `--external-dns-domain` and `--assign-service-principal-roles` flags. In that case, the API server is accessible through an {{ azure_short }} load balancer hostname instead of a custom DNS name.
    *   The `--disable-cluster-capabilities` flag is optional. Include it when you want to disable optional capabilities in your hosted cluster. For more information, see "Capabilities for hosted clusters".
    *   The `--enable-cluster-capabilities` flag is optional. Include it when you want to enable optional capabilities in your hosted cluster. For more information, see "Capabilities for hosted clusters".

**Verification**

1.  Check the cluster status by entering the following command:
    ```terminal
    $ oc get hostedcluster $CLUSTER_NAME -n clusters
    ```
1.  Wait for the cluster to be complete by entering the following command:
    ```terminal
    $ oc wait \
      --for=jsonpath='{.status.version.history[0].state}'=Completed \
      hostedcluster/$CLUSTER_NAME \
      -n clusters --timeout=20m
    ```
1.  Create the `kubeconfig` file for the cluster by entering the following command:
    ```terminal
    $ hcp create kubeconfig \
      --name $CLUSTER_NAME > $CLUSTER_NAME-kubeconfig
    ```
1.  Get the `kubeconfig` file by entering the following command:
    ```terminal
    $ export KUBECONFIG=$CLUSTER_NAME-kubeconfig
    ```
1.  Access the cluster nodes by entering the following command:
    ```terminal
    $ oc get nodes
    ```
1.  Access the cluster by entering the following command:
    ```terminal
    $ oc get clusterversion
    ```