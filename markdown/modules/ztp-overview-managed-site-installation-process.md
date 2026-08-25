{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of the managed site installation process {id="ztp-overview-managed-site-installation-process_{{ context }}"}

After you apply the managed site custom resources (CRs) on the hub cluster, the following actions happen automatically: {._abstract}

1.  A Discovery image ISO file is generated and booted on the target host.
1.  When the ISO file successfully boots on the target host it reports the host hardware information to {{ rh_rhacm }}.
1.  After all hosts are discovered, {{ product_title }} is installed.
1.  When {{ product_title }} finishes installing, the hub installs the `klusterlet` service on the target cluster.
1.  The requested add-on services are installed on the target cluster.

The Discovery image ISO process is complete when the `Agent` CR for the managed cluster is created on the hub cluster.


:::important

The target bare-metal host must meet the networking, firmware. For more information, see "Recommended {{ sno }} cluster configuration for vDU application workloads".

:::