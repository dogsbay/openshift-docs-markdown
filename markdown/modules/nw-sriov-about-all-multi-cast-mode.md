{%- set _mod_docs_content_type = "CONCEPT" %}
# About all-multicast mode {id="nw-about-all-multi-cast-mode_{{ context }}"}

Enabling all-multicast mode is critical for rootless applications. Without this mode, you must grant the `NET_ADMIN` capability to the pod’s Security Context Constraints (SCC), which could expose security vulnerabilities. {._abstract}

The tuning CNI plugin supports changing several interface attributes, including all-multicast mode. By enabling this mode, you can allow applications running on Virtual Functions (VFs) that are configured on a SR-IOV network device to receive multicast traffic from applications on other VFs, whether attached to the same or different physical functions.