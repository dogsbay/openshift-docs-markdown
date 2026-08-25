{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the vSphere connection settings {id="configuring-vSphere-connection-settings_{{ context }}"}

Modify the following vSphere configuration settings as required: {._abstract}

*   vCenter address
*   vCenter cluster
*   vCenter username
*   vCenter password
*   vCenter address
*   vSphere data center
*   vSphere datastore
*   Virtual machine folder

**Prerequisites**

*   The {{ ai_full }} has finished installing the cluster successfully.
*   The cluster is connected to `https://console.redhat.com`.

**Procedure**

1.  In the Administrator perspective, navigate to **Home -> Overview**.
1.  Under **Status**, click **vSphere connection** to open the **vSphere connection configuration** wizard.
1.  In the **vCenter** field, enter the network address of the vSphere vCenter server. This can be either a domain name or an IP address. It appears in the vSphere web client URL; for example `https://[your_vCenter_address]/ui`.
1.  In the **vCenter cluster** field, enter the name of the vSphere vCenter cluster where {{ product_title }} is installed.

    :::important

    This step is mandatory if you installed {{ product_title }} 4.13 or later.
    
    :::

1.  In the **Username** field, enter your vSphere vCenter username.
1.  In the **Password** field, enter your vSphere vCenter password.

    :::warning

    The system stores the username and password in the `vsphere-creds` secret in the `kube-system` namespace of the cluster. An incorrect vCenter username or password makes the cluster nodes unschedulable.
    
    :::

1.  In the **Datacenter** field, enter the name of the vSphere data center that contains the virtual machines used to host the cluster; for example, `SDDC-Datacenter`.
1.  In the **Default data store** field, enter the path and name of the vSphere data store that stores the persistent data volumes; for example, `/SDDC-Datacenter/datastore/datastorename`.

    :::warning

    Updating the vSphere data center or default data store after the configuration has been saved detaches any active vSphere `PersistentVolumes`.
    
    :::

1.  In the **Virtual Machine Folder** field, enter the data center folder that contains the virtual machine of the cluster; for example, `/SDDC-Datacenter/vm/ci-ln-hjg4vg2-c61657-t2gzr`. For the {{ product_title }} installation to succeed, all virtual machines comprising the cluster must be located in a single data center folder.
1.  Click **Save Configuration**. This updates the `cloud-provider-config` ConfigMap resource in the `openshift-config` namespace, and starts the configuration process.
1.  Reopen the **vSphere connection configuration** wizard and expand the **Monitored operators** panel. Check that the status of the operators is either **Progressing** or **Healthy**.