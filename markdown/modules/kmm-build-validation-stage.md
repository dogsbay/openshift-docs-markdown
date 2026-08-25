{%- set _mod_docs_content_type = "CONCEPT" %}
# Build validation stage {id="kmm-build-validation-stage_{{ context }}"}

Build validation is executed only when image validation has failed and there is a `build` section in the `Module` that is relevant for the upgraded kernel. Build validation attempts to run the build job and validate that it finishes successfully.


:::note

You must specify the kernel version when running `depmod`, as shown here:

```terminal
$ RUN depmod -b /opt ${KERNEL_VERSION}
```

:::


If the `pushBuiltImage` flag is defined in the `PreflightValidationOCP` resource, it also tries to push the resulting image into its repository. The resulting image name is taken from the definition of the `containerImage` field of the `Module` CR.


:::note

If the `sign` section is defined for the upgraded kernel, then the resulting image will not be the `containerImage` field of the `Module` CR, but a temporary image name, because the resulting image should be the product of Sign flow.

:::