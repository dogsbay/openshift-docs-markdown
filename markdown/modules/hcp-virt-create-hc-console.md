{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a hosted cluster by using the console {id="hcp-virt-create-hc-console_{{ context }}"}

If you prefer to work in the {{ product_title }} console instead of the CLI, you can create a hosted cluster on the KubeVirt platform by using the console. {._abstract}


:::note

If you want to use predefined values to automatically populate fields in the console, you can create a {{ VirtProductName }} credential. For more information, see "Creating a credential for an on-premises environment".

:::


**Procedure**

1.  Open the {{ product_title }} web console and log in by entering your administrator credentials.
1.  In the console header, ensure that **All Clusters** is selected.
1.  Click **Infrastructure > Clusters**.
1.  Click **Create cluster > Red Hat OpenShift Virtualization > Hosted**.
1.  On the **Create cluster** page, follow the prompts to enter details about the cluster and node pools.

    On the **Cluster details** page, the pull secret is your {{ product_title }} pull secret that you use to access {{ product_title }} resources. If you selected a {{ VirtProductName }} credential, the pull secret is automatically populated.

    :::important

    Avoid storing all hosted cluster information in a shared namespace. If you create a hosted cluster in a shared namespace and then back up and restore the hosted cluster, you might unintentionally change other hosted clusters. Either store hosted cluster information in a separate namespace or set up your hosted cluster to back up and restore resources based on labels.
    
    :::

1.  On the **Node pools** page, expand the **Networking options** section and configure the networking options for your node pool:
    1.  In the **Additional networks** field, enter a network name in the format of `<namespace>/<name>`; for example, `my-namespace/network1`. The namespace and the name must be valid DNS labels. Multiple networks are supported.
    1.  By default, the **Attach default pod network** checkbox is selected. You can clear this checkbox only if additional networks exist.
1.  Review your entries and click **Create**.

    The **Hosted cluster** view is displayed.

**Verification**

1.  Monitor the deployment of the hosted cluster in the **Hosted cluster** view. If you do not see information about the hosted cluster, ensure that **All Clusters** is selected, and click the cluster name.
1.  Wait until the control plane components are ready. This process can take a few minutes.
1.  To view the node pool status, scroll to the **NodePool** section. The process to install the nodes takes about 10 minutes. You can also click **Nodes** to confirm whether the nodes joined the hosted cluster.