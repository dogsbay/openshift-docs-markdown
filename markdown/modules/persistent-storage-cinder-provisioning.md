{%- set _mod_docs_content_type = "CONCEPT" %}
# Manual provisioning with Cinder {id="persistent-storage-cinder-provisioning_{{ context }}"}

Storage must exist in the underlying infrastructure before it can be mounted as a volume in {{ product_title }}. {._abstract}

Manual provisioning requires that {{ product_title }} is configured for {{ rh_openstack_first }} and that you have the Cinder volume ID.