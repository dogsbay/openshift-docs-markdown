{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="adding-vsphere-compute-user-infra_{{ context }}"}

There are several prerequisites that must be completed before you add more compute machines to your {{ product_title }} cluster on VMware vSphere manually. {._abstract}


:::note

You can also [use compute machine sets](/machine_management/creating_machinesets/creating-machineset-vsphere#creating-machineset-vsphere) to automate the creation of additional VMware vSphere compute machines for your cluster.

:::


The following prerequisites must be met:

*   You [installed a cluster on vSphere](/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere).
*   You have installation media and {{ op_system_first }} images that you used to create your cluster. If you do not have these files, you must obtain them by following the instructions in the [installation procedure](/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere).


:::important

If you do not have access to the {{ op_system_first }} images that were used to create your cluster, you can add more compute machines to your {{ product_title }} cluster with newer versions of {{ op_system_first }} images. For instructions, see [Adding new nodes to UPI cluster fails after upgrading to OpenShift 4.6+](https://access.redhat.com/solutions/5514051).

:::