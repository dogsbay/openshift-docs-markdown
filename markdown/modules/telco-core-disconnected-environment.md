{%- set _mod_docs_content_type = "REFERENCE" %}
# Disconnected environment {id="telco-core-disconnected-environment_{{ context }}"}

Telco core clusters are expected to be installed in networks without direct access to the internet. {._abstract}


New in this release
:   *   Added requirement to use the `oc mirror` plugin v2 for mirroring image signatures in disconnected environments.

Description
:   Telco core clusters are expected to be installed in networks without direct access to the internet.
    All container images needed to install, configure, and operate the cluster must be available in a disconnected registry.
    This includes {{ product_title }} images, Day 2 OLM Operator images, and application workload images.
    The use of a disconnected environment provides multiple benefits, including:

    *   Security - limiting access to the cluster
    *   Curated content - the registry is populated based on curated and approved updates for clusters

Limits and requirements
:   *   A unique name is required for all custom `CatalogSource` resources.
    Do not reuse the default catalog names.

Engineering considerations

:   *   A valid time source must be configured as part of cluster installation.
    *   In {{ product_title }} {{ product_version }} and later, pulling OpenShift images from a disconnected mirror registry requires copying the image signatures into that registry during the mirroring process.
    The `oc adm mirror` command does not mirror signatures and must not be used.
    Instead, use the `oc mirror` plugin v2 to ensure signatures are properly mirrored.