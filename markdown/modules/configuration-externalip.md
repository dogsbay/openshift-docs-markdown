{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuration for ExternalIP {id="configuration-externalip_{{ context }}"}

You can set parameters in the `Network.config.openshift.io` custom resource (CR) to govern the use of an external IP address in {{ product_title }}.  {._abstract}

The following list details these parameters:

*   `spec.externalIP.autoAssignCIDRs` defines an IP address block used by the load balancer when choosing an external IP address for the service. {{ product_title }} supports only a single IP address block for automatic assignment. This configuration requires less steps than manually assigning ExternalIPs to services, which requires managing the port space of a limited number of shared IP addresses. If you enable automatic assignment, the Cloud Controller Manager Operator allocates an external IP address to a `Service` object with `spec.type=LoadBalancer` defind in its configuration.
*   `spec.externalIP.policy` defines the permissible IP address blocks when manually specifying an IP address. {{ product_title }} does not apply policy rules to IP address blocks that you defined in the `spec.externalIP.autoAssignCIDRs` parameter.

If routed correctly, external traffic from the configured external IP address block can reach service endpoints through any TCP or UDP port that the service exposes.


:::important

As a cluster administrator, you must configure routing to externalIPs. You must also ensure that the IP address block you assign terminates at one or more nodes in your cluster. For more information, see [Kubernetes External IPs](https://kubernetes.io/docs/concepts/services-networking/service/#external-ips).

:::


{{ product_title }} supports both automatic and manual IP address assignment. This support guarantees that each address gets assigned to a maximum of one service and that each service can expose its chosen ports regardless of the ports exposed by other services.


:::note

To use IP address blocks defined by `autoAssignCIDRs` in {{ product_title }}, you must configure the necessary IP address assignment and routing for your host network.

:::


The following YAML describes a service with an external IP address configured:

```yaml title="Example Service object with spec.externalIPs[] set"
apiVersion: v1
kind: Service
metadata:
  name: http-service
spec:
  clusterIP: 172.30.163.110
  externalIPs:
  - 192.168.132.253
  externalTrafficPolicy: Cluster
  ports:
  - name: highport
    nodePort: 31903
    port: 30102
    protocol: TCP
    targetPort: 30102
  selector:
    app: web
  sessionAffinity: None
  type: LoadBalancer
status:
  loadBalancer:
    ingress:
    - ip: 192.168.132.253
# ...
```

If you run a private cluster on a cloud-provider platform, you can change the publishing scope to `internal` for the load balancer of the Ingress Controller by running the following `patch` command:

```terminal
$ oc -n openshift-ingress-operator patch ingresscontrollers/ingress-controller-with-nlb --type=merge --patch='{"spec":{"endpointPublishingStrategy":{"loadBalancer":{"scope":"Internal"}}}}'
```

After you run this command, the Ingress Controller restricts access to routes for {{ product_title }} applications to internal networks only.