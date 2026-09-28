{%- set _mod_docs_content_type = "REFERENCE" %}
# RHSA-2026:68552 - {{ product_title }} {{ product_version }}.15 bug fix and security update {id="zstream-4-22-15_{{ context }}"}

Issued: 22 September 2026

{{ product_title }} release {{ product_version }}.15 is now available. The list of fixed issues that are included in the update is documented in the [RHSA-2026:68552](https://access.redhat.com/errata/RHSA-2026:68552) advisory. The RPM packages that are included in the update are provided by the [RHSA-2026:68550](https://access.redhat.com/errata/RHSA-2026:68550) advisory. {._abstract}

Space precluded documenting all of the container images for this release in the advisory.

You can view the container images in this release by running the following command:

```terminal
$ oc adm release info 4.22.15 --pullspecs
```

## Fixed issues {id="zstream-4-22-15-fixed-issues_{{ context }}"}

*   Before this update, in {{ aws_first }}, the installation program created a security group rule that applied to cluster nodes and allowed ports 6441 and 6442. However, these ports are not needed or used anywhere. With this update, this security group rule is removed. ([OCPBUGS-95072](https://issues.redhat.com/browse/OCPBUGS-95072))
*   Before this update, the `AWSMachine` controller was requeuing machine instances before confirming the presence of tags. As a consequence, duplicate {{ aws_first }} EC2 instances were created. With this release, the `AWSMachine` controller verifies tags before requeuing instances. As a result, duplicate EC2 instances are not created. ([OCPBUGS-112305](https://issues.redhat.com/browse/OCPBUGS-112305))
*   Before this update, the Machine Config Operator (MCO) boot image controller on {{ vmw_first }} incorrectly concatenated failure domain and compute cluster inventory paths using the `path.Join` parameter. As a consequence, the controller created an invalid path when you used absolute paths, for example, `<datacenter>/network/<portgroup>`. The invalid path caused a `failed to find` network error. With this update, the network name is passed directly to the {{ vmw_short }} finder library, which natively supports all network identifier formats. As a result, the failure domain networks are correctly resolved and MCO degradation is prevented. ([OCPBUGS-121849](https://issues.redhat.com/browse/OCPBUGS-121849))

## Updating {id="zstream-4-22-15-updating_{{ context }}"}

To update an {{ product_title }} 4.22 cluster to this latest release, see [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli).