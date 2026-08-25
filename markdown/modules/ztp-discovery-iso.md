{%- set _mod_docs_content_type = "CONCEPT" %}
# Automated Discovery image ISO process for provisioning managed clusters {id="ztp-discovery-iso_{{ context }}"}

After you apply the managed site custom resources (CRs) on the hub cluster, the following actions happen automatically:

1.  A Discovery image ISO file is generated and booted on the target machine.
1.  When the ISO file successfully boots on the target machine it reports the hardware information of the target machine.
1.  After all hosts are discovered, {{ product_title }} is installed.
1.  When {{ product_title }} finishes installing, the hub installs the `klusterlet` service on the target cluster.
1.  The requested add-on services are installed on the target cluster.

The Discovery image ISO process finishes when the `Agent` custom resource is created on the hub for the managed cluster.