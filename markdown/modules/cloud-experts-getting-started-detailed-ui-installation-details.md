{%- set _mod_docs_content_type = "PROCEDURE" %}

# Finalizing cluster creation {id="cloud-experts-getting-started-detailed-ui-installation-details_{{ context }}"}

You can select the defaults to complete cluster installation. {._abstract}

**Procedure**

1.  For **Networking**, leave all the default values for configuration.
1.  Click **Next**.
1.  Leave all the default values for CIDR ranges.
1.  Click **Next**.
1.  For **Cluster roles and policies**, leave **Auto** selected. It makes the cluster deployment process simpler and quicker.

    :::note

    If you selected a **Basic {{ cluster_manager }} role** earlier, you can only use manual mode. You must manually create the operator roles and OIDC provider. See the "Basic {{ cluster_manager }} role" section below after you have completed the "Cluster updates" section and started cluster creation.
    
    :::


    Leave all of the **Cluster update** options at default in this section.
1.  Review the content for the cluster configuration.
1.  Click **Create cluster**.
1.  Stay on the current page to monitor the installation progress. It should take about 40 minutes.
    ![cloud-experts-getting-started-rosa-deployment-detailed-ui-cluster-create](/_assets/images/cloud-experts-getting-started-rosa-deployment-detailed-ui-cluster-create.png)