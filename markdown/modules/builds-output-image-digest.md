{%- set _mod_docs_content_type = "CONCEPT" %}
# Output image digest {id="builds-output-image-digest_{{ context }}"}

Built images can be uniquely identified by their digest, which can
later be used to pull the image by digest regardless of its current tag.

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
`Docker` and
{%- endif %}
`Source-to-Image (S2I)` builds store the digest in
`Build.status.output.to.imageDigest` after the image is pushed to a registry.
The digest is computed by the registry. Therefore, it may not always be present,
for example when the registry did not return a digest, or when the builder image
did not understand its format.

```yaml title="Built Image Digest After a Successful Push to the Registry"
status:
  output:
    to:
      imageDigest: sha256:29f5d56d12684887bdfa50dcd29fc31eea4aaf4ad3bec43daf19026a7ce69912
```

**Additional resources**
{._additional-resources}

*   [Docker Registry HTTP API V2: digest](https://docs.docker.com/registry/spec/api/#/content-digests)
*   [`docker pull`: pull the image by digest](https://docs.docker.com/engine/reference/commandline/pull/#/pull-an-image-by-digest-immutable-identifier)