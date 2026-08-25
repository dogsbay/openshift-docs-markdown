{%- set _mod_docs_content_type = "CONCEPT" %}
# Logical Volume Manager Storage installation {id="lvms-about-lvm-storage-installation_{{ context }}"}

You can install {{ lvms }} on an {{ product_title }} cluster and configure it to dynamically provision storage for your workloads. {._abstract}

You can install {{ lvms }} by using the {{ product_title }} CLI (`oc`), {{ product_title }} web console, or {{ rh_rhacm_first }}.


:::warning

When using {{ lvms }} on multi-node clusters, {{ lvms }} only supports provisioning local storage. {{ lvms }} does not support storage data replication mechanisms across nodes. You must ensure storage data replication through active or passive replication mechanisms to avoid a single point of failure.

:::


## Prerequisites to install LVM Storage {id="lvms-deployment-requirements-for-sno-ran_{{ context }}"}

The prerequisites to install {{ lvms }} are as follows: 

*   Ensure that you have a minimum of 10 milliCPU and 100 MiB of RAM.
*   Ensure that every managed cluster has dedicated disks that are used to provision storage. {{ lvms }} uses only those disks that are empty and do not contain file system signatures. To ensure that the disks are empty and do not contain file system signatures, wipe the disks before using them.
*   Before installing {{ lvms }} in a private CI environment where you can reuse the storage devices that you configured in the previous {{ lvms }} installation, ensure that you have wiped the disks that are not in use. If you do not wipe the disks before installing {{ lvms }}, you cannot reuse the disks without manual intervention.

    :::note

    You cannot wipe the disks that are in use.
    
    :::

*   If you want to install {{ lvms }} by using {{ rh_rhacm_first }}, ensure that you have installed {{ rh_rhacm }} on an {{ product_title }} cluster. For more information, see "Installing {{ lvms }} by using {{ rh_rhacm }}".