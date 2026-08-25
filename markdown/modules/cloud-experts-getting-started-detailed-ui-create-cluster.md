{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating the cluster {id="cloud-experts-getting-started-detailed-ui-create-cluster_{{ context }}"}

This tutorial uses the default options for creating a cluster. {._abstract}

**Procedure**

1.  In ***Cluster settings***, select:
    *   Cluster name: ***&lt;pick a name\>***
    *   Version: ***&lt;select latest version\>***
    *   Region: ***&lt;select region\>***
    *   Availability: ***Single zone***
    *   Enable user workload monitoring: ***leave checked***
    *   Enable additional etcd encryption: ***leave unchecked***
    *   Encrypt persistent volumes with customer keys: ***leave unchecked***
1.  Click **Next**.
1.  Leave the default settings on for the machine pool:
    *   Compute node instance type: ***m5.xlarge - 4 vCPU 16 GiB RAM***
    *   Enable autoscaling: ***unchecked***
    *   Compute node count: ***2***
    *   Leave node labels blank
1.  Click **Next**.