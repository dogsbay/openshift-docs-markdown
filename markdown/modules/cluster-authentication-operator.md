{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster Authentication Operator {id="cluster-authentication-operator_{{ context }}"}

The Cluster Authentication Operator installs and maintains the `Authentication` custom resource in a cluster and can be viewed with:

```terminal
$ oc get clusteroperator authentication -o yaml
```

## Project {id="_project"}

[cluster-authentication-operator](https://github.com/openshift/cluster-authentication-operator)