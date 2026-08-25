{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ cmo_full }} {id="cluster-monitoring-operator_{{ context }}"}

The {{ cmo_first }} manages and updates the Prometheus-based cluster monitoring stack deployed on top of {{ product_title }}.

## Project {id="_project"}

[openshift-monitoring](https://github.com/openshift/cluster-monitoring-operator)

## CRDs {id="_crds"}

*   `alertmanagers.monitoring.coreos.com`
    *   Scope: Namespaced
    *   CR: `alertmanager`
    *   Validation: Yes
*   `prometheuses.monitoring.coreos.com`
    *   Scope: Namespaced
    *   CR: `prometheus`
    *   Validation: Yes
*   `prometheusrules.monitoring.coreos.com`
    *   Scope: Namespaced
    *   CR: `prometheusrule`
    *   Validation: Yes
*   `servicemonitors.monitoring.coreos.com`
    *   Scope: Namespaced
    *   CR: `servicemonitor`
    *   Validation: Yes

## Configuration objects {id="_configuration_objects"}

```terminal
$ oc -n openshift-monitoring edit cm cluster-monitoring-config
```