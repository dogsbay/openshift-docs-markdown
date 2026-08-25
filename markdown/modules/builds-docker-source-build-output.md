{%- set _mod_docs_content_type = "CONCEPT" %}
# Build output {id="builds-docker-source-build-output_{{ context }}"}

Builds that use the
{%- if openshift_enterprise or openshift_webscale or openshift_origin %}
docker or
{%- endif %}
source-to-image (S2I) strategy result in the creation of a new container image. The image is then pushed to the container image registry specified in the `output` section of the `Build` specification.

If the output kind is `ImageStreamTag`, then the image will be pushed to the integrated {{ product_registry }} and tagged in the specified imagestream. If the output is of type `DockerImage`, then the name of the output reference will be used as a docker push specification. The specification may contain a registry or will default to DockerHub if no registry is specified. If the output section of the build specification is empty, then the image will not be pushed at the end of the build.

```yaml title="Output to an ImageStreamTag"
spec:
  output:
    to:
      kind: "ImageStreamTag"
      name: "sample-image:latest"
```

```yaml title="Output to a docker Push Specification"
spec:
  output:
    to:
      kind: "DockerImage"
      name: "my-registry.mycompany.com:5000/myimages/myimage:tag"
```