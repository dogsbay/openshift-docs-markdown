{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ SMProductName }} integration {id="virt-connect-vm-to-service-mesh_{{ context }}"}

{{ VirtProductName }} is integrated with {{ SMProductName }}. You can monitor, visualize, and control traffic between pods that run virtual machine (VM) workloads on the default pod network with IPv4. {._abstract}

{%- if not (openshift_dedicated or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Installing the Service Mesh Operator](https://docs.redhat.com/en/documentation/red_hat_openshift_service_mesh/3.0/html/installing/ossm-installing-service-mesh)
{%- endif %}