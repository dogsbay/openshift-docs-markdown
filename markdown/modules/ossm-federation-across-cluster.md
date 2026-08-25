# Mesh federation across clusters {id="ossm-federation-across-clusters_{{ context }}"}

To connect one instance of the OpenShift Service Mesh with one running in a different cluster, the procedure is not much different as when connecting two meshes deployed in the same cluster. However, the ingress gateway of one mesh must be reachable from the other mesh. One way of ensuring this is to configure the gateway service as a `LoadBalancer` service if the cluster supports this type of service.

The service must be exposed through a load balancer that operates at Layer4 of the OSI model.

## Exposing the federation ingress on clusters running on bare metal {id="_exposing_the_federation_ingress_on_clusters_running_on_bare_metal"}
If the cluster runs on bare metal and fully supports `LoadBalancer` services, the IP address found in the `.status.loadBalancer.ingress.ip` field of the ingress gateway `Service` object should be specified as one of the entries in the `.spec.remote.addresses` field of the `ServiceMeshPeer` object.

If the cluster does not support `LoadBalancer` services, using a `NodePort` service could be an option if the nodes are accessible from the cluster running the other mesh. In the `ServiceMeshPeer` object, specify the IP addresses of the nodes in the `.spec.remote.addresses` field and the service’s node ports in the `.spec.remote.discoveryPort` and `.spec.remote.servicePort` fields.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
## Exposing the federation ingress on clusters running on {{ ibm_power_title }} and {{ ibm_z_title }} {id="_exposing_the_federation_ingress_on_clusters_running_on_ibm_power_title_and_ibm_z_title"}
If the cluster runs on {{ ibm_power_name }} or {{ ibm_z_name }} infrastructure and fully supports `LoadBalancer` services, the IP address found in the `.status.loadBalancer.ingress.ip` field of the ingress gateway `Service` object should be specified as one of the entries in the `.spec.remote.addresses` field of the `ServiceMeshPeer` object.

If the cluster does not support `LoadBalancer` services, using a `NodePort` service could be an option if the nodes are accessible from the cluster running the other mesh. In the `ServiceMeshPeer` object, specify the IP addresses of the nodes in the `.spec.remote.addresses` field and the service’s node ports in the `.spec.remote.discoveryPort` and `.spec.remote.servicePort` fields.
{% endif %}

{% if not openshift_dedicated %}
## Exposing the federation ingress on Amazon Web Services (AWS) {id="_exposing_the_federation_ingress_on_amazon_web_services_aws"}
By default, LoadBalancer services in clusters running on AWS do not support L4 load balancing. In order for {{ SMProductName }} federation to operate correctly, the following annotation must be added to the ingress gateway service:

service.beta.kubernetes.io/aws-load-balancer-type: nlb

The Fully Qualified Domain Name found in the `.status.loadBalancer.ingress.hostname` field of the ingress gateway `Service` object should be specified as one of the entries in the `.spec.remote.addresses` field of the `ServiceMeshPeer` object.
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
## Exposing the federation ingress on Azure {id="_exposing_the_federation_ingress_on_azure"}
On Microsoft Azure, merely setting the service type to `LoadBalancer` suffices for mesh federation to operate correctly.

The IP address found in the `.status.loadBalancer.ingress.ip` field of the ingress gateway `Service` object should be specified as one of the entries in the `.spec.remote.addresses` field of the `ServiceMeshPeer` object.
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
## Exposing the federation ingress on {{ gcp_first }} {id="_exposing_the_federation_ingress_on_gcp_first"}
On {{ gcp_full }}, merely setting the service type to `LoadBalancer` suffices for mesh federation to operate correctly.

The IP address found in the `.status.loadBalancer.ingress.ip` field of the ingress gateway `Service` object should be specified as one of the entries in the `.spec.remote.addresses` field of the `ServiceMeshPeer` object.
{% endif %}