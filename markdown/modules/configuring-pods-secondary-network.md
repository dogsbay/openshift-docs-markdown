{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuring pods for secondary networks {id="configuring-pods-secondary-network_{{ context }}"}

You must specify the secondary network attachments through the `k8s.v1.cni.cncf.io/networks` annotation. {._abstract}

The following example provisions a pod with two secondary attachments, one for each of the attachment configurations presented in this guide:

```yaml
apiVersion: v1
kind: Pod
metadata:
  annotations:
    k8s.v1.cni.cncf.io/networks: l2-network
  name: tinypod
  namespace: ns1
spec:
  containers:
  - args:
    - pause
    image: k8s.gcr.io/e2e-test-images/agnhost:2.36
    imagePullPolicy: IfNotPresent
    name: agnhost-container
```