{%- set _mod_docs_content_type = "CONCEPT" %}
# Limiting access to a quick start {id="limiting-access-to-quick-starts_{{ context }}"}

Not all quick starts should be available for everyone. The `accessReviewResources` section of the YAML file provides the ability to limit access to the quick start. {._abstract}

To only allow the user to access the quick start if they have the ability to create `HelmChartRepository` resources, use the following configuration:

```yaml
accessReviewResources:
  - group: helm.openshift.io
    resource: helmchartrepositories
    verb: create
```

To only allow the user to access the quick start if they have the ability to list Operator groups and package manifests, thus ability to install Operators, use the following configuration:

```yaml
accessReviewResources:
  - group: operators.coreos.com
    resource: operatorgroups
    verb: list
  - group: packages.operators.coreos.com
    resource: packagemanifests
    verb: list
```