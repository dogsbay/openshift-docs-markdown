{%- set _mod_docs_content_type = "CONCEPT" %}
# Hyperdisk-balanced high availability disks overview {id="persistent-storage-csi-gcp-hyperdisk-ha-overview_{{ context }}"}

You can improve application resilience against zone failures by using Hyperdisk Balanced High Availability volumes that synchronously replicate data across two zones in the same region. {._abstract}

Hyperdisk Balanced High Availability volumes are useful for:

*   Protecting your applications from a zonal outage by synchronously replicating data across two zones in the same region
*   When you require write access to the same volume in multiple zones


:::note

Volume Attributes Classes (VAC) does not work on Hyperdisk Balanced High Availability disks.

:::


To set up Hyperdisk Balanced High Availability disks, see "Setting up hyperdisk-balanced disks".