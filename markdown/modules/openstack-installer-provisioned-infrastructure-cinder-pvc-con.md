{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure image registry storage on {{ rh_openstack_first }} installer-provisioned infrastructure {id="openstack-installer-provisioned-infrastructure-cinder-pvc-con_{{ context }}"}

You configure the image registry to use custom storage on clusters that run on {{ rh_openstack }}. Configure custom storage when the registry must use a Cinder volume in a specific availability zone.