{%- set _mod_docs_content_type = "REFERENCE" %}
# Request an IP address from a specific pool {id="request-ip-address-from-pool_{{ context }}"}

To ensure predictable network endpoints, control how MetalLB assigns IP addresses to services of type `LoadBalancer`. Requesting specific addresses or pools ensures that your applications receive valid IP assignments that align with your specific network addressing plan. {._abstract}

```yaml title="Example service YAML for an IP address from a specific pool"
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
```

If the address pool that you specify for `<address_pool_name>` does not exist, MetalLB attempts to assign an IP address from any pool that permits automatic assignment.