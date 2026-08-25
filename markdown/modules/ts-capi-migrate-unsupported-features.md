{%- set _mod_docs_content_type = "REFERENCE" %}
# Unsupported configuration options {id="ts-capi-migrate-unsupported-features_{{ context }}"}

To understand whether the Cluster API meets your requirements, you can learn about unsupported configuration options. {._abstract}

The Machine API does not support all configuration options for the Cluster API.
Some Machine API configurations cannot migrate to the Cluster API.
Additional configuration options might be supported in a future release.

Attempting to use unsupported configurations might cause a migration to fail or result in errors.


:::note

This list might not be exhaustive.

:::


## General limitations {id="ts-capi-migrate-unsupported-features-general_{{ context }}"}

The following limitations apply to all clusters:

*   Machine API compute machines cannot migrate to the Cluster API unless the `NodeDeletionTimeout` field uses the Cluster API default value of `10s`.
*   {{ product_title }} does not support using the following Cluster API fields in the `spec.template.spec` stanza of a machine set or the `spec` stanza of a machine:
    *   `version`
    *   `readinessGates`
*   The Machine API does not support using the following Cluster API drain configuration options:
    *   `nodeDrainTimeout`
    *   `nodeVolumeDetachTimeout`
    *   `nodeDeletionTimeout`

## {{ aws_first }} limitations {id="ts-capi-migrate-unsupported-features-aws_{{ context }}"}

The following limitations apply to {{ aws_short }} clusters:

*   The Machine API does not support using the following Amazon EC2 Instance Metadata Service (IMDS) configuration options:
    *   `httpEndpoint`
    *   `httpPutResponseHopLimit`
    *   `instanceMetadataTags`

    If you migrate a Cluster API machine template that uses IMDS configuration options to a Machine API compute machine set, expect the following behaviors:
    *   Any machines that the migrated Machine API machine set creates will not have these fields.
    The underlying instances will not use these settings.
    *   Any existing machines that the migrated machine set manages will retain these fields.
    The underlying instances will continue to use these settings.
*   {{ product_title }} does not support using the following {{ aws_short }} machine template fields:
    *   `spec.ami.eksLookupType`
    *   `spec.cloudInit`
    *   `spec.ignition.proxy`
    *   `spec.ignition.tls`
    *   `spec.imageLookupBaseOS`
    *   `spec.imageLookupFormat`
    *   `spec.imageLookupOrg`
    *   `spec.networkInterfaces`
    *   `spec.privateDNSName`
    *   `spec.securityGroupOverrides`
    *   `spec.uncompressedUserData`
*   The Cluster API does not support orphaning a nonroot Amazon Elastic Block Store (Amazon EBS) volume when its underlying {{ aws_short }} EC2 instance is removed.
When an instance is terminated, the Cluster API removes all dependent volumes.