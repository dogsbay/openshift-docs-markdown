{%- set _mod_docs_content_type = "PROCEDURE" %}
# Assigning node roles {id="c3-ai-completing-installation-nodes_{{ context }}"}

If the Terraform scripts completed successfully, twelve hosts are now listed for the cluster. Three control plane hosts and three compute hosts have the status "Disconnected". Three control plane hosts and three compute hosts have the status "Insufficient". {._abstract}

Delete the disconnected hosts and assign roles to the remaining hosts.

**Procedure**

1.  From the [{{ ai_full }} web console](https://console.redhat.com/openshift/assisted-installer/clusters), select the cluster and navigate to the **Host discovery** page.
1.  Delete the six hosts with a "Disconnected" status, by clicking the option button for each host and selecting **Remove host**. The status of the remaining hosts changes from "Insufficient" to "Ready". This process can take up to three minutes.
1.  From the **Role** column, assign the **Control plane** role to the three nodes with a boot size of 1.10 TB. Assign the **Worker** role to the three nodes with boot size of 100 GB.
1.  Rename any hosts with a name shorter than 63 characters, by clicking the option button for the host and selecting **Change hostname**. Otherwise the cluster installation will fail.
1.  Click **Next**.
1.  On the **Storage** page, click **Next**.