{%- set _mod_docs_content_type = "REFERENCE" %}
# Setting the Kourier Gateway service type {id="serverless-kourier-gateway-service-type_{{ context }}"}

You can override the default service type to use a load balancer service type instead by modifying the `service-type` spec:

```yaml title="LoadBalancer override spec"
...
spec:
  ingress:
    kourier:
      service-type: LoadBalancer
...
```