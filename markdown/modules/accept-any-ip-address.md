{%- set _mod_docs_content_type = "REFERENCE" %}
# Accept any IP address {id="accept-any-ip-address_{{ context }}"}

To automatically allocate IP addresses to services without manual specification, configure MetalLB address pools to permit automatic assignment. MetalLB dynamically assigns available addresses from these pools, ensuring seamless service deployment and network connectivity.  {._abstract}

```yaml title="Example service YAML for accepting any IP address"
apiVersion: v1
kind: Service
metadata:
  name: <service_name>
spec:
  selector:
    <label_key>: <label_value>
  ports:
    - port: 8080
      targetPort: 8080
      protocol: TCP
  type: LoadBalancer
```