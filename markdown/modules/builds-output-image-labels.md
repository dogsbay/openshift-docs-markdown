{%- set _mod_docs_content_type = "REFERENCE" %}
# Output image labels {id="builds-output-image-labels_{{ context }}"}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
docker and
{%- endif %}
source-to-image (S2I) builds set the following labels on output images:

| Label | Description |
| --- | --- |
| `io.openshift.build.commit.author` | Author of the source commit used in the build |
| `io.openshift.build.commit.date` | Date of the source commit used in the build |
| `io.openshift.build.commit.id` | Hash of the source commit used in the build |
| `io.openshift.build.commit.message` | Message of the source commit used in the build |
| `io.openshift.build.commit.ref` | Branch or reference specified in the source |
| `io.openshift.build.source-location` | Source URL for the build |

You can also use the `BuildConfig.spec.output.imageLabels` field to specify a list of custom labels that will be applied to each image built from the build configuration.

```yaml title="Custom labels for built images"
spec:
  output:
    to:
      kind: "ImageStreamTag"
      name: "my-image:latest"
    imageLabels:
    - name: "vendor"
      value: "MyCompany"
    - name: "authoritative-source-url"
      value: "registry.mycompany.com"
```