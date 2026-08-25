{%- set _mod_docs_content_type = "CONCEPT" %}
# Sign validation stage {id="kmm-sign-validation-stage_{{ context }}"}

Sign validation is executed only when image validation has failed. There is a `sign` section in the `Module` resource that is relevant for the upgrade kernel, and build validation finishes successfully in case there was a `build` section in the `Module` relevant for the upgraded kernel. Sign validation attempts to run the sign job and validate that it finishes successfully.

If the `pushBuiltImage` flag is defined in the `PreflightValidation` resource, sign validation also tries to push the resulting image to its registry. The resulting image is always the image defined in the `ContainerImage` field of the `Module`. The input image is either the output of the Build stage, or an image defined in the `UnsignedImage` field.


:::note

If a `build` section exists, the `sign` section input image is the `build` section’s output image. Therefore, in order for the input image to be available for the `sign` section, the `pushBuiltImage` flag must be defined in the `PreflightValidation` resource.

:::