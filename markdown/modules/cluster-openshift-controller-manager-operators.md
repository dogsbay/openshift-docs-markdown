{%- set _mod_docs_content_type = "REFERENCE" %}
# OpenShift Controller Manager Operator {id="cluster-openshift-controller-manager-operator_{{ context }}"}

The OpenShift Controller Manager Operator installs and maintains the `OpenShiftControllerManager` custom resource in a cluster. {._abstract}

```terminal
$ oc get clusteroperator openshift-controller-manager -o yaml
```

The custom resource definition (CRD) `openshiftcontrollermanagers.operator.openshift.io` can be viewed in a cluster with:

```terminal
$ oc get crd openshiftcontrollermanagers.operator.openshift.io -o yaml
```