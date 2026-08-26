{%- set _mod_docs_content_type = "REFERENCE" %}
# etcd cluster Operator {id="etcd-cluster-operator_{{ context }}"}

The etcd cluster Operator automates etcd cluster scaling, enables etcd monitoring and metrics, and simplifies disaster recovery procedures. {._abstract}

## CRDs {id="_crds"}

*   `etcds.operator.openshift.io`
    *   Scope: Cluster
    *   CR: `etcd`
    *   Validation: Yes

## Configuration objects {id="_configuration_objects"}

```terminal
$ oc edit etcd cluster
```