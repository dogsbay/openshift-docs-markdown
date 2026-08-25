{%- set _mod_docs_content_type = "CONCEPT" %}
# Prerequisites {id="private-service-connect-prereqs"}

In addition to the prerequisites that you need to complete before deploying any {{ product_title }} on {{ GCP }} cluster, you must also complete the following prerequisites to deploy a private cluster using Private Service Connect (PSC): {._abstract}

*   A pre-created Virtual Private Cloud (VPC) with the following subnets in the same {{ GCP }} region where your cluster will be deployed:
    *   A control plane subnet
    *   A worker subnet
    *   A subnet used for the PSC service attachment with the purpose set to Private Service Connect

        :::important

        The subnet mask for the PSC service attachment must be /29 or larger and must be dedicated to an individual {{ product_title }} cluster. Additionally, the subnet must be contained within the Machine CIDR range used while provisioning the {{ product_title }} cluster.
        
        :::


        For information about how to create a VPC on {{ GCP }}, see [Create and manage VPC networks](https://cloud.google.com/vpc/docs/create-modify-vpc-networks) in the {{ gcp_full }} documentation.
*   Provide a path from the OpenShift Dedicated cluster to the internet for the domains and ports listed in the _{{ gcp_short }} firewall prerequisites_ in the _Additional resources_ section.
*   Enabled [Cloud Identity-Aware Proxy API](https://console.cloud.google.com/marketplace/product/google/iap.googleapis.com?q=search&referrer=search&hl=en&project=openshift-gce-devel) at the {{ GCP }} project level.

In addition to the requirements listed above, clusters configured with the **Service Account authentication type** must grant the `IAP-Secured Tunnel User` role to `osd-ccs-admin` service account.

For more information about the prerequisites that must be completed before deploying an {{ product_title }} on {{ GCP }}, see _Customer Requirements_.


:::note

PSC is supported with the Customer Cloud Subscription (CCS) infrastructure type only. To create an {{ product_title }} on {{ GCP }} using PSC, see _Creating a cluster on {{ gcp_short }} with Workload Identity Federation_.

:::