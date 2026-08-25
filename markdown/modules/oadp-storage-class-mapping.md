{%- set _mod_docs_content_type = "CONCEPT" %}
# Storage class mapping {id="oadp-storage-class-mapping_{{ context }}"}

Define rules for your storage classes to automate how different data types are stored. Mapping your storage classes helps optimize your storage efficiency and lower costs based on access frequency and data importance. {._abstract}

Storage class mapping allows you to define rules or policies specifying which storage class should be applied to different types of data. This feature automates the process of determining storage classes based on access frequency, data importance, and cost considerations. It optimizes storage efficiency and cost-effectiveness by ensuring that data is stored in the most suitable storage class for its characteristics and usage patterns.

You can use the `change-storage-class-config` field to change the storage class of your data objects, which lets you optimize costs and performance by moving data between different storage tiers, such as from standard to archival storage, based on your needs and access patterns.