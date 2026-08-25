{%- set _mod_docs_content_type = "CONCEPT" %}
# Set soft dependencies between kernel modules {id="kmm-setting-soft-dependencies-between-kernel-modules_{{ context }}"}

Soft dependencies require kernel modules to load in a specific order even when they do not share symbols. You can declare these dependencies in the `Module` CR with the `modulesLoadingOrder` field. {._abstract}

The `depmod` utility does not recognize soft dependencies, and soft dependencies do not appear in the files it produces. For example, if `mod_a` has a soft dependency on `mod_b`, `modprobe mod_a` will not load `mod_b`.

```yaml
# ...
spec:
  moduleLoader:
    container:
      modprobe:
        moduleName: mod_a
        dirName: /opt
        firmwarePath: /firmware
        parameters:
          - param=1
        modulesLoadingOrder:
          - mod_a
          - mod_b
```

In the configuration above, the worker pod will first try to unload the in-tree `mod_b` before loading `mod_a` from the kmod image.
When the worker pod is terminated and `mod_a` is unloaded, `mod_b` will not be loaded again.


:::note

The first value in the list, to be loaded last, must be equivalent to the `moduleName`.

:::