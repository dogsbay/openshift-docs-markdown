{%- set _mod_docs_content_type = "CONCEPT" %}
# Deploying {{ hcp }} on {{ VirtProductName }} in a disconnected environment {id="hcp-deploy-dc-virt-intro_{{ context }}"}

When you deploy {{ hcp }} in a disconnected environment, some of the steps differ depending on whether you use bare metal or {{ VirtProductName }}. {._abstract}

To get started, you must meet the following requirements:

*   You have a disconnected {{ product_title }} environment serving as your management cluster.
*   You have an internal registry to mirror images on. For more information, see "About disconnected installation mirroring".


:::note

A known limitation exists for hosted clusters on an {{ product_title }} management cluster that is version 4.21 or later. To avoid issues, you must mirror the 4.20.10 release payload from the `quay.io/openshift-release-dev/ocp-release:4.20.10-multi` image to the target mirror registry. This temporary limitation is expected to be resolved in a later release.

:::