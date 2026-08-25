{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring host groups for a VMware vCenter {id="configuring-vsphere-host-groups_{{ context }}"}

You can modify the default installation configuration file to deploy an {{ product_title }} cluster on a {{ vmw_first }} stretched cluster, where ESXi hosts are grouped into host groups by physical location. {._abstract}

The default `install-config.yaml` file configuration from previous releases of {{ product_title }} is deprecated. Though you can still use it, the {{ product_title }} installer will display a warning message that indicates the use of deprecated fields in the configuration file.

**Prerequisites**

*   You have an existing `install-config.yaml` installation configuration file.
*   You have arranged your ESXi hosts into host groups.
*   You have granted the `Host.Inventory.EditCluster` privilege on the {{ vmw_short }} vCenter cluster object.
*   You have downloaded and installed the `govc` command line tool. Instructions can be found on the VMware documentation website. Note that `govc` is an open-source tool that is not maintained by the Red&#160;Hat support team.

    :::important

    To enable host group support, you must define multiple failure domains for your {{ product_title }} cluster.
    
    :::


**Procedure**

1.  Create the `openshift-region` and `openshift-zone` vCenter tag categories by running the following commands:

    :::important

    If you specify different names for the `openshift-region` and `openshift-zone` vCenter tag categories, the installation of the {{ product_title }} cluster fails.
    
    :::

    ```terminal
    $ govc tags.category.create -d "OpenShift region" openshift-region
    ```
    ```terminal
    $ govc tags.category.create -d "OpenShift zone" openshift-zone
    ```
1.  Create a region tag for the {{ vmw_short }} cluster where you want to deploy your {{ product_title }} cluster by entering the following command:
    ```terminal
    $ govc tags.create -c <region_tag_category> <region_tag>
    ```
1.  Create a zone tag for each host group by entering the following command as needed:
    ```terminal
    $ govc tags.create -c <zone_tag_category> <zone_tag>
    ```
1.  Attach the region tag to the vCenter cluster object by entering the following command:
    ```terminal
    $ govc tags.attach -c <region_tag_category> <region_tag_1> /<datacenter_1>/host/<cluster_1>
    ```
1.  Use zone tags to associate each ESXi host with its host group, by entering the following command for each ESXi host:
    ```terminal
    $ govc tags.attach -c <zone_tag_category> <zone_tag_for_host_group_1> /<datacenter_1>/host/<cluster_1>/<esxi_host_in_host_group_1>
    ```
1.  Change to the directory that contains the installation program and initialize the cluster deployment according to your chosen installation requirements.

```yaml title="Sample install-config.yaml file with multiple host groups"
platform:
  vsphere:
    vcenters:
# ...
    datacenters:
      - <data_center_1_name>
    failureDomains:
    - name: <host_group_1>
      region: <cluster_1_region_tag>
      zone: <host_group_1_zone_tag>
      regionType: "ComputeCluster"
      zoneType: "HostGroup"
      server: <fully_qualified_domain_name>
      topology:
        datacenter: <data_center_1>
        computeCluster: "/<data_center_1>/host/<cluster_1>"
        networks:
        - <VM_Network1_name>
        hostGroup: <host_group_1_name>
        datastore: "/<data_center_1>/datastore/<datastore_1>"
        resourcePool: "/<data_center_1>/host/<cluster_1>/Resources/<resourcePool_1>"
        folder: "/<data_center_1>/vm/<folder_1>"
    - name: <host_group_2>
      region: <cluster_1_region_tag>
      zone: <host_group_2_zone_tag>
      regionType: "ComputeCluster"
      zoneType: "HostGroup"
      server: <fully_qualified_domain_name>
      topology:
        datacenter: <data_center_1>
        computeCluster: "/<data_center_1>/host/<cluster_1>"
        networks:
        - <VM_Network1_name>
        hostGroup: <host_group_2_name>
        datastore: "/<data_center_1>/datastore/<datastore_1>"
        resourcePool: "/<data_center_1>/host/<cluster_1>/Resources/<resourcePool_1>"
        folder: "/<data_center_1>/vm/<folder_1>"
```