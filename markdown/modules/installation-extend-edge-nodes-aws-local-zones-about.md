{%- set _mod_docs_content_type = "CONCEPT" %}
# About creating user workloads in AWS Local Zones or Wavelength Zones {id="creating-user-workloads-aws-zones-about_{{ context }}"}

When you use the installation program to create a cluster, the installation program automatically specifies a taint effect of `NoSchedule` to each edge compute node. So, a scheduler does not add a new pod, or deployment, to a node if the pod does not match the specified tolerations for a taint. {._abstract}

You can modify the taint for better control over how nodes create workloads in each {{ zone_type }} subnet.

The installation program creates the compute machine set manifests file with `node-role.kubernetes.io/edge` and `node-role.kubernetes.io/worker` labels applied to each edge compute node that is located in a {{ zone_type }} subnet.


:::note

The examples in the procedure are for a Local Zones infrastructure. If you are working with a Wavelength Zones infrastructure, ensure you adapt the examples to what is supported in this infrastructure.

:::