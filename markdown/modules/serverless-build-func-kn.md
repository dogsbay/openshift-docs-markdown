{%- set _mod_docs_content_type = "REFERENCE" %}
# Building functions {id="serverless-build-func-kn_{{ context }}"}

Before you can run a function, you must build the function project. If you are using the `kn func run` command, the function is built automatically. However, you can use the `kn func build` command to build a function without running it, which can be useful for advanced users or debugging scenarios.

The `kn func build` command creates an OCI container image that can be run locally on your computer or on an {{ product_title }} cluster. This command uses the function project name and the image registry name to construct a fully qualified image name for your function.

## Image container types {id="serverless-build-func-kn-image-containers_{{ context }}"}

By default, `kn func build` creates a container image by using Red Hat Source-to-Image (S2I) technology.

```terminal title="Example build command using Red Hat Source-to-Image (S2I)"
$ kn func build
```

## Image registry types {id="serverless-build-func-kn-image-registries_{{ context }}"}

The OpenShift Container Registry is used by default as the image registry for storing function images.

```terminal title="Example build command using OpenShift Container Registry"
$ kn func build
```

```terminal title="Example output"
Building function image
Function image has been built, image: registry.redhat.io/example/example-function:latest
```

You can override using OpenShift Container Registry as the default image registry by using the `--registry` flag:

```terminal title="Example build command overriding OpenShift Container Registry to use quay.io"
$ kn func build --registry quay.io/username
```

```terminal title="Example output"
Building function image
Function image has been built, image: quay.io/username/example-function:latest
```

## Push flag {id="serverless-build-func-kn-push_{{ context }}"}

You can add the `--push` flag to a `kn func build` command to automatically push the function image after it is successfully built:

```terminal title="Example build command using OpenShift Container Registry"
$ kn func build --push
```

## Help command {id="serverless-build-func-kn-help_{{ context }}"}

You can use the help command to learn more about `kn func build` command options:

```terminal title="Build help command"
$ kn func help build
```