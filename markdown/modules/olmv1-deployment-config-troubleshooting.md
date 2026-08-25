{%- set _mod_docs_content_type = "CONCEPT" %}
# Troubleshooting `deploymentConfig` {id="olmv1-deployment-config-troubleshooting_{{ context }}"}

Common `deploymentConfig` issues include validation errors, configuration verification problems, and annotation conflicts that can prevent successful Operator installation. {._abstract}

{%- set FeatureName = "{{ olmv1 }} `deploymentConfig` API" %}
{% include "./snippets/technology-preview.md" %}

## Validation errors {id="olmv1-deployment-config-troubleshooting-validation_{{ context }}"}

Check the `Progressing` condition for validation errors when installation fails:

```terminal
$ oc get clusterextension <extension_name> -o jsonpath='{.status.conditions[?(@.type=="Progressing")].message}'
```

Common validation errors and resolutions:


Unknown field
:   Configuration includes an unsupported field. Remove unsupported fields.


Type mismatch
:   Field value does not match the expected type. Verify field types match Kubernetes specifications.


Required field missing
:   Mandatory nested field is missing. Complete all required fields in nested structures.

## Verifying applied configuration {id="olmv1-deployment-config-troubleshooting-applied_{{ context }}"}

Inspect the Operator deployment to verify applied configurations:

```terminal
$ oc get deployment -n <namespace> -l olm.operatorframework.io/owner-name=<extension_name> -o yaml
```

Configuration locations in the deployment specification:

*   ***Environment variables***: `spec.template.spec.containers[].env` and `spec.template.spec.containers[].envFrom`
*   ***Resources***: `spec.template.spec.containers[].resources`
*   ***Node selector***: `spec.template.spec.nodeSelector`
*   ***Tolerations***: `spec.template.spec.tolerations`
*   ***Affinity***: `spec.template.spec.affinity`
*   ***Volumes***: `spec.template.spec.volumes` and `spec.template.spec.containers[].volumeMounts`
*   ***Annotations***: `metadata.annotations` and `spec.template.metadata.annotations`

## Annotation conflicts {id="olmv1-deployment-config-troubleshooting-conflicts_{{ context }}"}

Bundle annotations take precedence over `deploymentConfig` annotations when keys conflict. View the installed bundle information:

```terminal
$ oc get clusterextension <extension_name> -o jsonpath='{.status.install.bundle}'
```

This returns the bundle name and version. To see the annotations applied to the Operator pod template:

```terminal
$ oc get deployment -n <namespace> -l olm.operatorframework.io/owner-name=<extension_name> -o jsonpath='{.items[0].spec.template.metadata.annotations}'
```

To override a bundle annotation, modify the bundle or accept the bundle value.