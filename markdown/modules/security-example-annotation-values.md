{%- set _mod_docs_content_type = "REFERENCE" %}
# Example annotation values {id="security-example-annotation-values_{{ context }}"}

This example shows an OpenSCAP annotation for an image with vulnerability summary data and a compliance boolean: {._abstract}

```json title="OpenSCAP annotation"
{
  "name": "OpenSCAP",
  "description": "OpenSCAP vulnerability score",
  "timestamp": "2016-09-08T05:04:46Z",
  "reference": "https://www.open-scap.org/930492",
  "compliant": true,
  "scannerVersion": "1.2",
  "summary": [
    { "label": "critical", "data": "4", "severityIndex": 3, "reference": null },
    { "label": "important", "data": "12", "severityIndex": 2, "reference": null },
    { "label": "moderate", "data": "8", "severityIndex": 1, "reference": null },
    { "label": "low", "data": "26", "severityIndex": 0, "reference": null }
  ]
}
```

This example shows the
[Container images section of the Red Hat Ecosystem Catalog](https://catalog.redhat.com/software/containers/explore)
annotation for an image with health index data
with an external URL for additional details:

```json title="Red Hat Ecosystem Catalog annotation"
{
  "name": "Red Hat Ecosystem Catalog",
  "description": "Container health index",
  "timestamp": "2016-09-08T05:04:46Z",
  "reference": "https://access.redhat.com/errata/RHBA-2016:1566",
  "compliant": null,
  "scannerVersion": "1.2",
  "summary": [
    { "label": "Health index", "data": "B", "severityIndex": 1, "reference": null }
  ]
}
```