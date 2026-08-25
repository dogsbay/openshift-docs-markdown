{%- set _mod_docs_content_type = "REFERENCE" %}
# odo build-images {id="odo-build-images_{{ context }}"}

`odo` can build container images based on Dockerfiles, and push these images to their registries.

When running the `odo build-images` command, `odo` searches for all components in the `devfile.yaml` with the `image` type, for example:

```yaml
components:
- image:
    imageName: quay.io/myusername/myimage
    dockerfile:
      uri: ./Dockerfile (1)
      buildContext: ${PROJECTS_ROOT} (2)
  name: component-built-from-dockerfile
```
1.  The `uri` field indicates the relative path of the Dockerfile to use, relative to the directory containing the `devfile.yaml`. The devfile specification indicates that `uri` could also be an HTTP URL, but this case is not supported by odo yet.
1.  The `buildContext` indicates the directory used as build context. The default value is `${{ PROJECTS_ROOT }}`{minja}.

For each image component, odo executes either `podman` or `docker` (the first one found, in this order), to build the image with the specified Dockerfile, build context, and arguments.

If the `--push` flag is passed to the command, the images are pushed to their registries after they are built.