{%- set _mod_docs_content_type = "CONCEPT" %}
# About disaster recovery methods {id="virt-about-dr-methods_{{ context }}"}

The two primary DR methods for {{ VirtProductName }} are Metropolitan Disaster Recovery (Metro-DR) and Regional-DR. {._abstract}

For an overview of disaster recovery (DR) concepts, architecture, and planning considerations, see the "Red&#160;Hat {{ VirtProductName }} disaster recovery guide" in the Red&#160;Hat Knowledgebase.

## Metro-DR {id="metro-dr_{{ context }}"}

Metro-DR uses synchronous replication. It writes to storage at both the primary and secondary sites so that the data is always synchronized between sites. Because the storage provider is responsible for ensuring that the synchronization succeeds, the environment must meet the throughput and latency requirements of the storage provider.

## Regional-DR {id="regional-dr_{{ context }}"}

Regional-DR uses asynchronous replication. The data in the primary site is synchronized with the secondary site at regular intervals. For this type of replication, you can have a higher latency connection between the primary and secondary sites.