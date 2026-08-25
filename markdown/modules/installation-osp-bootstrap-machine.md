{%- set _mod_docs_content_type = "CONCEPT" %}
# Bootstrap machine {id="installation-osp-bootstrap-machine_{{ context }}"}

During installation, a bootstrap machine is temporarily provisioned to stand up the control plane. After the production control plane is ready, the bootstrap
machine is deprovisioned. {._abstract}

The bootstrap machine requires:

*   An instance from the {{ rh_openstack }} quota
*   A port from the {{ rh_openstack }} quota
*   A flavor with at least 16 GB memory and 4 vCPUs
*   At least 100 GB storage space from the {{ rh_openstack }} quota