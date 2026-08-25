{%- set _mod_docs_content_type = "REFERENCE" %}
# Request a specific IP address {id="request-specific-ip-address_{{ context }}"}

To assign a specific, static IP address to a service, configure the `spec.loadBalancerIP` parameter in the service specification.  {._abstract}

MetalLB attempts to assign the requested address from the configured address pools, ensuring that your service is reachable at a designated, static network endpoint. If the requested IP address is not within any range, MetalLB reports a warning.

```yaml title="Example service YAML for a specific IP address"
apiVersion: v1
kind: Service
metadata:
  name: <service_name>
  annotations:
    metallb.io/address-pool: <address_pool_name>
spec:
  selector:
    <label_key>: <label_value>
  ports:
    - port: 8080
      targetPort: 8080
      protocol: TCP
  type: LoadBalancer
  loadBalancerIP: <ip_address>
```

If MetalLB cannot assign the requested IP address, the `EXTERNAL-IP` for the service reports `<pending>` and running `oc describe service <service_name>` includes an event like the following example:

```terminal title="Example event when MetalLB cannot assign a requested IP address"
  ...
Events:
  Type     Reason            Age    From                Message
  ----     ------            ----   ----                -------
  Warning  AllocationFailed  3m16s  metallb-controller  Failed to allocate IP for "default/invalid-request": "4.3.2.1" is not allowed in config
```