{%- set _mod_docs_content_type = "CONCEPT" %}
# Block storage {id="security-network-storage-block_{{ context }}"}

For block storage providers such as AWS Elastic Block Store (EBS), Google Compute Engine (GCE) Persistent Disks, and Internet Small Computer Systems Interface (iSCSI), {{ product_title }} uses Security-Enhanced Linux (SELinux) capabilities to secure the root of the mounted volume for non-privileged pods, making the mounted volume owned by and only visible to the container with which it is associated.