{%- set _mod_docs_content_type = "REFERENCE" %}
# Writing templates {id="templates-writing_{{ context }}"}

To define reusable application templates on your {{ product_title }} cluster, create a `Template` object that lists the resources to deploy and metadata that guides their creation. {._abstract}

Use the following sample YAML to review the structure before you author your own template.

```yaml
apiVersion: template.openshift.io/v1
kind: Template
metadata:
  name: redis-template
  annotations:
    description: "Description"
    iconClass: "icon-redis"
    tags: "database,nosql"
objects:
- apiVersion: v1
  kind: Pod
  metadata:
    name: redis-master
  spec:
    containers:
    - env:
      - name: REDIS_PASSWORD
        value: ${REDIS_PASSWORD}
      image: dockerfile/redis
      name: master
      ports:
      - containerPort: 6379
        protocol: TCP
parameters:
- description: Password used for Redis authentication
  from: '[A-Z0-9]{8}'
  generate: expression
  name: REDIS_PASSWORD
labels:
  redis: master
```