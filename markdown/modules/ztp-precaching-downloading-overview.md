{%- set _mod_docs_content_type = "CONCEPT" %}
# Downloading the images {id="ztp-downloading-images_{{ context }}"}

The {{ factory_prestaging_tool }} allows you to download the following images to your partitioned server: {._abstract}

*   {{ product_title }} images
*   Operator images that are included in the distributed unit (DU) profile for 5G RAN sites
*   Operator images from disconnected registries


:::note

The list of available Operator images can vary in different {{ product_title }} releases.

:::


The {{ factory_prestaging_tool }} uses parallel workers to download multiple images simultaneously.
You can configure the number of workers with the `--parallel` or `-p` option.
The default number is set to 80% of the available CPUs to the server.


:::note

Your login shell may be restricted to a subset of CPUs, which reduces the CPUs available to the container.
To remove this restriction, you can precede your commands with `taskset 0xffffffff`, for example:

```terminal
# taskset 0xffffffff podman run --rm quay.io/openshift-kni/telco-ran-tools:latest factory-precaching-cli download --help
```

:::