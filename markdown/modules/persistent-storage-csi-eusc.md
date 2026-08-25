{%- set _mod_docs_content_type = "CONCEPT" %}
# Support for European Sovereign Cloud (EUSC) region {id="persistent-storage-csi-eusc_{{ context }}"}

European Sovereign Cloud (EUSC) region acts as a "digital fortress" built within a specific country’s borders. Sovereign Clouds are specifically designed to meet strict legal, jurisdictional, and security requirements of a particular nation or entity. {._abstract}

In the context of storage, EUSC ensures that all data, including primary storage, backups, and the resulting metadata, resides physically within the specific nation’s borders and remains exclusively under its legal jurisdiction.

For {{ product_title }} 4.22, and later, only AWS Elastic Block Storage supports EUSC. AWS Elastic File Storage (EFS) is not supported.

{%- set FeatureName = "EUSC" %}
{% include "./snippets/technology-preview.md" %}

For information about installing an {{ product_title }} cluster into the {{ aws_short }} EUSC, see "{{ aws_short }} EUSC region".