{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mirroring a different set of test images {id="mirroring-different-set-of-images_{{ context }}"}

You can optionally change the default upstream images that are mirrored for the latency tests. {._abstract}

**Procedure**

1.  The `mirror` command tries to mirror the upstream images by default. This can be overridden by passing a file with the following format to the image:

```yaml
[
    {
        "registry": "public.registry.io:5000",
        "image": "imageforcnftests:{{ product_version }}"
    }
]
```

1.  Pass the file to the `mirror` command, for example saving it locally as `images.json`. With the following command, the local path is mounted in `/kubeconfig` inside the container and that can be passed to the mirror command.
    ```terminal
    $ podman run -v $(pwd)/:/kubeconfig:Z -e KUBECONFIG=/kubeconfig/kubeconfig \
    registry.redhat.io/openshift4/cnf-tests-rhel9:v{{ product_version }} /usr/bin/mirror \
    --registry "my.local.registry:5000/" --images "/kubeconfig/images.json" \
    |  oc image mirror -f -
    ```