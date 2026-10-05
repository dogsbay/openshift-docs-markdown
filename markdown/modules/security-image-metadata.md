{%- set _mod_docs_content_type = "REFERENCE" %}
# Image metadata {id="security-image-metadata_{{ context }}"}

There are different types of image quality data, including package vulnerabilities and open source software (OSS) license compliance. Additionally, there might be more than one provider of this metadata. To that end, the following annotation format has been reserved: {._abstract}

```
quality.images.openshift.io/<qualityType>.<providerId>: {}
```

**Annotation key format**

| Component | Description | Acceptable values |
| --- | --- | --- |
| `qualityType` | Metadata type | `vulnerability`, `license`, `operations`, `policy` |
| `providerId` | Provider ID string | `openscap`, `redhatcatalog`, `redhatinsights`, `blackduck`, `jfrog` |

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