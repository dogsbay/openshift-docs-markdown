{%- set _mod_docs_content_type = "CONCEPT" %}
# About all-multicast mode {id="nw-about-all-multi-cast-mode_{{ context }}"}

Enabling all-multicast mode, particularly in the context of rootless applications, is critical. If you do not enable this mode, you would be required to grant the `NET_ADMIN` capability to the pod’s Security Context Constraints (SCC). If you were to allow the `NET_ADMIN` capability to grant the pod privileges to make changes that extend beyond its specific requirements, you could potentially expose security vulnerabilities. {._abstract}

The tuning CNI plugin supports changing several interface attributes, including all-multicast mode. By enabling this mode, you can allow applications running on Virtual Functions (VFs) that are configured on a SR-IOV network device to receive multicast traffic from applications on other VFs, whether attached to the same or different physical functions.