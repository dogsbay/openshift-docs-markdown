{%- set _mod_docs_content_type = "REFERENCE" %}
# Integrating external scanning {id="security-container-content-external-scanning_{{ context }}"}

{{ product_title }} makes use of object annotations to extend functionality. You can use external tools, such as vulnerability scanners, to annotate image objects with metadata to summarize results and control pod execution.
 
This section describes the recognized format of this annotation so it can be reliably used in consoles to display useful data to users. {._abstract}

## Image metadata {id="security-image-metadata_{{ context }}"}

There are different types of image quality data, including package vulnerabilities and open source software (OSS) license compliance. Additionally, there might be more than one provider of this metadata. To that end, the following annotation format has been reserved:

```
quality.images.openshift.io/<qualityType>.<providerId>: {}
```

**Annotation key format**

| Component | Description | Acceptable values |
| --- | --- | --- |
| `qualityType` | Metadata type | `vulnerability`<br> `license`<br> `operations`<br> `policy` |
| `providerId` | Provider ID string | `openscap`<br> `redhatcatalog`<br> `redhatinsights`<br> `blackduck`<br> `jfrog` |

### Example annotation keys {id="security-example-annotation-keys_{{ context }}"}

```
quality.images.openshift.io/vulnerability.blackduck: {}
quality.images.openshift.io/vulnerability.jfrog: {}
quality.images.openshift.io/license.blackduck: {}
quality.images.openshift.io/vulnerability.openscap: {}
```

The value of the image quality annotation is structured data that must adhere to the following format:

**Annotation value format**

| Field | Required? | Description | Type |
| --- | --- | --- | --- |
| `name` | Yes | Provider display name | String |
| `timestamp` | Yes | Scan timestamp | String |
| `description` | No | Short description | String |
| `reference` | Yes | URL of information source or more details. Required so user might validate the data. | String |
| `scannerVersion` | No | Scanner version | String |
| `compliant` | No | Compliance pass or fail | Boolean |
| `summary` | No | Summary of issues found | List (see table below) |

The `summary` field must adhere to the following format:

**Summary field value format**

| Field | Description | Type |
| --- | --- | --- |
| `label` | Display label for component (for example, "critical," "important," "moderate," "low," or "health") | String |
| `data` | Data for this component (for example, count of vulnerabilities found or score) | String |
| `severityIndex` | Component index allowing for ordering and assigning graphical representation. The value is range `0..3` where `0` = low. | Integer |
| `reference` | URL of information source or more details. Optional. | String |

### Example annotation values {id="security-example-annotation-values_{{ context }}"}

This example shows an OpenSCAP annotation for an image with
vulnerability summary data and a compliance boolean:

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

## Annotating image objects {id="security-annotating-image-objects_{{ context }}"}

While image stream objects are what a user of {{ product_title }} operates against, image objects are annotated with security metadata. Image objects are cluster-scoped, pointing to a single image that might be referenced by many image streams and tags.

### Example annotate CLI command {id="security-example-annotate-CLI_{{ context }}"}

Replace `<image>` with an image digest, for example
`sha256:401e359e0f45bfdcf004e258b72e253fd07fba8cc5c6f2ed4f4608fb119ecc2`:

```terminal
$ oc annotate image <image> \
    quality.images.openshift.io/vulnerability.redhatcatalog='{ \
    "name": "Red Hat Ecosystem Catalog", \
    "description": "Container health index", \
    "timestamp": "2020-06-01T05:04:46Z", \
    "compliant": null, \
    "scannerVersion": "1.2", \
    "reference": "https://access.redhat.com/errata/RHBA-2020:2347", \
    "summary": "[ \
      { "label": "Health index", "data": "B", "severityIndex": 1, "reference": null } ]" }'
```

## Controlling pod execution {id="controlling-pod-execution_{{ context }}"}

Use the `images.openshift.io/deny-execution` image policy
to programmatically control if an image can be run.

### Example annotation {id="security-controlling-pod-execution-example-annotation_{{ context }}"}

```yaml
annotations:
  images.openshift.io/deny-execution: true
```

## Integration reference {id="security-integration-reference_{{ context }}"}

In most cases, external tools such as vulnerability scanners develop a script or plugin that watches for image updates, performs scanning, and annotates the associated image object with the results. Typically this automation calls the {{ product_title }} {{ product_version }} REST APIs to write the annotation. See {{ product_title }} REST APIs for general information about the REST APIs.

### Example REST API call {id="security-integration-reference-example-api-call_{{ context }}"}

The following example call by using `curl` overrides the value of the annotation. Be sure to replace the values for `<token>`, `<openshift_server>`, `<image_id>`, and `<image_annotation>`.

```terminal title="Patch API call"
$ curl -X PATCH \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/merge-patch+json" \
  https://<openshift_server>:6443/apis/image.openshift.io/v1/images/<image_id> \
  --data '{ <image_annotation> }'
```

The following is an example of `PATCH` payload data:

```terminal title="Patch call data"
{
"metadata": {
  "annotations": {
    "quality.images.openshift.io/vulnerability.redhatcatalog":
       "{ 'name': 'Red Hat Ecosystem Catalog', 'description': 'Container health index', 'timestamp': '2020-06-01T05:04:46Z', 'compliant': null, 'reference': 'https://access.redhat.com/errata/RHBA-2020:2347', 'summary': [{'label': 'Health index', 'data': '4', 'severityIndex': 1, 'reference': null}] }"
    }
  }
}
```

{% if openshift_origin %}

:::note

Due to the complexity of this API call and challenges with escaping characters, an API developer tool such as Postman might assist in creating API calls.

:::

{% endif %}