{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="adding-bare-metal-compute-user-infra-prereqs_{{ context }}"}

There are several prerequisites that must be completed before you add compute machines to your cluster. {._abstract}

The following prerequisites must be met:

*   You [installed a cluster on bare metal](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal).
*   You [installed a cluster on any platform](/installing/installing_platform_agnostic/installing-platform-agnostic#installing-platform-agnostic).
*   You have installation media and {{ op_system_first }} images that you used to create your cluster. If you do not have these files, you must obtain them by following the instructions in the [installation procedure](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal).
*   If a DHCP server is available for your user-provisioned infrastructure, you have added the details for the additional compute machines to your DHCP server configuration. This includes a persistent IP address, DNS server information, and a hostname for each machine.
*   You have updated your DNS configuration to include the record name and IP address of each compute machine that you are adding. You have validated that DNS lookup and reverse DNS lookup resolve correctly.


:::important

If you do not have access to the {{ op_system_first }} images that were used to create your cluster, you can add more compute machines to your {{ product_title }} cluster with newer versions of {{ op_system_first }} images. For instructions, see [Adding new nodes to UPI cluster fails after upgrading to OpenShift 4.6+](https://access.redhat.com/solutions/5514051).

:::