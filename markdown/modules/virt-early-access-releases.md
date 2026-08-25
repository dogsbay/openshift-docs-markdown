{%- set _mod_docs_content_type = "CONCEPT" %}
# Early access releases {id="virt-early-access-releases_{{ context }}"}

You can access development builds by subscribing to the **candidate** update channel for your version of {{ VirtProductName }}. {._abstract}

These releases are not fully tested by Red&#160;Hat and are not supported. Use them only on non-production clusters to test new capabilities and bug fixes.

The **stable** channel matches the underlying {{ product_title }} version and is fully tested. It is suitable for production systems. You can switch between the **stable** and **candidate** channels in OperatorHub. Updating from a **candidate** release to a **stable** release is not tested by Red&#160;Hat.

Red&#160;Hat promotes some candidate releases to the **stable** channel. Other candidate releases might not include all GA features. Red&#160;Hat might remove some features from candidate builds before GA. Candidate releases might not offer update paths to later GA releases.


:::important

Use the candidate channel only for testing where you can delete and re-create the cluster.

:::