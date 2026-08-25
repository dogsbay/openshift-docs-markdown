{%- set _mod_docs_content_type = "CONCEPT" %}
# Deployments {id="deployments-kube-deployments_{{ context }}"}

To run and update application pods in {{ product_title }}, you can use a Kubernetes `Deployment` object. A deployment describes the desired state of an application component as a pod template and creates replica sets that manage pod lifecycles. {._abstract}

For example, the following deployment definition creates a replica set to bring up one `hello-openshift` pod:

```yaml title="Deployment definition"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-openshift
spec:
  replicas: 1
  selector:
    matchLabels:
      app: hello-openshift
  template:
    metadata:
      labels:
        app: hello-openshift
    spec:
      containers:
      - name: hello-openshift
        image: openshift/hello-openshift:latest
        ports:
        - containerPort: 80
```