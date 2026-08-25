{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable a private cluster during cluster creation {id="enable-private-cluster-new_{{ context }}"}

Enable private cluster settings when creating a new cluster to restrict Application Programming Interface (API) endpoint access to private connections only. This enhances security by preventing public internet access to your cluster’s control plane. {._abstract}

**Prerequisites**

*   The following private connections are configured to allow private access:
    *   Virtual Private Cloud (VPC) Peering
    *   Cloud VPN
    *   DirectConnect (AWS only)
    *   TransitGateway (AWS only)
    *   Cloud Interconnect ({{ gcp_short }} only)

**Procedure**

1.  Log in to {{ cluster_manager_url }}.
1.  Click **Create cluster** → **{{ product_title }}** → **Create cluster**.
1.  Configure your cluster details.
1.  When selecting your preferred network configuration, select **Advanced**.
1.  Select **Private**.

    :::warning

    When set to **Private**, you cannot access your cluster unless you have configured the private connections in your cloud provider as outlined in the prerequisites.
    
    :::

1.  Click **Create cluster**. The cluster creation process begins and takes about 30-40 minutes to complete.

**Verification**

*   The **Installing cluster** heading, under the **Overview** tab, indicates that the cluster is installing and you can view the installation logs from this heading. The **Status** indicator under the **Details** heading indicates when your cluster is **Ready** for use.