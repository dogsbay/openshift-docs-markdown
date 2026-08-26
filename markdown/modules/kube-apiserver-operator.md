{%- set _mod_docs_content_type = "CONCEPT" %}
# Kubernetes API Server Operator {id="kube-apiserver-operator_{{ context }}"}

The Kubernetes API Server Operator manages and updates the Kubernetes API server deployed on top of {{ product_title }}. The Operator is based on the {{ product_title }} `library-go` framework and it is installed using the Cluster Version Operator (CVO). {._abstract}

## CRDs {id="_crds"}

*   `kubeapiservers.operator.openshift.io`
    *   Scope: Cluster
    *   CR: `kubeapiserver`
    *   Validation: Yes

## Configuration objects {id="_configuration_objects"}

```terminal
$ oc edit kubeapiserver
```