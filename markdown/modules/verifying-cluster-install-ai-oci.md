{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying a successful cluster installation on {{ oci_distributed_no_rt }} {id="verifying-cluster-install-ai-oci_{{ context }}"}

Verify that your cluster was installed and is running effectively on {{ oci_distributed }}. {._abstract}

**Procedure**

1.  From the [Red Hat Hybrid Cloud Console](https://console.redhat.com/openshift), go to **Clusters > Assisted Clusters** and select your cluster’s name.
1.  On the **Installation Progress** page, check that the Installation progress bar is at 100% and a message displays indicating `Installation completed successfully`.
1.  Under **Host inventory**, confirm that the status of all control plane and compute nodes is `Installed`.

    :::note

    {{ product_title }} designates one of the control plane nodes as the bootstrap virtual machine, eliminating the need for a separate bootstrap machine.
    
    :::

1.  Click the Web Console URL, to access the {{ product_title }} web console.
1.  From the menu, select **Compute > Nodes**.
1.  Locate your node from the **Nodes** table.
1.  From the **Terminal** tab, verify that iSCSI appears next to the serial number.
1.  From the **Overview** tab, check that your node has a **Ready** status.
1.  Select the **YAML** tab.
1.  Check the `labels` parameter, and verify that the listed labels apply to your configuration. For example, the `topology.kubernetes.io/region=us-sanjose-1` label indicates in what {{ oci_distributed_no_rt }} region the node was deployed.