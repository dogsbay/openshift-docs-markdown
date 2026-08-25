{%- set _mod_docs_content_type = "CONCEPT" %}
# Mirroring and verifying image signatures in oc-mirror plugin v2 {id="oc-mirror-signature-mirroring_{{ context }}"}

The oc-mirror plugin v2 supports mirroring and verifying cosign tag-based signatures for container images. By default, signature mirroring is enabled. When enabled, the oc-mirror plugin v2 mirrors `Sigstore` tag-based signatures for the following images: {._abstract}

*   {{ product_title }} release images
*   Operator images
*   Additional images
*   Helm charts

The oc-mirror plugin v2 manages image signature mirroring with the following behaviors:

*   By default, the oc-mirror plugin v2 mirrors signatures for all images. To override this behavior, you must disable the signature mirroring.
*   Because the certified, marketplace, and community catalogs contain third-party content, Red&#160;Hat does not ensure the availability or validity of their signatures. In such cases, you must disable signature mirroring.

For more information on disabling signature mirroring, see "Disabling signature mirroring for oc-mirror plugin v2".

For more details on configuration formats, see "containers-registries.d(5) manual".