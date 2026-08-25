{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Kourier Gateway service type {id="kourier-gateway-service-type"}
{%- set context = "kourier-gateway-service-type" %}

The Kourier Gateway is exposed by default as the `ClusterIP` service type. This service type is determined by the `service-type` ingress spec in the `KnativeServing` custom resource (CR).

```yaml title="Default spec"
...
spec:
  ingress:
    kourier:
      service-type: ClusterIP
...
```

{% leveloffset +1 %}{% include "./modules/serverless-kourier-gateway-service-type.md" %}{% endleveloffset %}