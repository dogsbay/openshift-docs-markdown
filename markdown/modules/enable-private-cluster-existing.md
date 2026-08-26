{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable an existing cluster to be private {id="enable-private-cluster-existing_{{ context }}"}

Configure an existing public cluster to be private by restricting Application Programming Interface (API) endpoint access to private connections only. This enhances security by preventing public internet access to your cluster’s control plane. {._abstract}

**Prerequisites**

*   The following private connections are configured to allow private access:
    *   Virtual Private Cloud (VPC) Peering
    *   Cloud VPN
    *   DirectConnect (AWS only)
    *   TransitGateway (AWS only)
    *   Cloud Interconnect ({{ gcp_short }} only)

**Procedure**

1.  Log in to {{ cluster_manager_url }}.
1.  Select the public cluster you want to make private.
1.  On the **Networking** tab, select **Make API private** under **Control Plane API endpoint**.

    :::warning

    When set to **Private**, you cannot access your cluster unless you have configured the private connections in your cloud provider as outlined in the prerequisites.
    
    :::

1.  Click **Change settings**.

    :::note

    Transitioning your cluster between private and public can take several minutes to complete.
    
    :::